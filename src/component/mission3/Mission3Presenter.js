import React from "react";
import styled from "styled-components";
import btnJobs from "../../assets/icons/btn-floaing-jobs.svg";
import btnFaq from "../../assets/icons/btn-floating-faq.svg";
import checked from "../../assets/icons/checkedBtn.svg";
import unchecked from "../../assets/icons/uncheckedBtn.svg";
import close from "../../assets/icons/bnt-x-24.svg";
import { ButtonPrimary } from "../../ui/button/Button";
import { HelpModal, ModalBaseTwoBtn } from "../../ui/modal/Modal";
import Default from "./Default";
import Footer from "../../layout/Footer";

const Mission3Presenter = ({
	makeSaveDataFunctionList,
	setProcessFunction,
	selectTab,
	selectTabContent,
	choosed,
	firstAnswer,
	secondAnswer,
	thirdAnswer,
	firstInputText,
	secondsInputText,
	thirdInputText,
	uiFunctionList,
	isOpen,
	faqModal,
	modalState,
	modalFunction,
}) => {
	return (
		<LayOutContent>
			<Wrapper faqModal={faqModal}>
				<BlockTop>
					<TopContent>
						<TextBoxTop>Mission 03</TextBoxTop>
						<TextBoxMiddle>사회 문제를 발견해 주세요!</TextBoxMiddle>
						<TextBoxBottom>
							지금부터는 우리에게 일어나고 있거나, 미래에 일어날 다양한 사회문제들을
							찾아보고 분석하는 작업을 진행할 것입니다. 우리 기업이 해결하고자 하는
							사회문제를 찾아보고 분석해봅시다! 제시된 사회문제 테마 3가지 중 1가지를
							선택하여 관련 영상을 시청하고, 선택한 사회문제와 관련된 키워드를
							찾아주세요!
						</TextBoxBottom>
					</TopContent>
				</BlockTop>
				<BlockBottom>
					<BottomContent>
						<Title>사회문제 선정하고 분석하기</Title>
						<SubTitle>
							{choosed
								? "선택한 사회문제를 분석해 주세요."
								: "사회문제 설명영상을 시청한 후 우리 기업이 해결하고 싶은 사회문제 테마 1가지를 최종 선택해주세요."}
						</SubTitle>
						<Tabs>
							<Tab1
								selectTab={selectTab}
								onClick={() =>
									choosed === false && uiFunctionList.tabSelectFunction("tab1")
								}
							>
								<div
									style={{
										width: "20px",
										height: "20px",
										position: "absolute",
										top: "15px",
										left: "80px",
									}}
								>
									<img src={selectTab === "tab1" ? checked : unchecked} alt='체크버튼' />
								</div>
								<Tab1Title selectTab={selectTab}>기후변화와 환경</Tab1Title>
							</Tab1>
							<Tab2
								selectTab={selectTab}
								onClick={() =>
									choosed === false && uiFunctionList.tabSelectFunction("tab2")
								}
							>
								<div
									style={{
										width: "20px",
										height: "20px",
										position: "absolute",
										top: "15px",
										left: "95px",
									}}
								>
									<img src={selectTab === "tab2" ? checked : unchecked} alt='미체크' />
								</div>
								<Tab2Title selectTab={selectTab}>고령화 사회</Tab2Title>
							</Tab2>
							<Tab3
								selectTab={selectTab}
								onClick={() =>
									choosed === false && uiFunctionList.tabSelectFunction("tab3")
								}
							>
								<div
									style={{
										width: "20px",
										height: "20px",
										position: "absolute",
										top: "15px",
										left: "97px",
									}}
								>
									<img src={selectTab === "tab3" ? checked : unchecked} alt='체크버튼' />
								</div>
								<Tab3Title selectTab={selectTab}>재난과 안전</Tab3Title>
							</Tab3>
						</Tabs>
						<Default
							setProcessFunction={setProcessFunction}
							selectTabContent={selectTabContent}
							choosed={choosed}
							firstAnswer={firstAnswer}
							secondAnswer={secondAnswer}
							thirdAnswer={thirdAnswer}
							firstInputText={firstInputText}
							secondsInputText={secondsInputText}
							thirdInputText={thirdInputText}
							uiFunctionList={uiFunctionList}
						/>
						{choosed === false && (
							<ButtonPrimary
								text='사회문제 최종선택'
								style={{
									width: "135px",
									height: "40px",
									position: "absolute",
									bottom: "29px",
									right: "0px",
								}}
								onClick={uiFunctionList.clickFinalChoice}
							/>
						)}
					</BottomContent>
				</BlockBottom>
				{/* 잡카드 모달 */}
				{isOpen && (
					<ModalWrapper>
						<ModalArea>
							<HelpModal modalFunction={modalFunction} />
						</ModalArea>
					</ModalWrapper>
				)}
				{/* 도움말 모달 */}
				{faqModal && (
					<ModalWrapperFaq>
						<ModalAreaFaq>
							<CloseDiv
								src={close}
								alt='닫기버튼'
								onClick={modalFunction.toggleFaqModal}
							/>
							<TextDiv>
								3가지 사회문제의 영상을 시청하시고 해결하고자하는 사회문제를
								선택해주세요
							</TextDiv>
							<HelpArea></HelpArea>
						</ModalAreaFaq>
					</ModalWrapperFaq>
				)}
				{modalState.saveModalOpen && (
					<ModalWrapperSave>
						<ModalAreaSave>
							<ModalBaseTwoBtn
								header='임시 저장 하기'
								content='지금까지 입력한 정보가 저장 됩니다.'
								confirmbtntext='확인'
								cancelbtntext='취소'
								confirmbtnEvent={modalFunction.handleSaveModalConfirmBtn}
								cancelbtnEvent={modalFunction.toggleSaveModal}
							/>
						</ModalAreaSave>
					</ModalWrapperSave>
				)}
				<Footer />
				<FaqBtn
					src={btnFaq}
					alt='힌트버튼'
					onClick={modalFunction.toggleFaqModal}
				/>
				<JobsBtn
					src={btnJobs}
					alt='직업버튼'
					onClick={() => {
						modalFunction.openModal();
						makeSaveDataFunctionList.onClickJobCardCount();
					}}
				/>
			</Wrapper>
		</LayOutContent>
	);
};

