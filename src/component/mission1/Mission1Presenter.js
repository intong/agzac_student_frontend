import React from "react";
import styled from "styled-components";
import ReactPlayer from "react-player";
import { HelpModal } from "../../ui/modal/Modal";
import btnJobs from "../../assets/icons/btn-floaing-jobs.svg";
import btnFaq from "../../assets/icons/btn-floating-faq.svg";
import group from "../../assets/img/img-jobs-default@2x.png";
import Footer from "../../layout/Footer";
import close from "../../assets/icons/bnt-x-24.svg";
import Answer1Default from "./Answer1Default";
import Answer2Correct from "./Answer2Correct";
import { ModalBaseTwoBtn } from "../../ui/modal/Modal";
import { jobCards } from "../JobCards";

const Mission1Presenter = ({
	prevMedia,
	nextMedia,
	answerMissionCards,
	answerInputText,
	index,
	missionQuestion,
	answerResult,
	isOpen,
	faqModal,
	modalState,
	processPercentage,
	setProcessFunction,
	modalFunction,
	answerFunctionList,
}) => {
	return (
		<Wrapper>
			<BlockTop>
				<TopContent>
					<TextBoxTop>Mission 01</TextBoxTop>
					<TextBoxMiddle>
						4차산업혁명과 관련된 미래인재 정보를 획득해 보세요.
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
							{missionQuestion && (
								<>
									<CardContainer>
										{answerResult ? (
											<img
												src={jobCards[answerMissionCards].imgUrl}
												alt=''
												style={{ widht: "270px", height: "336px", objectFit: "cover" }}
											/>
										) : (
											<img
												src={group}
												alt=''
												style={{ widht: "270px", height: "336px", objectFit: "cover" }}
											/>
										)}
									</CardContainer>
									<ExplainContainer>
										{console.log(missionQuestion[index - 1])}
										<TitleTodo>하는일</TitleTodo>
										<ExplainTodo>{missionQuestion[index - 1].todo}</ExplainTodo>
										<BarUnder />
										<TitleInterview>인터뷰</TitleInterview>
										<ExplainInterview>
											{missionQuestion[index - 1].interview}
										</ExplainInterview>
										<BarUnder />
										<TitleSubject>학과</TitleSubject>
										<ExplainSubject>{missionQuestion[index - 1].subject}</ExplainSubject>
									</ExplainContainer>
								</>
							)}
						</CardBlock>
					</LeftBlock>
					<RightBlock>
						<TextBoxBottomTitle>직업이름 매칭</TextBoxBottomTitle>
						<RightBox>
							{/*오른쪽 정답화면 교체*/}
							{answerResult === true ? (
								<Answer2Correct
									index={index}
									modalFunction={modalFunction}
									answerFunctionList={answerFunctionList}
								/>
							) : (
								<Answer1Default
									index={index}
									answerInputText={answerInputText}
									setProcessFunction={setProcessFunction}
									answerFunctionList={answerFunctionList}
									wrong={answerResult}
								/>
							)}
						</RightBox>
					</RightBlock>
				</BottomContent>
				<ProgressWrpper>
					<Progress>
						<ProgressBackground></ProgressBackground>
						<ProgressValue
							processPercentage={Math.floor((index / 16) * 100)}
						></ProgressValue>
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
								{Math.floor((index / 16) * 100)}
							</span>
							&nbsp;%
						</LaberPercent>
					</ProcessBarLabel>
				</ProgressWrpper>
			</BlockBottom>
			{isOpen && (
				<ModalWrapper>
					<ModalArea>
						<HelpModal modalFunction={modalFunction} />
					</ModalArea>
				</ModalWrapper>
			)}
			{faqModal && (
				<ModalWrapper>
					<ModalAreaFaq>
						<CloseDiv
							src={close}
							alt='닫기버튼'
							onClick={modalFunction.toggleFaqModal}
						/>
						<TextDiv>* 이곳에 써주세요.</TextDiv>
					</ModalAreaFaq>
				</ModalWrapper>
			)}
			<Footer />

			{/* 임시저장하기 모달 */}
			{modalState.saveModalOpen && (
				<ModalWrapper>
					<ModalAreaSave>
						<ModalBaseTwoBtn
							header='임시 저장 하기'
							content='지금까 입력한 정보가 저장 됩니다.'
							confirmbtntext='확인'
							cancelbtntext='취소'
							cancelbtnEvent={modalFunction.toggleSaveModal}
							closeModalEvent={modalFunction.toggleSaveModal}
							confirmbtnEvent={modalFunction.modalConfimBtnEvent}
						/>
					</ModalAreaSave>
				</ModalWrapper>
			)}
			{/* 문제 풀기 전 영상 플레이 모달 */}
			{prevMedia && (
				<ModalWrapper>
					<ModalPrevNextMediaArea>
						<CloseBtn src={close} onClick={modalFunction.togglePrevMediaModal} />
						<ReactPlayer
							url={missionQuestion && missionQuestion[index - 1].prev}
							width='100%'
							height='100%'
						/>
					</ModalPrevNextMediaArea>
				</ModalWrapper>
			)}

			{/* 문제 푼 후 영상 플레이 모달 */}
			{nextMedia && (
				<ModalWrapper>
					<ModalPrevNextMediaArea>
						<CloseBtn src={close} onClick={modalFunction.toggleNextMediaModal} />
						<ReactPlayer
							url={missionQuestion && missionQuestion[index - 1].next}
							width='100%'
							height='100%'
						/>
					</ModalPrevNextMediaArea>
				</ModalWrapper>
			)}
			<FaqBtn src={btnFaq} alt='힌트버튼' onClick={modalFunction.toggleFaqModal} />
			<JobsBtn src={btnJobs} alt='직업버튼' onClick={modalFunction.openModal} />
		</Wrapper>
	);
};

