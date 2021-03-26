import React, { useContext } from "react";
import Mission2Presenter from "./Mission2Presenter";
import ProcessContext from "../../contextApi/Process";

const Mission2Container = ({ history }) => {
	const { actions } = useContext(ProcessContext);

	const setProcessFunction = () => {
		//validation 추가
		actions.setMission2("ok");
		history.push("/mission3");
	};
	return <Mission2Presenter setProcessFunction={setProcessFunction} />;
};

export default Mission2Container;
