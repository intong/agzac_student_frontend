import React from "react";
import FinalReportPresenter from "./FinalReportPresenter";

const FinalReportContainer = ({ history, match, location }) => {
	return (
		<>
			{console.log("history", history)}
			{console.log("match", match)}
			{console.log("location", location)}
			<FinalReportPresenter />
		</>
	);
};

export default FinalReportContainer;
