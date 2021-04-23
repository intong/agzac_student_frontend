import React, { useContext, useState, useEffect } from "react";
import { Activity, SaveData } from "../../api/api";
import Mission1Presenter from "./Mission1Presenter";
import Mission1MobilePresenter from "./mobileVersion/Mission1MobilePresenter";
import Mission1MobileInputPresenter from "./mobileVersion/Mission1MobileInputPresenter";
import ProcessContext from "../../contextApi/Process";
import TempSaveContext from "../../contextApi/TempSave";
import { jobCards } from "../JobCards";

const Mission1Container = ({ history, match }) => {
	//////////////// 모바일 state 시작 ///////////////////////////
	const [dimension] = useState({
		width: window.innerWidth,
		height: window.innerHeight,
	});
	const [missionInput, setMissionInput] = useState(false);
	const [correctCard, setCorrectCard] = useState(false);
	//////////////// 모바일 state 끝 ///////////////////////////
	const { state, actions } = useContext(ProcessContext);
	const { modalState, modalActions } = useContext(TempSaveContext);
	const [prevMedia, setPrevMedia] = useState(true);
	const [nextMedia, setNextMedia] = useState(false);
	const [answerInputText, setAnswerInputText] = useState(""); // onChang 인풋 텍스트 저장하는 state
	const [inputArray, setInputArray] = useState([]);
	const [answerInputArray, setAnswerInputArray] = useState([
		{ question1: { answer: "", wrongAnswer: "" } },
		{ question2: { answer: "", wrongAnswer: "" } },
		{ question3: { answer: "", wrongAnswer: "" } },
		{ question4: { answer: "", wrongAnswer: "" } },
		{ question5: { answer: "", wrongAnswer: "" } },
		{ question6: { answer: "", wrongAnswer: "" } },
		{ question7: { answer: "", wrongAnswer: "" } },
		{ question8: { answer: "", wrongAnswer: "" } },
		{ question9: { answer: "", wrongAnswer: "" } },
		{ question10: { answer: "", wrongAnswer: "" } },
		{ question11: { answer: "", wrongAnswer: "" } },
		{ question12: { answer: "", wrongAnswer: "" } },
		{ question13: { answer: "", wrongAnswer: "" } },
		{ question14: { answer: "", wrongAnswer: "" } },
		{ question15: { answer: "", wrongAnswer: "" } },
		{ question16: { answer: "", wrongAnswer: "" } },
	]); // 정답 16개를 저장하는 배열
	// const [index, setIndex] = useState(1); // 정답제출 시 +1 을 시키면 배열의 index 를 넘김
	const [missionQuestion, setMissionQuestion] = useState(); // 미션 배열 중 한개의 문제만 보내는 state
	const [answerResult, setAnswerResult] = useState(); // 오른쪽 카드 영역 정오답화면 변경 state
	const [answerMissionCards, setAnswerMissionCards] = useState(); // 정답 미션 카드를 담는 state
	const [processPercentage, setProcessPercentage] = useState(0);
	const [faqModal, setFaqModal] = useState();
	const [isOpen, setIsOpen] = useState(false);

	const setProcessFunction = async () => {
		//validation 추가
		actions.setMission1("ok");
		const result = await Activity.mission1EndStart();
		console.log("mission1", result);
		history.push(`/mission2/${state.mission2Index}`);
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
		toggleSaveModal: () => {
			modalActions.setSaveModalOpen(!modalState.saveModalOpen);
		},
		togglePrevMediaModal: () => {
			setPrevMedia(!prevMedia);
		},
		toggleNextMediaModal: () => {
			setNextMedia(!nextMedia);
		},
		modalConfimBtnEvent: () => {
			console.log(inputArray);
			modalActions.setSaveModalOpen(!modalState.saveModalOpen);
		},
	};

	// 문제출제 세팅 함수
	const selectExamQuestion = () => {
		const question = JSON.parse(sessionStorage.getItem("missionOne"));
		setMissionQuestion(question);
	};

	// 정답 입력 및 확인 이벤트
	const answerFunctionList = {
		// 정답인 jobCards 이미지 가져오기
		findJobCards: (answer) => {
			const findIndex = jobCards.findIndex((i) => i.title === answer);
			setAnswerMissionCards(findIndex);
		},
		// 정답 입력값 가져오기
		onChangeAnswer: (e) => {
			setAnswerInputText(e.target.value);
		},
		// 임시저장 할 배열만들기 함수
		makeInputArray: async () => {
			// 확인버튼 실행함수
			const answer = { id: match.params.id, text: answerInputText };
			console.log(answer);
			setInputArray([...inputArray, answer]);
		},
		// 임시저장 api 연결
		tempSaveSheet: async () => {
			const result = await SaveData.save(1, "[companyNameSave]");
			console.log(result);
		},
		// 정답제출 버튼 클릭이벤트
		checkAnswer: () => {
			const question = JSON.parse(sessionStorage.getItem("missionOne"));
			if (answerInputText === "") {
				// alert("직업이름을 입력해 주세요.");
			} else {
				if (answerInputText === question[match.params.id - 1].title) {
					// 정답일때,
					answerFunctionList.findJobCards(answerInputText); // 카드 이미지 찾아오기
					setAnswerResult(true);
					setAnswerInputText("");
				} else {
					// 오답일때,
					setAnswerResult(false);
					setAnswerInputText("");
				}
			}
		},
		// 정답화면 오른쪽카드 다음 버튼 이벤트
		addIndex: async () => {
			if (parseInt(match.params.id) === 16) {
				setProcessPercentage(100);
				setAnswerResult(undefined);
				setProcessFunction();
			} else {
				console.log(match.params.id);
				actions.setIndex(parseInt(match.params.id) + 1); // Header active css 적용을 위해서 context 변수 +1
				modalFunction.togglePrevMediaModal();
				setAnswerResult(undefined);
				history.push(`/mission1/${parseInt(match.params.id) + 1}`);
			}
		},
	};

	const mobileFunctionList = {
		// input페이지가기
		inputPageHandler: () => {
			setMissionInput(!missionInput);
		},
		// 정답화면 모달 켜기
		ToggleCorrectModal: () => {
			setCorrectCard(!correctCard);
		},
		// 정답확인 함수
		checkAnswer: () => {
			answerFunctionList.checkAnswer();
			if (answerResult === true) {
				mobileFunctionList.inputPageHandler();
				mobileFunctionList.ToggleCorrectModal(); // 정답 끄기
			}
		},
		// 다음버튼 함수
		addIndex: () => {
			mobileFunctionList.ToggleCorrectModal(); // 정답 모달끄기
			answerFunctionList.addIndex(); // 다음 문제 보내기
		},
	};
	useEffect(() => {
		selectExamQuestion(match.params.id - 1);
	}, []);

	return (
		<>
			{dimension.width < 415 ? (
				missionInput ? (
					<Mission1MobileInputPresenter
						wrong={answerResult}
						answerInputText={answerInputText}
						mobileFunctionList={mobileFunctionList}
						answerFunctionList={answerFunctionList}
					/>
				) : (
					<Mission1MobilePresenter
						index={match.params.id}
						prevMedia={prevMedia}
						nextMedia={nextMedia}
						modalFunction={modalFunction}
						correctCard={correctCard}
						missionQuestion={missionQuestion}
						answerResult={answerResult}
						answerMissionCards={answerMissionCards}
						mobileFunctionList={mobileFunctionList}
						answerFunctionList={answerFunctionList}
					/>
				)
			) : (
				<Mission1Presenter
					prevMedia={prevMedia}
					nextMedia={nextMedia}
					answerMissionCards={answerMissionCards}
					answerInputText={answerInputText}
					// index={}
					index={match.params.id}
					missionQuestion={missionQuestion}
					answerResult={answerResult}
					isOpen={isOpen}
					faqModal={faqModal}
					modalState={modalState}
					processPercentage={processPercentage}
					setProcessFunction={setProcessFunction}
					modalFunction={modalFunction}
					answerFunctionList={answerFunctionList}
				/>
			)}
		</>
	);
};

export default Mission1Container;
