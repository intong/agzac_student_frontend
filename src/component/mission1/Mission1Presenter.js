import React from "react";
import styled from "styled-components";
import { HelpModal } from "../../ui/modal/Modal";
import btnJobs from "../../assets/icons/btn-floaing-jobs.svg";
import btnFaq from "../../assets/icons/btn-floating-faq.svg";
import group from "../../assets/img/group@3x.png";
import Footer from "../../layout/Footer";
import close from "../../assets/icons/bnt-x-24.svg";
import Answer1Default from "./Answer1Default";
import Answer2Correct from "./Answer2Correct";
import Answer3Wrong from "./Answer3Wrong";
import { ModalBaseTwoBtn } from "../../ui/modal/Modal";

const Mission1Presenter = ({
	isOpen,
	faqModal,
	modalState,
	processPercentage,
	setProcessFunction,
	modalFunction,
}) => {
	return (
		<Wrapper>
			<BlockTop>
				<TopContent>
					<TextBoxTop>Mission 01</TextBoxTop>
					<TextBoxMiddle>
						4차산업형명과 관련된 미래인재 정보를 획득해 보세요.
					</TextBoxMiddle>
					<TextBoxBottom>
						4차산업혁명과 동시에 인간의 삶은 많은 영역에서 변화가 시작되었습니다.
						변화에 따라 다양한 직업이 사라지거나 새롭게 생겨났습니다. 지금부터
						여러분은 제시된 미래인재의 정보와 직업이름을 매칭하여 완벽한 정보를
						획득해야 합니다. 우측 하단의 💡표시를 눌러 직업이름을 확인하여 정확한
						미래인재 정보를 획득해보세요!
					</TextBoxBottom>
				</TopContent>
			</BlockTop>
			<BlockBottom>
				<BottomContent>
					<LeftBlock>
						<TextBoxBottomTitle>미래인재 정보</TextBoxBottomTitle>
						<CardBlock>
							<CardContainer>
								<img
									src={group}
									alt=''
									style={{ widht: "270px", height: "336px", objectFit: "cover" }}
								/>
							</CardContainer>
							<ExplainContainer>
								<TitleTodo>하는일</TitleTodo>
								<ExplainTodo>
									드론에 카메라, 센서, 통신장비 등을 탑재하여 정보를 수집하거나 사람을
									대신하여 배송하는 드론을 설계 및 개발
								</ExplainTodo>
								<div
									style={{
										width: "258px",
										height: "1px",
										background: "#d8d8d8",
										opacity: "0.3",
										marginBottom: "12px",
									}}
								></div>
								<TitleInterview>인터뷰</TitleInterview>
								<ExplainInterview>
									사람이 들어가기 힘든 재난 현장에 드론을 보 내거나, 드론 택배를 개발할
									수 있어요.
								</ExplainInterview>
								<div
									style={{
										width: "258px",
										height: "1px",
										background: "#d8d8d8",
										opacity: "0.3",
										marginBottom: "12px",
									}}
								></div>
								<TitleSubject>학과</TitleSubject>
								<ExplainSubject>기계공학, 항공우주공학, 전기전자 등</ExplainSubject>
							</ExplainContainer>
						</CardBlock>
					</LeftBlock>
					<RightBlock>
						<TextBoxBottomTitle>직업이름 매칭</TextBoxBottomTitle>
						<RightBox>
							{/*정답화면 교체*/}
							<Answer1Default setProcessFunction={setProcessFunction} />
							{/* <Answer2Correct /> */}
							{/* <Answer3Wrong /> */}
						</RightBox>
					</RightBlock>
				</BottomContent>
				<ProgressWrpper>
					<Progress>
						<ProgressBackground></ProgressBackground>
						<ProgressValue processPercentage={processPercentage}></ProgressValue>
					</Progress>
					<ProcessBarLabel>
						<LabelText>미래인재 매칭 달성도</LabelText>
						<LaberPercent>
							<span
								style={{
									fontFamily: "NotoSansCJKkr",
									fontSize: "18px",
									fontWeight: "bold",
									lineHeight: "1.11",
									color: "#0f0f15",
								}}
							>
								{processPercentage}
							</span>
							&nbsp;%
						</LaberPercent>
					</ProcessBarLabel>
				</ProgressWrpper>
				<FaqBtn
					src={btnFaq}
					alt='힌트버튼'
					onClick={modalFunction.toggleFaqModal}
				/>
				<JobsBtn src={btnJobs} alt='직업버튼' onClick={modalFunction.openModal} />
			</BlockBottom>
			{isOpen && (
				<ModalWrapper>
					<ModalArea>
						<HelpModal modalFunction={modalFunction} />
					</ModalArea>
				</ModalWrapper>
			)}
			{faqModal && (
				<ModalWrapperFaq>
					<ModalAreaFaq>
						<CloseDiv
							src={close}
							alt='닫기버튼'
							onClick={modalFunction.toggleFaqModal}
						/>
						<TextDiv>* 이곳에 써주세요.</TextDiv>
					</ModalAreaFaq>
				</ModalWrapperFaq>
			)}
			<Footer />
			{modalState.saveModalOpen && (
				<ModalWrapperSave>
					<ModalAreaSave>
						<ModalBaseTwoBtn
							header='임시 저장 하기'
							content='지금까 입력한 정보가 저장 됩니다.'
							confirmbtntext='확인'
							cancelbtntext='취소'
							confirmbtnEvent={modalFunction.handleSaveModalConfirmBtn}
							cancelbtnEvent={modalFunction.toggleSaveModal}
						/>
					</ModalAreaSave>
				</ModalWrapperSave>
			)}
		</Wrapper>
	);
};

