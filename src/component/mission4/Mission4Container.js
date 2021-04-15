import React, { useState, useContext, useEffect } from "react";
import Mission4Presenter from "./Mission4Presenter";
import ProcessContext from "../../contextApi/Process";

const Mission4Container = ({ history, location }) => {
	const { actions } = useContext(ProcessContext);
	const [priceSettingModal, setPriceSettingModal] = useState(false); // 상품가격 세팅 모달 오픈
	const [completeModal, setCompleteModal] = useState(false);
	const [prevSelect, setPrevSelect] = useState(); // mission3에서 선택한 사회문제 및 키워드 3개
	const [faqModal, setFaqModal] = useState();
	const [isOpen, setIsOpen] = useState(false);
	const [confirm, setConfirm] = useState({
		social: "",
		reason: "",
		developer: "",
	});

	const clickFunctionList = {
		choiceOtherSocialProblem: () => {
			const ok = window.confirm("다른 사회 문제를 선택하겠습니까?");
			if (ok) {
				history.push("/mission3");
			}
		},
		onClickNextFuction: (tab) => {
			if (tab === "social") {
				// validation 체크 후 컨펌
				setConfirm({ ...confirm, social: "ok" });
			} else if (tab === "reason") {
				// validation 체크 후 컨펌
				setConfirm({ ...confirm, reason: "ok" });
			} else {
				// validation 체크 후 컨펌
				alert("developer 버튼 클릭");
			}
		},
		// 파이널로 가기
		goToFinalReport: () => {
			actions.setMission4("ok");
			history.push("/finalreport");
		},
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
		togglePriceSettingModal: () => {
			setPriceSettingModal(!priceSettingModal);
		},
		toggleCompleteModal: () => {
			modalFunction.togglePriceSettingModal();
			setCompleteModal(!completeModal);
		},
		cancelCompleteModal: () => {
			setCompleteModal(!completeModal);
		},
	};

	useEffect(() => {
		setPrevSelect(location.state);
	}, [location.state]);

	return (
		<Mission4Presenter
			priceSettingModal={priceSettingModal}
			completeModal={completeModal}
			prevSelect={prevSelect}
			isOpen={isOpen}
			faqModal={faqModal}
			confirm={confirm}
			clickFunctionList={clickFunctionList}
			modalFunction={modalFunction}
		/>
	);
};

export default Mission4Container;
