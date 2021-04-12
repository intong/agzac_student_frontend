import React, { createContext, useState } from "react";

const MissionQandAContext = createContext({
	missionState: { missionOne: "", missionTwo: "" },
	missionActions: { setMissionOne: () => {}, setMissionTwo: () => {} },
});

const MissionQandAProvider = ({ children }) => {
	const [missionOne, setMissionOne] = useState();
	const [missionTwo, setMissionTwo] = useState();
	const value = {
		missionState: { missionOne, missionTwo },
		missionActions: { setMissionOne, setMissionTwo },
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
