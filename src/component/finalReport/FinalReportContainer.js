import React, { useState } from "react";
import FinalReportPresenter from "./FinalReportPresenter";
import FinalReportMobile from "./mobileVersion/FinalReportMobile";

const FinalReportContainer = ({ history, match, location }) => {
	//////////////// 모바일 state 시작 ///////////////////////////
	const [dimension] = useState({
		width: window.innerWidth,
		height: window.innerHeight,
	});
	//////////////// 모바일 state 끝 ///////////////////////////
	const [faqModal, setFaqModal] = useState();
	const [isOpen, setIsOpen] = useState(false);

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
			{dimension.width < 415 ? (
				<FinalReportMobile />
			) : (
				<FinalReportPresenter
					isOpen={isOpen}
					faqModal={faqModal}
					modalFunction={modalFunction}
				/>
			)}
		</>
	);
};

export default FinalReportContainer;
