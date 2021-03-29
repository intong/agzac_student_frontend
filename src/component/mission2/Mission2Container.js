import React, { useContext, useState } from "react";
import Mission2Presenter from "./Mission2Presenter";
import ProcessContext from "../../contextApi/Process";

const Mission2Container = ({ history }) => {
	const { actions } = useContext(ProcessContext);
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
	};
	return (
		<Mission2Presenter
			isOpen={isOpen}
			setProcessFunction={setProcessFunction}
			modalFunction={modalFunction}
		/>
	);
};

export default Mission2Container;
