import React from "react";
import styled from "styled-components";
import { InputDefault } from "../../ui/inputBox/Input";
import { ButtonPrimary } from "../../ui/button/Button";

const inputStyle = {
	width: "246px",
	height: "42px",
	borderRadius: "2px",
	border: "solid 1px #e4e4e4",
	backgroundColor: "#fcfcfc",
	margin: "7px 0 7px 24px",
};

const Default = ({
	selectTab,
	choosed,
	firstAnswer,
	secondAnswer,
	thirdAnswer,
	aa,
	bb,
	cc,
	uiFunctionList,
}) => {
	return (
		<>
			{selectTab !== undefined && choosed ? (
				<>
					<LeftBox>
						<LeftInsideBox>{selectTab}</LeftInsideBox>
					</LeftBox>
					<RightBox
						firstAnswer={firstAnswer}
						secondAnswer={secondAnswer}
						thirdAnswer={thirdAnswer}
					>
						<TitleContainer>사회문제 관련 키워드 도출하기</TitleContainer>
						<ContentContainer>
							다양한 사회문제 키워드 중에 우리기업이 해결하기 위해 선택한 사회문제
							테마와 관련된 연관 키워드 3가지를 찾아 입력해주세요.
						</ContentContainer>
						<InputDefault
							name='first'
							style={inputStyle}
							wrong={firstAnswer}
							onChange={uiFunctionList.onChange}
						/>
						<InputDefault
							name='second'
							style={inputStyle}
							wrong={secondAnswer}
							onChange={uiFunctionList.onChange}
						/>
						<InputDefault
							name='third'
							style={inputStyle}
							wrong={thirdAnswer}
							onChange={uiFunctionList.onChange}
						/>
						<ButtonPrimary
							text='정답제출'
							style={{ marginLeft: "202px", marginTop: "15px" }}
							onClick={uiFunctionList.checkAnswer}
						/>
						<AnwerText
							firstAnswer={firstAnswer}
							secondAnswer={secondAnswer}
							thirdAnswer={thirdAnswer}
						>
							{firstAnswer === false || secondAnswer === false || thirdAnswer === false
								? "다시 한번 생각해 볼까요?"
								: "정답입니다!"}
						</AnwerText>
					</RightBox>
				</>
			) : (
				<VideoArea>영상</VideoArea>
			)}
		</>
	);
};

const VideoArea = styled.div`
	width: 944px;
	height: 388px;
	border-radius: 2px;
	box-shadow: 0 0 10px 0 rgba(15, 15, 21, 0.05);
	background-color: #ffffff;
	position: absolute;
	top: 181px;
	left: 0;
`;
const LeftBox = styled.div`
	width: 624px;
	height: 362px;
	margin-top: 20px;
	border-radius: 2px;
	box-shadow: 0 0 10px 0 rgba(15, 15, 21, 0.05);
	background-color: #ffffff;
	padding-top: 26px;
`;
const LeftInsideBox = styled.div`
	width: 572px;
	height: 336px;
	border-radius: 2px;
	border: solid 1px #e4e4e4;
	margin-left: 26px;
	margin-right: 26px;
`;
const RightBox = styled.div`
	width: 304px;
	height: 388px;
	border: ${(props) =>
		props.firstAnswer !== null &&
		props.secondAnswer !== null &&
		props.thirdAnswer !== null
			? props.firstAnswer === false ||
			  props.secondAnswer === false ||
			  props.thirdAnswer === false
				? "1px solid red"
				: "1px solid yellow"
			: "1px solid white"};
	border-radius: 2px;
	box-shadow: 0 0 10px 0 rgba(15, 15, 21, 0.05);
	background-color: #ffffff;
	position: absolute;
	top: 181px;
	right: 0;
`;
const TitleContainer = styled.div`
	width: 228px;
	height: 24px;
	font-family: "NotoSansCJKkr";
	font-size: 18px;
	font-weight: 500;
	font-stretch: normal;
	font-style: normal;
	line-height: 1.33;
	letter-spacing: normal;
	color: #0f0f15;
	margin-left: 24px;
	margin-top: 26px;
`;
const ContentContainer = styled.div`
	width: 256px;
	height: 66px;
	font-family: "NotoSansCJKkr";
	font-size: 14px;
	font-weight: normal;
	font-stretch: normal;
	font-style: normal;
	line-height: 1.57;
	letter-spacing: normal;
	color: #0f0f15;
	margin-left: 24px;
	margin-top: 18px;
	margin-bottom: 7px;
`;
const AnwerText = styled.div`
	display: ${(props) =>
		props.firstAnswer === null &&
		props.secondAnswer === null &&
		props.thirdAnswer === null
			? "none"
			: "show"};
`;

export default Default;
