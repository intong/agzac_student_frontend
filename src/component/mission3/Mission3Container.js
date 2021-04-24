import React, { useState, useContext, useEffect } from "react";
import { Activity, SaveData } from "../../api/api";
import Mission3Presenter from "./Mission3Presenter";
import { missionThreeQandA } from "../AnswerList";
import ProcessContext from "../../contextApi/Process";
import TempSaveContext from "../../contextApi/TempSave";
import Mission3MobilePresenter from "./mobileVersion/Mission3MobilePresenter";
import Mission3MobileNextPresenter from "./mobileVersion/Mission3MobileNextPresenter";

const Mission3Container = ({ history }) => {
	//////////////// 모바일 state 시작 ///////////////////////////
	const [dimension] = useState({
		width: window.innerWidth,
		height: window.innerHeight,
	});
	//////////////// 모바일 state 끝 ///////////////////////////
	const { state, actions } = useContext(ProcessContext);
	const { modalState, modalActions } = useContext(TempSaveContext);
	const [faqModal, setFaqModal] = useState();
	const [isOpen, setIsOpen] = useState(false);
	const [selectTab, setSelectTab] = useState();
	const [selectTabContent, setSelectTabContent] = useState();
	const [choosed, setChoosed] = useState(false);
	const [studentAnswerList, setStudentAnswerList] = useState([]); // 학생이 고른 키워드 세개 (미션4로 전달)
	const [firstAnswer, setFirstAnswer] = useState();
	const [secondAnswer, setSecondAnswer] = useState();
	const [thirdAnswer, setThirdAnswer] = useState();
	const [firstInputText, setFirstInputText] = useState();
	const [secondsInputText, setSecondsInputText] = useState();
	const [thirdInputText, setThirdInputText] = useState();

	const setProcessFunction = async () => {
		//validation 추가
		await Activity.mission3EndStart();
		actions.setMission3("ok");
		modalActions.setMission3Selected({
			selectTabContent: selectTabContent,
			studentAnswerList: studentAnswerList,
		});
		history.push(`/mission4/${state.mission4Index}`);
	};

	let tempArr = [];
	const uiFunctionList = {
		tabSelectFunction: (tab) => {
			const selectCategory = missionThreeQandA.find((ele) => ele.category === tab);
			setSelectTab(tab);
			setSelectTabContent(selectCategory);
		},
		clickFinalChoice: async () => {
			if (selectTab !== undefined) {
				setChoosed(!choosed);
				if (selectTab === "tab1") {
					await SaveData.save(4, ["기후변화와 환경"]);
				}
				if (selectTab === "tab2") {
					await SaveData.save(4, ["고령화 사회"]);
				}
				if (selectTab === "tab3") {
					await SaveData.save(4, ["재난과 안전"]);
				}
			} else {
				alert("사회문제를 먼저 선택하세요");
			}
		},
		hasAnswerList: (answer) => {
			const result = selectTabContent.answer.includes(answer.split(" ").join("")); // 띄어쓰기 없애고 배열에 포함되어있나 체크
			return result;
		},
		checkAnswer: async () => {
			if (firstInputText && secondsInputText && thirdInputText !== undefined) {
				if (uiFunctionList.hasAnswerList(firstInputText)) {
					setFirstAnswer(true);
					tempArr.push(firstInputText);
				} else {
					setFirstAnswer(false);
				}
				if (uiFunctionList.hasAnswerList(secondsInputText)) {
					setSecondAnswer(true);
					tempArr.push(secondsInputText);
				} else {
					setSecondAnswer(false);
				}
				if (uiFunctionList.hasAnswerList(thirdInputText)) {
					setThirdAnswer(true);
					tempArr.push(thirdInputText);
				} else {
					setThirdAnswer(false);
				}
				setStudentAnswerList(tempArr);
				await SaveData.save(5, tempArr);
			} else {
				alert("세 가지 키워드를 찾아주세요.");
			}
		},
		onChange: (e) => {
			const name = e.target.name;
			const value = e.target.value;
			if (name === "first") {
				setFirstInputText(value);
			} else if (name === "second") {
				setSecondsInputText(value);
			} else {
				setThirdInputText(value);
			}
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
		handleSaveModalConfirmBtn: async () => {
			// 확인버튼 실행함수
			const tempArr = [];
			if (firstInputText !== undefined) {
				tempArr.push(firstInputText);
			}
			if (secondsInputText !== undefined) {
				tempArr.push(secondsInputText);
			}
			if (thirdInputText !== undefined) {
				tempArr.push(thirdInputText);
			}
			await SaveData.save(5, tempArr);
			modalActions.setSaveModalOpen(!modalState.saveModalOpen);
		},
		toggleSaveModal: () => {
			modalActions.setSaveModalOpen(!modalState.saveModalOpen);
		},
	};

	// 임시저장데이터 가져오기
	const getUseTempData = () => {
		// if (state.saveTempData[5] !== "") {
		// 	const data5 = JSON.parse(state.saveTempData[5]);
		// 	console.log(data5);
		// }
		// if (state.saveTempData[6] !== "") {
		// 	const data6 = JSON.parse(state.saveTempData[6]);
		// 	console.log(data6);
		// }
	};

	useEffect(() => {
		getUseTempData();
	}, []);

	// mobile 전용 functioinList
	const mobileFunction = {};
	return (
		<>
			{dimension.width < 415 ? (
				choosed ? (
					<Mission3MobileNextPresenter
						choosed={choosed}
						selectTab={selectTab}
						firstAnswer={firstAnswer}
						secondAnswer={secondAnswer}
						thirdAnswer={thirdAnswer}
						firstInputText={firstInputText}
						secondsInputText={secondsInputText}
						thirdInputText={thirdInputText}
						uiFunctionList={uiFunctionList}
						setProcessFunction={setProcessFunction}
					/>
				) : (
					<Mission3MobilePresenter
						choosed={choosed}
						selectTab={selectTab}
						selectTabContent={selectTabContent}
						mobileFunction={mobileFunction}
						uiFunctionList={uiFunctionList}
					/>
				)
			) : (
				<Mission3Presenter
					setProcessFunction={setProcessFunction}
					selectTab={selectTab}
					selectTabContent={selectTabContent}
					choosed={choosed}
					firstAnswer={firstAnswer}
					secondAnswer={secondAnswer}
					thirdAnswer={thirdAnswer}
					firstInputText={firstInputText}
					secondsInputText={secondsInputText}
					thirdInputText={thirdInputText}
					uiFunctionList={uiFunctionList}
					isOpen={isOpen}
					faqModal={faqModal}
					modalState={modalState}
					modalFunction={modalFunction}
				/>
			)}
		</>
	);
};

export default Mission3Container;
