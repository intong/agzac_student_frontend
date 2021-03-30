import React, { useState } from "react";
import FinalReportPresenter from "./FinalReportPresenter";

const FinalReportContainer = ({ history, match, location }) => {
	const [isOpen, setIsOpen] = useState(false);

	const modalFunction = {
		openModal: () => {
			setIsOpen(!isOpen);
		},
		closeModal: () => {
			setIsOpen(!isOpen);
		},
	};

	return (
		<>
			<FinalReportPresenter isOpen={isOpen} modalFunction={modalFunction} />
		</>
	);
};

export default FinalReportContainer;
