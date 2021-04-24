import React, { createContext, useState } from "react";

const TempSaveContext = createContext({
	modalState: {
		saveModalOpen: false,
		mission3Selected: "",
	},
	modalActions: {
		setSaveModalOpen: () => {},
		setMission3Selected: () => {},
	},
});

const TempSaveProvider = ({ children }) => {
	const [saveModalOpen, setSaveModalOpen] = useState(false);
	const [mission3Selected, setMission3Selected] = useState("");
	const value = {
		modalState: { saveModalOpen, mission3Selected },
		modalActions: { setSaveModalOpen, setMission3Selected },
	};
	return (
		<TempSaveContext.Provider value={value}>{children}</TempSaveContext.Provider>
	);
};

const { Consumer: TempSaveConsumer } = TempSaveContext;

export { TempSaveProvider, TempSaveConsumer };

export default TempSaveContext;
