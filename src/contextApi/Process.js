import React, { createContext, useState } from "react";

const ProcessContext = createContext({
	state: {
		video: "",
		mission1: "",
		mission2: "",
		mission3: "",
		mission4: "",
		final: "",
		useDataConfirm: "",
		saveTempData: {},
	},
	actions: {
		setVideo: () => {},
		setMission1: () => {},
		setMission2: () => {},
		setMission3: () => {},
		setMission4: () => {},
		setFinal: () => {},
		setUseDataConfirm: () => {},
		setSaveTempData: () => {},
	},
});

const ProcessProvider = ({ children }) => {
	const [video, setVideo] = useState("");
	const [mission1, setMission1] = useState("");
	const [mission2, setMission2] = useState("");
	const [mission3, setMission3] = useState("");
	const [mission4, setMission4] = useState("");
	const [final, setFinal] = useState("");
	const [useDataConfirm, setUseDataConfirm] = useState(""); // MainVideoContainer.js 에서 최초 한번 설정 (true: 저장된 데이터 사용함 / false: 저장된 데이터 사용하지 않음 / undefined: defualt)
	const [saveTempData, setSaveTempData] = useState({});
	const value = {
		state: {
			video,
			mission1,
			mission2,
			mission3,
			mission4,
			final,
			useDataConfirm,
			saveTempData,
		},
		actions: {
			setVideo,
			setMission1,
			setMission2,
			setMission3,
			setMission4,
			setFinal,
			setUseDataConfirm,
			setSaveTempData,
		},
	};
	return (
		<ProcessContext.Provider value={value}>{children}</ProcessContext.Provider>
	);
};

const { Consumer: ProcessConsumer } = ProcessContext;

export { ProcessProvider, ProcessConsumer };

export default ProcessContext;
