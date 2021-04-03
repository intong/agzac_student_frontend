import React, { useContext } from "react";
import MainVideoPresenter from "./MainVideoPresenter";
import ProcessContext from "../../contextApi/Process";
import TempSaveContext from "../../contextApi/TempSave";

const MainVideoContainer = ({ history }) => {
	const { actions } = useContext(ProcessContext);
	const { modalState, modalActions } = useContext(TempSaveContext);

	const setProcessFunction = () => {
		//validation 추가
		actions.setVideo("ok");
		history.push("/mission1");
	};

	const modalFunction = {
		toggleModal: () => {
			modalActions.setSaveModalOpen(!modalState.saveModalOpen);
		},
		handleConfirmBtn: () => {
			modalFunction.toggleModal();
		},
	};

	return (
		<MainVideoPresenter
			isModalOpen={modalState.saveModalOpen}
			setProcessFunction={setProcessFunction}
			modalFunction={modalFunction}
		/>
	);
};

export default MainVideoContainer;
