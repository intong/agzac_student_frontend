import React, { useContext, useState } from "react";
import Mission2Presenter from "./Mission2Presenter";
import ProcessContext from "../../contextApi/Process";

const Mission2Container = ({ history }) => {
	const { actions } = useContext(ProcessContext);
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
	};
	return (
		<Mission2Presenter
			isOpen={isOpen}
			faqModal={faqModal}
			setProcessFunction={setProcessFunction}
			modalFunction={modalFunction}
		/>
	);
};

export default Mission2Container;
