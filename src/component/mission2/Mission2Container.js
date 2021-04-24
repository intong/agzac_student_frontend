import React, { useContext, useState, useEffect } from "react";
import { Activity, SaveData } from "../../api/api";
import Mission2Presenter from "./Mission2Presenter";
import Mission2MobilePresenter from "./mobileVersion/Mission2MobilePresenter";
import Mission2MobileInputPresenter from "./mobileVersion/Mission2MobileInputPresenter";
import ProcessContext from "../../contextApi/Process";
import TempSaveContext from "../../contextApi/TempSave";

const Mission2Container = ({ history, match, location }) => {
	//////////////// 모바일 state 시작 ///////////////////////////
	const [dimension] = useState({
		width: window.innerWidth,
		height: window.innerHeight,
	});
	const [missionInput, setMissionInput] = useState(false);
	//////////////// 모바일 state 끝 ///////////////////////////
	const { state, actions } = useContext(ProcessContext);
	const { modalState, modalActions } = useContext(TempSaveContext);
	const [index, setIndex] = useState(); // 정답제출 시 +1 을 시키면 배열의 index 를 넘김
	const [missionQuestion, setMissionQuestion] = useState(); // 미션 배열 중 한개의 문제만 보내는 state
	const [dropdownNull, setDropdownNull] = useState(); // Dropdown Null로 초기화 해주는 state (add 함수에서 적용)
	const [inputArray, setInputArray] = useState([]); // 정답리스트 (배열길이 : 4개)
	const [normal, setNormal] = useState(true);
	const [correctFirst, setCorrectFirst] = useState(true);
	const [correctSeconds, setCorrectSeconds] = useState(true);
	const [firstFeedback, setFirstFeedback] = useState();
	const [secondFeedback, setSecondFeedback] = useState();
	const [faqModal, setFaqModal] = useState();
	const [isOpen, setIsOpen] = useState(false);

	const setProcessFunction = async () => {
		//validation 추가
		actions.setMission2("ok");
		await Activity.mission2EndStart();
		history.push(`/mission3/${state.mission3Index}`);
	};

	// 정담배열만들기
	let tempArr = [];
	const makeInputArray = (text) => {
		tempArr.push(text);
		setInputArray(inputArray.concat(tempArr));
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

	// missionTwo 셋팅
	const selectExamQuestion = () => {
		const question = JSON.parse(sessionStorage.getItem("missionTwo"));
		setMissionQuestion(question);
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
		// 정답 2개 중 답안이 포함하는지 확인하는 함수
		hasAnswer: (one) => {
			const result = answerFunctionList.makeCorrectAnswerArray(missionQuestion);
			const idx = result[index - 1].findIndex((item, i) => {
				return item.answer === one;
			});
			if (result[index - 1][idx] === undefined) {
				return { bool: false, feedback: "" };
			} else {
				return { bool: true, feedback: result[index - 1][idx].feedback };
			}
		},
		checkAnswer: () => {
			const one = document.getElementById("futureOne").innerHTML;
			const two = document.getElementById("futureTwo").innerHTML;
			if (one === "선택" || two === "선택") {
				alert("미래인재를 선택해 주세요.");
			} else if (one === two) {
				alert("같은 미래인재를 선택했습니다.");
			} else {
				setNormal(false);
				if (answerFunctionList.hasAnswer(one).bool) {
					makeInputArray(one);
					setCorrectFirst(true);
					setFirstFeedback(answerFunctionList.hasAnswer(one).feedback);
				} else {
					setCorrectFirst(false);
				}
				if (answerFunctionList.hasAnswer(two).bool) {
					makeInputArray(two);
					setCorrectSeconds(true);
					setSecondFeedback(answerFunctionList.hasAnswer(two).feedback);
				} else {
					setCorrectSeconds(false);
				}
			}
		},
		// 정답화면 오른쪽카드 다음 버튼 이벤트
		addIndex: async () => {
			// index +1 해서 다음문제 넘기기
			if (index === 4) {
				const result = await SaveData.save(3, inputArray);
				if (result.data.ok) {
					setIndex(index);
					setProcessFunction();
				}
			} else {
				await SaveData.save(3, inputArray);
				setDropdownNull(null);
				setNormal(true);
				setCorrectFirst(true);
				setCorrectSeconds(true);
				setIndex(index + 1);
				actions.setMission2Index(index + 1);
				history.push(`/mission2/${parseInt(match.params.id) + 1}`);
			}
		},
	};

	// 모바일 전용 함수관
	const mobileFunctionList = {
		toggleInputPresenter: () => {
			setMissionInput(!missionInput);
		},
		// 정답 제출 후 다음 버튼으로 다음 문제 보냄
		addIndex: () => {
			if (index === 4) {
				setIndex(index);
				setProcessFunction();
			} else {
				mobileFunctionList.toggleInputPresenter();
				setNormal(true);
				setCorrectFirst(true);
				setCorrectSeconds(true);
				setIndex(index + 1);
				actions.setMission2Index(index + 1);
				history.push(`/mission2/${parseInt(match.params.id) + 1}`);
			}
		},
	};

	// contextApi의 임시저장된 데이터 사용하기
	const tempUse = () => {
		console.log(location.state);
		if (location.state !== null && location.state !== undefined) {
			setInputArray(location.state.data);
		} else {
			setInputArray(inputArray);
		}
	};

	useEffect(() => {
		selectExamQuestion();
		setIndex(parseInt(match.params.id));
		tempUse();
	}, [match.params.id]);
	return (
		<>
			{dimension.width < 415 ? (
				missionInput ? (
					<Mission2MobileInputPresenter
						normal={normal}
						correctFirst={correctFirst}
						correctSeconds={correctSeconds}
						mobileFunctionList={mobileFunctionList}
						answerFunctionList={answerFunctionList}
					/>
				) : (
					<Mission2MobilePresenter
						index={index}
						missionQuestion={missionQuestion}
						mobileFunctionList={mobileFunctionList}
					/>
				)
			) : (
				<Mission2Presenter
					index={index}
					dropdownNull={dropdownNull}
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
