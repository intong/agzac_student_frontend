import React, { createContext, useState } from "react";

const ProcessContext = createContext({
	state: {
		video: "", // default "", 진행완료 "ok" : 영상시청
		mission1: "", // default "", 진행완료 "ok" : 미션1
		mission2: "", // default "", 진행완료 "ok" : 미션2
		mission3: "", // default "", 진행완료 "ok" : 미션3
		mission4: "", // default "", 진행완료 "ok" : 미션4
		final: "",
		useDataConfirm: "",
		saveTempData: {},
		index: 1, // default mission2 인덱스 변수
		mission2Index: 1, // default mission2 인덱스 변수
		mission3Index: "category", // default mission3 인덱스 변수
		mission4Index: "social", // default mission4 인덱스 변수
		goFinal: "finalreport",
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
		setIndex: () => {},
		setMission2Index: () => {},
		setMission3Index: () => {},
		setMission4Index: () => {},
		setGoFinal: () => {},
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
	const [index, setIndex] = useState(1);
	const [mission2Index, setMission2Index] = useState(1);
	const [mission3Index, setMission3Index] = useState("category");
	const [mission4Index, setMission4Index] = useState("social");
	const [goFinal, setGoFinal] = useState("finalreport");
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
			index,
			mission2Index,
			mission3Index,
			mission4Index,
			goFinal,
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
			setIndex,
			setMission2Index,
			setMission3Index,
			setMission4Index,
			setGoFinal,
		},
	};
	return (
		<ProcessContext.Provider value={value}>{children}</ProcessContext.Provider>
	);
};

const { Consumer: ProcessConsumer } = ProcessContext;

export { ProcessProvider, ProcessConsumer };

export default ProcessContext;
