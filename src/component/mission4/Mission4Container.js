import React, { useState } from "react";
import Mission4Presenter from "./Mission4Presenter";

const Mission4Container = () => {
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
			}
		},
	};

	return (
		<Mission4Presenter confirm={confirm} clickFunctionList={clickFunctionList} />
	);
};

export default Mission4Container;