const ModalWrapperSave = styled.div`
	width: 100%;
	height: 900px;
	background: rgba(15, 15, 21, 0.8);
	position: absolute;
	top: 0px;
	display: flex;
	z-index: 20;
`;
const ModalAreaSave = styled.div`
	margin: auto;
`;

const ModalWrapper = styled.div`
	width: 100%;
	height: 900px;
	background: rgba(15, 15, 21, 0.8);
	position: absolute;
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
const ModalWrapperFaq = styled.div`
	width: 100%;
	height: 900px;
	background: rgba(15, 15, 21, 0.8);
	position: absolute;
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
	top: 480px;
	right: 24px;
	filter: invert(100%);
	&:hover {
		cursor: pointer;
	}
`;
const TextDiv = styled.div`
	padding-left: 10px;
	width: 246px;
	height: 42px;
	line-height: 3;
	border-radius: 2px;
	border: solid 1px #e4e4e4;
	font-family: "NotoSansCJKkr";
	font-size: 14px;
	font-style: normal;
	color: white;
	position: absolute;
	top: 509px;
	right: 24px;
`;

const Progress = styled.div`
	justify-content: flex-start;
	border-radius: 100px;
	align-items: center;
	position: relative;
	display: flex;
	width: 624px;
`;
const ProgressBackground = styled.div`
	background: #e4e4e4;
	width: 624px;
	height: 10px;
	border-radius: 100px;
	position: absolute;
	top: 0px;
	left: 0px;
	z-index: 1;
