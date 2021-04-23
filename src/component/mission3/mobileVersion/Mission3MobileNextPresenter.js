import React from "react";
import styled from "styled-components";
import { ButtonPrimary } from "../../../ui/button/Button";
import { InputDefault } from "../../../ui/inputBox/Input";
import nextIcon from "../../../assets/mobileImage/icn-next-dim@2x.png";
import checked from "../../../assets/icons/checkedBtn.svg";
import unchecked from "../../../assets/icons/uncheckedBtn.svg";

const inputStyle = {
	width: "85vw",
	height: "6vh",
	borderRadius: "2px",
	border: "solid 1px #e4e4e4",
	backgroundColor: "#fcfcfc",
	margin: "7px 0 7px 24px",
};

const Mission3MobileNextPresenter = ({
	choosed,
	selectTab,
	firstAnswer,
	secondAnswer,
	thirdAnswer,
	firstInputText,
	secondsInputText,
	thirdInputText,
	uiFunctionList,
	setProcessFunction,
}) => {
	// 화면 왼쪽 카드 텍스트 랜덤값 텍스트 배치
	const arrayPosition = [
		{ left: "1vw", top: "3vh" },
		{ left: "6vw", top: "40vh" },
		{ left: "60vw", top: "23vh" },
		{ left: "70vw", top: "3vh" },
		{ left: "68vw", top: "30vh" },
		{ left: "11vw", top: "33vh" },
		{ left: "50vw", top: "17vh" },
		{ left: "3vw", top: "11vh" },
		{ left: "30vw", top: "1vh" },
		{ left: "65vw", top: "40vh" },
		{ left: "37vw", top: "10vh" },
		{ left: "18vw", top: "19vh" },
		{ left: "33vw", top: "28vh" },
		{ left: "29vw", top: "33vh" },
		{ left: "31vw", top: "40vh" },
		{ left: "41vw", top: "46vh" },
		{ left: "5vw", top: "25vh" },
		{ left: "2vw", top: "30vh" },
	];

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
							background: "#ffc300",
							opacity: "1",
							border: "1px solid #0f0f15",
						}}
					/>
					<MiddleBar />
					<Circle />
					<MiddleBar />
					<Circle />
				</CircleDiv>
			</ProcessArea>
			<TopContent>
				<TextDivTop>Mission 03</TextDivTop>
				<TextDivMiddle>사회 문제를 발견해 주세요!</TextDivMiddle>
				<TextDivBottom>
					지금부터는 우리에게 일어나고 있거나, 미래에 일어날 다양한 사회문제들을
					찾아보고 분석하는 작업을 진행할 것입니다. 우리 기업이 해결하고자 하는
					사회문제를 찾아보고 분석해봅시다! 제시된 사회문제 테마 3가지 중 1가지를
					선택하여 관련 영상을 시청하고, 선택한 사회문제와 관련된 키워드를
					찾아주세요!
				</TextDivBottom>
			</TopContent>
			<BottomContent>
				<BottomTextTile>사회문제 선정하고 분석하기</BottomTextTile>
				<SubText>선택한 사회문제를 분석해 주세요.</SubText>
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
					<Tabs>
						<Tab1
							selectTab={selectTab}
							onClick={() =>
								choosed === false && uiFunctionList.tabSelectFunction("tab1")
							}
						>
							<div
								style={{
									width: "20px",
									height: "20px",
									position: "absolute",
									top: "15px",
									left: "3vw",
								}}
							>
								<img src={selectTab === "tab1" ? checked : unchecked} alt='체크버튼' />
							</div>
							<Tab1Title selectTab={selectTab}>기후변화와 환경</Tab1Title>
						</Tab1>
						<Tab2
							selectTab={selectTab}
							onClick={() =>
								choosed === false && uiFunctionList.tabSelectFunction("tab2")
							}
						>
							<div
								style={{
									width: "20px",
									height: "20px",
									position: "absolute",
									top: "2vh",
									left: "3vw",
								}}
							>
								<img src={selectTab === "tab2" ? checked : unchecked} alt='미체크' />
							</div>
							<Tab2Title selectTab={selectTab}>고령화 사회</Tab2Title>
						</Tab2>
						<Tab3
							selectTab={selectTab}
							onClick={() =>
								choosed === false && uiFunctionList.tabSelectFunction("tab3")
							}
						>
							<div
								style={{
									width: "20px",
									height: "20px",
									position: "absolute",
									top: "15px",
									left: "3vw",
								}}
							>
								<img src={selectTab === "tab3" ? checked : unchecked} alt='체크버튼' />
							</div>
							<Tab3Title selectTab={selectTab}>재난과 안전</Tab3Title>
						</Tab3>
					</Tabs>
					<AnwerText
						firstAnswer={firstAnswer}
						secondAnswer={secondAnswer}
						thirdAnswer={thirdAnswer}
					>
						{firstAnswer === false || secondAnswer === false || thirdAnswer === false
							? "다시 한번 생각해 볼까요?"
							: "정답입니다!"}
					</AnwerText>
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
				</RightBox>
				<ButtonDiv>
					{firstAnswer && secondAnswer && thirdAnswer ? (
						<ButtonPrimary
							text='다음 단계'
							style={{
								width: "100vw",
								height: "8vh",
								fontFamily: "NotoSansCJKkr",
								fontSize: "14px",
								fontWeight: "500",
								textAlign: "center",
							}}
							onClick={setProcessFunction}
						/>
					) : (
						<ButtonPrimary
							text='정답 제출'
							style={{
								width: "100vw",
								height: "8vh",
								fontFamily: "NotoSansCJKkr",
								fontSize: "14px",
								fontWeight: "500",
								textAlign: "center",
							}}
							onClick={uiFunctionList.checkAnswer}
						/>
					)}

					<NextIcon src={nextIcon} />
				</ButtonDiv>
			</BottomContent>
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
	line-height: 1;
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
const BottomContent = styled.div`
	background: #f4f5f6;
	position: relative;
	padding-top: 30px;
	padding-bottom: 8vh;
`;
const BottomTextTile = styled.div`
	font-family: NotoSansCJKkr;
	font-size: 18px;
	font-weight: 500;
	line-height: 1.33;
	color: #0f0f15;
	width: 80vw;
	margin: auto;
	margin-bottom: 3vh;
`;
const SubText = styled.div`
	font-size: 14px;
	font-weight: 500;
	line-height: 1.33;
	opacity: 0.8;
	color: #0f0f15;
	width: 80vw;
	margin: 0 auto;
	margin-bottom: 3vh;
`;
const ButtonDiv = styled.div`
	position: fixed;
	bottom: 0px;
	left: 0px;
`;
const NextIcon = styled.img`
	position: absolute;
	top: 31%;
	right: 29vw;
	width: 24px;
	height: 24px;
`;
const LeftBox = styled.div`
	width: 100vw;
	height: 54vh;
	margin-top: 20px;
	border-radius: 2px;
	box-shadow: 0 0 10px 0 rgba(15, 15, 21, 0.05);
	background-color: #ffffff;
	padding-top: 26px;
`;
const LeftInsideBox = styled.div`
	width: 90vw;
	height: 54vh;
	margin-left: 26px;
	margin-right: 26px;
	position: relative;
`;
const LeftInsideText = styled.div`
	font-family: NotoSansCJKkr;
	font-size: 14px;
	font-weight: 500;
	color: #686868;
`;
const RightBox = styled.div`
	width: 100vw;
	height: 65vh;
	border: ${(props) =>
		props.firstAnswer === true &&
		props.secondAnswer === true &&
		props.thirdAnswer === true
			? "1px solid #ffc300"
			: ""};
	border-radius: 2px;
	box-shadow: 0 0 10px 0 rgba(15, 15, 21, 0.05);
	background-color: #ffffff;
	padding-bottom: 30vh;
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
	box-sizing: border-box;
	margin-left: 24px;
	margin-top: 3vh;
	padding-top: 2vh;
`;
const ContentContainer = styled.div`
	width: 88vw;
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
	margin-top: 6vh;
	margin-bottom: 3vh;
	text-align: justify;
`;
const AnwerText = styled.div`
	font-family: NotoSansCJKkr;
	font-size: 14px;
	font-weight: 500;
	font-stretch: normal;
	font-style: normal;
	line-height: normal;
	letter-spacing: normal;
	margin-left: 6vw;
	margin-bottom: 2vh;
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
const Tabs = styled.div`
	width: 80vw;
	margin: 0 auto;
	margin-top: 16px;
