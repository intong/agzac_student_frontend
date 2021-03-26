import React, { useContext } from "react";
import Mission1Presenter from "./Mission1Presenter";
import ProcessContext from "../../contextApi/Process";

const Mission1Container = ({ history }) => {
	const { actions } = useContext(ProcessContext);

	const setProcessFunction = () => {
		//validation 추가
		actions.setMission1("ok");
		history.push("/mission2");
	};

	return <Mission1Presenter setProcessFunction={setProcessFunction} />;
};

export default Mission1Container;
