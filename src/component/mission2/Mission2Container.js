import React, { useContext, useState, useEffect } from "react";
import { Activity, SaveData, DBData } from "../../api/api";
import Mission2Presenter from "./Mission2Presenter";
import Mission2MobilePresenter from "./mobileVersion/Mission2MobilePresenter";
import Mission2MobileInputPresenter from "./mobileVersion/Mission2MobileInputPresenter";
import ProcessContext from "../../contextApi/Process";
import TempSaveContext from "../../contextApi/TempSave";
import DBdataContext from "../../contextApi/DBdata";

const Mission2Container = ({ history, match, location }) => {
	//////////////// 모바일 state 시작 ///////////////////////////
	const [dimension] = useState({
		width: window.innerWidth,
		height: window.innerHeight,
	});
	const [missionInput, setMissionInput] = useState(false);
	//////////////// 모바일 state 끝 ///////////////////////////
	const [loading, setLoading] = useState(false);
	const { state, actions } = useContext(ProcessContext);
	const { modalState, modalActions } = useContext(TempSaveContext);
	const { dataState, dataActions } = useContext(DBdataContext);
	const [index, setIndex] = useState(); // 정답제출 시 +1 을 시키면 배열의 index 를 넘김
	const [missionQuestion, setMissionQuestion] = useState(); // 미션 배열 중 한개의 문제만 보내는 state
	const [inputArray, setInputArray] = useState([]); // 정답리스트 (배열길이 : 최대 8개) 구글시트 저장
	const [normal, setNormal] = useState(true);
	const [correctFirst, setCorrectFirst] = useState(true);
	const [correctSeconds, setCorrectSeconds] = useState(true);
	const [firstFeedback, setFirstFeedback] = useState();
	const [secondFeedback, setSecondFeedback] = useState();
	const [faqModal, setFaqModal] = useState();
	const [isOpen, setIsOpen] = useState(false);
	const [saveData, setSaveData] = useState({
		// 디비 저장에 관한 데이터 포멧
		time: 0, // 문제의 정답을 맞추기까지 시간
		isAnswer: true, // 문제의 첫번째 답변이 정답 or 오답
		wrongCount: 0, // 정답 맞추기까지 틀린횟수
		help: 0, // 잡카드 누른 횟수
	});
	const [startTime, setStartTime] = useState();

	const setProcessFunction = async () => {
		//validation 추가
		actions.setMission2("ok");
		await Activity.mission2EndStart();
		history.push(`/mission3/${state.mission3Index}`);
	};

	// missionTwo 셋팅
	const selectExamQuestion = () => {
		const question = JSON.parse(sessionStorage.getItem("missionTwo"));
		setMissionQuestion(question);
	};

	// db에 결과 데이터 context에 저장하기
	const goSaveDB = async () => {
		dataActions.setMissionTwoData(dataState.missionTwoData.push(saveData));
	};

	const linkDBapi = async () => {
		await DBData.missionTwo(dataState.missionTwoData);
	};

	// db에 결과 데이터 saveData 만들기 함수 list
	const makeSaveDataFunctionList = {
		// 초기화
		resetSaveData: () => {
			setSaveData({
				time: 0,
				isAnswer: true,
				wrongCount: 0,
				help: 0,
			});
		},
		// 정답 맞추는 시간 계산하기용 시간 값 가져오기
		calculTime: () => {
			const time = new Date();
			const timeSec = time.getTime();
			return timeSec;
		},
		// 오답횟수 기록
		countWrongAnswer: () => {
			setSaveData({
				...saveData,
				wrongCount: saveData.wrongCount + 1,
				isAnswer: false,
			});
		},
		// job카드 누른 횟수
		onClickJobCardCount: () => {
			setSaveData({ ...saveData, help: saveData.help + 1 });
		},
	};

	const modalFunction = {
		openModal: () => {
			setIsOpen(!isOpen);
		},
		closeModal: () => {
			setIsOpen(!isOpen);
		},
		toggleFaqModal: () => {
			setFaqModal(!faqModal);
		},
		// 임시저장 확인 버튼 이벤트 함수
		handleSaveModalConfirmBtn: async () => {
			// 확인버튼 실행함수
			await DBData.missionTwo(dataState.missionTwoData);
			const result = await SaveData.save(3, inputArray);
			if (result.data.ok) {
				alert("저장하였습니다.");
				modalActions.setSaveModalOpen(!modalState.saveModalOpen);
			} else {
				alert("저장하지 못했습니다.");
				modalActions.setSaveModalOpen(!modalState.saveModalOpen);
			}
		},
		toggleSaveModal: () => {
			modalActions.setSaveModalOpen(!modalState.saveModalOpen);
		},
	};

	// 정답 입력 및 확인 이벤트
	const answerFunctionList = {
		// missionTwo에서 answerOne과 answerTwo (정답 / 설명만 빼와서 배열을 리턴)
		makeCorrectAnswerArray: (missionQuestion) => {
			const result = missionQuestion.map((m) => {
				let tempArr1 = { answer: "", feedback: "" };
				let tempArr2 = { answer: "", feedback: "" };
				let tempArr3 = [];
				tempArr1.answer = m.answerOne;
				tempArr1.feedback = m.answerOneFeedback;
				tempArr2.answer = m.answerTwo;
				tempArr2.feedback = m.answerTwoFeedback;
				tempArr3.push(tempArr1);
				tempArr3.push(tempArr2);
				return tempArr3;
			});
			return result;
		},
		// 정답 2개 중 답안이 포함하는지 확인하는 함수 (정답제출 or 오답화면의 다음버튼에서 실행 (checkAnswer의 콜백함수) : 총 각 문제당 두번 실행 미래인재가 2명이기 때문에 각각 실행)
		hasAnswer: (one) => {
			const tempArr = [];
			const result = answerFunctionList.makeCorrectAnswerArray(missionQuestion);
			// result 결과물 => [[1번문제],[2번문제],[3번문제],[4번문제]] // [1번문제] => [{미래인재1의 정답 && 피드백},{미래인재2의 정답&&피드백}]
			const idx = result[index - 1].findIndex((item, i) => {
				return item.answer === one;
			});
			if (result[index - 1][idx] === undefined) {
				return { bool: false, feedback: "" };
			} else {
				tempArr.push(one);
				return {
					bool: true,
					feedback: result[index - 1][idx].feedback,
				};
			}
		},
		checkAnswer: () => {
			let tempArr = []; // 오답은 걸러주는 배열
			const one = document.getElementById("futureOne").innerHTML;
			const two = document.getElementById("futureTwo").innerHTML;
			const upperOne = one.toUpperCase();
			const upperTwo = two.toUpperCase();
			if (upperOne === "선택" || upperTwo === "선택") {
				alert("미래인재를 선택해 주세요.");
			} else if (upperOne === upperTwo) {
				alert("같은 미래인재를 선택했습니다.");
			} else {
				setNormal(false);
				if (answerFunctionList.hasAnswer(upperOne).bool) {
					tempArr.push(upperOne);
					setCorrectFirst(true);
					setFirstFeedback(answerFunctionList.hasAnswer(upperOne).feedback);
				} else {
					setCorrectFirst(false);
				}
				if (answerFunctionList.hasAnswer(upperTwo).bool) {
					tempArr.push(upperTwo);
					setCorrectSeconds(true);
					setSecondFeedback(answerFunctionList.hasAnswer(upperTwo).feedback);
				} else {
					setCorrectSeconds(false);
				}
				// 정답일 때마다 tempArr 배열에 담고, 그 배열의 길이가 2일때, inputArray에 넣기 (inputArray는 api request용 정답들 배열)
				if (tempArr.length === 2) {
					// 둘다 정답일때,
					const endTime = makeSaveDataFunctionList.calculTime();
					const gap = (endTime - startTime) / 1000;
					setSaveData({ ...saveData, time: gap });
					setInputArray(inputArray.concat(tempArr));
				} else {
					// 오답일때,
					makeSaveDataFunctionList.countWrongAnswer(); // db wrongCount +1 하기
				}
			}
		},
		// 정답화면 오른쪽카드 다음 버튼 이벤트
		addIndex: async () => {
			setLoading(true);
			// index +1 해서 다음문제 넘기기
			if (index === 4) {
				goSaveDB(); // db저장함수 호출
				const result = await SaveData.save(3, inputArray);
				if (result.data.ok) {
					linkDBapi();
					setLoading(false);
					setIndex(index);
					setProcessFunction();
				}
			} else {
				goSaveDB(); // db저장함수 호출
				const result = await SaveData.save(3, inputArray);
				if (result.data.ok) {
					linkDBapi();
					setLoading(false);
					setNormal(true);
					setCorrectFirst(true);
					setCorrectSeconds(true);
					setIndex(index + 1);
					actions.setMission2Index(index + 1);
					history.push(`/mission2/${parseInt(match.params.id) + 1}`);
					makeSaveDataFunctionList.resetSaveData();
				}
			}
		},
	};

	// 모바일 전용 함수관
	const mobileFunctionList = {
		toggleInputPresenter: () => {
			setMissionInput(!missionInput);
		},
		// 정답 제출 후 다음 버튼으로 다음 문제 보냄
		addIndex: async () => {
			setLoading(true);
			// index +1 해서 다음문제 넘기기
			if (index === 4) {
				const result = await SaveData.save(3, inputArray);
				if (result.data.ok) {
					setLoading(false);
					setIndex(index);
					setProcessFunction();
				}
			} else {
				const result = await SaveData.save(3, inputArray);
				if (result.data.ok) {
					mobileFunctionList.toggleInputPresenter();
					setLoading(false);
					setNormal(true);
					setCorrectFirst(true);
					setCorrectSeconds(true);
					setIndex(index + 1);
					actions.setMission2Index(index + 1);
					history.push(`/mission2/${parseInt(match.params.id) + 1}`);
				}
			}
		},
	};

	// contextApi의 임시저장된 데이터 사용하기
	const tempUse = async () => {
		if (location.state !== null && location.state !== undefined) {
			setInputArray(location.state.data);
		} else {
			const params = sessionStorage.getItem("auth");
			await SaveData.getTempData(params);
			setIndex(state.mission2Index);
			setInputArray(inputArray);
		}
	};

	useEffect(() => {
		selectExamQuestion();
		setIndex(parseInt(match.params.id));
		tempUse();
		const settingStartTime = () => {
			const time = makeSaveDataFunctionList.calculTime();
			setStartTime(time);
		};
		settingStartTime();
	}, [match.params.id]);
	return (
		<>
			{dimension.width < 415 ? (
				missionInput ? (
					<Mission2MobileInputPresenter
						missionQuestion={missionQuestion}
						index={index}
						isOpen={isOpen}
						loading={loading}
						normal={normal}
						correctFirst={correctFirst}
						correctSeconds={correctSeconds}
						firstFeedback={firstFeedback}
						secondFeedback={secondFeedback}
						modalFunction={modalFunction}
						mobileFunctionList={mobileFunctionList}
						answerFunctionList={answerFunctionList}
					/>
				) : (
					<Mission2MobilePresenter
						isOpen={isOpen}
						loading={loading}
						index={index}
						missionQuestion={missionQuestion}
						modalFunction={modalFunction}
						mobileFunctionList={mobileFunctionList}
					/>
				)
			) : (
				<Mission2Presenter
					makeSaveDataFunctionList={makeSaveDataFunctionList}
					loading={loading}
					index={index}
					normal={normal}
					correctFirst={correctFirst}
					correctSeconds={correctSeconds}
					firstFeedback={firstFeedback}
					secondFeedback={secondFeedback}
					isOpen={isOpen}
					faqModal={faqModal}
					missionQuestion={missionQuestion}
					modalState={modalState}
					setProcessFunction={setProcessFunction}
					modalFunction={modalFunction}
					answerFunctionList={answerFunctionList}
				/>
			)}
		</>
	);
};

export default Mission2Container;
