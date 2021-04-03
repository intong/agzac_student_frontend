import React, { createContext, useState } from "react";

const TempSaveContext = createContext({
	modalState: { saveModalOpen: false },
	modalActions: { setSaveModalOpen: () => {} },
});

const TempSaveProvider = ({ children }) => {
	const [saveModalOpen, setSaveModalOpen] = useState(false);
	const value = {
		modalState: { saveModalOpen },
		modalActions: { setSaveModalOpen },
	};
	return (
		<TempSaveContext.Provider value={value}>{children}</TempSaveContext.Provider>
	);
};

const { Consumer: TempSaveConsumer } = TempSaveContext;

export { TempSaveProvider, TempSaveConsumer };

export default TempSaveContext;
