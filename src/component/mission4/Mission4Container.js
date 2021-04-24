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
	const [humanRole1, setHumanRole1] = useState(); // 미래인재역할1 input text 저장 state
	const [humanRole2, setHumanRole2] = useState(); // 미래인재역할2 input text 저장 state
	const [humanRole3, setHumanRole3] = useState(); // 미래인재역할3 input text 저장 state
	const [itemItro1, setItemIntro1] = useState(); // 상품소개 input text 저장 state
	const [itemItro2, setItemIntro2] = useState(); // 상품소개 input text 저장 state
	const [itemItro3, setItemIntro3] = useState(); // 상품소개 input text 저장 state
	const [itemItro4, setItemIntro4] = useState(); // 상품소개 input text 저장 state
	const [itemNameModal, setItemNameModal] = useState(false); // 상품 이름 세팅 모달
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
		const tempArr = [];
		if (firstTxtArea !== undefined) {
			tempArr.push(firstTxtArea);
		}
		if (secondTxtArea !== undefined) {
			tempArr.push(secondTxtArea);
		}
		if (thirdTxtArea !== undefined) {
			tempArr.push(thirdTxtArea);
		}
		if (fourthTxtArea !== undefined) {
			tempArr.push(fourthTxtArea);
		}
		return tempArr;
	};

	// 미래인재 역할 text들 가져오기
	const getFutureHumanRole = () => {
		const inner1 = document.getElementById("roleOne").innerHTML;
		const inner2 = document.getElementById("roleTwo").innerHTML;
		const inner3 = document.getElementById("roleThree").innerHTML;
		// validation용 배열
		let checkOverlap = [];
		const tempArr = [];

		// validation
		if (inner1 === "선택") {
			alert("미래인재1을 선택해 주세요.");
		} else if (humanRole1 === undefined) {
			alert("미래인재1을 선택한 이유를 설명해 주세요.");
		} else if (inner2 === "선택") {
			alert("미래인재2를 선택해 주세요.");
		} else if (humanRole2 === undefined) {
			alert("미래인재2를 선택한 이유를 설명해 주세요.");
		} else if (inner3 === "선택") {
			alert("미래인재3을 선택해 주세요.");
		} else if (humanRole3 === undefined) {
			alert("미래인재3을 선택한 이유를 설명해 주세요.");
		} else {
			checkOverlap.push(inner1);
			checkOverlap.push(inner2);
			checkOverlap.push(inner3);
			let newCheck = new Set(checkOverlap);
			if (newCheck.size !== 3) {
				alert("같은 미래인재를 선택하셨습니다.");
				newCheck = [];
				checkOverlap = [];
			} else {
				if (inner1 !== "선택") {
					tempArr.push(inner1);
					if (humanRole1 !== undefined) {
						tempArr.push(humanRole1);
					}
				}
				if (inner2 !== "선택") {
					tempArr.push(inner2);
					if (humanRole2 !== undefined) {
						tempArr.push(humanRole2);
					}
				}
				if (inner3 !== "선택") {
					tempArr.push(inner3);
					if (humanRole3 !== undefined) {
						tempArr.push(humanRole3);
					}
				}
				return tempArr;
			}
		}
	};

	// 상품소개 input text들 가져오기
	const getItemItro = () => {
		const tempArr = [];
		if (itemItro1 === undefined) {
			alert("상품의 모습을 설명해 주세요.");
		} else if (itemItro2 === undefined) {
			alert("상품의 사용법을 설명해 주세요.");
		} else if (itemItro3 === undefined) {
			alert("이 상품의 단점 혹은 예상되는 문제점을 써주세요.");
		} else if (itemItro4 === undefined) {
			alert("단점 혹은 문제점을 해결할 수 있는 방법을 써주세요.");
		} else {
			if (itemItro1 !== undefined) {
				tempArr.push(itemItro1);
			}
			if (itemItro2 !== undefined) {
				tempArr.push(itemItro2);
			}
			if (itemItro3 !== undefined) {
				tempArr.push(itemItro3);
			}
			if (itemItro4 !== undefined) {
				tempArr.push(itemItro4);
			}
			return tempArr;
		}
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
				const reason = getDevelopmentReason();
				const result = await SaveData.save(7, reason);
				if (result.data.ok) {
					alert("저장되었습니다");
				}
				setConfirm({ ...confirm, reason: "ok" });
				setSelectTab("developer");
			} else if (tab === "developer") {
				// validation 체크 후 컨펌
				const role = getFutureHumanRole();
				const result = await SaveData.save(8, role);
				if (result.data.ok) {
					alert("저장되었습니다.");
				}
				setConfirm({ ...confirm, developer: "ok" });
				setSelectTab("itemIntro");
			} else if (tab === "itemIntro") {
				// validation 체크 후 컨펌
				const item = getItemItro();
				const result = await SaveData.save(9, item);
				if (result.data.ok) {
					alert("저장되었습니다.");
					modalFunction.toggleProductNameModal(); // 상품이름 쓰는 모달 열기
				}
				setConfirm({ ...confirm, itemIntro: "ok" });
				setSelectTab("itemIntro");
			}
		},

		// textArea 가져오기 (사회문제 분석 탭 전용)
		onChangeTextArea: (e) => {
			setTexts(e.target.value);
		},

		// 상품개발 이유 onChange (상품개발 이유 전용)
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

		// 미래인재 역할 onChange (미래인재 역할 전용)
		onChangeHumanFirst: (e) => {
			setHumanRole1(e.target.value);
		},
		onChangeHumanSecond: (e) => {
			setHumanRole2(e.target.value);
		},
		onChangeHumanThird: (e) => {
			setHumanRole3(e.target.value);
		},

		// 상품소개 onChange (상품소개 전용)
		onChangeItemIntro1: (e) => {
			setItemIntro1(e.target.value);
		},
		onChangeItemIntro2: (e) => {
			setItemIntro2(e.target.value);
		},
		onChangeItemIntro3: (e) => {
			setItemIntro3(e.target.value);
		},
		onChangeItemIntro4: (e) => {
			setItemIntro4(e.target.value);
		},
		//상품이름 설정
		setProductName: (e) => {
			setProductName(e.target.value);
		},
		// 상품가격 설정
		setProductPrice: (e) => {
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
		toggleProductNameModal: () => {
			setItemNameModal(!itemNameModal);
		},
		productNameModalConfirmBtn: async () => {
			const result = await SaveData.save(10, [productName]);
			if (result.data.ok) {
				alert("다음으로 가격을 정해주세요");
				modalFunction.toggleProductNameModal();
				modalFunction.togglePriceSettingModal();
			}
		},
		togglePriceSettingModal: () => {
			setPriceSettingModal(!priceSettingModal);
		},
		toggleCompleteModal: async () => {
			console.log(productPrice);
			const result = await SaveData.save(11, [productPrice]);
			if (result.data.ok) {
				modalFunction.togglePriceSettingModal();
				setCompleteModal(!completeModal);
			}
		},
		cancelCompleteModal: () => {
			setCompleteModal(!completeModal);
		},
		// 임시저장 모달 open/close
		toggletempModal: () => {
			modalActions.setSaveModalOpen(!modalState.saveModalOpen);
		},
		// 임시저장 모달 확인 버튼 이벤트
		handleSaveModalConfirmBtn: async () => {
			console.log(selectTab);
			if (selectTab === "social") {
				// 사회문석분석 탭에서 임시저장할 때
				const question = getQuestion();
				const result = await SaveData.save(6, question); // question api
				alert(result);
			} else if (selectTab === "reason") {
				// 상품개발이유에서 임시저장 할 때
				const reason = getDevelopmentReason();
				const result = await SaveData.save(7, reason);
				if (result.data.ok) {
					alert("저장되었습니다");
				}
			} else if (selectTab === "developer") {
				// 미래인재 역할에서 임시저장 할 때
				const role = getFutureHumanRole();
				const result = await SaveData.save(8, role);
				if (result.data.ok) {
					alert("저장되었습니다.");
				}
			} else if (selectTab === "itemIntro") {
				// 상품 소개에서 임시저장 할 때
				const item = getItemItro();
				const result = await SaveData.save(9, item);
				if (result.data.ok) {
					alert("저장되었습니다.");
				}
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
					itemNameModal={itemNameModal}
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
