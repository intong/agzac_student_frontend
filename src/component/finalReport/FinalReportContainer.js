import React, { useState } from "react";
import FinalReportPresenter from "./FinalReportPresenter";

const FinalReportContainer = ({ history, match, location }) => {
	const [faqModal, setFaqModal] = useState();
	const [isOpen, setIsOpen] = useState(false);
	const [finalModal, setFinalModal] = useState(false);

	const modalFunction = {
		openModal: () => {
			setIsOpen(!isOpen);
		},
		closeModal: () => {
			setIsOpen(!isOpen);
		},
		toggleFaqModal: () => {
			setFaqModal(!faqModal);
		},
	};

	return (
		<>
			<FinalReportPresenter
				isOpen={isOpen}
				faqModal={faqModal}
				modalFunction={modalFunction}
			/>
		</>
	);
};

export default FinalReportContainer;