`;
const Tab1 = styled.div`
	width: 80vw;
	height: 50px;
	box-shadow: ${(props) =>
		props.selectTab === "tab1" && "0 0 10px 0 rgba(15, 15, 21, 0.1)"};
	border: ${(props) => (props.selectTab === "tab1" ? "solid 1px #686868" : "")};
	background-color: ${(props) =>
		props.selectTab === "tab1" ? "#ffffff" : "rgba(255, 255, 255, 0.5)"};
	position: relative;
	&:hover {
		cursor: pointer;
	}
`;
const Tab1Title = styled.div`
	width: 94px;
	height: 20px;
	font-family: NotoSansCJKkr;
	font-size: 14px;
	font-weight: ${(props) => (props.selectTab === "tab1" ? "500" : "normal")};
	font-stretch: normal;
	font-style: normal;
	line-height: 22.9px;
	letter-spacing: normal;
	text-align: center;
	color: ${(props) => (props.selectTab === "tab1" ? "#0f0f15" : "#686868")};
	position: absolute;
	top: 2vh;
	left: 11vw;
`;

const Tab2 = styled.div`
	width: 80vw;
	height: 50px;
	box-shadow: ${(props) =>
		props.selectTab === "tab2" && "0 0 10px 0 rgba(15, 15, 21, 0.1)"};
	border: ${(props) => (props.selectTab === "tab2" ? "solid 1px #686868" : "")};
	background-color: ${(props) =>
		props.selectTab === "tab2" ? "#ffffff" : "rgba(255, 255, 255, 0.5)"};
	position: relative;
	&:hover {
		cursor: pointer;
	}
