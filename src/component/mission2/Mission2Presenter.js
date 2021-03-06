import React from "react";
import styled from "styled-components";
import btnJobs from "../../assets/icons/btn-floaing-jobs.svg";
import btnFaq from "../../assets/icons/btn-floating-faq.svg";
import Footer from "../../layout/Footer";
import AnswerDefault from "./AnswerDefault";
import { HelpModal, ModalBaseTwoBtn } from "../../ui/modal/Modal";
import close from "../../assets/icons/bnt-x-24.svg";
import ClipLoader from "react-spinners/ClipLoader";

const Mission2Presenter = ({
	makeSaveDataFunctionList,
	loading,
	index,
	normal,
	correctFirst,
	correctSeconds,
	firstFeedback,
	secondFeedback,
	isOpen,
	faqModal,
	missionQuestion,
	modalState,
	setProcessFunction,
	modalFunction,
	answerFunctionList,
}) => {
	return (
		<Wrapper>
			<BlockTop>
				<TopContent>
					<TextBoxTop>Mission 02</TextBoxTop>
					<TextBoxMiddle>
						사회문제를 해결하는 제품과 미래인재를 매칭해 보세요.
					</TextBoxMiddle>
					<TextBoxBottom>
						다양한 미래인재들이 협업을 하여 사회문제를 해결하는 제품이나 서비스를
						만들기 위해 자신의 전문성을 활용하여 역할을 수행합니다. 제시된 상품은 술이
						융합되어 새롭게 탄생한 상품입니다. 제시된 상품정보를 확인한 후 상품에
						사용된 기술을 보유하고 있는 미래인재를 매칭해 보세요! <br />
						<span style={{ color: "#686868" }}>
							*미래인재 입력 칸을 클릭하면 미래인재를 선택할 수 있습니다.
							미래인재정보는 아래 💡버튼을 클릭하면 확인할 수 있습니다.
						</span>
					</TextBoxBottom>
				</TopContent>
			</BlockTop>
			<BlockBottom>
				<BottomContent>
					<LeftTextBox>상품소개</LeftTextBox>
					<RightTextBox>4차산업기술을 보유한 미래인재</RightTextBox>
					{missionQuestion && (
						<LeftBox>
							<Title>상품명</Title>
							<TextContent>{missionQuestion[index - 1].proName}</TextContent>
							<Title>상품설명</Title>
							<TextContentBox>
								{missionQuestion[index - 1].proDescription}
							</TextContentBox>
						</LeftBox>
					)}

					{/* 정답화면 교체 부분 
						normal=true && correctFirst={true} && correctSeconds={true}  : default 화면
						normal=false && correctFirst={true} && correctSeconds={true}  : 정답화면
						normal=false && correctFirst={false or true} && correctSeconds={false or true}  : 오답화면
					*/}
					<AnswerDefault
						index={index}
						missionQuestion={missionQuestion}
						normal={normal}
						correctFirst={correctFirst}
						correctSeconds={correctSeconds}
						firstFeedback={firstFeedback}
						secondFeedback={secondFeedback}
						setProcessFunction={setProcessFunction}
						answerFunctionList={answerFunctionList}
					/>
				</BottomContent>
			</BlockBottom>
			{loading && (
				<ModalWrapper>
					<ModalAreaSave>
						<ClipLoader color={"#ffc300"} style={{ margin: "0 auto" }} />
					</ModalAreaSave>
				</ModalWrapper>
			)}
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
							상품명과 상품의 설명을 읽고 이 상품을 개발하기 위한 직업을 오른쪽에서
							선택해주세요 2가지를 모두 맞추셔야 다음으로 넘어갈 수 있습니다.
						</TextDiv>
						<HelpArea></HelpArea>
						<TextDiv2>
							전구 모양을 클릭하시면 16가지의 미래직업 이름을 알 수 있습니다.
						</TextDiv2>
						<HelpArea2></HelpArea2>
						<TextDiv3>현재 풀고 있는 문제의 수 입니다</TextDiv3>
						<HelpArea3></HelpArea3>
					</ModalAreaFaq>
				</ModalWrapperFaq>
			)}
			<Footer />
			{modalState.saveModalOpen && (
				<ModlaWrapperSave>
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
				</ModlaWrapperSave>
			)}
			<FaqBtn src={btnFaq} alt='힌트버튼' onClick={modalFunction.toggleFaqModal} />
			<JobsBtn
				src={btnJobs}
				alt='직업버튼'
				onClick={() => {
					modalFunction.openModal();
					makeSaveDataFunctionList.onClickJobCardCount();
				}}
			/>
		</Wrapper>
	);
};
const ModlaWrapperSave = styled.div`
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
	left: 14px;
	filter: invert(100%);
	&:hover {
		cursor: pointer;
	}
`;
const TextDiv = styled.div`
	padding-left: 10px;
	width: 930px;
	height: 100px;
	line-height: 3;
	border-radius: 2px;
	border: solid 1px #e4e4e4;
	font-family: NotoSansCJKkr;
	font-size: 0.875rem;
	font-style: normal;
	color: white;
	position: absolute;
	top: 200px;
	left: 10px;
`;

