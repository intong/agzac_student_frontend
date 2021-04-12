import React, { useState, useContext } from "react";
import Mission3Presenter from "./Mission3Presenter";
import { missionThreeQandA } from "../AnswerList";
import ProcessContext from "../../contextApi/Process";
import TempSaveContext from "../../contextApi/TempSave";

const Mission3Container = ({ history }) => {
	const { actions } = useContext(ProcessContext);
	const { modalState, modalActions } = useContext(TempSaveContext);
	const [faqModal, setFaqModal] = useState();
	const [isOpen, setIsOpen] = useState(false);
	const [selectTab, setSelectTab] = useState();
	const [selectTabContent, setSelectTabContent] = useState();
	const [choosed, setChoosed] = useState(false);
	const [firstAnswer, setFirstAnswer] = useState();
	const [secondAnswer, setSecondAnswer] = useState();
	const [thirdAnswer, setThirdAnswer] = useState();
	const [aa, setAa] = useState();
	const [bb, setBb] = useState();
	const [cc, setCc] = useState();

	const setProcessFunction = () => {
		//validation 추가
		console.log(11);
		actions.setMission3("ok");
		history.push("/mission4");
	};

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
		passNext: () => {
			alert(111);
			if (firstAnswer === true && secondAnswer === true && thirdAnswer === true) {
				setProcessFunction();
			}
		},
		checkAnswer: () => {
			const correct = {
				first: "드론개발자",
				second: "드론",
				third: "개발자",
			};
			if (aa === correct.first) {
				setFirstAnswer(true);
			} else {
				setFirstAnswer(false);
			}

			if (bb === correct.second) {
				setSecondAnswer(true);
			} else {
				setSecondAnswer(false);
			}

			if (cc === correct.third) {
				setThirdAnswer(true);
			} else {
				setThirdAnswer(false);
			}
			uiFunctionList.passNext();
		},
		onChange: (e) => {
			const name = e.target.name;
			const value = e.target.value;
			if (name === "first") {
				setAa(value);
			} else if (name === "second") {
				setBb(value);
			} else {
				setCc(value);
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
				aa={aa}
				bb={bb}
				cc={cc}
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
