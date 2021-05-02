import React from "react";
import styled from "styled-components";
import { ButtonPrimary } from "../../ui/button/Button";
import { Dropbox } from "../../ui/dropbox/Dropbox";

const options = [
	"드론개발자",
	"사물인터넷전문가",
	"인공지능과학자",
	"3D프린터개발자",
	"컴퓨터보안전문가",
	"소프트웨어개발자",
	"기능성게임기획자",
	"VR엔지니어",
	"지능형교통시스템전문가",
	"프로파일러",
	"재난대처전문가",
	"신약개발연구원",
	"환경공학기술자",
	"신재생에너지전문가",
	"업사이클러",
	"탄소배출권거래중개인",
];

const AnswerDefault = ({
	index,
	missionQuestion,
	normal,
	correctFirst,
	correctSeconds,
	firstFeedback,
	secondFeedback,
	answerFunctionList,
}) => {
	const leftDropbox = {
		position: "absolute",
		left: "24px",
		border: normal === false && correctFirst === false ? "1px solid #ff3737" : "",
	};
	const rightDropbox = {
		position: "absolute",
		left: "320px",
		border:
			normal === false && correctSeconds === false ? "1px solid #ff3737" : "",
	};
	return (
		<RightBox
			normal={normal}
			correctFirst={correctFirst}
			correctSeconds={correctSeconds}
		>
			{/* {console.log(index)} */}
			<Number>
				<span
					style={{
						fontFamily: "NotoSansCJKkr",
						fontSize: "14px",
						fontWeight: "bold",
						lineHeight: "1.57",
						color: "#0f0f15",
					}}
				>
					{index}
				</span>{" "}
				<span
					style={{
						fontFamily: "NotoSansCJKkr",
						fontSize: "14px",
						fontWeight: "500",
						lineHeight: "1.57",
						color: "#d8d8d8",
					}}
				>
					/
				</span>{" "}
				<span
					style={{
						fontFamily: "NotoSansCJKkr",
						fontSize: "14px",
						fontWeight: "500",
						lineHeight: "1.57",
						color: "#0f0f15",
					}}
				>
					4
				</span>
			</Number>
			<TitleRight>상품개발자</TitleRight>
			<TextContentBoxRight>
				사회문제를 해결하는 상품을 개발하기 위해서는 4차산업 기술을 보유한 인재가
				필요합니다. 어떤 미래인재가 참여해야 할까요? 상품을 개발한 미래인재 2명을
				찾아주세요!
			</TextContentBoxRight>
			<div
				style={{
					width: "624px",
					height: "1px",
					background: "#e4e4e4",
				}}
			></div>
			<div style={{ marginTop: "18px", position: "relative", height: "22px" }}>
				<Cate1>미래인재1</Cate1>
				<Cate2>미래인재2</Cate2>
			</div>
			<div
				style={{
					marginTop: "14px",
					position: "relative",
					background: "red",
				}}
			>
				<Dropbox
					id='futureOne'
					style={leftDropbox}
					options={options}
					placeholder='선택'
				/>
				<Dropbox
					id='futureTwo'
					style={rightDropbox}
					options={options}
					placeholder='선택'
				/>
			</div>
			<FeedbackSection>
				<LeftFeedback normal={normal} correctFirst={correctFirst}>
					{firstFeedback && firstFeedback}
				</LeftFeedback>
				<RightFeedback normal={normal} correctSeconds={correctSeconds}>
					{secondFeedback && secondFeedback}
				</RightFeedback>
			</FeedbackSection>
			{normal ? (
				<ButtonPrimary
					text='정답제출'
					style={{ position: "absolute", bottom: "24px", right: "24px" }}
					onClick={answerFunctionList.checkAnswer}
				/>
			) : correctFirst && correctSeconds ? (
				<ButtonPrimary
					text='다음'
					style={{ position: "absolute", bottom: "24px", right: "24px" }}
					onClick={answerFunctionList.addIndex}
				/>
			) : (
				<ButtonPrimary
					text='다음'
					style={{ position: "absolute", bottom: "24px", right: "24px" }}
					onClick={answerFunctionList.checkAnswer}
				/>
			)}
			<CorrectText
				correctFirst={correctFirst}
				correctSeconds={correctSeconds}
				normal={normal}
			>
				{correctFirst && correctSeconds
					? "정답입니다!"
					: "다시 한번 생각해 볼까요?"}
			</CorrectText>
		</RightBox>
	);
};

