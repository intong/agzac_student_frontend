import React, { useContext, useState } from "react";
import Mission1Presenter from "./Mission1Presenter";
import ProcessContext from "../../contextApi/Process";

const Mission1Container = ({ history }) => {
	const { actions } = useContext(ProcessContext);
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
	};

	return (
		<Mission1Presenter
			isOpen={isOpen}
			setProcessFunction={setProcessFunction}
			modalFunction={modalFunction}
		/>
	);
};

export default Mission1Container;
