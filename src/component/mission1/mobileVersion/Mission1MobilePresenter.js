import React from "react";
import styled from "styled-components";
import ReactPlayer from "react-player";
import { ButtonSecondary, ButtonPrimary } from "../../../ui/button/Button";
import nextIcon from "../../../assets/mobileImage/icn-next-dim@2x.png";
import close from "../../../assets/icons/bnt-x-24.svg";
import { jobCards } from "../../JobCards";

const Mission1MobilePresenter = ({
	prevMedia,
	nextMedia,
	modalFunction,
	answerResult,
	index,
	correctCard,
	missionQuestion,
	answerMissionCards,
	mobileFunctionList,
	answerFunctionList,
}) => {
	return (
		<>
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
						변화에 따라 다양한 직업이 사라지거나 새롭게 생겨났습니다. 지금부터
						여러분은 제시된 미래인재의 정보와 직업이름을 매칭하여 완벽한 정보를
						획득해야 합니다. 우측 하단의 💡표시를 눌러 직업이름을 확인하여 정확한
						미래인재 정보를 획득해보세요!
					</TextDivBottom>
				</TopContent>
				<BottomContent>
					<BottomTextTile>미래인재 정보</BottomTextTile>

					<ExplainContainer>
						{missionQuestion && (
							<>
								<TitleTodo>하는일</TitleTodo>
								<ExplainTodo>{missionQuestion[index - 1].todo}</ExplainTodo>
								<BarUnder />
								<TitleInterview>인터뷰</TitleInterview>
								<ExplainInterview>
									{missionQuestion[index - 1].interview}
								</ExplainInterview>
								<BarUnder />
								<TitleSubject>학과</TitleSubject>
								<ExplainSubject>{missionQuestion[index - 1].subject}</ExplainSubject>
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
			{/* 정답화면 모달 */}
			{correctCard && answerResult === true ? (
				<ModalWrapper>
					<ModalArea>
						<img
							src={close}
							alt='끄기'
							style={{ position: "absolute", right: "4vw" }}
							onClick={mobileFunctionList.ToggleCorrectModal}
						/>
						<JobTitle>
							{jobCards[answerMissionCards].title !== undefined
								? ""
								: jobCards[answerMissionCards].title}
						</JobTitle>
						<SubText>미래인재 매칭 성공!</SubText>
						<DefaultText>
							미래인재에 대해 더 알아보고 싶다면, 더 알아보기 버튼을 눌러주세요!
						</DefaultText>
						<ModalJobImg src={jobCards[answerMissionCards].imgUrl} alt='저답' />
						<ButtonSecondary
							text='더 알아보기'
							style={{
								width: "72vw",
								height: "6vh",
								position: "absolute",
								bottom: "10vh",
							}}
							onClick={modalFunction.toggleNextMediaModal}
						/>
						<ButtonPrimary
							text='다음'
							style={{
								width: "72vw",
								height: "6vh",
								position: "absolute",
								bottom: "3vh",
							}}
							onClick={mobileFunctionList.addIndex}
						/>
					</ModalArea>
				</ModalWrapper>
			) : (
				<></>
			)}
			{/* 문제 풀기 전 영상 플레이 모달 */}
			{prevMedia && (
				<ModalWrapper>
					<ModalPrevNextMediaArea>
						<CloseBtn src={close} onClick={modalFunction.togglePrevMediaModal} />

						<ReactPlayer
							url={missionQuestion && missionQuestion[index - 1].prev}
							width='100%'
							height='100%'
						/>
					</ModalPrevNextMediaArea>
				</ModalWrapper>
			)}
			{/* 문제 푼 후 영상 플레이 모달 */}
			{nextMedia && (
				<ModalWrapper>
					<ModalPrevNextMediaArea>
						<CloseBtn src={close} onClick={modalFunction.toggleNextMediaModal} />

						<ReactPlayer
							url={missionQuestion && missionQuestion[index - 1].next}
							width='100%'
							height='100%'
						/>
					</ModalPrevNextMediaArea>
				</ModalWrapper>
			)}
		</>
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
	overflow: auto;
	padding: 14px;
`;
const TitleTodo = styled.div`
	width: 39px;
	height: 20px;
	font-family: NotoSansCJKkr;
	font-size: 14px;
	font-weight: 500;
	line-height: 1.43;
	color: #0f0f15;
	margin-bottom: 10px;
`;
const ExplainTodo = styled.div`
	width: 71vw;
	font-family: NotoSansCJKkr;
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
	font-family: NotoSansCJKkr;
	font-size: 14px;
	font-weight: 500;
	line-height: 1.43;
	color: #0f0f15;
	margin-bottom: 10px;
`;
const ExplainInterview = styled.div`
	width: 71vw;
	font-family: NotoSansCJKkr;
	font-size: 14px;
	line-height: 1.57;
	color: #0f0f15;
	text-align: justify;
	margin-bottom: 12px;
`;
const TitleSubject = styled.div`
	width: 26px;
	height: 20px;
	font-family: NotoSansCJKkr;
	font-size: 14px;
	font-weight: 500;
	line-height: 1.43;
	color: #0f0f15;
	margin-bottom: 10px;
`;
const ExplainSubject = styled.div`
	width: 71vw;
	font-family: NotoSansCJKkr;
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
const ModalJobImg = styled.img`
	/* border: 1px solid red; */
	width: 50vw;
	margin: 0 auto;
	position: absolute;
	bottom: 17vh;
	left: 15vw;
`;
const JobTitle = styled.div`
	font-family: NotoSansCJKkr;
	font-size: 18px;
	font-weight: 500;
	line-height: 1.33;
	color: #0f0f15;
	position: absolute;
	top: 5vh;
	left: 10vw;
`;
const SubText = styled.div`
	font-family: NotoSansCJKkr;
	font-size: 18px;
	font-weight: 500;
	line-height: 1.33;
	color: #0f0f15;
	position: absolute;
	top: 2vh;
	left: 10vw;
`;
const DefaultText = styled.div`
	font-family: sNotoSansCJKkr;
	font-size: 14px;
	font-weight: 500;
	line-height: 1.33;
	color: #0f0f15;
	width: 55vw;
	position: absolute;
	top: 7vh;
	left: 10vw;
	z-index: 2;
`;
const ModalPrevNextMediaArea = styled.div`
	width: 90vw;
	height: 40vh;
	border-radius: 2px;
	box-shadow: 0 0 10px 0 rgba(15, 15, 21, 0.05);
	background: #ffffff;
	margin: auto;
	position: relative;
`;
const CloseBtn = styled.img`
	/* background: red; */
	width: 24px;
	height: 24px;
	filter: invert(100%);
	position: absolute;
	top: -5vh;
	right: 3vw;
	&:hover {
		cursor: pointer;
	}
`;
export default Mission1MobilePresenter;
