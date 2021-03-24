import React from "react";
import styled from "styled-components";
import btnJobs from "../../assets/icons/btn-floaing-jobs.svg";
import btnFaq from "../../assets/icons/btn-floating-faq.svg";
import group from "../../assets/img/group@3x.png";
import Answer1Default from "./Answer1Default";
import Answer2Correct from "./Answer2Correct";
import Answer3Wrong from "./Answer3Wrong";

const Mission1Presenter = () => {
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
						여러분은 제시된 미<br />
						래인재의 정보와 직업이름을 매칭하여 완벽한 정보를 획득해야 합니다. 우측
						하단의 💡표시를 눌러 직업이름을 확인하여 정확한 미래인재 정보를
						획득해보세요!
					</TextBoxBottom>
				</TopContent>
			</BlockTop>
			<BlockBottom>
				<BottomContent>
					<LeftTextBox>미래인재 정보</LeftTextBox>
					<RightTextBox>직업이름 매칭</RightTextBox>
					<LeftBox>
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
									position: "absolute",
									opacity: "0.3",
									top: "122px",
									left: "14px",
								}}
							></div>
							<TitleInterview>인터뷰</TitleInterview>
							<ExplainInterview>
								사람이 들어가기 힘든 재난 현장에 드론을 보 내거나, 드론 택배를 개발할 수
								있어요.
							</ExplainInterview>
							<div
								style={{
									width: "258px",
									height: "1px",
									background: "#d8d8d8",
									position: "absolute",
									opacity: "0.3",
									top: "221px",
									left: "14px",
								}}
							></div>
							<TitleSubject>학과</TitleSubject>
							<ExplainSubject>기계공학, 항공우주공학, 전기전자 등</ExplainSubject>
						</ExplainContainer>
					</LeftBox>
					<div style={{ position: "absolute", top: "79px", right: " 248px" }}>
						{/*정답화면 교체*/}
						<Answer1Default />
						{/* <Answer2Correct /> */}
						{/* <Answer3Wrong /> */}
					</div>
				</BottomContent>
				<FaqBtn src={btnFaq} alt='힌트버튼' />
				<JobsBtn src={btnJobs} alt='직업버튼' />
			</BlockBottom>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	width: 100%;
	height: 100%;
`;

const BlockTop = styled.div`
	background: #e4e4e4;
	width: 1440px;
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
	width: 1440px;
	height: 652px;
	margin: 0 auto;
	position: relative;
`;
const BottomContent = styled.div`
	width: 944px;
	height: 652px;
	margin: 0 auto;
`;

const FaqBtn = styled.img`
	position: absolute;
	right: 30px;
	bottom: 108px;
	filter: drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.2));
`;
const JobsBtn = styled.img`
	position: absolute;
	right: 30px;
	bottom: 30px;
	filter: drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.2));
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
	margin-top: 10px;
`;

const LeftTextBox = styled.div`
	width: 104px;
	height: 24px;
	font-family: "NotoSansCJKkr";
	font-size: 18px;
	font-weight: 500;
	line-height: 1.33;
	color: #0f0f15;
	position: absolute;
	top: 39px;
`;
const CardContainer = styled.div`
	width: 270px;
	height: 336px;
	border-radius: 2px;
	border: solid 1px #e4e4e4;
	margin-top: 26px;
	margin-left: 26px;
`;
const ExplainContainer = styled.div`
	width: 286px;
	height: 336px;
	border-radius: 2px;
	border: solid 1px #e4e4e4;
	background-color: #f8f8f8;
	position: absolute;
	top: 26px;
	left: 312px;
`;
const TitleTodo = styled.div`
	width: 39px;
	height: 20px;
	font-family: "NotoSansCJKkr";
	font-size: 14px;
	font-weight: 500;
	line-height: 1.43;
	color: #0f0f15;
	margin-top: 14px;
	margin-left: 14px;
`;
const ExplainTodo = styled.div`
	width: 258px;
	height: 66px;
	font-family: "NotoSansCJKkr";
	font-size: 14px;
	line-height: 1.57;
	color: #0f0f15;
	margin-top: 10px;
	margin-left: 14px;
`;
const TitleInterview = styled.div`
	width: 39px;
	height: 20px;
	margin: 12px 219px 10px 0;
	font-family: "NotoSansCJKkr";
	font-size: 14px;
	font-weight: 500;
	line-height: 1.43;
	color: #0f0f15;
	margin-top: 25px;
	margin-left: 14px;
`;
const ExplainInterview = styled.div`
	width: 258px;
	height: 44px;
	font-family: "NotoSansCJKkr";
	font-size: 14px;
	line-height: 1.57;
	color: #0f0f15;
	margin-top: 10px;
	margin-left: 14px;
`;
const TitleSubject = styled.div`
	width: 26px;
	height: 20px;
	font-family: "NotoSansCJKkr";
	font-size: 14px;
	font-weight: 500;
	line-height: 1.43;
	color: #0f0f15;
	margin-top: 25px;
	margin-left: 14px;
`;
const ExplainSubject = styled.div`
	width: 258px;
	height: 22px;
	font-family: "NotoSansCJKkr";
	font-size: 14px;
	line-height: 1.57;
	color: #0f0f15;
	margin-left: 14px;
`;
const RightTextBox = styled.div`
	width: 104px;
	height: 24px;
	font-family: "NotoSansCJKkr";
	font-size: 18px;
	font-weight: 500;
	line-height: 1.33;
	color: #0f0f15;
	position: absolute;
	top: 39px;
	right: 448px;
`;

const LeftBox = styled.div`
	width: 624px;
	height: 388px;
	background: #ffffff;
	border-radius: 2px;
	box-shadow: 0 0 10px 0 rgba(15, 15, 21, 0.05);
	position: absolute;
	top: 79px;
	left: 248px;
`;

export default Mission1Presenter;
