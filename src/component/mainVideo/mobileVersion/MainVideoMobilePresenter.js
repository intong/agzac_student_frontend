import React from "react";
import styled from "styled-components";
import ReactPlayer from "react-player";
import nextIcon from "../../../assets/mobileImage/icn-next-dim@2x.png";
import { ButtonSecondary } from "../../../ui/button/Button";
import { LoadingModal, ModalTwoBtnLong } from "../../../ui/modal/Modal";

const MainVideoMobilePresenter = ({
	hasDataModal,
	modalFunction,
	mediaAndSecretCode,
	mobileFunctionList,
}) => {
	return (
		<Wrapper>
			<ProcessArea>
				<CircleDiv>
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
					<MiddleBar />
					<Circle />
				</CircleDiv>
			</ProcessArea>
			<TopContent>
				<TextDivTop>EY한영 아그작교실 영상시청</TextDivTop>
				<TextDivMiddle>
					기업을 설립하고 운영하기 위해 영상을 반드시 시청해주세요.
				</TextDivMiddle>
				<TextDivBottom>
					영상을 시청한 후 나만의 기업 이름을 만들고, 영상 속에서 제시한 비밀코드를
					입력한 후 정답 제출을 진행해 주세요!
				</TextDivBottom>
			</TopContent>
			<BottomContent>
				<VideoPlayArea>
					<ReactPlayer
						url={mediaAndSecretCode.openingMedia}
						width='100%'
						height='100%'
					/>
				</VideoPlayArea>
				<ButtonDiv>
					<ButtonSecondary
						text='기업이름과 비밀코드 입력'
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
			{/* 임시저장 데이터가 있는 지 확인하고 있으면 띄우는 모달 */}
			{hasDataModal === undefined ? (
				<ModalWrapper>
					<ModalArea>
						<LoadingModal style={{ marginLeft: "15vw", marginBottom: "20vh" }} />
					</ModalArea>
				</ModalWrapper>
			) : hasDataModal === true ? (
				<ModalWrapper>
					<ModalArea>
						<ModalTwoBtnLong
							header='저장된 데이터 불러오기'
							content='이미 작성된 데이터가 있습니다. 저장된 데이터를 불러올까요?'
							confirmBtnOnClick={modalFunction.useTempData}
							cancelBtnOnClick={modalFunction.cleanAllMission}
						/>
					</ModalArea>
				</ModalWrapper>
			) : (
				<></>
			)}
		</Wrapper>
	);
};

const Wrapper = styled.div`
	width: 100vw;
	overflow-x: hidden;
	overflow-y: auto;
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
const ProcessArea = styled.div`
	background: #e4e4e4;
	width: 100vw;
	height: 38px;
	position: relative;
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
	width: 300px;
	margin: auto;
	margin-top: 20px;
`;
const TextDivBottom = styled.div`
	font-family: NotoSansCJKkr;
	font-size: 14px;
	line-height: 1.57;
	color: #0f0f15;
	width: 300px;
	margin: auto;
	margin-top: 20px;
	text-align: justify;
	padding-bottom: 30px;
`;
const BottomContent = styled.div`
	background: #f4f5f6;
	position: relative;
	padding-top: 30px;
	height: 35vh;
`;
const VideoPlayArea = styled.div`
	border-radius: 2px;
	border: solid 1px #e4e4e4;
	width: 80vw;
	height: 25vh;
	margin: auto;
`;
const ButtonDiv = styled.div`
	position: fixed;
	bottom: 0px;
	left: 0px;
`;
const NextIcon = styled.img`
	position: absolute;
	top: 31%;
	right: 24%;
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
	margin: auto;
`;

export default MainVideoMobilePresenter;
