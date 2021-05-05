import React from "react";
import styled from "styled-components";
import nextIcon from "../../../assets/mobileImage/icn-next-dim@2x.png";
import btnJobs from "../../../assets/icons/btn-floaing-jobs.svg";
import { ButtonSecondary } from "../../../ui/button/Button";
import { HelpModalMobile } from "../../../ui/modal/Modal";
import ClipLoader from "react-spinners/ClipLoader";

const Mission2MobilePresenter = ({
	isOpen,
	loading,
	index,
	missionQuestion,
	modalFunction,
	mobileFunctionList,
}) => {
	return (
		<LayOutContent>
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
					</CircleDiv>
				</ProcessArea>
				<TopContent>
					<TextDivTop>Mission 02</TextDivTop>
					<TextDivMiddle>
						사회문제를 해결하는 제품과 미래인재를 매칭해 보세요.
					</TextDivMiddle>
					<TextDivBottom>
						다양한 미래인재들이 협업을 하여 사회문제를 해결하는 제품이나 서비스를
						만들기 위해 자신의 전문성을 활용하여 역할을 수행합니다. 제시된 상품은 술이
						융합되어 새롭게 탄생한 상품입니다. 제시된 상품정보를 확인한 후 상품에
						사용된 기술을 보유하고 있는 미래인재를 매칭해 보세요! <br />
						<span style={{ color: "#686868" }}>
							*미래인재 입력 칸을 클릭하면 미래인재를 선택할 수 있습니다.
							미래인재정보는 아래 💡버튼을 클릭하면 확인할 수 있습니다.
						</span>
					</TextDivBottom>
				</TopContent>
				<BottomContent>
					{missionQuestion && (
						<>
							<BottomTextTile>
								상품소개&nbsp;&nbsp;({index}&nbsp;/&nbsp;4)
							</BottomTextTile>
							<Title>상품명</Title>
							<ProductName>{missionQuestion[index - 1].proName}</ProductName>
							<Title>상품설명</Title>
							<ProductDescription>
								{missionQuestion[index - 1].proDescription}
							</ProductDescription>
						</>
					)}
					<ButtonDiv>
						<ButtonSecondary
							text='미래인재 매칭'
							style={{
								width: "100vw",
								height: "8vh",
								fontFamily: "NotoSansCJKkr",
								fontSize: "14px",
								fontWeight: "500",
								textAlign: "center",
								color: "#0f0f15",
							}}
							onClick={mobileFunctionList.toggleInputPresenter}
						/>
						<NextIcon src={nextIcon} />
					</ButtonDiv>
				</BottomContent>
				<JobsBtn src={btnJobs} alt='직업버튼' onClick={modalFunction.openModal} />
			</Wrapper>
			{loading && (
				<ModalWrapper>
					<ModalAreaSave>
						<ClipLoader color={"#ffc300"} style={{ margin: "0 auto" }} />
					</ModalAreaSave>
				</ModalWrapper>
			)}
			{/* 잡카드 모달 */}
			{isOpen && (
				<ModalWrapper>
					<ModalArea>
						<HelpModalMobile modalFunction={modalFunction} />
					</ModalArea>
				</ModalWrapper>
			)}
		</LayOutContent>
	);
};

const LayOutContent = styled.div`
	width: 100vw;
`;
const Wrapper = styled.div`
	width: 100vw;
	overflow-x: hidden;
	overflow-y: auto;
	margin: 0 auto;
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
	padding-top: 5vh;
	padding-bottom: 20vh;
`;
const BottomTextTile = styled.div`
	font-family: NotoSansCJKkr;
	font-size: 1.125rem;
	font-weight: 500;
	line-height: 1.33;
	color: #0f0f15;
	width: 80vw;
	margin: auto;
`;
const Title = styled.div`
	font-size: 18px;
	font-weight: 500;
	line-height: 1.33;
	color: #0f0f15;
	width: 80vw;
	margin: auto;
	margin-top: 6vh;
	margin-bottom: 2vh;
`;
const ProductName = styled.div`
	font-size: 14px;
	font-weight: 500;
	line-height: 1.33;
	color: #0f0f15;
	width: 80vw;
	margin: auto;
`;
const ProductDescription = styled.div`
	font-size: 14px;
	font-weight: 500;
	line-height: 1.33;
	color: #0f0f15;
	width: 80vw;
	margin: auto;
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
const ModalAreaSave = styled.div`
	margin: auto;
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

export default Mission2MobilePresenter;
