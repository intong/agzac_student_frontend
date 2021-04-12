import React from "react";
import styled from "styled-components";
import Footer from "../../layout/Footer";
import btnJobs from "../../assets/icons/btn-floaing-jobs.svg";
import btnFaq from "../../assets/icons/btn-floating-faq.svg";
import close from "../../assets/icons/bnt-x-24.svg";
import { ButtonSecondary } from "../../ui/button/Button";
import SocialProblem from "./SocialProblem";
import ProductDeveloper from "./ProductDeveloper";
import ReasonDevelopProduct from "./ReasonDevelopProduct";
import { HelpModal } from "../../ui/modal/Modal";

const btnStyle = {
	width: "256px",
	height: "40px",
	position: "absolute",
	bottom: "24px",
	left: "24px",
};

const Mission4Presenter = ({
	isOpen,
	faqModal,
	confirm,
	clickFunctionList,
	modalFunction,
}) => {
	return (
		<>
			<Wrapper>
				<BlockTop>
					<TopContent>
						<TextBoxTop>Mission 04</TextBoxTop>
						<TextBoxMiddle>사회문제를 해결하는 상품을 개발해주세요!</TextBoxMiddle>
						<TextBoxBottom>
							지금까지 4차산업기술을 보유한 미래인재 정보를 확보하고, 다양한 사회문제를
							살펴 보았습니다. 지금부터는 우리 기업이 사회문제를 해결하는 상품을 개발할
							차례입
							<br />
							니다. 확보한 미래인재 정보와 분석한 사회문제를 기반으로 멋진 상품을
							개발해 주세요!
						</TextBoxBottom>
					</TopContent>
				</BlockTop>
				<BlockBottom>
					<BottomContent>
						<Title>사회문제를 해결하는 상품개발 기획서</Title>
						<div
							style={{
								display: "flex",
								marginTop: "16px",
							}}
						>
							<LeftBox>
								<LeftTitle>
									홍길동님이 선택한 사회문제의 주제는 기후변화와 환경입니다.
								</LeftTitle>
								<ButtonSecondary text='다른 사회문제 선택' style={btnStyle} />
							</LeftBox>
							<RightBox>
								<Tabs>
									<Tab1 confirm={confirm}>
										<Text>사회문제</Text>
									</Tab1>
									<Tab2 confirm={confirm}>
										<Text>상품개발 이유</Text>
									</Tab2>
									<Tab3 confirm={confirm}>
										<Text>상품 개발자</Text>
									</Tab3>
								</Tabs>
								{/* 변경 자리 */}
								{confirm.social === "ok" ? (
									confirm.social === "ok" && confirm.reason === "ok" ? (
										<ProductDeveloper clickFunctionList={clickFunctionList} />
									) : (
										<ReasonDevelopProduct clickFunctionList={clickFunctionList} />
									)
								) : (
									<SocialProblem clickFunctionList={clickFunctionList} />
								)}
							</RightBox>
						</div>
					</BottomContent>
				</BlockBottom>
				<Footer />
				{isOpen && (
					<ModalWrapper>
						<ModalArea>
							<HelpModal modalFunction={modalFunction} style={{}} />
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
				<FaqBtn
					src={btnFaq}
					alt='힌트버튼'
					onClick={modalFunction.toggleFaqModal}
				/>
				<JobsBtn src={btnJobs} alt='직업버튼' onClick={modalFunction.openModal} />
			</Wrapper>
		</>
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
	font-family: "NotoSansCJKkr";
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
	min-height: 900px;
	max-height: 1122px;
	background: rgba(15, 15, 21, 0.8);
	position: fixed;
	top: 0;
	z-index: 60;
	display: flex;
`;
const ModalArea = styled.div`
	width: 700px;
	height: 503px;
	position: absolute;
	bottom: 122px;
	right: 114px;
`;

const Wrapper = styled.div`
	min-width: 1024px;
	max-width: 1920px;
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
	margin: 0 auto;
	position: relative;
`;
const BottomContent = styled.div`
	width: 944px;
	margin: 0 auto;
	position: relative;
`;
const Title = styled.div`
	width: 278px;
	height: 24px;
	font-family: "NotoSansCJKkr";
	font-size: 18px;
	font-weight: 500;
	font-stretch: normal;
	font-style: normal;
	line-height: 1.33;
	letter-spacing: normal;
	color: #0f0f15;
	padding-top: 39px;
`;
const Tabs = styled.div`
	width: 624px;
	height: 50px;
	display: flex;
	flex-direction: row;
	box-shadow: 0 0 10px 0 rgba(15, 15, 21, 0.05);
	margin-bottom: 16px;
`;
const Text = styled.div`
	width: 206.7px;
`;
// social
const Tab1 = styled.div`
	width: 208px;
	height: 50px;
	background-color: #0f0f15;
	color: #ffffff;
	opacity: ${(props) => props.confirm.social === "ok" && "0.8"};
	text-align: center;
	line-height: 53px;
`;
//reason
const Tab2 = styled.div`
	width: 208px;
	height: 50px;
	background-color: ${(props) =>
		props.confirm.social === "ok" ? "#0f0f15" : "#ffffff"};
	text-align: center;
	line-height: 53px;
	color: ${(props) => (props.confirm.social === "ok" ? "#ffffff" : "#686868")};
	opacity: ${(props) =>
		props.confirm.social === "ok" && props.confirm.reason === "ok" ? "0.8" : ""};
`;
// developer
const Tab3 = styled.div`
	width: 209px;
	height: 50px;
	background-color: ${(props) =>
		props.confirm.reason === "ok" ? "#0f0f15" : "#ffffff"};
	text-align: center;
	line-height: 53px;
	color: ${(props) => (props.confirm.reason === "ok" ? "#ffffff" : "#686868")};
`;
const LeftBox = styled.div`
	width: 304px;
	height: 458px;
	border-radius: 2px;
	box-shadow: 0 0 10px 0 rgba(15, 15, 21, 0.05);
	background-color: #ffffff;
	position: relative;
`;
const RightBox = styled.div`
	width: 304px;
	height: 100%;
	margin-left: 16px;
`;
const LeftTitle = styled.div`
	width: 256px;
	height: 48px;
	font-family: "NotoSansCJKkr";
	font-size: 18px;
	font-weight: 500;
	font-stretch: normal;
	font-style: normal;
	line-height: 1.33;
	letter-spacing: normal;
	color: #0f0f15;
	position: absolute;
	top: 26px;
	left: 24px;
`;

const FaqBtn = styled.img`
	position: fixed;
	right: 30px;
	bottom: 108px;
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
	width: 458px;
	height: 38px;
	font-size: 26px;
	font-weight: 500;
	color: #0f0f15;
	margin-top: 8px;
`;
const TextBoxBottom = styled.div`
	width: 944px;
	height: 44px;
	opacity: 0.8;
	font-size: 14px;
	font-weight: 500;
	line-height: 1.57;
	color: #0f0f15;
	margin-top: 10px;
`;

export default Mission4Presenter;
