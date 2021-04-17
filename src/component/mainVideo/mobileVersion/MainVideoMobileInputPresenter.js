import React from "react";
import styled from "styled-components";
import { InputDefault } from "../../../ui/inputBox/Input";
import { ButtonPrimary } from "../../../ui/button/Button";
import { ModalBase, ModalBaseTwoBtn } from "../../../ui/modal/Modal";
import close from "../../../assets/icons/bnt-x-24.svg";

const MainVideoMobileInputPresenter = ({
	isModalOpen,
	companyName,
	secretCode,
	answerFalseModal,
	mobileFunctionList,
	functionList,
	modalFunction,
}) => {
	return (
		<Wrapper>
			<CloseImg src={close} onClick={mobileFunctionList.inputPageHandler} />
			<RightBox>
				<TitleText>기업이름과 비밀코드 입력</TitleText>
				<HeaderText>새롭게 설립할 기업의 이름을 입력해주세요.</HeaderText>
				<InputDefault
					id='companyName'
					style={{
						borderRadius: "2px",
						border: "1px solid #e4e4e4",
						background: "#fcfcfc",
						width: "80vw",
						height: "42px",
						marginTop: "14px",
					}}
					value={companyName === undefined ? "" : companyName}
					onChange={functionList.onChangeCompanyName}
				/>
				<HeaderText>영상에서 제시한 비밀코드를 입력해주세요.</HeaderText>
				<InputDefault
					id='secretCode'
					style={{
						borderRadius: "2px",
						border: "1px solid #e4e4e4",
						background: "#fcfcfc",
						width: "80vw",
						height: "42px",
						marginTop: "14px",
					}}
					value={secretCode === undefined ? "" : secretCode}
					onChange={functionList.onChangeSecretCode}
				/>
			</RightBox>
			<ButtonPrimary
				text='정답제출'
				style={{ position: "fixed", bottom: "0px", width: "100vw", height: "8vh" }}
				onClick={functionList.onSubmit}
			/>
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
		</Wrapper>
	);
};

const Wrapper = styled.div`
	width: 100vw;
	height: 100vh;
	position: fixed;
	/* top: 0vh; */
	overflow-x: hidden;
	overflow-y: scroll;
	background: #ffffff;
`;
const CloseImg = styled.img`
	position: absolute;
	top: 0px;
	right: 0px;
	padding-top: 16px;
	padding-right: 16px;
`;
const RightBox = styled.div`
	padding-left: 9vw;
`;
const TitleText = styled.div`
	font-family: "NotoSansCJKkr";
	font-size: 18px;
	font-weight: 500;
	line-height: 1.33;
	color: #0f0f15;
	margin-top: 55px;
`;
const HeaderText = styled.div`
	font-family: "NotoSansCJKkr";
	font-size: 14px;
	line-height: 1.57;
	color: #0f0f15;
	margin-top: 14px;
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

export default MainVideoMobileInputPresenter;
