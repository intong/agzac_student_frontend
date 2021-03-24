import React from "react";
import styled from "styled-components";
import { ButtonPrimary } from "../../ui/button/Button";
import { Dropbox } from "../../ui/dropbox/Dropbox";

const options = [
	"option1",
	"option2",
	"option3",
	"option4",
	"option5",
	"option6",
	"option7",
	"option8",
	"option9",
	"option10",
	"option11",
	"option12",
];

const AnswerDefault = ({ normal, correct }) => {
	const leftDropbox = {
		position: "absolute",
		left: "24px",
		border: normal === false && correct === false ? "1px solid #ff3737" : "",
	};
	const rightDropbox = {
		position: "absolute",
		left: "320px",
		border: normal === false && correct === false ? "1px solid #ff3737" : "",
	};
	return (
		<RightBox normal={normal} correct={correct}>
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
					1
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
					16
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
				<Dropbox style={leftDropbox} options={options} />
				<Dropbox style={rightDropbox} options={options} />
			</div>
			<ButtonPrimary
				text='정답제출'
				style={{ position: "absolute", bottom: "24px", right: "24px" }}
			/>
			<CorrectText correct={correct} normal={normal}>
				{correct ? "정답입니다!" : "다시 한번 생각해 볼까요?"}
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
		props.correct === true && props.normal === false
			? "1px solid #ffc300"
			: "none"};
	box-shadow: 0 0 10px 0 rgba(15, 15, 21, 0.05);
	position: absolute;
	top: 79px;
	right: 248px;
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
const TextContentBoxRight = styled.div`
	width: 576px;
	height: 44px;
	margin-left: 24px;
	margin-bottom: 18px;
	font-family: "NotoSansCJKkr";
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
	font-family: "NotoSansCJKkr";
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
	font-family: "NotoSansCJKkr";
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
	font-family: "NotoSansCJKkr";
	font-size: 14px;
	font-weight: 500;
	font-stretch: normal;
	font-style: normal;
	line-height: normal;
	letter-spacing: normal;
	color: ${(props) =>
		props.normal === false && props.correct === true ? "#ffc300" : "#ff3737"};
	position: absolute;
	top: 335px;
	left: 24px;
`;
