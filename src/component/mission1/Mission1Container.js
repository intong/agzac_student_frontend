import React, { useContext, useState, useEffect } from "react";
import { Activity, SaveData } from "../../api/api";
import Mission1Presenter from "./Mission1Presenter";
import Mission1MobilePresenter from "./mobileVersion/Mission1MobilePresenter";
import Mission1MobileInputPresenter from "./mobileVersion/Mission1MobileInputPresenter";
import ProcessContext from "../../contextApi/Process";
import TempSaveContext from "../../contextApi/TempSave";
import { jobCards } from "../JobCards";

const Mission1Container = ({ history, match, location }) => {
	//////////////// 모바일 state 시작 ///////////////////////////
	const [dimension] = useState({
		width: window.innerWidth,
		height: window.innerHeight,
	});
	const [missionInput, setMissionInput] = useState(false);
	const [correctCard, setCorrectCard] = useState(false);
	//////////////// 모바일 state 끝 ///////////////////////////
	const [index, setIndex] = useState();
	const { state, actions } = useContext(ProcessContext);
	const { modalState, modalActions } = useContext(TempSaveContext);
	const [prevMedia, setPrevMedia] = useState(true);
	const [nextMedia, setNextMedia] = useState(false);
	const [answerInputText, setAnswerInputText] = useState(""); // onChang 인풋 텍스트 저장하는 state
	const [inputArray, setInputArray] = useState([]); // 정답 16개를 저장하는 배열
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
		await Activity.mission1EndStart();
		history.push(`/mission2/${state.mission2Index}`);
	};
	// 임시저장하기 (사용처 : 임시저장 모달 confirm버튼 / 정답제출 버튼)
	const tempSaveSheet = async () => {
		await SaveData.save(2, inputArray);
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
		modalConfimBtnEvent: async () => {
			await tempSaveSheet();
			modalActions.setSaveModalOpen(!modalState.saveModalOpen);
		},
	};

	// 문제출제 세팅 함수
	const selectExamQuestion = () => {
		console.log("selectExamQuestion");
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

		// 이전문제 보기 이벤트
		prevQuestion: () => {
			console.log("이전문제보기");
			console.log(inputArray.length);
		},

		// 정답제출 버튼 클릭이벤트
		checkAnswer: () => {
			const question = JSON.parse(sessionStorage.getItem("missionOne"));
			if (answerInputText === "") {
				alert("직업이름을 입력해 주세요.");
			} else {
				const noneSpaceText = answerInputText.split(" ").join(""); // 띄어쓰기 없앰
				const upperCaseText = noneSpaceText.toUpperCase(); // 대소문자 구분 없앰 (대문자로 통일)
				if (upperCaseText === question[index - 1].title) {
					// 정답일때,
					setInputArray([...inputArray, upperCaseText]); // 배열에 답 저장
					answerFunctionList.findJobCards(upperCaseText); // 카드 이미지 찾아오기
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
			if (parseInt(index) === 16) {
				await tempSaveSheet();
				setProcessPercentage(100);
				setAnswerResult(undefined);
				setProcessFunction();
			} else {
				// console.log("match.params.id", match.params.id);
				actions.setIndex(parseInt(index) + 1); // Header active css 적용을 위해서 context 변수 +1
				await tempSaveSheet();
				modalFunction.togglePrevMediaModal();
				setAnswerResult(undefined);
				history.push(`/mission1/${parseInt(index) + 1}`);
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

	// contextApi의 임시저장된 데이터 사용하기
	const tempUse = async () => {
		if (location.state !== null && location.state !== undefined) {
			// 이어하기로 페이지 진입한 경우
			// 	1. 가지고 들어온 임시저장데이터 (정답리스트 inputArray에 추가하기)
			setInputArray(location.state.data);
		} else {
			// 페이지 들어오는 경우의 수
			// 	1. 메뉴에서 바로 들어오는 경우 (임시저장 데이터 있음:길이 16인 배열 미션2를 완료하고 오는 경우 밖에 없음)
			// 	2. 임시저장데이터가 있지만 사용하지 않고 새로 하는 경우 (임시저장 데이터 있음 하지만 inputArray 초기화 필요)
			//	3. 정답제출 후 다음버튼으로 들어오는 경우 (임시저장 데이터 있음)
			const params = sessionStorage.getItem("auth");
			const result = await SaveData.getTempData(params);
			if (result.data.writtenData[3]) {
				const result2 = JSON.parse(result.data.writtenData[3]);
				if (result2.length === 16) {
					// 미션2를 끝내고 온 경우
					console.log("미션2 끝 이후 접근");
					setInputArray(result2); // 정답 List
				}
			} else {
				console.log("다시시작하기");
				setInputArray(inputArray); // 임시저장 이용 안하고 다시하기로 들어왔을 때 빈 배열 만들기
			}
		}
	};

	useEffect(() => {
		selectExamQuestion();
		setIndex(match.params.id);
		tempUse();
	}, [match.params.id]);

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
						index={index}
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
					inputArray={inputArray}
					prevMedia={prevMedia}
					nextMedia={nextMedia}
					answerMissionCards={answerMissionCards}
					answerInputText={answerInputText}
					index={index}
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
