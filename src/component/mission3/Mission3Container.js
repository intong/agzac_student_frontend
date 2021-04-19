import React, { useState, useContext, useEffect } from "react";
import Mission3Presenter from "./Mission3Presenter";
import { missionThreeQandA } from "../AnswerList";
import ProcessContext from "../../contextApi/Process";
import TempSaveContext from "../../contextApi/TempSave";

const Mission3Container = ({ history }) => {
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

	const setProcessFunction = () => {
		//validation 추가
		actions.setMission3("ok");
		history.push({
			pathname: `/mission4/${state.mission4Index}`,
			state: {
				selectTabContent: selectTabContent,
				studentAnswerList: studentAnswerList,
			},
		});
	};

	let tempArr = [];
	const uiFunctionList = {
		tabSelectFunction: (tab) => {
			const selectCategory = missionThreeQandA.find((ele) => ele.category === tab);
			setSelectTab(tab);
			setSelectTabContent(selectCategory);
		},
		clickFinalChoice: () => {
			if (selectTab !== undefined) {
				setChoosed(!choosed);
			} else {
				alert("사회문제를 먼저 선택하세요");
			}
		},
		hasAnswerList: (answer) => {
			const result = selectTabContent.answer.includes(answer);
			return result;
		},
		checkAnswer: () => {
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
		handleSaveModalConfirmBtn: () => {
			// 확인버튼 실행함수
			modalActions.setSaveModalOpen(!modalState.saveModalOpen);
		},
		toggleSaveModal: () => {
			modalActions.setSaveModalOpen(!modalState.saveModalOpen);
		},
	};

	return (
		<>
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
		</>
	);
};

export default Mission3Container;