const Wrapper = styled.div`
	/* background: lightgreen; */
	min-width: 1024px;
	max-width: 1920px;
	overflow-x: hidden;
	overflow-y: auto;
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
	height: 564px;
	margin: 0 auto;
`;
const BottomContent = styled.div`
	width: 944px;
	height: 564px;
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
	bottom: 30px;
	right: 30px;
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
	width: 588px;
	height: 38px;
	font-size: 26px;
	font-weight: 500;
	color: #0f0f15;
	margin-top: 8px;
`;
const TextBoxBottom = styled.div`
	width: 944px;
	height: 66px;
	opacity: 0.8;
	font-size: 14px;
	font-weight: 500;
	line-height: 1.57;
	color: #0f0f15;
	margin-top: 10px;
`;

const LeftTextBox = styled.div`
	width: 67px;
	height: 24px;
	font-size: 18px;
	font-weight: 500;
	line-height: 1.33;
	color: #0f0f15;
	position: absolute;
	top: 39px;
`;
const RightTextBox = styled.div`
	width: 234px;
	height: 24px;
	font-size: 18px;
	font-weight: 500;
	line-height: 1.33;
	color: #0f0f15;
	position: absolute;
	top: 39px;
	left: 320px;
`;

const LeftBox = styled.div`
	width: 304px;
	height: 388px;
	border-radius: 2px;
	box-shadow: 0 0 10px 0 rgba(15, 15, 21, 0.05);
	background-color: #ffffff;
	position: absolute;
	top: 79px;
	left: 0px;
`;

const Title = styled.div`
	width: 80px;
	height: 24px;
	margin: 0 206px 18px 0;
	font-family: NotoSansCJKkr;
	font-size: 18px;
	font-weight: 500;
	line-height: 1.33;
	color: #0f0f15;
	margin-left: 24px;
	margin-top: 26px;
`;
const TextContent = styled.div`
	width: 256px;
	height: 22px;
	margin: 18px 0 30px;
	font-family: NotoSansCJKkr;
	font-size: 14px;
	font-weight: normal;
	font-stretch: normal;
	font-style: normal;
	line-height: 1.57;
	letter-spacing: normal;
	color: #0f0f15;
	margin-left: 24px;
`;
const TextContentBox = styled.div`
	width: 256px;
	height: 44px;
	margin: 18px 0 0;
	font-family: NotoSansCJKkr;
	font-size: 14px;
	font-weight: normal;
	font-stretch: normal;
	font-style: normal;
	line-height: 1.57;
	letter-spacing: normal;
	color: #0f0f15;
	margin-left: 24px;
	text-align: justify;
`;
const HelpArea = styled.div`
	border: 1px solid red;
	width: 930px;
	height: 370px;
	position: absolute;
	top: 350px;
	left: 10px;
`;
const TextDiv2 = styled.div`
	padding-left: 10px;
	width: 270px;
	height: 100px;
	line-height: 3;
	border-radius: 2px;
	border: solid 1px #e4e4e4;
	font-family: NotoSansCJKkr;
	font-size: 0.875rem;
	font-style: normal;
	color: white;
	position: absolute;
	bottom: 150px;
	right: -340px;
`;
const HelpArea2 = styled.div`
	border: 1px solid red;
	width: 78px;
	height: 80px;
	position: absolute;
	bottom: 20px;
	right: -348px;
`;
const TextDiv3 = styled.div`
	padding-left: 10px;
	width: 270px;
	height: 100px;
	line-height: 3;
	border-radius: 2px;
	border: solid 1px #e4e4e4;
	font-family: NotoSansCJKkr;
	font-size: 0.875rem;
	font-style: normal;
	color: white;
	position: absolute;
	top: 350px;
	left: 950px;
`;
const HelpArea3 = styled.div`
	border: 1px solid red;
	width: 50px;
	height: 50px;
	position: absolute;
	top: 370px;
	left: 880px;
`;

export default Mission2Presenter;
