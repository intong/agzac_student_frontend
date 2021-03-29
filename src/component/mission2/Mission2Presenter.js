import React from "react";
import styled from "styled-components";
import btnJobs from "../../assets/icons/btn-floaing-jobs.svg";
import btnFaq from "../../assets/icons/btn-floating-faq.svg";
import AnswerDefault from "./AnswerDefault";

const Mission2Presenter = ({ setProcessFunction }) => {
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
					<LeftBox>
						<Title>상품명</Title>
						<TextContent>재활치료게임</TextContent>
						<Title>상품명</Title>
						<TextContentBox>
							교통사고로 인한 환자의 재활치료를 돕는 의료용 스포츠게임 등으로 훈련함
						</TextContentBox>
					</LeftBox>
					{/* 정답화면 교체 부분 
						normal=true && correct={true}  : default 화면
						normal=false && correct={true} : 정답화면
						normal=false && correct={false} : 오답화면
					*/}
					<AnswerDefault
						normal={true}
						correct={true}
						setProcessFunction={setProcessFunction}
					/>
				</BottomContent>
				<FaqBtn src={btnFaq} alt='힌트버튼' />
				<JobsBtn src={btnJobs} alt='직업버튼' />
			</BlockBottom>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	/* background: lightgreen; */
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
	position: absolute;
	top: 668px;
	right: 30px;
	filter: drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.2));
`;
const JobsBtn = styled.img`
	position: absolute;
	top: 746px;
	right: 30px;
	filter: drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.2));
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
	width: 50px;
	height: 24px;
	margin: 0 206px 18px 0;
	font-family: "NotoSansCJKkr";
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
	font-family: "NotoSansCJKkr";
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
	font-family: "NotoSansCJKkr";
	font-size: 14px;
	font-weight: normal;
	font-stretch: normal;
	font-style: normal;
	line-height: 1.57;
	letter-spacing: normal;
	color: #0f0f15;
	margin-left: 24px;
`;

export default Mission2Presenter;