`;
const ProgressValue = styled.div`
	animation: load 2s normal forwards;
	border-radius: 100px;
	background: linear-gradient(to right, #ffd650, #ed7859);
	height: 10px;
	width: 0;
	z-index: 2;
	@keyframes load {
		0% {
			width: 0;
		}
		100% {
			width: ${(props) =>
				props.processPercentage && `${props.processPercentage}%`};
		}
	}
`;
const ProcessBarLabel = styled.div`
	/* background: red; */
	width: 624px;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	padding-top: 10px;
	padding-bottom: 35px;
`;
const LabelText = styled.div`
	width: 123px;
	height: 20px;
	font-family: "NotoSansCJKkr";
	font-size: 14px;
	font-weight: 500;
	font-stretch: normal;
	font-style: normal;
	line-height: 1.43;
	letter-spacing: normal;
	color: #0f0f15;
`;
const LaberPercent = styled.div``;

const Wrapper = styled.div`
	min-width: 1024px;
	max-width: 1920px;
`;

const BlockTop = styled.div`
	background: #e4e4e4;
	min-width: 1024px;
	max-width: 1920px;
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
	min-width: 1024px;
	max-width: 1920px;
	margin: 0 auto;
`;
const BottomContent = styled.div`
	width: 944px;
	margin: 0 auto;
	display: flex;
`;
const LeftBlock = styled.div`
	/* background: red; */
	width: 624px;
	margin-top: 39px;
	margin-right: 16px;
	margin-bottom: 22px;
`;
const CardBlock = styled.div`
	background: #ffffff;
	display: flex;
	padding: 24px;
`;
const CardContainer = styled.div`
	width: 270px;
	height: 336px;
	border-radius: 2px;
	border: solid 1px #e4e4e4;
	/* margin-right: 16px; */
`;
const ExplainContainer = styled.div`
	/* width: 286px;
	height: 336px; */
	border-radius: 2px;
	border: solid 1px #e4e4e4;
	background-color: #f8f8f8;
	/* background: red; */
	margin-left: 16px;

	padding: 14px;
`;
const TitleTodo = styled.div`
	width: 39px;
	height: 20px;
	font-family: "NotoSansCJKkr";
	font-size: 14px;
	font-weight: 500;
	line-height: 1.43;
	color: #0f0f15;
	margin-bottom: 10px;
`;
const ExplainTodo = styled.div`
	width: 258px;
	height: 66px;
	font-family: "NotoSansCJKkr";
	font-size: 14px;
	line-height: 1.57;
	color: #0f0f15;
	margin-bottom: 12px;
`;
const TitleInterview = styled.div`
	width: 39px;
	height: 20px;
	font-family: "NotoSansCJKkr";
	font-size: 14px;
	font-weight: 500;
	line-height: 1.43;
	color: #0f0f15;
	margin-bottom: 10px;
`;
const ExplainInterview = styled.div`
	width: 258px;
	height: 44px;
	font-family: "NotoSansCJKkr";
	font-size: 14px;
	line-height: 1.57;
	color: #0f0f15;
	margin-bottom: 12px;
`;
const TitleSubject = styled.div`
	width: 26px;
	height: 20px;
	font-family: "NotoSansCJKkr";
	font-size: 14px;
	font-weight: 500;
	line-height: 1.43;
	color: #0f0f15;
	margin-bottom: 10px;
`;
const ExplainSubject = styled.div`
	width: 258px;
	height: 22px;
	font-family: "NotoSansCJKkr";
	font-size: 14px;
	line-height: 1.57;
	color: #0f0f15;
`;
const RightBlock = styled.div`
	margin-top: 39px;
`;

const FaqBtn = styled.img`
	filter: drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.2));
	vertical-align: text-top;
	position: absolute;
	top: 668px;
	right: 30px;
	&:hover {
		cursor: pointer;
	}
`;
const JobsBtn = styled.img`
	position: absolute;
	top: 746px;
	right: 30px;
	filter: drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.2));
	&:hover {
		cursor: pointer;
	}
`;

const TextBoxTop = styled.div`
	width: 70px;
	height: 14px;
	font-family: "NotoSansCJKkr";
	font-size: 14px;
	font-weight: 500;
	line-height: 1;
	color: #0f0f15;
	padding-top: 40px;
`;
const TextBoxMiddle = styled.div`
	width: 579px;
	height: 38px;
	font-family: "NotoSansCJKkr";
	font-size: 26px;
	font-weight: 500;
	color: #0f0f15;
	margin-top: 8px;
`;
const TextBoxBottom = styled.div`
	width: 944px;
	height: 66px;
	opacity: 0.8;
	font-family: "NotoSansCJKkr";
	font-size: 14px;
	font-weight: 500;
	line-height: 1.57;
	color: #0f0f15;
`;

const TextBoxBottomTitle = styled.div`
	width: 104px;
	height: 24px;
	font-family: "NotoSansCJKkr";
	font-size: 18px;
	font-weight: 500;
	line-height: 1.33;
	color: #0f0f15;
	margin-bottom: 16px;
`;

const RightBox = styled.div``;
const ProgressWrpper = styled.div`
	/* background: red; */
	width: 944px;
	margin: 0 auto;
`;

export default Mission1Presenter;
