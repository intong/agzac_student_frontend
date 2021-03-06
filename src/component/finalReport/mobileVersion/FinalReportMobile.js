import React from "react";
import styled from "styled-components";
import ReactPlayer from "react-player";
import { MediaSecretCodeAnswer } from "../../AnswerList";
import {
	FinalReportBtnActive,
	FinalReportBtn,
} from "../../../ui/button/Button";
import { FinalAlertModal } from "../../../ui/modal/Modal";

const FinalReportMobile = ({
	alertModal,
	handleProgree,
	changeBtn,
	isOpen,
	faqModal,
	modalFunction,
}) => {
	return (
		<Wrapper>
			<ProcessArea>
				<CircleDiv>
					<Circle
						style={{
							background: "#0f0f15",
							opacity: "1",
							border: "1px solid #0f0f15",
						}}
					/>
					<MiddleBar style={{ background: "#0f0f15", opacity: "1" }} />
					<Circle
						style={{
							background: "#0f0f15",
							opacity: "1",
							border: "1px solid #0f0f15",
						}}
					/>
					<MiddleBar style={{ background: "#0f0f15", opacity: "1" }} />
					<Circle
						style={{
							background: "#0f0f15",
							opacity: "1",
							border: "1px solid #0f0f15",
						}}
					/>
					<MiddleBar style={{ background: "#0f0f15", opacity: "1" }} />
					<Circle
						style={{
							background: "#0f0f15",
							opacity: "1",
							border: "1px solid #0f0f15",
						}}
					/>
					<MiddleBar style={{ background: "#0f0f15", opacity: "1" }} />
					<Circle
						style={{
							background: "#0f0f15",
							opacity: "1",
							border: "1px solid #0f0f15",
						}}
					/>
					<MiddleBar style={{ background: "#0f0f15", opacity: "1" }} />
					<Circle
						style={{
							background: "#ffc300",
							opacity: "1",
							border: "1px solid #0f0f15",
						}}
					/>
				</CircleDiv>
			</ProcessArea>
			<TopContent>
				<TextDivTop>최종 보고서</TextDivTop>
				<TextDivMiddle>
					최종보고서를 작성하기 위해 마무리 영상을 시청해주세요.
				</TextDivMiddle>
				<TextDivBottom>
					지금까지 EY한영 아그작교실 프로젝트를 통해 4차산업혁명기술을 활용하여
					사회문제를 해결하는 상품을 개발해 보았습니다. 최종보고서를 작성하기위해
					영상을 시청한 후 최종보고서를 작성하여 제출해 주시기 바랍니다.{" "}
					<p style={{ marginTop: "2vh" }}>
						*영상시청이 완료되어야 최종보고서를 제출할 수 있습니다. 최종보고서 제출이
						완료되어야 모든 미션이 종료된 것입니다.
					</p>
				</TextDivBottom>
			</TopContent>
			<VideoPlayArea>
				<ReactPlayer
					url={MediaSecretCodeAnswer.endingMedia}
					width='100%'
					height='100%'
					controls={true}
				/>
			</VideoPlayArea>
			{changeBtn ? (
				<FinalReportBtnActive
					text='최종보고서 제출하기'
					style={{ position: "fixed", bottom: "0px", width: "100vw", height: "8vh" }}
					onClick={() => {
						window.open("https://docs.google.com/forms/d/e/1FAIpQLSfqzz01Y69sYumIzaMKYIFiL5o7R3xuuvbnf3RFKT7ghmBgJA/viewform?usp=sf_link");
					}}
				/>
			) : (
				<FinalReportBtn
					text='최종보고서 제출하기'
					style={{
						background: "grey",
						position: "fixed",
						opacity: "1",
						bottom: "0px",
						width: "100vw",
						height: "8vh",
					}}
				/>
			)}
			{alertModal && (
				<ModalWrapper key={1}>
					<ModalAreaPrice key={1}>
						<FinalAlertModal
							header='알림'
							content='영상을 모두 시청하셔야'
							subContent='최종보고서를 제출하실 수 있습니다.'
							btntext='확인'
							closeModalEvent={modalFunction.toggleAlertModal}
							btnEvent={modalFunction.toggleAlertModal}
						/>
					</ModalAreaPrice>
				</ModalWrapper>
			)}
		</Wrapper>
	);
};

const Wrapper = styled.div`
	width: 100vw;
	overflow-x: hidden;
	overflow-y: auto;
`;
const ProcessArea = styled.div`
	background: #e4e4e4;
	width: 100vw;
	height: 38px;
	position: relative;
`;
const CircleDiv = styled.div`
	position: absolute;
	left: 35vw;
	bottom: 0px;
	width: 30vw;
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: auto;
`;
const Circle = styled.div`
	width: 8px;
	height: 8px;
	border-radius: 50%;
	opacity: 0.2;
	background: #0f0f15;
`;
const MiddleBar = styled.div`
	width: 6px;
	height: 1px;
	opacity: 0.2;
	background: #0f0f15;
`;
const TopContent = styled.div`
	background: #e4e4e4;
`;
const TextDivTop = styled.div`
	font-family: NotoSansCJKkr;
	font-size: 14px;
	font-weight: 500;
	line-height: 14px;
	text-align: center;
	color: #0f0f15;
	width: 165px;
	height: 15px;
	margin: auto;
	padding-top: 14px;
`;
const TextDivMiddle = styled.div`
	font-family: NotoSansCJKkr;
	font-size: 26px;
	font-weight: 500;
	line-height: 40px;
	color: #0f0f15;
	text-align: justify;
	width: 80vw;
	margin: auto;
	margin-top: 20px;
`;
const TextDivBottom = styled.div`
	font-family: NotoSansCJKkr;
	font-size: 14px;
	line-height: 1.57;
	color: #0f0f15;
	width: 80vw;
	margin: auto;
	margin-top: 20px;
	text-align: justify;
	padding-bottom: 30px;
`;
const VideoPlayArea = styled.div`
	box-sizing: border-box;
	border-radius: 2px;
	/* border: solid 1px #e4e4e4; */
	width: 90vw;
	height: 50vh;
	padding-top: 5vh;
	/* padding-bottom: 10vh; */
	margin: auto;
	margin-bottom: 10vh;
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
const ModalAreaPrice = styled.div`
	/* width: 320px;
	height: 304px; */
	margin: auto;
`;
export default FinalReportMobile;
