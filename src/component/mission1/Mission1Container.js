import React, { useContext, useState } from "react";
import Mission1Presenter from "./Mission1Presenter";
import ProcessContext from "../../contextApi/Process";

const Mission1Container = ({ history }) => {
	const { actions } = useContext(ProcessContext);
	const [processPercentage, setProcessPercentage] = useState(70);
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
	};

	return (
		<Mission1Presenter
			isOpen={isOpen}
			faqModal={faqModal}
			processPercentage={processPercentage}
			setProcessFunction={setProcessFunction}
			modalFunction={modalFunction}
		/>
	);
};

export default Mission1Container;
