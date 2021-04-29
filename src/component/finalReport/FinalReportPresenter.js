import React from "react";
import ReactPlayer from "react-player";
import { MediaSecretCodeAnswer } from "../AnswerList";
import styled from "styled-components";
import btnJobs from "../../assets/icons/btn-floaing-jobs.svg";
import btnFaq from "../../assets/icons/btn-floating-faq.svg";
import close from "../../assets/icons/bnt-x-24.svg";
import Footer from "../../layout/Footer";
import { FinalReportBtn, FinalReportBtnActive } from "../../ui/button/Button";
import { HelpModal } from "../../ui/modal/Modal";

const FinalReportPresenter = ({
	changeBtn,
	isOpen,
	faqModal,
	modalFunction,
}) => {
	return (
		<LayOutContent>
			<Wrapper>
				<BlockTop>
					<TopContent>
						<TextBoxTop>최종 보고서</TextBoxTop>
						<TextBoxMiddle>
							최종보고서를 작성하기 위해 마무리 영상을 시청해주세요.
						</TextBoxMiddle>
						<TextBoxBottom>
							지금까지 EY한영 아그작교실 프로젝트를 통해 4차산업혁명기술을 활용하여
							사회문제를 해결하는 상품을 개발해 보았습니다.
							<br /> 최종보고서를 작성하기위해 영상을 시청한 후 최종보고서를 작성하여
							제출해 주시기 바랍니다.
							<br />
							<span style={{ color: "#686868" }}>
								*영상시청이 완료되어야 최종보고서를 제출할 수 있습니다. 최종보고서
								제출이 완료되어야 모든 미션이 종료된 것입니다.
							</span>
						</TextBoxBottom>
					</TopContent>
				</BlockTop>
				<BlockBottom>
					<BottomContent>
						<VideoArea>
							<ReactPlayer
								url={MediaSecretCodeAnswer.endingMedia}
								width='100%'
								height='100%'
								controls={true}
							/>
						</VideoArea>
						{changeBtn ? (
							<FinalReportBtnActive
								text='최종보고서 제출하기'
								style={{
									width: "148px",
									height: "40px",
									marginLeft: "796px",
									marginTop: "14px",
								}}
								onClick={() => {
									window.open("https://forms.gle/RzEH356bezV7XCUo9");
								}}
							/>
						) : (
							<FinalReportBtn
								text='최종보고서 제출하기'
								style={{
									width: "148px",
									height: "40px",
									marginLeft: "796px",
									marginTop: "14px",
								}}
							/>
						)}
					</BottomContent>
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
				<FaqBtn
					src={btnFaq}
					alt='힌트버튼'
					onClick={modalFunction.toggleFaqModal}
				/>
				<JobsBtn src={btnJobs} alt='직업버튼' onClick={modalFunction.openModal} />
			</Wrapper>
		</LayOutContent>
	);
};

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
	font-size: 14px;
	font-style: normal;
	color: white;
	position: absolute;
	top: 509px;
	right: 24px;
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
	margin: 0 auto;
	position: relative;
	padding-top: 39px;
	padding-bottom: 13px;
`;
const BottomContent = styled.div`
	/* background: red; */
	width: 944px;
	margin: 0 auto;
`;
const VideoArea = styled.div`
	width: 944px;
	height: 458px;
	border-radius: 2px;
	box-shadow: 0 0 10px 0 rgba(15, 15, 21, 0.05);
	background-color: #ffffff;
`;

const FaqBtn = styled.img`
	filter: drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.2));
	position: fixed;
	bottom: 108px;
	right: 30px;
	&:hover {
		cursor: pointer;
	}
`;
const JobsBtn = styled.img`
	filter: drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.2));
	position: fixed;
	bottom: 30px;
	right: 30px;
	&:hover {
		cursor: pointer;
	}
`;

const TextBoxTop = styled.div`
	width: 68px;
	height: 14px;
	font-size: 14px;
	font-weight: 500;
	line-height: 1;
	color: #0f0f15;
	padding-top: 40px;
`;
const TextBoxMiddle = styled.div`
	width: 612px;
	height: 38px;
	font-size: 26px;
	font-weight: 500;
	color: #0f0f15;
	margin-top: 8px;
`;
const TextBoxBottom = styled.div`
	width: 944px;
	height: 88px;
	opacity: 0.8;
	font-size: 14px;
	font-weight: 500;
	line-height: 1.57;
	color: #0f0f15;
	margin-top: 10px;
`;

export default FinalReportPresenter;
