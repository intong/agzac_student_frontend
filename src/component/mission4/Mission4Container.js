import React, { useState, useContext, useEffect } from "react";
import { Activity, SaveData } from "../../api/api";
import Mission4Presenter from "./Mission4Presenter";
import Mission4MobilePresenter from "./mobileVersion/Mission4MobilePresenter";
import ProcessContext from "../../contextApi/Process";
import TempSaveContext from "../../contextApi/TempSave";

const Mission4Container = ({ history, location, match }) => {
	//////////////// 모바일 state 시작 ///////////////////////////
	const [dimension] = useState({
		width: window.innerWidth,
		height: window.innerHeight,
	});
	//////////////// 모바일 state 끝 ///////////////////////////
	const { actions } = useContext(ProcessContext);
	const { modalState, modalActions } = useContext(TempSaveContext);
	const [texts, setTexts] = useState(); // 사회문제 분석 textArea 저장 state
	const [firstTxtArea, setFirstTxtArea] = useState(); // 상품개발이유 text 저장 state
	const [secondTxtArea, setSecondTxtArea] = useState(); // 상품개발이유 text 저장 state
	const [thirdTxtArea, setThirdTxtArea] = useState(); // 상품개발이유 text 저장 state
	const [fourthTxtArea, setFourthTxtArea] = useState(); // 상품개발이유 text 저장 state
	const [] = useState();
	const [] = useState();
	const [] = useState();
	const [] = useState();
	const [] = useState();
	const [] = useState();
	const [] = useState();
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
		itemIntro: "",
	});
	const [selectTab, setSelectTab] = useState(match.params.id);

	// 사회문제 분석 키워드 가져오기
	const getQuestion = () => {
		const resultPrev = document.getElementById("question").innerHTML;
		// const result = resultPrev.replace(/(\r\n\t|\n|\r\t)/gm, ""); // 줄바꿈 개행없애는 처리 (window / linux / apple)
		const result = resultPrev.replace(/(\r\n|\n|\r)/gm, ""); // 줄바꿈 개행없애는 처리 (window / linux / apple)
		const tempArr = [];
		if (result !== "사회문제 현상 키워드 선택") {
			// 사회문제 키워드 배열담기
			tempArr.push(result);
		}
		if (texts !== undefined) {
			// textArea 텍스트 배열 담기
			tempArr.push(texts);
		}
		return tempArr; // 두개의 요소를 담은 배열 리턴
	};

	// 상품개발이유 텍스트들 가져와서 배열 만들기
	const getDevelopmentReason = () => {
		alert(111);
	};

	const clickFunctionList = {
		choiceOtherSocialProblem: () => {
			const ok = window.confirm("다른 사회 문제를 선택하겠습니까?");
			if (ok) {
				history.push("/mission3/1");
			}
		},
		selectedTabFunction: (tab) => {
			setSelectTab(tab);
			history.push(`/mission4/${tab}`);
		},
		onClickNextFuction: async (tab) => {
			if (tab === "social") {
				// validation 체크 후 컨펌
				const question = getQuestion();
				await SaveData.save(6, question); // question api
				setConfirm({ ...confirm, social: "ok" });
				setSelectTab("reason");
			} else if (tab === "reason") {
				// validation 체크 후 컨펌
				getDevelopmentReason();
				setConfirm({ ...confirm, reason: "ok" });
				setSelectTab("developer");
			} else if (tab === "developer") {
				// validation 체크 후 컨펌
				setConfirm({ ...confirm, developer: "ok" });
				setSelectTab("itemIntro");
			} else {
				// validation 체크 후 컨펌
				setConfirm({ ...confirm, itemIntro: "ok" });
				setSelectTab("itemIntro");
			}
		},
		// 상품개발 이유 onChange
		onChangeReasonFirst: (e) => {
			setFirstTxtArea(e.target.value);
		},
		onChangeReasonSecond: (e) => {
			setSecondTxtArea(e.target.value);
		},
		onChangeReasonThird: (e) => {
			setThirdTxtArea(e.target.value);
		},
		onChangeReasonFourth: (e) => {
			setFourthTxtArea(e.target.value);
		},
		// textArea 가져오기
		onChangeTextArea: (e) => {
			setTexts(e.target.value);
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
		// 임시저장 모달 open/close
		toggletempModal: () => {
			modalActions.setSaveModalOpen(!modalState.saveModalOpen);
		},
		handleSaveModalConfirmBtn: async () => {
			const question = getQuestion();
			if (selectTab === "social") {
				// 사회문석분석 탭에서 임시저장할 때
				await SaveData.save(6, question); // question api
			} else if (selectTab === "reason") {
				// 상품개발이유에서 임시저장 할 때
			} else if (selectTab === "developer") {
				// 미래인재 역할에서 임시저장 할 때
			} else {
				// 상품 소개에서 임시저장 할 때
			}
			modalFunction.toggletempModal();
		},
	};

	useEffect(() => {
		setPrevSelect(location.state);
	}, [location.state]);

	return (
		<>
			{dimension.width < 415 ? (
				<Mission4MobilePresenter />
			) : (
				<Mission4Presenter
					priceSettingModal={priceSettingModal}
					completeModal={completeModal}
					prevSelect={prevSelect}
					isOpen={isOpen}
					faqModal={faqModal}
					confirm={confirm}
					selectTab={selectTab}
					modalState={modalState}
					clickFunctionList={clickFunctionList}
					modalFunction={modalFunction}
				/>
			)}
		</>
	);
};

export default Mission4Container;
