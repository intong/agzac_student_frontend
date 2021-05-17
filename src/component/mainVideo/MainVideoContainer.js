import React, { useContext, useEffect, useState, useCallback } from "react";
import { SaveData, Activity } from "../../api/api";
import { MediaSecretCodeAnswer } from "../AnswerList";
import MainVideoPresenter from "./MainVideoPresenter";
import MainVideoMobilePresenter from "./mobileVersion/MainVideoMobilePresenter";
import MainVideoMobileInputPresenter from "./mobileVersion/MainVideoMobileInputPresenter";
import ProcessContext from "../../contextApi/Process";
import TempSaveContext from "../../contextApi/TempSave";

const MainVideoContainer = ({ history, location, match }) => {
	//////////////// 모바일 state 시작 ///////////////////////////
	const [dimension] = useState({
		width: window.innerWidth,
		height: window.innerHeight,
	});
	const [mainVideoInput, setMainVideoInput] = useState(false);
	//////////////// 모바일 state 끝 ///////////////////////////
	const [loading, setLoading] = useState();
	const { state, actions } = useContext(ProcessContext);
	const { modalState, modalActions } = useContext(TempSaveContext);
	const [hasDataModal, setHasDataModal] = useState(); // 저장된 데어터가 있을 때 데이터 불러오기 모달
	const [answerCorrectModal, setAnswerCorrectModal] = useState(); // 정답 모달
	const [answerFalseModal, setAnswerFalseModal] = useState(); // 오답 모달
	const [mediaAndSecretCode, setMediaAndSecretCode] = useState(
		MediaSecretCodeAnswer
	); // 영상과 답안지 useEffect 안에서 랜덤으로 한개 뽑아서 저장시키는 state
	const [companyName, setCompanyName] = useState();
	const [secretCode, setSecretCode] = useState();

	const setProcessFunction = async () => {
		//validation 추가
		actions.setVideo("ok");
		timeStartCheck();
		history.push(`/mission1/${state.index}`);
	};

	const modalFunction = {
		toggleModal: () => {
			modalActions.setSaveModalOpen(!modalState.saveModalOpen);
		},
		toggleAnswerTrueModal: () => {
			setAnswerCorrectModal(!answerCorrectModal);
		},
		toggleAnswerFalseModal: () => {
			setAnswerFalseModal(!answerFalseModal);
		},
		cleanAllMission: async () => {
			const ok = window.confirm("모든 미션이 초기화 됩니다. 진행하시겠습니까?");
			if (ok) {
				modalFunction.toggleHasDataModal();
				setLoading(true);
				const result = await Activity.cleanAllMissionData();
				if (result) {
					setLoading(false);
					// 임시저장 데이터를 사용하지 않고 다시하고 싶을 때 (ProcessContextApi 변수 초기화)
					actions.setVideo();
					actions.setMission1();
					actions.setMission2();
					actions.setMission3();
					actions.setIndex(1);
					actions.setMission2Index(1);
					actions.setMission3Index("category");
					actions.setMission4Index("social");
				}
			}
		},
		toggleHasDataModal: () => {
			setHasDataModal(!hasDataModal);
		},
		tempSaveSheet: async () => {
			const companyNameSave = document.getElementById("companyName").value;
			await SaveData.save(1, [companyNameSave]);
			modalFunction.toggleModal();
		},
		handleConfirmBtn: () => {
			modalFunction.toggleModal();
			modalFunction.tempSaveSheet();
		},
		// 임시저장한 Data 사용하기
		useTempData: () => {
			modalFunction.toggleHasDataModal();
			const path = state.saveTempData.length;
			if (path < 4) {
				// console.log("영상시청");
				const name = JSON.parse(state.saveTempData[2]);
				setCompanyName(name);
				actions.setUseDataConfirm(true); // 임시저장 데이터 사용하겠다는 글로벌 (context) 변수
			} else if (path < 5) {
				// console.log("미션1")
				actions.setVideo("ok");
				const data = JSON.parse(state.saveTempData[3]);
				const step = data.length + 1; // 다음문제 index
				if (step < 17) {
					// 미션1 총 문제 수 : 16
					// 미션1 16개 미만 문제를 다 맞춘 경우
					actions.setIndex(step);
					history.push({
						pathname: `/mission1/${step}`,
						state: { step: step, data: data },
					});
				} else {
					// 미션1 16개의 문제를 다 맞춘 경우
					actions.setVideo("ok");
					actions.setMission1("ok");
					history.push(`/mission2/${state.mission2Index}`);
				}
			} else if (path < 6) {
				// console.log("미션2")
				actions.setVideo("ok");
				actions.setMission1("ok");
				const data = JSON.parse(state.saveTempData[4]);
				const step = data.length / 2 + 1;
				if (step < 5) {
					// 미션2 총 문제 수 : 4
					// 미션2 4개 미만 문제를 다 맞춘 경우
					actions.setMission2Index(step);
					history.push({
						pathname: `/mission2/${step}`,
						state: { step: step, data: data },
					});
				} else {
					// 미션2 4개 문제를 다 맞춘 경우
					actions.setVideo("ok");
					actions.setMission1("ok");
					actions.setMission2("ok");
					history.push(`/mission3/${state.mission3Index}`);
				}
			} else if (path < 7) {
				// console.log("미션3");
				actions.setVideo("ok");
				actions.setMission1("ok");
				actions.setMission2("ok");
				const data = JSON.parse(state.saveTempData[5]);
				history.push({
					pathname: "/mission3/category",
					state: { data: data },
				});
			} else if (path < 14) {
				// console.log("미션4");
				const data = state.saveTempData[7];
				if (data !== undefined && data !== null) {
					// 미션4 한 문제라도 푼 경우 = 미션3 끝 미션4 한 문제라도 물었을 경우
					actions.setVideo("ok");
					actions.setMission1("ok");
					actions.setMission2("ok");
					actions.setMission3("ok");
					const data = state.saveTempData;
					history.push({
						pathname: `/mission4/${state.mission4Index}`,
						state: { data: data },
					});
				} else {
					// 미션3 카테고리와 키워드 설정까지 다 한 경우 = 미션3은 끝났지만 미션4를 시작안한 경우
					actions.setVideo("ok");
					actions.setMission1("ok");
					actions.setMission2("ok");
					const data = JSON.parse(state.saveTempData[5]);
					history.push({
						pathname: "/mission3/category",
						state: { data: data },
					});
				}
			}
		},
	};

	const functionList = {
		onChangeCompanyName: (e) => {
			setCompanyName(e.target.value);
		},
		onChangeSecretCode: (e) => {
			setSecretCode(e.target.value);
		},
		checkAnswer: () => {
			if (secretCode === mediaAndSecretCode.code) {
				return true;
			} else {
				return false;
			}
		},
		onSubmit: async () => {
			const result = functionList.checkAnswer();
			if (result) {
				setLoading(true);
				const result = await SaveData.save(1, [companyName]);
				if (result.data.ok) {
					setLoading(false);
					setProcessFunction(); // 다음단계로 진행
				}
			} else {
				setAnswerFalseModal(!answerFalseModal);
			}
		},
	};

	// 임시저장 데이터 가져오기
	const getTempData = useCallback(async () => {
		const params = sessionStorage.getItem("auth");
		const result3 = await SaveData.getTempData(params);
		if (result3.data.writtenData[2] !== undefined) {
			setHasDataModal(true);
			actions.setSaveTempData(result3.data.writtenData);
		} else {
			setHasDataModal(false);
			actions.setUseDataConfirm(false);
		}
	}, [actions]);

	const mobileFunctionList = {
		inputPageHandler: () => {
			setMainVideoInput(!mainVideoInput);
		},
	};

	// start 시간 저장 (useEffect에서 실행)
	const timeStartCheck = async () => {
		await Activity.loginStart();
	};

	useEffect(() => {
		// 영상 시크릿코드
		const randomChoice = () => {
			setMediaAndSecretCode(MediaSecretCodeAnswer);
		};
		randomChoice();
		getTempData();
		// timeStartCheck();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<>
			{dimension.width < 415 ? (
				mainVideoInput ? (
					<MainVideoMobileInputPresenter
						loading={loading}
						isModalOpen={modalState.saveModalOpen}
						companyName={companyName}
						secretCode={secretCode}
						answerFalseModal={answerFalseModal}
						mobileFunctionList={mobileFunctionList}
						functionList={functionList}
						modalFunction={modalFunction}
					/>
				) : (
					<MainVideoMobilePresenter
						hasDataModal={hasDataModal}
						modalFunction={modalFunction}
						mediaAndSecretCode={mediaAndSecretCode}
						mobileFunctionList={mobileFunctionList}
					/>
				)
			) : (
				<MainVideoPresenter
					loading={loading}
					companyName={companyName}
					secretCode={secretCode}
					hasDataModal={hasDataModal}
					isModalOpen={modalState.saveModalOpen}
					answerFalseModal={answerFalseModal}
					mediaAndSecretCode={mediaAndSecretCode}
					modalFunction={modalFunction}
					functionList={functionList}
				/>
			)}
		</>
	);
};

export default MainVideoContainer;
