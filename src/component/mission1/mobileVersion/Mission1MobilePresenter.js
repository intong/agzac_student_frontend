import React from "react";
import styled from "styled-components";
import { ButtonSecondary } from "../../../ui/button/Button";
import nextIcon from "../../../assets/mobileImage/icn-next-dim@2x.png";

const Mission1MobilePresenter = ({ missionQuestion, mobileFunctionList }) => {
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
							background: "#ffc300",
							opacity: "1",
							border: "1px solid #0f0f15",
						}}
					/>
					<MiddleBar />
					<Circle />
					<MiddleBar />
					<Circle />
					<MiddleBar />
					<Circle />
					<MiddleBar />
					<Circle />
				</CircleDiv>
			</ProcessArea>
			<TopContent>
				<TextDivTop>Mission 01</TextDivTop>
				<TextDivMiddle>
					4차산업혁명과 관련된 미래 인재 정보를 획득해 보세요.
				</TextDivMiddle>
				<TextDivBottom>
					4차산업혁명과 동시에 인간의 삶은 많은 영역에서 변화가 시작되었습니다.
					변화에 따라 다양한 직업이 사라지거나 새롭게 생겨났습니다. 지금부터 여러분은
					제시된 미래인재의 정보와 직업이름을 매칭하여 완벽한 정보를 획득해야 합니다.
					우측 하단의 💡표시를 눌러 직업이름을 확인하여 정확한 미래인재 정보를
					획득해보세요!
				</TextDivBottom>
			</TopContent>
			<BottomContent>
				<BottomTextTile>미래인재 정보</BottomTextTile>
				<ExplainContainer>
					{missionQuestion && (
						<>
							<TitleTodo>하는일</TitleTodo>
							<ExplainTodo>{missionQuestion.todo}</ExplainTodo>
							<BarUnder />
							<TitleInterview>인터뷰</TitleInterview>
							<ExplainInterview>{missionQuestion.interview}</ExplainInterview>
							<BarUnder />
							<TitleSubject>학과</TitleSubject>
							<ExplainSubject>{missionQuestion.subject}</ExplainSubject>
						</>
					)}
				</ExplainContainer>
				<ButtonDiv>
					<ButtonSecondary
						text='직업이름 매칭'
						style={{
							width: "100vw",
							height: "8vh",
							fontFamily: "NotoSansCJKkr",
							fontSize: "14px",
							fontWeight: "500",
							textAlign: "center",
							color: "#0f0f15",
						}}
						onClick={mobileFunctionList.inputPageHandler}
					/>
					<NextIcon src={nextIcon} />
				</ButtonDiv>
			</BottomContent>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	width: 100vw;
	overflow-x: hidden;
	overflow-y: scroll;
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
	font-family: "NotoSansCJKkr";
	font-size: 14px;
	font-weight: 500;
	line-height: 1;
	text-align: center;
	color: #0f0f15;
	width: 165px;
	height: 15px;
	margin: auto;
	padding-top: 14px;
`;
const TextDivMiddle = styled.div`
	font-family: "NotoSansCJKkr";
	font-size: 26px;
	font-weight: 500;
	line-height: 40px;
	color: #0f0f15;
	width: 80vw;
	margin: auto;
	margin-top: 20px;
`;
const TextDivBottom = styled.div`
	font-family: "NotoSansCJKkr";
	font-size: 14px;
	line-height: 1.57;
	color: #0f0f15;
	width: 80vw;
	margin: auto;
	margin-top: 20px;
	text-align: justify;
	padding-bottom: 30px;
`;
const BottomContent = styled.div`
	background: #f4f5f6;
	position: relative;
	padding-top: 30px;
`;
const BottomTextTile = styled.div`
	font-family: "NotoSansCJKkr";
	font-size: 18px;
	font-weight: 500;
	line-height: 1.33;
	color: #0f0f15;
	width: 80vw;
	margin: auto;
`;
const ExplainContainer = styled.div`
	width: 72vw;
	height: 308px;
	border-radius: 2px;
	border: solid 1px #e4e4e4;
	background-color: #f8f8f8;
	padding: 4vw;
	margin: auto;
	margin-top: 2vh;
	overflow: scroll;
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
	width: 71vw;
	font-family: "NotoSansCJKkr";
	font-size: 14px;
	line-height: 1.57;
	color: #0f0f15;
	text-align: justify;
	margin-bottom: 12px;
`;
const BarUnder = styled.div`
	width: 71vw;
	height: 1px;
	opacity: 0.3;
	background-color: #d8d8d8;
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
	width: 71vw;
	font-family: "NotoSansCJKkr";
	font-size: 14px;
	line-height: 1.57;
	color: #0f0f15;
	text-align: justify;
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
	width: 71vw;
	font-family: "NotoSansCJKkr";
	font-size: 14px;
	line-height: 1.57;
	color: #0f0f15;
	text-align: justify;
`;
const ButtonDiv = styled.div`
	position: fixed;
	bottom: 0px;
	left: 0px;
`;
const NextIcon = styled.img`
	position: absolute;
	top: 31%;
	right: 32vw;
	width: 24px;
	height: 24px;
`;

export default Mission1MobilePresenter;
