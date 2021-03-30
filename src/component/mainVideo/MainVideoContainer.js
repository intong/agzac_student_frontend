import React, { useContext } from "react";
import MainVideoPresenter from "./MainVideoPresenter";
import ProcessContext from "../../contextApi/Process";

const MainVideoContainer = ({ history }) => {
	const { actions } = useContext(ProcessContext);

	const setProcessFunction = () => {
		//validation 추가
		actions.setVideo("ok");
		history.push("/mission1");
	};

	return <MainVideoPresenter setProcessFunction={setProcessFunction} />;
};

export default MainVideoContainer;
