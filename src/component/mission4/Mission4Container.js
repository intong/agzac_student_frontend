import React, { useState, useContext, useEffect } from "react";
import { Activity, SaveData, DBData } from "../../api/api";
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
	const { state, actions } = useContext(ProcessContext);
	const { modalState, modalActions } = useContext(TempSaveContext);
	const [loading, setLoading] = useState(false);
	const [tabClick, setTabClick] = useState(false); // only css 변수 (탭클릭 배경색 변경)
	const [socialProblem, setSocialProblem] = useState(); // 선택한 사회문제
	const [texts, setTexts] = useState(); // 사회문제 분석 textArea 저장 state
	const [firstTxtArea, setFirstTxtArea] = useState(); // 상품개발이유 text 저장 state
	const [secondTxtArea, setSecondTxtArea] = useState(); // 상품개발이유 text 저장 state
	const [thirdTxtArea, setThirdTxtArea] = useState(); // 상품개발이유 text 저장 state
	const [fourthTxtArea, setFourthTxtArea] = useState(); // 상품개발이유 text 저장 state
	const [humanRole1DropDown, setHumanRole1DropDown] = useState(); // 미래인재 역할 탭의 미래인재1 드롭다운
	const [humanRole1, setHumanRole1] = useState(); // 미래인재역할1 input text 저장 state
	const [humanRole2DropDown, setHumanRole2DropDown] = useState(); // 미래인재 역할 탭의 미래인재2 드롭다운
	const [humanRole2, setHumanRole2] = useState(); // 미래인재역할2 input text 저장 state
	const [humanRole3DropDown, setHumanRole3DropDown] = useState(); // 미래인재 역할 탭의 미래인재3 드롭다운
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
	const [saveData, setSaveData] = useState({
		// 디비 저장에 관한 데이터 포멧
		keyword: "", // 사회문제 분석 선택한 사회문제 키워드
		timeOnPage: [], // 미션4 각 탭 체류 시간 (배열길이 : 4)
		futureJob: [], // 미래인재역할 탭에서 선택한 미래인재 (배열길이 : 3)
		price: 0, // 상품가격
	});
	const [startTime, setStartTime] = useState();

	// only css 선택 된 탭 색상 바꾸기 이벤트 (tabclick) : only css 용도
	const handleTabClick = (tab) => {
		clickFunctionList.selectedTabFunction(tab);
	};

	const makeSaveDataFunctionList = {
		// 정답 맞추는 시간 계산하기용 시간 값 가져오기
		calculTime: () => {
			const time = new Date();
			const timeSec = time.getTime();
			return timeSec;
		},
		// 체류시간 계산
		calculTimeGap: () => {
			const endTime = makeSaveDataFunctionList.calculTime();
			const gap = (endTime - startTime) / 1000;
			makeSaveDataFunctionList.setTimeOnPage(gap);
			setStartTime(endTime);
		},
		// setTimeOnPage
		setTimeOnPage: (time) => {
			let tempArr = saveData.timeOnPage;
			tempArr.push(time);
			setSaveData({ ...saveData, timeOnPage: tempArr });
		},
		// 미애인재 배열만들기
		setFutureJob: (role1, role2, role3) => {
			setSaveData({ ...saveData, futureJob: [role1, role2, role3] });
		},
		// 상품가격 넣기
		setProPrice: (proprice) => {
			setSaveData({ ...saveData, price: parseInt(proprice) });
		},
	};

	// 각 탭의 input 값 null check 및 구글 api request data 배열 만들기
	const makeApiArr = {
		// 사회문제 분석 키워드 가져오기 (null check validataion 포함)
		getQuestion: () => {
			const result = document.getElementById("question").innerHTML;
			const tempArr = [];
			if (result !== "사회문제 현상 키워드 선택") {
				// 사회문제 키워드 배열담기
				tempArr.push(result);
				if (texts !== undefined) {
					const mark2Break = texts.replace(/\[.*?\]/g, ""); // 대괄호제거
					const markBreak = mark2Break.replace(/\"/g, ""); // 따옴표 제거
					const lineBreak = markBreak.replace(/(\r\n\t|\n|\r\t)/gm, ""); // 줄바꿈 제거
					const spaceBreak = lineBreak.split(" ").join(""); // space 공백 띄어쓰기 제거
					if (spaceBreak.length > 14) {
						// textArea 텍스트 배열 담기
						tempArr.push(spaceBreak);
						return { ok: true, data: tempArr };
					} else {
						alert("관련 문제상황을 15자 이상 작성해 주세요.");
						return { ok: false, data: tempArr };
					}
				} else {
					alert("관련된 문제상황을 작성해 주세요.");
					return { ok: false, data: tempArr };
				}
			} else {
				alert("사회문제현상 키워드를 선택해 주세요.");
				return { ok: false, data: tempArr };
			}
		},
		// 상품개발이유 텍스트들 가져와서 배열 만들기 (null check validataion 포함)
		getDevelopmentReason: () => {
			const tempArr = [];
			if (firstTxtArea !== undefined) {
				if (firstTxtArea.split(" ").join("").length > 4) {
					tempArr.push(firstTxtArea);
					if (secondTxtArea !== undefined) {
						if (secondTxtArea.split(" ").join("").length > 4) {
							tempArr.push(secondTxtArea);
							if (thirdTxtArea !== undefined) {
								if (thirdTxtArea.split(" ").join("").length > 9) {
									tempArr.push(thirdTxtArea);
									if (fourthTxtArea !== undefined) {
										if (fourthTxtArea.split(" ").join("").length > 9) {
											tempArr.push(fourthTxtArea);
											return { ok: true, data: tempArr };
										} else {
											alert("10자 이상 작성해주세요.");
											return { ok: false, data: tempArr };
										}
									} else {
										alert("문제가 해결되야 하는 이유를 작성해 주세요.");
										return { ok: false, data: tempArr };
									}
								} else {
									alert("10자 이상 작성해주세요.");
									return { ok: false, data: tempArr };
								}
							} else {
								alert("어떤 어려움을 겪는지 작성해 주세요.");
								return { ok: false, data: tempArr };
							}
						} else {
							alert("5자 이상 작성해주세요.");
							return { ok: false, data: tempArr };
						}
					} else {
						alert("이 문제로 어려움을 겪고 있는 사람을 작성해 주세요.");
						return { ok: false, data: tempArr };
					}
				} else {
					alert("5자 이상 작성해주세요.");
					return { ok: false, data: tempArr };
				}
			} else {
				alert("사회문제의 원인을 작성해 주세요.");
				return { ok: false, data: tempArr };
			}
		},
		// 미래인재 역할 text들 가져오기 (null check validataion 포함)
		getFutureHumanRole: () => {
			const inner1 = document.getElementById("roleOne").innerHTML;
			const inner2 = document.getElementById("roleTwo").innerHTML;
			const inner3 = document.getElementById("roleThree").innerHTML;
			let checkOverlap = []; // validation용 배열 (미래인재 1, 2, 3을 담아서 중복체크)
			const tempArr = [];
			// validation
			if (inner1 !== "선택") {
				checkOverlap.push(inner1);
				if (humanRole1 !== undefined) {
					if (humanRole1.split(" ").join("").length > 9) {
						tempArr.push(humanRole1);
						if (inner2 !== "선택") {
							checkOverlap.push(inner2);
							if (humanRole2 !== undefined) {
								if (humanRole2.split(" ").join("").length > 9) {
									tempArr.push(humanRole2);
									if (inner3 !== "선택") {
										checkOverlap.push(inner3);
										if (humanRole3 !== undefined) {
											if (humanRole3.split(" ").join("").length > 9) {
												tempArr.push(humanRole3);
												let newCheck = new Set(checkOverlap);
												if (newCheck.size === 3) {
													tempArr.unshift(checkOverlap[0]); // 인재 1 tempArr 배열 [0]에 넣기
													tempArr.splice(2, 0, checkOverlap[1]); // 인재 2 tempArr 배열 [2]에 넣기
													tempArr.splice(4, 0, checkOverlap[2]); // 인재 3 tempArr 배열 [4]에 넣기
													return { ok: true, data: tempArr };
												} else {
													alert("같은 인재를 선택했습니다.");
													newCheck = [];
													checkOverlap = [];
													return { ok: false, data: tempArr };
												}
											} else {
												alert("미래인재3 이유를 10자 이상 작성해 주세요.");
												return { ok: false, data: tempArr };
											}
										} else {
											alert("미래인재3을 선택한 이유를 설명해 주세요.");
											return { ok: false, data: tempArr };
										}
									} else {
										alert("미래인재3을 선택해 주세요.");
										return { ok: false, data: tempArr };
									}
								} else {
									alert("미래인재2 이유를 10자 이상 작성해 주세요.");
									return { ok: false, data: tempArr };
								}
							} else {
								alert("미래인재2를 선택한 이유를 설명해 주세요.");
								return { ok: false, data: tempArr };
							}
						} else {
							alert("미래인재2를 선택해 주세요.");
							return { ok: false, data: tempArr };
						}
					} else {
						alert("미래인재1 이유를 10자 이상 작성해 주세요.");
						return { ok: false, data: tempArr };
					}
				} else {
					alert("미래인재1을 선택한 이유를 설명해 주세요.");
					return { ok: false, data: tempArr };
				}
			} else {
				alert("미래인재1을 선택해 주세요.");
				return { ok: false, data: tempArr };
			}
		},
		// 상품소개 input text들 가져오기 (null check validataion 포함)
		getItemItro: () => {
			const tempArr = [];
			if (itemItro1 !== undefined) {
				if (itemItro1.split(" ").join("").length > 9) {
					tempArr.push(itemItro1);
					if (itemItro2 !== undefined) {
						if (itemItro2.split(" ").join("").length > 14) {
							tempArr.push(itemItro2);
							if (itemItro3 !== undefined) {
								if (itemItro3.split(" ").join("").length > 14) {
									tempArr.push(itemItro3);
									if (itemItro4 !== undefined) {
										if (itemItro4.split(" ").join("").length > 9) {
											tempArr.push(itemItro4);
											return { ok: true, data: tempArr };
										} else {
											alert("해결방법을 10자 이상 작성해 주세요.");
											return { ok: false, data: tempArr };
										}
									} else {
										alert("단점 혹은 문제점을 해결할 수 있는 방법을 써주세요.");
										return { ok: false, data: tempArr };
									}
								} else {
									alert("상품의 단점 혹은 문제점을 15자 이상 작성해 주세요.");
									return { ok: false, data: tempArr };
								}
							} else {
								alert("이 상품의 단점 혹은 예상되는 문제점을 써주세요.");
								return { ok: false, data: tempArr };
							}
						} else {
							alert("상품의 사용법을 15자 이상 작성해 주세요.");
							return { ok: false, data: tempArr };
						}
					} else {
						alert("상품의 사용법을 설명해 주세요.");
						return { ok: false, data: tempArr };
					}
				} else {
					alert("상품의 모습을 10자 이상 작성해 주세요.");
					return { ok: false, data: tempArr };
				}
			} else {
				alert("상품의 모습을 설명해 주세요.");
				return { ok: false, data: tempArr };
			}
		},
	};

	// 임시저장시 api 연결 배열 만들기 (validation check 없이 진행)
	const makeTempSaveArr = {
		getQuestion: () => {
			const result = document.getElementById("question").innerHTML;
			const tempArr = [];
			if (result !== "사회문제 현상 키워드 선택") {
				tempArr.push(result);
				if (texts !== undefined) {
					const mark2Break = texts.replace(/\[.*?\]/g, ""); // 대괄호제거
					const markBreak = mark2Break.replace(/\"/g, ""); // 따옴표 제거
					const lineBreak = markBreak.replace(/(\r\n\t|\n|\r\t)/gm, ""); // 줄바꿈 제거
					const spaceBreak = lineBreak.split(" ").join(""); // space 공백 띄어쓰기 제거
					tempArr.push(spaceBreak);
				}
			}
			return tempArr;
		},
		getDevelopmentReason: () => {
			const tempArr = [];
			if (firstTxtArea !== undefined) {
				tempArr.push(firstTxtArea);
				if (secondTxtArea !== undefined) {
					tempArr.push(secondTxtArea);
					if (thirdTxtArea !== undefined) {
						tempArr.push(thirdTxtArea);
						if (fourthTxtArea !== undefined) {
							tempArr.push(fourthTxtArea);
							return tempArr;
						}
					}
				}
			}
			return tempArr;
		},
		getFutureHumanRole: () => {
			const inner1 = document.getElementById("roleOne").innerHTML;
			const inner2 = document.getElementById("roleTwo").innerHTML;
			const inner3 = document.getElementById("roleThree").innerHTML;
			const tempArr = [];
			// validation
			if (inner1 !== "선택") {
				tempArr.push(inner1);
				if (humanRole1 !== undefined) {
					tempArr.push(humanRole1);
					if (inner2 !== "선택") {
						tempArr.push(inner2);
						if (humanRole2 !== undefined) {
							tempArr.push(humanRole2);
							if (inner3 !== "선택") {
								tempArr.push(inner3);
								if (humanRole3 !== undefined) {
									tempArr.push(humanRole3);
								}
							}
						}
					}
				}
			}
			return tempArr;
		},
		getItemItro: () => {
			const tempArr = [];
			if (itemItro1 !== undefined) {
				tempArr.push(itemItro1);
				if (itemItro2 !== undefined) {
					tempArr.push(itemItro2);
					if (itemItro3 !== undefined) {
						tempArr.push(itemItro3);
						if (itemItro4 !== undefined) {
							tempArr.push(itemItro4);
						}
					}
				}
			}
			return tempArr;
		},
	};

	const clickFunctionList = {
		choiceOtherSocialProblem: () => {
			const ok = window.confirm("다른 사회 문제를 선택하겠습니까?");
			if (ok) {
				history.push(`/mission3/${state.mission3Index}`);
			}
		},
		selectedTabFunction: (tab) => {
			setSelectTab(tab);
			history.push(`/mission4/${tab}`);
		},
		onClickNextFuction: async (tab) => {
			const tempArr = [];
			if (tab === "social") {
				// validation 체크 후 컨펌
				const question = makeApiArr.getQuestion();
				if (question.ok) {
					setLoading(true);
					// endTime 설정 및 사회문제 분석탭 체류시간 저장 및 다음텝 startTime 재설정
					const endTime = makeSaveDataFunctionList.calculTime();
					const gap = (endTime - startTime) / 1000;
					tempArr.push(gap);
					setSaveData({
						...saveData,
						timeOnPage: tempArr,
						keyword: question.data[0],
					});
					setStartTime(endTime);
					// endTime end
					const result = await SaveData.save(6, question.data); // question api
					if (result.data.ok) {
						setLoading(false);
						setConfirm({ ...confirm, social: "ok" });
						setSelectTab("reason");
					}
				}
			} else if (tab === "reason") {
				// validation 체크 후 컨펌
				const reason = makeApiArr.getDevelopmentReason();
				if (reason.ok) {
					setLoading(true);
					// endTime 설정 및 사회문제 분석탭 체류시간 저장 및 다음텝 startTime 재설정
					makeSaveDataFunctionList.calculTimeGap();
					// endTime end
					const result = await SaveData.save(7, reason.data);
					if (result.data.ok) {
						setLoading(false);
						setConfirm({ ...confirm, reason: "ok" });
						setSelectTab("developer");
					}
				}
			} else if (tab === "developer") {
				// validation 체크 후 컨펌
				const role = makeApiArr.getFutureHumanRole();
				if (role.ok) {
					setLoading(true);
					// endTime 설정 및 사회문제 분석탭 체류시간 저장 및 다음텝 startTime 재설정
					makeSaveDataFunctionList.calculTimeGap();
					// endTime end
					// 미래인재 넣기
					//  1. 미래인재 1 : role.data[0]
					//  2. 미래인재 2 : role.data[2]
					//  3. 미래인재 3 : role.data[4]
					makeSaveDataFunctionList.setFutureJob(
						role.data[0],
						role.data[2],
						role.data[4]
					);
					// 미래인재넣기 end
					const result = await SaveData.save(8, role.data);
					if (result.data.ok) {
						setLoading(false);
						setConfirm({ ...confirm, developer: "ok" });
						setSelectTab("itemIntro");
					}
				}
			} else if (tab === "itemIntro") {
				// validation 체크 후 컨펌
				const item = makeApiArr.getItemItro();
				if (item.ok) {
					// 플레이블 요청 후 api request 수정 요청 있을시 해제 사용
					setLoading(true);
					if (confirm.social === "") {
						alert("사회문제 분석 탭을 작성하고 다음을 눌러주세요.");
						setLoading(false);
					} else {
						if (confirm.reason === "") {
							alert("상품개발 이유 탭을 작성하고 다음을 눌러주세요.");
							setLoading(false);
						} else {
							if (confirm.developer === "") {
								alert("미래인재 역할 탭을 작성하고 다음을 눌러주세요.");
								setLoading(false);
							} else {
								// endTime 설정 및 사회문제 분석탭 체류시간 저장 및 다음텝 startTime 재설정
								makeSaveDataFunctionList.calculTimeGap();
								// endTime end
								const result = await SaveData.save(9, item.data);
								if (result.data.ok) {
									setLoading(false);
									modalFunction.toggleProductNameModal(); // 상품이름 쓰는 모달 열기
								}
								setConfirm({ ...confirm, itemIntro: "ok" });
								setSelectTab("itemIntro");
							}
						}
					}
				}
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
			await DBData.missionFour(saveData);
			actions.setMission4("ok");
			await Activity.mission4EndStart();
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
			if (productName !== undefined) {
				setLoading(true);
				const result = await SaveData.save(10, [productName]);
				if (result.data.ok) {
					setLoading(false);
					modalFunction.toggleProductNameModal();
					modalFunction.togglePriceSettingModal();
				}
			} else {
				alert("상품의 이름을 1자 이상 작성해 주세요.");
			}
		},
		togglePriceSettingModal: () => {
			setPriceSettingModal(!priceSettingModal);
		},
		toggleCompleteModal: async () => {
			if (!isNaN(productPrice)) {
				setLoading(true);
				// db (saveData)에 상품가격넣기
				makeSaveDataFunctionList.setProPrice(productPrice);
				const result = await SaveData.save(11, [productPrice]);
				if (result.data.ok) {
					setLoading(false);
					modalFunction.togglePriceSettingModal();
					setCompleteModal(!completeModal);
				}
			} else {
				alert("가격을 숫자로 1원 이상 입력해 주세요.");
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
			if (selectTab === "social") {
				// 사회문석분석 탭에서 임시저장할 때
				const question = makeTempSaveArr.getQuestion();
				await SaveData.save(6, question); // question api
			} else if (selectTab === "reason") {
				// 상품개발이유에서 임시저장 할 때
				const reason = makeTempSaveArr.getDevelopmentReason();
				await SaveData.save(7, reason);
			} else if (selectTab === "developer") {
				// 미래인재 역할에서 임시저장 할 때
				const role = makeTempSaveArr.getFutureHumanRole();
				await SaveData.save(8, role);
			} else if (selectTab === "itemIntro") {
				// 상품 소개에서 임시저장 할 때
				const item = makeTempSaveArr.getItemItro();
				await SaveData.save(9, item);
			}
			modalFunction.toggletempModal();
		},
	};

	// 임시저장데이터 가져오기
	const tempUse = async () => {
		if (location.state !== null && location.state !== undefined) {
			// 임시저장 사용하기로 넘어올 경우
			const data = location.state.data; //JSON 파싱이 안된 상태의 배열 tempSave 모든 데이터 원본 배열
			const prevDateName = JSON.parse(location.state.data[5]);
			const prevAnswerList = JSON.parse(location.state.data[6]);
			const settingPrev = {
				selectTabContent: {
					name: prevDateName[0],
				},
				studentAnswerList: prevAnswerList,
			};
			setPrevSelect(settingPrev);

			// 사회문제 분석이 있는경우 [7]
			if (data[7] !== undefined && data[7] !== null) {
				setConfirm({ ...confirm, social: "ok" });
				const result = JSON.parse(data[7]);
				if (result[0] !== undefined && result[0] !== null && result[0] !== "") {
					setSocialProblem(result[0]);
				}
				if (result[1] !== undefined && result[1] !== null && result[1] !== "") {
					setTexts(result[1]);
				}
			}
			// 상품개발 이유가 있는경우 [8]
			if (data[8] !== undefined && data[8] !== null) {
				setConfirm({ ...confirm, social: "ok", reason: "ok" });
				const result = JSON.parse(data[8]);
				if (result[0] !== undefined && result[0] !== null && result[0] !== "") {
					setFirstTxtArea(result[0]);
				}
				if (result[1] !== undefined && result[1] !== null && result[1] !== "") {
					setSecondTxtArea(result[1]);
				}
				if (result[2] !== undefined && result[2] !== null && result[2] !== "") {
					setThirdTxtArea(result[2]);
				}
				if (result[3] !== undefined && result[3] !== null && result[3] !== "") {
					setFourthTxtArea(result[3]);
				}
			}
			// 미래인재역할이 있는경우 [9]
			if (data[9] !== undefined && data[9] !== null) {
				setConfirm({ ...confirm, social: "ok", reason: "ok", developer: "ok" });
				const result = JSON.parse(data[9]);
				if (result[0] !== undefined && result[0] !== null && result[0] !== "") {
					setHumanRole1DropDown(result[0]);
				}
				if (result[1] !== undefined && result[1] !== null && result[1] !== "") {
					setHumanRole1(result[1]);
				}
				if (result[2] !== undefined && result[2] !== null && result[2] !== "") {
					setHumanRole2DropDown(result[2]);
				}
				if (result[3] !== undefined && result[3] !== null && result[3] !== "") {
					setHumanRole2(result[3]);
				}
				if (result[4] !== undefined && result[4] !== null && result[4] !== "") {
					setHumanRole3DropDown(result[4]);
				}
				if (result[5] !== undefined && result[5] !== null && result[5] !== "") {
					setHumanRole3(result[5]);
				}
			}
			// 상품소개가 있는 경우 [10]
			if (data[10] !== undefined && data[10] !== null) {
				setConfirm({
					social: "ok",
					reason: "ok",
					developer: "ok",
					itemIntro: "ok",
				});
				const result = JSON.parse(data[10]);
				if (result[0] !== undefined && result[0] !== null && result[0] !== "") {
					setItemIntro1(result[0]);
				}
				if (result[1] !== undefined && result[1] !== null && result[1] !== "") {
					setItemIntro2(result[1]);
				}
				if (result[2] !== undefined && result[2] !== null && result[2] !== "") {
					setItemIntro3(result[2]);
				}
				if (result[3] !== undefined && result[3] !== null && result[3] !== "") {
					setItemIntro4(result[3]);
				}
			}
			// 상품 이름이 있는경우 [11]
			if (data[11] !== undefined && data[11] !== null) {
				setConfirm({
					social: "ok",
					reason: "ok",
					developer: "ok",
					itemIntro: "ok",
				});
				const result = JSON.parse(data[11]);
				modalFunction.toggleProductNameModal();
				setProductName(result[0]);
			}
			// 상품 가격이 있는 경우 [12]
			if (data[12] !== undefined && data[12] !== null) {
				setConfirm({
					social: "ok",
					reason: "ok",
					developer: "ok",
					itemIntro: "ok",
				});
				const result = JSON.parse(data[12]);
				setProductPrice(result[0]);
				setItemNameModal(false);
				setPriceSettingModal(false);
				setCompleteModal(true);
			}
		} else {
			// 저장한 데이터가 없는 경우 (해당페이지에서 새로고침 시,)
			// 변경 적용해야할 변수
			// prevSelect.selectTabContent.category
			// prevSelect.selectTabContent.name
			// prevSelect.studentAnswerList => []
			const params = sessionStorage.getItem("auth");
			const result = await SaveData.getTempData(params);
			const settingPrev = {
				selectTabContent: {
					name: JSON.parse(result.data?.writtenData[5])[0],
				},
				studentAnswerList: JSON.parse(result.data?.writtenData[6]),
			};
			setPrevSelect(settingPrev);
			const data = result.data.writtenData;
			// 사회문제 분석이 있는경우 [7]
			if (data[7] !== undefined && data[7] !== null) {
				setConfirm({ ...confirm, social: "ok" });
				const result = JSON.parse(data[7]);
				if (result[0] !== undefined && result[0] !== null && result[0] !== "") {
					setSocialProblem(result[0]);
				}
				if (result[1] !== undefined && result[1] !== null && result[1] !== "") {
					setTexts(result[1]);
				}
			}
			// 상품개발 이유가 있는경우 [8]
			if (data[8] !== undefined && data[8] !== null) {
				setConfirm({ ...confirm, social: "ok", reason: "ok" });
				const result = JSON.parse(data[8]);
				if (result[0] !== undefined && result[0] !== null && result[0] !== "") {
					setFirstTxtArea(result[0]);
				}
				if (result[1] !== undefined && result[1] !== null && result[1] !== "") {
					setSecondTxtArea(result[1]);
				}
				if (result[2] !== undefined && result[2] !== null && result[2] !== "") {
					setThirdTxtArea(result[2]);
				}
				if (result[3] !== undefined && result[3] !== null && result[3] !== "") {
					setFourthTxtArea(result[3]);
				}
			}
			// 미래인재역할이 있는경우 [9]
			if (data[9] !== undefined && data[9] !== null) {
				setConfirm({ ...confirm, social: "ok", reason: "ok", developer: "ok" });
				const result = JSON.parse(data[9]);
				if (result[0] !== undefined && result[0] !== null && result[0] !== "") {
					setHumanRole1DropDown(result[0]);
				}
				if (result[1] !== undefined && result[1] !== null && result[1] !== "") {
					setHumanRole1(result[1]);
				}
				if (result[2] !== undefined && result[2] !== null && result[2] !== "") {
					setHumanRole2DropDown(result[2]);
				}
				if (result[3] !== undefined && result[3] !== null && result[3] !== "") {
					setHumanRole2(result[3]);
				}
				if (result[4] !== undefined && result[4] !== null && result[4] !== "") {
					setHumanRole3DropDown(result[4]);
				}
				if (result[5] !== undefined && result[5] !== null && result[5] !== "") {
					setHumanRole3(result[5]);
				}
			}
			// 상품소개가 있는 경우 [10]
			if (data[10] !== undefined && data[10] !== null) {
				setConfirm({
					social: "ok",
					reason: "ok",
					developer: "ok",
					itemIntro: "ok",
				});
				const result = JSON.parse(data[10]);

				if (result[0] !== undefined && result[0] !== null && result[0] !== "") {
					setItemIntro1(result[0]);
				}
				if (result[1] !== undefined && result[1] !== null && result[1] !== "") {
					setItemIntro2(result[1]);
				}
				if (result[2] !== undefined && result[2] !== null && result[2] !== "") {
					setItemIntro3(result[2]);
				}
				if (result[3] !== undefined && result[3] !== null && result[3] !== "") {
					setItemIntro4(result[3]);
				}
			}
			// 상품 이름이 있는경우 [11]
			if (data[11] !== undefined && data[11] !== null) {
				setConfirm({
					social: "ok",
					reason: "ok",
					developer: "ok",
					itemIntro: "ok",
				});
				setConfirm({
					social: "ok",
					reason: "ok",
					developer: "ok",
					itemIntro: "ok",
				});
				const result = JSON.parse(data[11]);
				modalFunction.toggleProductNameModal();
				setProductName(result[0]);
			}
			// 상품 가격이 있는 경우 [12]
			if (data[12] !== undefined && data[12] !== null) {
				setConfirm({
					social: "ok",
					reason: "ok",
					developer: "ok",
					itemIntro: "ok",
				});
				const result = JSON.parse(data[12]);
				setProductPrice(result[0]);
				setItemNameModal(false);
				setPriceSettingModal(false);
				setCompleteModal(true);
			}
		}
	};

	useEffect(() => {
		// 미션3에서 진행에 이어서 미션4로 넘어올 경우
		setPrevSelect(modalState.mission3Selected);
		tempUse();
		// 사회문제 분석 탭 스타트타임 설정
		const start = makeSaveDataFunctionList.calculTime();
		setStartTime(start);
	}, [modalState.mission3Selected]);

	return (
		<>
			{dimension.width < 415 ? (
				<Mission4MobilePresenter
					loading={loading}
					tabClick={tabClick}
					socialProblem={socialProblem}
					texts={texts}
					humanRole1DropDown={humanRole1DropDown}
					humanRole2DropDown={humanRole2DropDown}
					humanRole3DropDown={humanRole3DropDown}
					firstTxtArea={firstTxtArea}
					secondTxtArea={secondTxtArea}
					thirdTxtArea={thirdTxtArea}
					fourthTxtArea={fourthTxtArea}
					humanRole1={humanRole1}
					humanRole2={humanRole2}
					humanRole3={humanRole3}
					itemItro1={itemItro1}
					itemItro2={itemItro2}
					itemItro3={itemItro3}
					itemItro4={itemItro4}
					productName={productName}
					productPrice={productPrice}
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
			) : (
				<Mission4Presenter
					loading={loading}
					tabClick={tabClick} // only css 이벤트 (택클릭시 색깔 변화)
					handleTabClick={handleTabClick} // only css 이벤트 (탭클릭시 색깔 변화)
					socialProblem={socialProblem}
					texts={texts}
					humanRole1DropDown={humanRole1DropDown}
					humanRole2DropDown={humanRole2DropDown}
					humanRole3DropDown={humanRole3DropDown}
					firstTxtArea={firstTxtArea}
					secondTxtArea={secondTxtArea}
					thirdTxtArea={thirdTxtArea}
					fourthTxtArea={fourthTxtArea}
					humanRole1={humanRole1}
					humanRole2={humanRole2}
					humanRole3={humanRole3}
					itemItro1={itemItro1}
					itemItro2={itemItro2}
					itemItro3={itemItro3}
					itemItro4={itemItro4}
					productName={productName}
					productPrice={productPrice}
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
