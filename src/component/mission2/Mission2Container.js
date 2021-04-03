import React, { useContext, useState } from "react";
import Mission2Presenter from "./Mission2Presenter";
import ProcessContext from "../../contextApi/Process";
import TempSaveContext from "../../contextApi/TempSave";

const Mission2Container = ({ history }) => {
	const { actions } = useContext(ProcessContext);
	const { modalState, modalActions } = useContext(TempSaveContext);
	const [faqModal, setFaqModal] = useState();
	const [isOpen, setIsOpen] = useState(false);

	const setProcessFunction = () => {
		//validation 추가
		actions.setMission2("ok");
		history.push("/mission3");
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
		<Mission2Presenter
			isOpen={isOpen}
			faqModal={faqModal}
			modalState={modalState}
			setProcessFunction={setProcessFunction}
			modalFunction={modalFunction}
		/>
	);
};

export default Mission2Container;
