import React, { useState, useContext } from "react";
import Mission4Presenter from "./Mission4Presenter";
import ProcessContext from "../../contextApi/Process";

const Mission4Container = ({ history }) => {
	const { actions } = useContext(ProcessContext);
	const [confirm, setConfirm] = useState({
		social: "",
		reason: "",
		developer: "",
	});

	const clickFunctionList = {
		onClickNextFuction: (tab) => {
			if (tab === "social") {
				// validation 체크 후 컨펌
				setConfirm({ ...confirm, social: "ok" });
			} else if (tab === "reason") {
				// validation 체크 후 컨펌
				setConfirm({ ...confirm, reason: "ok" });
			} else {
				// validation 체크 후 컨펌
				alert("developer 버튼 클릭");
				actions.setMission4("ok");
				history.push("/finalreport");
			}
		},
	};

	return (
		<Mission4Presenter confirm={confirm} clickFunctionList={clickFunctionList} />
	);
};

export default Mission4Container;