`;
const Tab2Title = styled.div`
	width: 68px;
	height: 20px;
	font-family: NotoSansCJKkr;
	font-size: 14px;
	font-weight: ${(props) => (props.selectTab === "tab2" ? "500" : "normal")};
	font-stretch: normal;
	font-style: normal;
	line-height: 22.9px;
	letter-spacing: normal;
	color: ${(props) => (props.selectTab === "tab2" ? "#0f0f15" : "#686868")};
	position: absolute;
	top: 2vh;
	left: 11vw;
`;

const Tab3 = styled.div`
	width: 80vw;
	height: 50px;
	box-shadow: ${(props) =>
		props.selectTab === "tab3" && "0 0 10px 0 rgba(15, 15, 21, 0.1)"};
	border: ${(props) => (props.selectTab === "tab3" ? "solid 1px #686868" : "")};
	background-color: ${(props) =>
		props.selectTab === "tab3" ? "#ffffff" : "rgba(255, 255, 255, 0.5)"};
	position: relative;
	&:hover {
		cursor: pointer;
	}
`;
const Tab3Title = styled.div`
	width: 68px;
	height: 20px;
	font-family: NotoSansCJKkr;
	font-size: 14px;
	font-weight: ${(props) => (props.selectTab === "tab3" ? "500" : "normal")};
	font-stretch: normal;
	font-style: normal;
	line-height: 22.9px;
	letter-spacing: normal;
	text-align: center;
	color: ${(props) => (props.selectTab === "tab3" ? "#0f0f15" : "#686868")};
	position: absolute;
	top: 2vh;
	left: 11vw;
`;

export default Mission3MobileNextPresenter;
