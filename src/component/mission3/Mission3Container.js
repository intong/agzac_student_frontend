import React, { useState, useContext, useEffect } from "react";
import { Activity, SaveData } from "../../api/api";
import Mission3Presenter from "./Mission3Presenter";
import { missionThreeQandA } from "../AnswerList";
import ProcessContext from "../../contextApi/Process";
import TempSaveContext from "../../contextApi/TempSave";
import Mission3MobilePresenter from "./mobileVersion/Mission3MobilePresenter";
import Mission3MobileNextPresenter from "./mobileVersion/Mission3MobileNextPresenter";

const Mission3Container = ({ history, location }) => {
	//////////////// 모바일 state 시작 ///////////////////////////
	const [dimension] = useState({
		width: window.innerWidth,
		height: window.innerHeight,
	});
	//////////////// 모바일 state 끝 ///////////////////////////
	const { state, actions } = useContext(ProcessContext);
	const { modalState, modalActions } = useContext(TempSaveContext);
	const [faqModal, setFaqModal] = useState();
	const [isOpen, setIsOpen] = useState(false);
	const [selectTab, setSelectTab] = useState();
	const [selectTabContent, setSelectTabContent] = useState();
	const [choosed, setChoosed] = useState(false);
	const [studentAnswerList, setStudentAnswerList] = useState([]); // 학생이 고른 키워드 세개 (미션4로 전달)
	const [firstAnswer, setFirstAnswer] = useState();
	const [secondAnswer, setSecondAnswer] = useState();
	const [thirdAnswer, setThirdAnswer] = useState();
	const [firstInputText, setFirstInputText] = useState();
	const [secondsInputText, setSecondsInputText] = useState();
	const [thirdInputText, setThirdInputText] = useState();

	const setProcessFunction = async () => {
		//validation 추가
		await Activity.mission3EndStart();
		actions.setMission3("ok");
		modalActions.setMission3Selected({
			selectTabContent: selectTabContent,
			studentAnswerList: studentAnswerList,
		});
		history.push(`/mission4/${state.mission4Index}`);
	};

	let tempArr = [];
	const uiFunctionList = {
		tabSelectFunction: (tab) => {
			const selectCategory = missionThreeQandA.find((ele) => ele.category === tab);
			setSelectTab(tab);
			setSelectTabContent(selectCategory);
		},
		clickFinalChoice: async () => {
			if (selectTab !== undefined) {
				setChoosed(!choosed);
				if (selectTab === "tab1") {
					await SaveData.save(4, ["기후변화와 환경"]);
				}
				if (selectTab === "tab2") {
					await SaveData.save(4, ["고령화 사회"]);
				}
				if (selectTab === "tab3") {
					await SaveData.save(4, ["재난과 안전"]);
				}
			} else {
				alert("사회문제를 먼저 선택하세요");
			}
		},
		hasAnswerList: (answer) => {
			const result = selectTabContent.answer.includes(answer.split(" ").join("")); // 띄어쓰기 없애고 배열에 포함되어있나 체크
			return result;
		},
		checkAnswer: async () => {
			if (firstInputText && secondsInputText && thirdInputText !== undefined) {
				const temp = [
					firstInputText.split(" ").join(""),
					secondsInputText.split(" ").join(""),
					thirdInputText.split(" ").join(""),
				];
				const result = new Set(temp);
				if (result.size === 3) {
					if (uiFunctionList.hasAnswerList(firstInputText)) {
						setFirstAnswer(true);
						tempArr.push(firstInputText);
					} else {
						setFirstAnswer(false);
					}
					if (uiFunctionList.hasAnswerList(secondsInputText)) {
						setSecondAnswer(true);
						tempArr.push(secondsInputText);
					} else {
						setSecondAnswer(false);
					}
					if (uiFunctionList.hasAnswerList(thirdInputText)) {
						setThirdAnswer(true);
						tempArr.push(thirdInputText);
					} else {
						setThirdAnswer(false);
					}
					setStudentAnswerList(tempArr);
					await SaveData.save(5, tempArr);
				} else {
					alert("중복 선택한 키워드가 있습니다.");
				}
			} else {
				alert("세 가지 키워드를 찾아주세요.");
			}
		},
		onChange: (e) => {
			const name = e.target.name;
			const value = e.target.value;
			if (name === "first") {
				setFirstInputText(value);
			} else if (name === "second") {
				setSecondsInputText(value);
			} else {
				setThirdInputText(value);
			}
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
		handleSaveModalConfirmBtn: async () => {
			// 확인버튼 실행함수
			const tempArr = [];
			if (firstInputText !== undefined) {
				tempArr.push(firstInputText);
			}
			if (secondsInputText !== undefined) {
				tempArr.push(secondsInputText);
			}
			if (thirdInputText !== undefined) {
				tempArr.push(thirdInputText);
			}
			await SaveData.save(5, tempArr);
			modalActions.setSaveModalOpen(!modalState.saveModalOpen);
		},
		toggleSaveModal: () => {
			modalActions.setSaveModalOpen(!modalState.saveModalOpen);
		},
	};

	// contextApi의 임시저장된 데이터 사용하기
	const tempUse = async () => {
		if (location.state !== null && location.state !== undefined) {
			// 저장이어하기
			if (location.state.data[0] === "고령화 사회") {
				setSelectTab("tab2");
				uiFunctionList.tabSelectFunction("tab2");
			} else if (location.state.data[0] === "기후변화와 환경") {
				setSelectTab("tab1");
				uiFunctionList.tabSelectFunction("tab1");
			} else {
				setSelectTab("tab3");
				uiFunctionList.tabSelectFunction("tab3");
			}
		} else {
			// 단순 페이지 이동
			const params = sessionStorage.getItem("auth");
			await SaveData.getTempData(params).then((result) => {
				const data = JSON.parse(result.data.writtenData[5]);
				if (data[0] === "고령화 사회") {
					setSelectTab("tab2");
					uiFunctionList.tabSelectFunction("tab2");
				} else if (data[0] === "기후변화와 환경") {
					setSelectTab("tab1");
					uiFunctionList.tabSelectFunction("tab1");
				} else {
					setSelectTab("tab3");
					uiFunctionList.tabSelectFunction("tab3");
				}
			});
		}
	};

	useEffect(() => {
		tempUse();
	}, []);

	// mobile 전용 functioinList
	const mobileFunction = {};
	return (
		<>
			{dimension.width < 415 ? (
				choosed ? (
					<Mission3MobileNextPresenter
						isOpen={isOpen}
						choosed={choosed}
						selectTab={selectTab}
						firstAnswer={firstAnswer}
						secondAnswer={secondAnswer}
						thirdAnswer={thirdAnswer}
						firstInputText={firstInputText}
						secondsInputText={secondsInputText}
						thirdInputText={thirdInputText}
						uiFunctionList={uiFunctionList}
						modalFunction={modalFunction}
						setProcessFunction={setProcessFunction}
					/>
				) : (
					<Mission3MobilePresenter
						isOpen={isOpen}
						choosed={choosed}
						selectTab={selectTab}
						selectTabContent={selectTabContent}
						mobileFunction={mobileFunction}
						modalFunction={modalFunction}
						uiFunctionList={uiFunctionList}
					/>
				)
			) : (
				<Mission3Presenter
					setProcessFunction={setProcessFunction}
					selectTab={selectTab}
					selectTabContent={selectTabContent}
					choosed={choosed}
					firstAnswer={firstAnswer}
					secondAnswer={secondAnswer}
					thirdAnswer={thirdAnswer}
					firstInputText={firstInputText}
					secondsInputText={secondsInputText}
					thirdInputText={thirdInputText}
					uiFunctionList={uiFunctionList}
					isOpen={isOpen}
					faqModal={faqModal}
					modalState={modalState}
					modalFunction={modalFunction}
				/>
			)}
		</>
	);
};

export default Mission3Container;
