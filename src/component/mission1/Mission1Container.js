import React, { useContext, useState, useEffect } from "react";
import Mission1Presenter from "./Mission1Presenter";
import ProcessContext from "../../contextApi/Process";
import TempSaveContext from "../../contextApi/TempSave";

const Mission1Container = ({ history }) => {
	const { state, actions } = useContext(ProcessContext);
	const { modalState, modalActions } = useContext(TempSaveContext);
	const [missionOneQandA, setMissionOneQandA] = useState();
	const [answerResult, setAnswerResult] = useState(); // 정오답화면 변경 state
	const [processPercentage, setProcessPercentage] = useState(50);
	const [faqModal, setFaqModal] = useState();
	const [isOpen, setIsOpen] = useState(false);

	const setProcessFunction = () => {
		//validation 추가
		actions.setMission1("ok");
		history.push("/mission2");
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

	useEffect(() => {
		// missionOne 셋팅
		const settingMission = () => {
			setMissionOneQandA(JSON.parse(sessionStorage.getItem("missionOne")));
		};
		settingMission();
	}, []);

	return (
		<Mission1Presenter
			missionOneQandA={missionOneQandA}
			answerResult={answerResult}
			isOpen={isOpen}
			faqModal={faqModal}
			modalState={modalState}
			processPercentage={processPercentage}
			setProcessFunction={setProcessFunction}
			modalFunction={modalFunction}
		/>
	);
};

export default Mission1Container;
