import React, { useContext, useState, useEffect } from "react";
import Mission2Presenter from "./Mission2Presenter";
import ProcessContext from "../../contextApi/Process";
import TempSaveContext from "../../contextApi/TempSave";

const Mission2Container = ({ history, match }) => {
	const { state, actions } = useContext(ProcessContext);
	const { modalState, modalActions } = useContext(TempSaveContext);
	const [index, setIndex] = useState(); // 정답제출 시 +1 을 시키면 배열의 index 를 넘김
	const [missionQuestion, setMissionQuestion] = useState(); // 미션 배열 중 한개의 문제만 보내는 state
	const [answerList, setAnswerList] = useState();
	const [normal, setNormal] = useState(true);
	const [correctFirst, setCorrectFirst] = useState(true);
	const [correctSeconds, setCorrectSeconds] = useState(true);
	const [faqModal, setFaqModal] = useState();
	const [isOpen, setIsOpen] = useState(false);

	const setProcessFunction = () => {
		//validation 추가
		actions.setMission2("ok");
		history.push(`/mission3/${state.mission3Index}`);
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
		handleSaveModalConfirmBtn: () => {
			// 확인버튼 실행함수
			modalActions.setSaveModalOpen(!modalState.saveModalOpen);
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
		// 정답 2개 중 답안이 포함하는지 확인하는 함수
		hasAnswerOne: (one) => {
			console.log("1", missionQuestion[index - 1]);
			// console.log("2",)
			if (one === missionQuestion[index - 1].answerOne) {
				return true;
			} else {
				return false;
			}
		},
		hasAnswerTwo: (two) => {
			if (two === missionQuestion[index - 1].answerTwo) {
				return true;
			} else {
				return false;
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
				if (answerFunctionList.hasAnswerOne(one)) {
					setCorrectFirst(true);
				} else {
					setCorrectFirst(false);
				}
				if (answerFunctionList.hasAnswerTwo(two)) {
					setCorrectSeconds(true);
				} else {
					setCorrectSeconds(false);
				}
			}
		},
		// 정답화면 오른쪽카드 다음 버튼 이벤트
		addIndex: () => {
			// index +1 해서 다음문제 넘기기
			if (index === 4) {
				setIndex(index);
				setProcessFunction();
			} else {
				setNormal(true);
				setCorrectFirst(true);
				setCorrectSeconds(true);
				setIndex(index + 1);
				history.push(`/mission2/${parseInt(match.params.id) + 1}`);
			}
		},
	};

	useEffect(() => {
		selectExamQuestion();
		setIndex(parseInt(match.params.id));
	}, [match.params.id]);
	return (
		<Mission2Presenter
			index={index}
			normal={normal}
			correctFirst={correctFirst}
			correctSeconds={correctSeconds}
			isOpen={isOpen}
			faqModal={faqModal}
			missionQuestion={missionQuestion}
			modalState={modalState}
			setProcessFunction={setProcessFunction}
			modalFunction={modalFunction}
			answerFunctionList={answerFunctionList}
		/>
	);
};

export default Mission2Container;