const ModalWrapper = styled.div`
	width: 100vw;
	height: 100vh;
	background: rgba(15, 15, 21, 0.8);
	position: fixed;
	top: 0;
	z-index: 20;
	display: flex;
`;
const ModalPrevNextMediaArea = styled.div`
	width: 944px;
	height: 458px;
	border-radius: 2px;
	box-shadow: 0 0 10px 0 rgba(15, 15, 21, 0.05);
	background: #ffffff;
	margin: auto;
	position: relative;
`;
const CloseBtn = styled.img`
	width: 24px;
	height: 24px;
	filter: invert(100%);
	position: absolute;
	top: -30px;
	right: 0px;
	&:hover {
		cursor: pointer;
	}
`;
const ModalAreaSave = styled.div`
	margin: auto;
`;
const ModalArea = styled.div`
	width: 700px;
	height: 503px;
	position: absolute;
	bottom: 122px;
	right: 114px;
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
	font-family: NotoSansCJKkr;
	font-size: 0.875rem;
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
		from {
			width: 0;
		}
		to {
			width: ${(props) => `${props.processPercentage}%`};
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
	font-family: NotoSansCJKkr;
	font-size: 0.875rem;
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
	overflow-x: hidden;
	overflow-y: auto;
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
	width: 258px;
	height: 308px;
	border-radius: 2px;
	border: solid 1px #e4e4e4;
	background-color: #f8f8f8;
	/* background: red; */
	padding: 14px;
	margin-left: 16px;
	overflow: auto;
	padding: 14px;
`;
const TitleTodo = styled.div`
	width: 39px;
	height: 20px;
	font-family: NotoSansCJKkr;
	font-size: 0.875rem;
	font-weight: 500;
	line-height: 1.43;
	color: #0f0f15;
	margin-bottom: 10px;
`;
const ExplainTodo = styled.div`
	width: 258px;
	font-family: NotoSansCJKkr;
	font-size: 0.875rem;
	line-height: 1.57;
	color: #0f0f15;
	text-align: justify;
	margin-bottom: 12px;
`;
const BarUnder = styled.div`
	width: 258px;
	height: 1px;
	opacity: 0.3;
	background-color: #d8d8d8;
	margin-bottom: 12px;
`;
const TitleInterview = styled.div`
	width: 39px;
	height: 20px;
	font-family: NotoSansCJKkr;
	font-size: 0.875rem;
	font-weight: 500;
	line-height: 1.43;
	color: #0f0f15;
	margin-bottom: 10px;
`;
const ExplainInterview = styled.div`
	width: 258px;
	font-family: NotoSansCJKkr;
	font-size: 0.875rem;
	line-height: 1.57;
	color: #0f0f15;
	text-align: justify;
	margin-bottom: 12px;
`;
const TitleSubject = styled.div`
	width: 26px;
	height: 20px;
	font-family: NotoSansCJKkr;
	font-size: 0.875rem;
	font-weight: 500;
	line-height: 1.43;
	color: #0f0f15;
	margin-bottom: 10px;
`;
const ExplainSubject = styled.div`
	width: 258px;
	font-family: NotoSansCJKkr;
	font-size: 0.875rem;
	line-height: 1.57;
	color: #0f0f15;
	text-align: justify;
`;
const RightBlock = styled.div`
	margin-top: 39px;
`;

const FaqBtn = styled.img`
	filter: drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.2));
	vertical-align: text-top;
	position: fixed;
	bottom: 108px;
	right: 30px;
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
	font-family: NotoSansCJKkr;
	font-size: 0.875rem;
	font-weight: 500;
	line-height: 1;
	color: #0f0f15;
	padding-top: 40px;
`;
const TextBoxMiddle = styled.div`
	width: 944px;
	height: 38px;
	font-family: NotoSansCJKkr;
	font-size: 1.625rem;
	font-weight: 500;
	color: #0f0f15;
	margin-top: 8px;
`;
const TextBoxBottom = styled.div`
	width: 944px;
	height: 66px;
	opacity: 0.8;
	font-family: NotoSansCJKkr;
	font-size: 0.875rem;
	font-weight: 500;
	line-height: 1.57;
	color: #0f0f15;
	text-align: justify;
`;

const TextBoxBottomTitle = styled.div`
	width: 200px;
	height: 24px;
	font-family: NotoSansCJKkr;
	font-size: 1.125rem;
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
