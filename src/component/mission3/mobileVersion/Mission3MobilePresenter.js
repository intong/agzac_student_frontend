import React from "react";
import styled from "styled-components";
import { DropboxMobile } from "../../../ui/MobileUI";
import { ButtonSecondary } from "../../../ui/button/Button";
import nextIcon from "../../../assets/mobileImage/icn-next-dim@2x.png";

const Mission3MobilePresenter = () => {
	const options = ["기후변화와 환경", "고령화 사회", "재난과 안전"];
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
				<SubText>
					사회문제 설명영상을 시청한 후 우리 기업이 해결하고 싶은 사회문제 테마
					1가지를 최종 선택해주세요.
				</SubText>
				<DropboxMobile
					options={options}
					placeholder='사회문제 선택'
					style={{ marginLeft: "10vw" }}
				/>
				<VideoPlayArea>영상</VideoPlayArea>
				<ButtonDiv>
					<ButtonSecondary
						text='사회문제 최종선택'
						style={{
							width: "100vw",
							height: "8vh",
							fontFamily: "NotoSansCJKkr",
							fontSize: "14px",
							fontWeight: "500",
							textAlign: "center",
							color: "#0f0f15",
						}}
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
	margin: auto;
	margin-bottom: 3vh;
`;
const VideoPlayArea = styled.div`
	width: 90vw;
	height: 30vh;
	border-radius: 2px;
	border: solid 1px #e4e4e4;
	margin: 0 auto;
	margin-top: 3vh;
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
export default Mission3MobilePresenter;
