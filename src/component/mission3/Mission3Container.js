import React, { useState, useContext, useEffect } from "react";
import { Activity, SaveData, DBData } from "../../api/api";
import Mission3Presenter from "./Mission3Presenter";
import { missionThreeQandA } from "../AnswerList";
import ProcessContext from "../../contextApi/Process";
import TempSaveContext from "../../contextApi/TempSave";
import DBdataContext from "../../contextApi/DBdata";
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
	const { dataState, dataActions } = useContext(DBdataContext);
	const [faqModal, setFaqModal] = useState();
	const [isOpen, setIsOpen] = useState(false);
	const [selectTab, setSelectTab] = useState();
	const [selectTabContent, setSelectTabContent] = useState();
	const [choosed, setChoosed] = useState(false);
	const [studentAnswerList, setStudentAnswerList] = useState([]); // 학생이 고른 키워드 세개 (미션4로 전달)
	const [firstAnswer, setFirstAnswer] = useState(); // 정오답 css 용
	const [secondAnswer, setSecondAnswer] = useState();
	const [thirdAnswer, setThirdAnswer] = useState();
	const [firstInputText, setFirstInputText] = useState();
	const [secondsInputText, setSecondsInputText] = useState();
	const [thirdInputText, setThirdInputText] = useState();
	const [saveData, setSaveData] = useState({
		// 디비 저장에 관한 데이터 포멧
		socialIssue: "",
		time: 0, // 문제의 정답을 맞추기까지 시간
		isAnswer: true, // 문제의 첫번째 답변이 정답 or 오답
		wrongCount: 0, // 정답 맞추기까지 틀린횟수
		help: 0, // 잡카드 누른 횟수
	});
	const [startTime, setStartTime] = useState();

	const setProcessFunction = async () => {
		goSaveDB(saveData);
		// db에 저장 데이터
		const result = await DBData.missionThree(saveData);
		console.log(result);

		//validation 추가
		await Activity.mission3EndStart();
		actions.setMission3("ok");
		modalActions.setMission3Selected({
			selectTabContent: selectTabContent,
			studentAnswerList: studentAnswerList,
		});
		history.push(`/mission4/${state.mission4Index}`);
	};

	// db에 결과 데이터 저장하기
	const goSaveDB = async () => {
		dataActions.setMissionThreeData(saveData);
	};

	// db에 결과 데이터 saveData 만들기 함수 list
	const makeSaveDataFunctionList = {
		// // 초기화
		// resetContextSaveData: () => {
		// 	dataActions.setMissionThreeData({});
		// },
		// socialIssue 선택
		selectSocialIssue: () => {
			if (selectTab === "tab1") {
				setSaveData({ ...saveData, socialIssue: "Environment" });
			} else if (selectTab === "tab2") {
				setSaveData({ ...saveData, socialIssue: "Age" });
			} else {
				setSaveData({ ...saveData, socialIssue: "Disaster" });
			}
		},
		// 정답 맞추는 시간 계산하기용 시간 값 가져오기
		calculTime: () => {
			const time = new Date();
			const timeSec = time.getTime();
			return timeSec;
		},
		// 오답횟수 기록
		countWrongAnswer: () => {
			setSaveData({
				...saveData,
				wrongCount: saveData.wrongCount + 1,
				isAnswer: false,
			});
		},
		// job카드 누른 횟수
		onClickJobCardCount: () => {
			setSaveData({ ...saveData, help: saveData.help + 1 });
		},
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
				// 정답까지 시간 체크를 위한 시작시간 설정
				const time = makeSaveDataFunctionList.calculTime();
				setStartTime(time);
				makeSaveDataFunctionList.selectSocialIssue(); // db저장(social선택)data 만들기
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
			let first = false;
			let second = false;
			let third = false;
			if (firstInputText && secondsInputText && thirdInputText !== undefined) {
				const temp = [
					firstInputText.split(" ").join(""),
					secondsInputText.split(" ").join(""),
					thirdInputText.split(" ").join(""),
				];
				const result = new Set(temp); // 중복답안 제거
				if (result.size === 3) {
					// 3개 모두 정답일때,
					if (uiFunctionList.hasAnswerList(firstInputText)) {
						setFirstAnswer(true);
						tempArr.push(firstInputText);
						first = true; // db데이터 만들기 위한 셋팅 변수 (일회성)
					} else {
						setFirstAnswer(false);
					}
					if (uiFunctionList.hasAnswerList(secondsInputText)) {
						setSecondAnswer(true);
						tempArr.push(secondsInputText);
						second = true; // db데이터 만들기 위한 셋팅 변수 (일회성)
					} else {
						setSecondAnswer(false);
					}
					if (uiFunctionList.hasAnswerList(thirdInputText)) {
						setThirdAnswer(true);
						tempArr.push(thirdInputText);
						third = true; // db데이터 만들기 위한 셋팅 변수 (일회성)
					} else {
						setThirdAnswer(false);
					}
					if (first && second && third === true) {
						// 전부 정답 일때,
						// 	1. 정답까지 시간 계산
						const endTime = makeSaveDataFunctionList.calculTime();
						const gap = (endTime - startTime) / 1000;
						setSaveData({ ...saveData, time: gap });
					} else {
						// 오답 일때,
						makeSaveDataFunctionList.countWrongAnswer();
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
			// 임시저장 확인버튼 실행함수
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
			const result = await SaveData.getTempData(params);
			if (
				result.data.writtenData[5] !== undefined &&
				result.data.writtenData[5] !== null &&
				result.data.writtenData[5] !== ""
			) {
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
			}
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
					makeSaveDataFunctionList={makeSaveDataFunctionList}
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
