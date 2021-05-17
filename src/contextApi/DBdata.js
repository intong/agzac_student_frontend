import React, { createContext, useState } from "react";

const DBdataContext = createContext({
	dataState: { missionOneData: [1, 2] },
	dataActions: { setMissionOneData: () => {} },
});

const DBdataProvider = ({ children }) => {
	const [missionOneData, setMissionOneData] = useState([1, 2]);
	const value = {
		dataState: { missionOneData },
		dataActions: { setMissionOneData },
	};
	return (
		<DBdataContext.Provider value={value}>{children}</DBdataContext.Provider>
	);
};

const { Consumer: DBdataConsumer } = DBdataContext;

export { DBdataProvider, DBdataConsumer };

export default DBdataContext;
