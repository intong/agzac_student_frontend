import React from "react";
import styled from "styled-components";
import Footer from "../../layout/Footer";
import { InputDefault } from "../../ui/inputBox/Input";
import { ButtonPrimary } from "../../ui/button/Button";
import {
	ModalBaseTwoBtn,
	ModalBase,
	LoadingModal,
	ModalTwoBtnLong,
} from "../../ui/modal/Modal";

const inputStyle = {
	width: "244px",
	height: "42px",
	border: "solid 1px #e4e4e4",
	background: "#fcfcfc",
	marginLeft: "24px",
};

const MainVideoPresenter = ({
	companyName,
	secretCode,
	hasDataModal,
	isModalOpen,
	answerFalseModal,
	mediaAndSecretCode,
	modalFunction,
	functionList,
}) => {
	return (
		<>
			{mediaAndSecretCode && (
				<Wrapper>
					<BlockTop>
						<TopContent>
							<TextDivTop>EY한영 아그작교실 영상시청</TextDivTop>
							<TextDivMiddle>
								기업을 설립하고 운영하기 위해 영상을 반드시 시청해주세요.
							</TextDivMiddle>
							<TextDivBottom>
								영상을 시청한 후 나만의 기업 이름을 만들고,
								<br />
								영상 속에서 제시한 비밀코드를 입력한 후 정답 제출을 진행해 주세요!
							</TextDivBottom>
						</TopContent>
					</BlockTop>
					<BlockBottom>
						<BottomContent>
							<LeftBox>
								<VideoPlayArea>{mediaAndSecretCode.media}</VideoPlayArea>
							</LeftBox>
							<RightBox>
								<TitleText>기업이름과 비밀코드 입력</TitleText>
								<HeaderText>새롭게 설립할 기업의 이름을 입력해주세요.</HeaderText>
								<InputDefault
									id='companyName'
									style={inputStyle}
									value={companyName === undefined ? "" : companyName}
									onChange={functionList.onChangeCompanyName}
								/>
								<HeaderText style={{ marginTop: "16px" }}>
									영상에서 제시한 비밀코드를 입력해주세요.
								</HeaderText>
								<InputDefault
									id='secretCode'
									style={inputStyle}
									value={secretCode === undefined ? "" : secretCode}
									onChange={functionList.onChangeSecretCode}
								/>
								<ButtonPrimary
									text='정답제출'
									style={{ marginTop: "84px", marginLeft: "200px" }}
									onClick={functionList.onSubmit}
								/>
							</RightBox>
						</BottomContent>
					</BlockBottom>
					<Footer />
				</Wrapper>
			)}
			{/* 임시저장모달 */}
			{isModalOpen && (
				<ModalWrapper>
					<ModalArea>
						<ModalBaseTwoBtn
							header='임시 저장 하기'
							content='지금까 입력한 정보가 저장 됩니다.'
							confirmbtntext='확인'
							cancelbtntext='취소'
							confirmbtnEvent={modalFunction.tempSaveSheet}
							cancelbtnEvent={modalFunction.toggleModal}
						/>
					</ModalArea>
				</ModalWrapper>
			)}

			{/* 정답 알림 모달 */}
			{}

			{/* 오답 알림 모달 */}
			{answerFalseModal && (
				<ModalWrapper>
					<ModalArea>
						<ModalBase
							header='비밀코드 오답!'
							content='비밀코드가 틀렸습니다. 다시 입력해 주세요.'
							btntext='확인'
							btnEvent={modalFunction.toggleAnswerFalseModal}
							closeModalEvent={modalFunction.toggleAnswerFalseModal}
						/>
					</ModalArea>
				</ModalWrapper>
			)}
			{/* 임시저장 데이터가 있는 지 확인하고 있으면 띄우는 모달 */}
			{hasDataModal === undefined ? (
				<ModalWrapper>
					<ModalArea>
						<LoadingModal />
					</ModalArea>
				</ModalWrapper>
			) : hasDataModal === true ? (
				<ModalWrapper>
					<ModalArea>
						<ModalTwoBtnLong
							header='저장된 데이터 불러오기'
							content='이미 작성된 데이터가 있습니다. 저장된 데이터를 불러올까요?'
							closeModalEvent={modalFunction.toggleHasDataModal}
							confirmBtnOnClick={modalFunction.useTempData}
							cancelBtnOnClick={modalFunction.toggleHasDataModal}
						/>
					</ModalArea>
				</ModalWrapper>
			) : (
				<></>
			)}
		</>
	);
};

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

const Wrapper = styled.div`
	/* background: lightgreen; */
	min-width: 1024px;
	max-width: 1920px;
`;

const BlockTop = styled.div`
	background: #e4e4e4;
	min-width: 1024px;
	max-width: 1920px;
	height: 206px;
	margin: 0 auto;
`;
const TopContent = styled.div`
	width: 944px;
	height: 206px;
	margin: 0 auto;
`;

const BlockBottom = styled.div`
	background: #f7f7f7;
	/* background: red; */
	min-width: 1024px;
	max-width: 1920px;
	margin: 0 auto;
`;
const BottomContent = styled.div`
	width: 944px;
	min-height: 457px;
	max-height: 492px;
	margin: 0 auto;
	position: relative;
`;

const TextDivTop = styled.div`
	width: 165px;
	height: 20px;
	font-size: 14px;
	font-weight: 500;
	color: #0f0f15;
	padding-top: 40px;
`;
const TextDivMiddle = styled.div`
	width: 641px;
	height: 38px;
	font-size: 26px;
	font-weight: 500;
	color: #0f0f15;
	margin-top: 5px;
`;
const TextDivBottom = styled.div`
	width: 944px;
	height: 44px;
	opacity: 0.8;
	font-size: 14px;
	font-weight: 500;
	line-height: 1.57;
	color: #0f0f15;
	margin-top: 10px;
`;

const LeftBox = styled.div`
	width: 624px;
	height: 388px;
	background: #ffffff;
	/* background: red; */
	border-radius: 2px;
	box-shadow: 0 0 10px 0 rgba(15, 15, 21, 0.05);
	position: absolute;
	top: 39px;
`;

const VideoPlayArea = styled.div`
	width: 572px;
	height: 336px;
	border-radius: 2px;
	border: solid 1px #e4e4e4;
	margin: 26px;
`;

const RightBox = styled.div`
	width: 304px;
	height: 388px;
	border-radius: 2px;
	box-shadow: 0 0 10px 0 rgba(15, 15, 21, 0.05);
	background-color: #ffffff;
	position: absolute;
	top: 39px;
	left: 640px;
`;

const TitleText = styled.div`
	width: 191px;
	height: 24px;
	font-size: 18px;
	font-weight: 500;
	line-height: 1.33;
	color: #0f0f15;
	margin-left: 24px;
	margin-top: 26px;
	margin-bottom: 18px;
`;
const HeaderText = styled.div`
	width: 256px;
	height: 22px;
	font-size: 14px;
	line-height: 1.57;
	color: #0f0f15;
	margin-left: 24px;
	margin-bottom: 14px;
`;

export default MainVideoPresenter;