export default AnswerDefault;

const RightBox = styled.div`
	width: 624px;
	height: 388px;
	background: #ffffff;
	border-radius: 2px;
	border: ${(props) =>
		props.correctFirst === true &&
		props.correctSeconds === true &&
		props.normal === false
			? "1px solid #ffc300"
			: "none"};
	box-shadow: 0 0 10px 0 rgba(15, 15, 21, 0.05);
	position: absolute;
	top: 79px;
	right: 0px;
`;
const Number = styled.div`
	width: 304px;
	height: 22px;
	position: absolute;
	top: 24px;
	left: 568px;
`;

const TitleRight = styled.div`
	width: 83px;
	height: 24px;
	font-family: NotoSansCJKkr;
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
const TextContentBoxRight = styled.div`
	width: 576px;
	height: 44px;
	margin-left: 24px;
	margin-bottom: 18px;
	font-family: NotoSansCJKkr;
	font-size: 14px;
	font-weight: normal;
	font-stretch: normal;
	font-style: normal;
	line-height: 1.57;
	letter-spacing: normal;
	color: #0f0f15;
	margin-top: 68px;
`;
const Cate1 = styled.div`
	width: 60px;
	height: 22px;
	font-family: NotoSansCJKkr;
	font-size: 14px;
	font-weight: normal;
	font-stretch: normal;
	font-style: normal;
	line-height: 1.57;
	letter-spacing: normal;
	color: #0f0f15;
	position: absolute;
	top: 0px;
	left: 24px;
`;
const Cate2 = styled.div`
	width: 60px;
	height: 22px;
	font-family: NotoSansCJKkr;
	font-size: 14px;
	font-weight: normal;
	font-stretch: normal;
	font-style: normal;
	line-height: 1.57;
	letter-spacing: normal;
	color: #0f0f15;
	position: absolute;
	top: 0px;
	left: 320px;
`;
const CorrectText = styled.div`
	display: ${(props) => props.normal === true && "none"};
	width: 146px;
	height: 20px;
	font-family: NotoSansCJKkr;
	font-size: 14px;
	font-weight: 500;
	font-stretch: normal;
	font-style: normal;
	line-height: normal;
	letter-spacing: normal;
	color: ${(props) =>
		props.normal === false &&
		props.correctFirst === true &&
		props.correctSeconds === true
			? "#ffc300"
			: "#ff3737"};
	position: absolute;
	top: 335px;
	left: 24px;
`;
const FeedbackSection = styled.div`
	margin-top: 65px;
	margin-left: 24px;
	position: relative;
`;
const LeftFeedback = styled.div`
	display: ${(props) =>
		props.normal === false && props.correctFirst === true ? "show" : "none"};
	width: 270px;
	height: 50px;
	font-family: NotoSansCJKkr;
	font-size: 14px;
	font-weight: normal;
	font-stretch: normal;
	font-style: normal;
	line-height: 1.57;
	letter-spacing: normal;
	color: #0f0f15;
	text-align: justify;
	position: absolute;
	top: 0px;
	left: 5px;
`;
const RightFeedback = styled.div`
	display: ${(props) =>
		props.normal === false && props.correctSeconds === true ? "show" : "none"};
	width: 270px;
	height: 50px;
	font-family: NotoSansCJKkr;
	font-size: 14px;
	font-weight: normal;
	font-stretch: normal;
	font-style: normal;
	line-height: 1.57;
	letter-spacing: normal;
	color: #0f0f15;
	text-align: justify;
	position: absolute;
	top: 0px;
	left: 300px;
`;
