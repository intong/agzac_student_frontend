import React, { createContext, useState } from "react";

const MissionQandAContext = createContext({
	missionState: { missionOneIndex: 1, missionTwoIndex: "" },
	missionActions: { setMissionOneIndex: () => {}, setMissionTwoIndex: () => {} },
});

const MissionQandAProvider = ({ children }) => {
	const [missionOneIndex, setMissionOneIndex] = useState();
	const [missionTwoIndex, setMissionTwoIndex] = useState();
	const value = {
		missionState: { missionOneIndex, missionTwoIndex },
		missionActions: { setMissionOneIndex, setMissionTwoIndex },
	};
	return (
		<MissionQandAContext.Provider value={value}>
			{children}
		</MissionQandAContext.Provider>
	);
};

const { Consumer: MissionQandAConsumer } = MissionQandAContext;

export { MissionQandAProvider, MissionQandAConsumer };

export default MissionQandAContext;
