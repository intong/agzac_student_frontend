import React, { useEffect, useState } from "react";
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
	useEffect(() => {
		setTimeout(() => {
			setChangeBtn(true);
		}, 80000);
	}, []);

	return (
		<>
			{dimension.width < 415 ? (
				<FinalReportMobile
					changeBtn={changeBtn}
					isOpen={isOpen}
					faqModal={faqModal}
					modalFunction={modalFunction}
				/>
			) : (
				<FinalReportPresenter
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
