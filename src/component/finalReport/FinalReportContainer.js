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
	const [changeBtn, setChangeBtn] = useState(false);

	const handleProgree = (data) => {
		const result = Math.round(data.playedSeconds) / data.loadedSeconds;
		const result2 = Math.round(data.played * 100) / 100;
		if (result === result2) {
			setChangeBtn(true);
		}
	};

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
					handleProgree={handleProgree}
					changeBtn={changeBtn}
					isOpen={isOpen}
					faqModal={faqModal}
					modalFunction={modalFunction}
				/>
			)}
		</>
	);
};

export default FinalReportContainer;
