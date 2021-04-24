import React, { createContext, useState } from "react";

const TempSaveContext = createContext({
	modalState: {
		saveModalOpen: false,
		mission3Selected: "",
		getTempData: "",
	},
	modalActions: {
		setSaveModalOpen: () => {},
		setMission3Selected: () => {},
		setGetTempData: () => {},
	},
});

const TempSaveProvider = ({ children }) => {
	const [saveModalOpen, setSaveModalOpen] = useState(false);
	const [mission3Selected, setMission3Selected] = useState("");
	const [getTempData, setGetTempData] = useState("");
	const value = {
		modalState: { saveModalOpen, mission3Selected, getTempData },
		modalActions: { setSaveModalOpen, setMission3Selected, setGetTempData },
	};
	return (
		<TempSaveContext.Provider value={value}>{children}</TempSaveContext.Provider>
	);
};

const { Consumer: TempSaveConsumer } = TempSaveContext;

export { TempSaveProvider, TempSaveConsumer };

export default TempSaveContext;