const ModalWrapperSave = styled.div`
	width: 100vw;
	height: 100vh;
	background: rgba(15, 15, 21, 0.8);
	position: fixed;
	top: 0px;
	display: flex;
	z-index: 20;
`;
const ModalAreaSave = styled.div`
	margin: auto;
`;

const ModalWrapperFaq = styled.div`
	width: 100vw;
	height: 100vh;
	background: rgba(15, 15, 21, 0.8);
	position: fixed;
	top: 0;
	z-index: 20;
	display: flex;
`;
const ModalAreaFaq = styled.div`
	width: 944px;
	margin: 0 auto;
	color: black;
	position: relative;
`;
const CloseDiv = styled.img`
	width: 24px;
	height: 24px;
	position: absolute;
	top: 150px;
	right: 14px;
	filter: invert(100%);
	&:hover {
		cursor: pointer;
	}
`;
const TextDiv = styled.div`
	padding-left: 10px;
	width: 940px;
	height: 120px;
	line-height: 3;
	border-radius: 2px;
	border: solid 1px #e4e4e4;
	font-family: NotoSansCJKkr;
	font-size: 26px;
	font-style: normal;
	color: white;
	position: absolute;
	top: 200px;
	left: 0px;
`;

const ModalWrapper = styled.div`
	width: 100vw;
	height: 100vh;
	background: rgba(15, 15, 21, 0.8);
	position: fixed;
	top: 0;
	z-index: 20;
	display: flex;
`;
const ModalArea = styled.div`
	width: 700px;
	height: 503px;
	position: absolute;
	bottom: 122px;
	right: 114px;
`;

const LayOutContent = styled.div`
	width: 100vw;
`;

const Wrapper = styled.div`
	/* background: lightgreen; */
	min-width: 1024px;
	max-width: 1920px;
	overflow-x: hidden;
	overflow-y: auto;
	margin: 0 auto;
`;

const BlockTop = styled.div`
	background: #e4e4e4;
	height: 206px;
	margin: 0 auto;
`;
const TopContent = styled.div`
	width: 944px;
	height: 206px;
	margin: 0 auto;
`;

const BlockBottom = styled.div`
	background: #f7f7f7;
	/* background: red; */
	/* height: 652px; */
	margin: 0 auto;
	position: relative;
`;
const BottomContent = styled.div`
	width: 944px;
	height: 652px;
	margin: 0 auto;
	position: relative;
`;

const FaqBtn = styled.img`
	position: fixed;
	bottom: 108px;
	right: 30px;
	filter: drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.2));
	&:hover {
		cursor: pointer;
	}
`;
const JobsBtn = styled.img`
	position: fixed;
	right: 30px;
	bottom: 30px;
	filter: drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.2));
	&:hover {
		cursor: pointer;
	}
`;

