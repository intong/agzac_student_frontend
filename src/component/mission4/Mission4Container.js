import React, { useState, useContext, useEffect } from "react";
import { Activity } from "../../api/api";
import Mission4Presenter from "./Mission4Presenter";
import ProcessContext from "../../contextApi/Process";

const Mission4Container = ({ history, location, match }) => {
	const { state, actions } = useContext(ProcessContext);
	const [priceSettingModal, setPriceSettingModal] = useState(false); // 상품가격 세팅 모달 오픈
	const [productName, setProductName] = useState(); // 최종 상품 이름
	const [productPrice, setProductPrice] = useState(); // 최종 상품 가격
	const [completeModal, setCompleteModal] = useState(false);
	const [prevSelect, setPrevSelect] = useState(); // mission3에서 선택한 사회문제 및 키워드 3개
	const [faqModal, setFaqModal] = useState();
	const [isOpen, setIsOpen] = useState(false);
	const [confirm, setConfirm] = useState({
		social: "",
		reason: "",
		developer: "",
	});
	const [selectTab, setSelectTab] = useState(match.params.id);

	const clickFunctionList = {
		choiceOtherSocialProblem: () => {
			const ok = window.confirm("다른 사회 문제를 선택하겠습니까?");
			if (ok) {
				history.push("/mission3");
			}
		},
		selectedTabFunction: (tab) => {
			setSelectTab(tab);
			history.push(`/mission4/${tab}`);
		},
		onClickNextFuction: (tab) => {
			// alert(tab);
			if (tab === "social") {
				// validation 체크 후 컨펌
				setConfirm({ ...confirm, social: "ok" });
				setSelectTab("reason");
			} else if (tab === "reason") {
				// validation 체크 후 컨펌
				setConfirm({ ...confirm, reason: "ok" });
				setSelectTab("developer");
			} else {
				// validation 체크 후 컨펌
				setConfirm({ ...confirm, developer: "ok" });
			}
		},
		//상품이름 설정
		setProductName: (e) => {
			setProductName(e.target.value);
		},
		// 상품가격 설정
		setProductPrice: (e) => {
			console.log(e.target.value);
			setProductPrice(e.target.value);
		},
		// 파이널로 가기
		goToFinalReport: async () => {
			actions.setMission4("ok");
			const result = await Activity.mission4EndStart();
			console.log("Mission4EndStart", result);
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
		console.log(match.params.id);
	}, [location.state]);

	return (
		<Mission4Presenter
			priceSettingModal={priceSettingModal}
			completeModal={completeModal}
			prevSelect={prevSelect}
			isOpen={isOpen}
			faqModal={faqModal}
			confirm={confirm}
			selectTab={selectTab}
			clickFunctionList={clickFunctionList}
			modalFunction={modalFunction}
		/>
	);
};

export default Mission4Container;
