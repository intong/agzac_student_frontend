import React from "react";
import styled from "styled-components";
import ReactPlayer from "react-player";
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
	setProcessFunction,
	selectTabContent,
	choosed,
	firstAnswer,
	secondAnswer,
	thirdAnswer,
	firstInputText,
	secondsInputText,
	thirdInputText,
	uiFunctionList,
}) => {
	// 화면 왼쪽 카드 텍스트 랜덤값 텍스트 배치
	const arrayPosition = [
		{ left: "382px", top: "57px" },
		{ left: "324px", top: "128px" },
		{ left: "20px", top: "75px" },
		{ left: "470px", top: "192px" },
		{ left: "304px", top: "20px" },
		{ left: "460px", top: "297px" },
		{ left: "133px", top: "175px" },
		{ left: "10px", top: "147px" },
		{ left: "319px", top: "200px" },
		{ left: "380px", top: "255px" },
		{ left: "94px", top: "32px" },
		{ left: "193px", top: "245px" },
		{ left: "231px", top: "67px" },
		{ left: "224px", top: "310px" },
		{ left: "471px", top: "111px" },
		{ left: "26px", top: "219px" },
		{ left: "160px", top: "125px" },
		{ left: "45px", top: "290px" },
	];
	return (
		<>
			{choosed ? (
				<>
					<LeftBox>
						<LeftInsideBox>
							<LeftInsideText
								style={{
									position: "absolute",
									left: arrayPosition[0].left,
									top: arrayPosition[0].top,
								}}
							>
								녹아내리는 빙하
							</LeftInsideText>
							<LeftInsideText
								style={{
									position: "absolute",
									left: arrayPosition[1].left,
									top: arrayPosition[1].top,
								}}
							>
								독거노인 증가
							</LeftInsideText>
							<LeftInsideText
								style={{
									position: "absolute",
									left: arrayPosition[2].left,
									top: arrayPosition[2].top,
								}}
							>
								교통사고
							</LeftInsideText>
							<LeftInsideText
								style={{
									position: "absolute",
									left: arrayPosition[3].left,
									top: arrayPosition[3].top,
								}}
							>
								사라지는 섬
							</LeftInsideText>
							<LeftInsideText
								style={{
									position: "absolute",
									left: arrayPosition[4].left,
									top: arrayPosition[4].top,
								}}
							>
								고독사 증가
							</LeftInsideText>
							<LeftInsideText
								style={{
									position: "absolute",
									left: arrayPosition[5].left,
									top: arrayPosition[5].top,
								}}
							>
								전염병
							</LeftInsideText>
							<LeftInsideText
								style={{
									position: "absolute",
									left: arrayPosition[6].left,
									top: arrayPosition[6].top,
								}}
							>
								이산화탄소 발생증가
							</LeftInsideText>
							<LeftInsideText
								style={{
									position: "absolute",
									left: arrayPosition[7].left,
									top: arrayPosition[7].top,
								}}
							>
								출생률 감소
							</LeftInsideText>
							<LeftInsideText
								style={{
									position: "absolute",
									left: arrayPosition[8].left,
									top: arrayPosition[8].top,
								}}
							>
								범죄발생 증가
							</LeftInsideText>
							<LeftInsideText
								style={{
									position: "absolute",
									left: arrayPosition[9].left,
									top: arrayPosition[9].top,
								}}
							>
								이상기후
							</LeftInsideText>
							<LeftInsideText
								style={{
									position: "absolute",
									left: arrayPosition[10].left,
									top: arrayPosition[10].top,
								}}
							>
								사라지는 도시
							</LeftInsideText>
							<LeftInsideText
								style={{
									position: "absolute",
									left: arrayPosition[11].left,
									top: arrayPosition[11].top,
								}}
							>
								아동 실종
							</LeftInsideText>
							<LeftInsideText
								style={{
									position: "absolute",
									left: arrayPosition[12].left,
									top: arrayPosition[12].top,
								}}
							>
								수질오염
							</LeftInsideText>
							<LeftInsideText
								style={{
									position: "absolute",
									left: arrayPosition[13].left,
									top: arrayPosition[13].top,
								}}
							>
								낮아지는 국가성장율
							</LeftInsideText>
							<LeftInsideText
								style={{
									position: "absolute",
									left: arrayPosition[14].left,
									top: arrayPosition[14].top,
								}}
							>
								음주 운전
							</LeftInsideText>
							<LeftInsideText
								style={{
									position: "absolute",
									left: arrayPosition[15].left,
									top: arrayPosition[15].top,
								}}
							>
								쓰레기증가
							</LeftInsideText>
							<LeftInsideText
								style={{
									position: "absolute",
									left: arrayPosition[16].left,
									top: arrayPosition[16].top,
								}}
							>
								노동력 상실
							</LeftInsideText>
							<LeftInsideText
								style={{
									position: "absolute",
									left: arrayPosition[17].left,
									top: arrayPosition[17].top,
								}}
							>
								자연재해
							</LeftInsideText>
						</LeftInsideBox>
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
							value={firstInputText ? firstInputText : ""}
							onChange={uiFunctionList.onChange}
						/>
						<InputDefault
							name='second'
							style={inputStyle}
							wrong={secondAnswer}
							value={secondsInputText ? secondsInputText : ""}
							onChange={uiFunctionList.onChange}
						/>
						<InputDefault
							name='third'
							style={inputStyle}
							wrong={thirdAnswer}
							value={thirdInputText ? thirdInputText : ""}
							onChange={uiFunctionList.onChange}
						/>
						{firstAnswer && secondAnswer && thirdAnswer ? (
							<ButtonPrimary
								text='다음단계'
								style={{ marginLeft: "202px", marginTop: "15px" }}
								onClick={setProcessFunction}
							/>
						) : (
							<ButtonPrimary
								text='정답제출'
								style={{ marginLeft: "202px", marginTop: "15px" }}
								onClick={uiFunctionList.checkAnswer}
							/>
						)}
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
			) : selectTabContent === undefined ? (
				<VideoArea>
					<div
						style={{
							width: "300px",
							height: "50px",
							margin: "auto",
							paddingLeft: "70px",
							paddingTop: "180px",
						}}
					>
						테마를 선택하면 영상을 볼 수 있습니다
					</div>
				</VideoArea>
			) : (
				<VideoArea>
					<ReactPlayer url={selectTabContent.video} width='100%' height='100%' />
				</VideoArea>
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
	position: relative;
`;
const LeftInsideText = styled.div`
	font-family: NotoSansCJKkr;
	font-size: 20px;
	font-weight: 500;
	color: #686868;
`;
const RightBox = styled.div`
	width: 304px;
	height: 388px;
	border: ${(props) =>
		props.firstAnswer === true &&
		props.secondAnswer === true &&
		props.thirdAnswer === true
			? "1px solid #ffc300"
			: ""};
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
	font-family: NotoSansCJKkr;
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
	font-family: NotoSansCJKkr;
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
	text-align: justify;
`;
const AnwerText = styled.div`
	position: absolute;
	bottom: 33px;
	left: 24px;
	font-family: NotoSansCJKkr;
	font-size: 14px;
	font-weight: 500;
	font-stretch: normal;
	font-style: normal;
	line-height: normal;
	letter-spacing: normal;
	display: ${(props) =>
		props.firstAnswer === undefined &&
		props.secondAnswer === undefined &&
		props.thirdAnswer === undefined
			? "none"
			: "show"};
	color: ${(props) =>
		props.firstAnswer === true &&
		props.secondAnswer === true &&
		props.thirdAnswer === true
			? "#ffc300"
			: "#ff3737"};
`;

export default Default;