const TextBoxTop = styled.div`
	width: 70px;
	height: 14px;
	font-size: 14px;
	font-weight: 500;
	line-height: 1;
	color: #0f0f15;
	padding-top: 40px;
`;
const TextBoxMiddle = styled.div`
	width: 290px;
	height: 38px;
	font-size: 26px;
	font-weight: 500;
	color: #0f0f15;
	margin-top: 8px;
`;
const TextBoxBottom = styled.div`
	width: 944px;
	height: 44px;
	line-height: 1.57;
	font-size: 14px;
	font-weight: 500;
	opacity: 0.8;
	margin-top: 10px;
`;

const Title = styled.div`
	width: 207px;
	height: 24px;
	font-size: 18px;
	font-weight: 500;
	line-height: 1.33;
	color: #0f0f15;
	padding-top: 39px;
`;
const SubTitle = styled.div`
	width: 944px;
	height: 22px;
	opacity: 0.8;
	font-size: 14px;
	font-weight: 500;
	line-height: 1.57;
	color: #0f0f15;
	margin-top: 10px;
`;
const Tabs = styled.div`
	display: flex;
	flex-direction: row;
	margin-top: 16px;
`;

// tab 에서 셀렉트 되면 box-show 속성적용
// 		나머지 tab은 border 및 background 속성만 적용
const Tab1 = styled.div`
	width: 313.3px;
	height: 50px;
	box-shadow: ${(props) =>
		props.selectTab === "tab1" && "0 0 10px 0 rgba(15, 15, 21, 0.1)"};
	border: ${(props) =>
		props.selectTab === "tab1" ? "solid 1px #686868" : "solid 1px #d8d8d8"};
	background-color: ${(props) =>
		props.selectTab === "tab1" ? "#ffffff" : "rgba(255, 255, 255, 0.5)"};
	position: relative;
	&:hover {
		cursor: pointer;
	}
`;
const Tab1Title = styled.div`
	width: 94px;
	height: 20px;
	font-family: NotoSansCJKkr;
	font-size: 14px;
	font-weight: ${(props) => (props.selectTab === "tab1" ? "500" : "normal")};
	font-stretch: normal;
	font-style: normal;
	line-height: 22.9px;
	letter-spacing: normal;
	text-align: center;
	color: ${(props) => (props.selectTab === "tab1" ? "#0f0f15" : "#686868")};
	position: absolute;
	top: 15px;
	left: 110px;
`;

const Tab2 = styled.div`
	width: 313.3px;
	height: 50px;
	box-shadow: ${(props) =>
		props.selectTab === "tab2" && "0 0 10px 0 rgba(15, 15, 21, 0.1)"};
	border: ${(props) =>
		props.selectTab === "tab2" ? "solid 1px #686868" : "solid 1px #d8d8d8"};
	background-color: ${(props) =>
		props.selectTab === "tab2" ? "#ffffff" : "rgba(255, 255, 255, 0.5)"};
	position: relative;
	&:hover {
		cursor: pointer;
	}
`;
const Tab2Title = styled.div`
	width: 68px;
	height: 20px;
	font-family: NotoSansCJKkr;
	font-size: 14px;
	font-weight: ${(props) => (props.selectTab === "tab2" ? "500" : "normal")};
	font-stretch: normal;
	font-style: normal;
	line-height: 22.9px;
	letter-spacing: normal;
	text-align: center;
	color: ${(props) => (props.selectTab === "tab2" ? "#0f0f15" : "#686868")};
	position: absolute;
	top: 15px;
	left: 125px;
`;

const Tab3 = styled.div`
	width: 313.3px;
	height: 50px;
	box-shadow: ${(props) =>
		props.selectTab === "tab3" && "0 0 10px 0 rgba(15, 15, 21, 0.1)"};
	border: ${(props) =>
		props.selectTab === "tab3" ? "solid 1px #686868" : "solid 1px #d8d8d8"};
	background-color: ${(props) =>
		props.selectTab === "tab3" ? "#ffffff" : "rgba(255, 255, 255, 0.5)"};
	position: relative;
	&:hover {
		cursor: pointer;
	}
`;
const Tab3Title = styled.div`
	width: 68px;
	height: 20px;
	font-family: NotoSansCJKkr;
	font-size: 14px;
	font-weight: ${(props) => (props.selectTab === "tab3" ? "500" : "normal")};
	font-stretch: normal;
	font-style: normal;
	line-height: 22.9px;
	letter-spacing: normal;
	text-align: center;
	color: ${(props) => (props.selectTab === "tab3" ? "#0f0f15" : "#686868")};
	position: absolute;
	top: 15px;
	left: 127px;
`;
const HelpArea = styled.div`
	border: 1px solid red;
	width: 930px;
	height: 370px;
	position: absolute;
	top: 350px;
	left: 10px;
`;

export default Mission3Presenter;
