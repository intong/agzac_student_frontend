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
			console.log(state.saveTempData.length);
			const path = state.saveTempData.length - 1;
			if (path === 2) {
				console.log("영상시청");
				const name = JSON.parse(state.saveTempData[2]);
				setCompanyName(name);
				actions.setUseDataConfirm(true); // 임시저장 데이터 사용하겠다는 글로벌 (context) 변수
				modalFunction.toggleHasDataModal();
			} else if (path === 3) {
				console.log("mission1");
			} else if (path === 4) {
				console.log("mission2");
			} else if (path === 5) {
				console.log("mission3");
			} else if (path === 7) {
				console.log("mission4");
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
				const result = await SaveData.save(1, [companyName]);
				if (result.data.ok) {
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
