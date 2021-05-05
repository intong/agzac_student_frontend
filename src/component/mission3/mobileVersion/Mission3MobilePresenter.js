import React from "react";
import styled from "styled-components";
import ReactPlayer from "react-player";
import checked from "../../../assets/icons/checkedBtn.svg";
import unchecked from "../../../assets/icons/uncheckedBtn.svg";
import { ButtonSecondary } from "../../../ui/button/Button";
import nextIcon from "../../../assets/mobileImage/icn-next-dim@2x.png";
import btnJobs from "../../../assets/icons/btn-floaing-jobs.svg";
import { HelpModalMobile } from "../../../ui/modal/Modal";

const Mission3MobilePresenter = ({
	isOpen,
	choosed,
	selectTab,
	selectTabContent,
	mobileFunction,
	modalFunction,
	uiFunctionList,
}) => {
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
				<VideoPlayArea>
					{selectTabContent ? (
						<ReactPlayer
							url={selectTabContent.video}
							width='100%'
							height='100%'
							controls={true}
						/>
					) : (
						<div style={{ width: "90vw", textAlign: "center", marginTop: "14vh" }}>
							테마를 선택하면 영상을 볼 수 있습니다.
						</div>
					)}
				</VideoPlayArea>
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
						onClick={uiFunctionList.clickFinalChoice}
					/>
					<NextIcon src={nextIcon} />
				</ButtonDiv>
			</BottomContent>
			<JobsBtn src={btnJobs} alt='직업버튼' onClick={modalFunction.openModal} />
			{/* 잡카드 모달 */}
			{isOpen && (
				<ModalWrapper>
					<ModalArea>
						<HelpModalMobile modalFunction={modalFunction} />
					</ModalArea>
				</ModalWrapper>
			)}
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
const VideoPlayArea = styled.div`
	width: 90vw;
	height: 30vh;
	border-radius: 2px;
	border: solid 1px #e4e4e4;
	margin: 0 auto;
	margin-top: 3vh;
	margin-bottom: 5vh;
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
const JobsBtn = styled.img`
	width: 13vw;
	height: 13vh;
	position: fixed;
	bottom: 7vh;
	right: 3.5vw;
	filter: drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.2));
	&:hover {
		cursor: pointer;
	}
`;
const ModalWrapper = styled.div`
	width: 100vw;
	height: 100vh;
	background: rgba(15, 15, 21, 0.8);
	position: fixed;
	top: 0px;
	display: flex;
	z-index: 20;
`;
const ModalArea = styled.div`
	/* background: red; */
	background: #ffffff;
	width: 72vw;
	height: 56vh;
	border-radius: 5px;
	box-shadow: 0 0 10px 0 rgba(15, 15, 21, 0.05);
	margin: 0 auto;
	margin-top: 15vh;
	padding: 2vh 4vw;
	position: relative;
`;
export default Mission3MobilePresenter;
