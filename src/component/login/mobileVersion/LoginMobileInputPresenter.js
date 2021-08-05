import React from "react";
import styled from "styled-components";
import { InputLineType } from "../../../ui/inputBox/Input";
import {
	DropboxLineTypeMobileLogin,
	DropboxLineTypeMobileLoginLong,
} from "../../../ui/dropbox/Dropbox";
import { ModalWithInputOneBtn, ModalBase } from "../../../ui/modal/Modal";
import { ButtonPrimary } from "../../../ui/button/Button";
import closeMobile from "../../../assets/icons/bnt-x-24.svg";

const optionsYear = [
	{ text: "1 학년", value: 1 },
	{ text: "2 학년", value: 2 },
	{ text: "3 학년", value: 3 },
];
const optionsClass = [
	{ text: "1 반", value: 1 },
	{ text: "2 반", value: 2 },
	{ text: "3 반", value: 3 },
	{ text: "4 반", value: 4 },
	{ text: "5 반", value: 5 },
	{ text: "6 반", value: 6 },
	{ text: "7 반", value: 7 },
	{ text: "8 반", value: 8 },
	{ text: "9 반", value: 9 },
];
const optionsStudentNo = [
	{ text: "1 번", value: 1 },
	{ text: "2 번", value: 2 },
	{ text: "3 번", value: 3 },
	{ text: "4 번", value: 4 },
	{ text: "5 번", value: 5 },
	{ text: "6 번", value: 6 },
	{ text: "7 번", value: 7 },
	{ text: "8 번", value: 8 },
	{ text: "9 번", value: 9 },
	{ text: "10 번", value: 10 },
	{ text: "11 번", value: 11 },
	{ text: "12 번", value: 12 },
	{ text: "13 번", value: 13 },
	{ text: "14 번", value: 14 },
	{ text: "15 번", value: 15 },
	{ text: "16 번", value: 16 },
	{ text: "17 번", value: 17 },
	{ text: "18 번", value: 18 },
	{ text: "19 번", value: 19 },
	{ text: "20 번", value: 20 },
	{ text: "21 번", value: 21 },
	{ text: "22 번", value: 22 },
	{ text: "23 번", value: 23 },
	{ text: "24 번", value: 24 },
	{ text: "25 번", value: 25 },
	{ text: "26 번", value: 26 },
	{ text: "27 번", value: 27 },
	{ text: "28 번", value: 28 },
	{ text: "29 번", value: 29 },
	{ text: "30 번", value: 30 },
	{ text: "31 번", value: 31 },
	{ text: "32 번", value: 32 },
	{ text: "33 번", value: 33 },
	{ text: "34 번", value: 34 },
	{ text: "35 번", value: 35 },
	{ text: "36 번", value: 36 },
	{ text: "37 번", value: 37 },
	{ text: "38 번", value: 38 },
	{ text: "39 번", value: 39 },
	{ text: "40 번", value: 40 },
	{ text: "41 번", value: 41 },
];

const LoginMobileInputPresenter = ({
	isOpenModal,
	inputPasswordModal,
	loginErrorModal,
	modalFunction,
	MobileFunctionList,
	loginFunction,
}) => {
	return (
		<WrapperMobile>
			<HeaderMobile>로그인</HeaderMobile>
			<CloseImg
				src={closeMobile}
				onClick={MobileFunctionList.closeLoginMobileInputPage}
			/>
			<TitleMobile style={{ position: "absolute", top: "13vh", left: "6.9%" }}>
				접속코드
			</TitleMobile>
			<InputLineType
				placeholder='제공받은 접속코드를 입력해 주세요.'
				style={{
					background: "#f4f5f6",
					width: "86.1%",
					height: "20px",
					position: "absolute",
					top: "18vh",
					left: "6.9%",
					zIndex: "1",
				}}
				onChange={loginFunction.onChangeConnectCode}
			/>
			<TitleMobile style={{ position: "absolute", top: "27vh", left: "6.9%" }}>
				학교
			</TitleMobile>
			<InputLineType
				placeholder='학교명을 입력해 주세요.'
				style={{
					background: "#f4f5f6",
					width: "86.1%",
					height: "20px",
					position: "absolute",
					top: "33vh",
					left: "6.9%",
				}}
				onChange={loginFunction.onChangeSchoolName}
			/>
			<SubTitleMobile>학교</SubTitleMobile>
			<DropboxLineTypeMobileLoginLong
				id='grade'
				placeholder='학년'
				style={{ height: "20px", position: "absolute", top: "39vh", left: "6.9%" }}
				options={optionsYear}
			/>
			<ClassNoDiv>
				<DropboxLineTypeMobileLogin
					id='studentClass'
					placeholder='반'
					style={{ height: "20px", marginLeft: "12px" }}
					options={optionsClass}
				/>
				<DropboxLineTypeMobileLogin
					id='studentNo'
					placeholder='번호'
					style={{ height: "20px", marginLeft: "12px" }}
					options={optionsStudentNo}
				/>
			</ClassNoDiv>
			<TitleMobile style={{ position: "absolute", top: "55vh", left: "6.9%" }}>
				이름
			</TitleMobile>
			<InputLineType
				placeholder='이름을 입력해 주세요.'
				style={{
					background: "#f4f5f6",
					width: "86.1%",
					height: "20px",
					position: "absolute",
					top: "60vh",
					left: "6.9%",
				}}
				onChange={loginFunction.onChangeStudentName}
			/>
			<ButtonPrimary
				text='EY한영 아그작교실 시작하기'
				style={{
					width: "90vw",
					height: "7vh",
					position: "absolute",
					top: "75vh",
					left: "5vw",
				}}
				onClick={loginFunction.submitStudent}
			/>
			{isOpenModal && (
				<ModalWrapper>
					<ModalArea>
						<ModalWithInputOneBtn
							header='비밀번호 설정'
							content='비밀번호가 없습니다. 비밀번호를 입력해 주세요.'
							placeholder='비밀번호를 입력해주세요.'
							btntext='확인'
							onChange={loginFunction.onChangePassword}
							closeModalEvent={modalFunction.toggleModal}
							btnEvent={loginFunction.createPassword}
						/>
					</ModalArea>
				</ModalWrapper>
			)}
			{inputPasswordModal && (
				<ModalWrapper>
					<ModalArea>
						<ModalWithInputOneBtn
							header='비밀번호 설정'
							content='비밀번호가 있습니다. 비밀번호를 입력해 주세요.'
							placeholder='비밀번호 입력'
							btntext='확인'
							onChange={loginFunction.onChangePassword}
							closeModalEvent={modalFunction.toggleInputPasswordModal}
							btnEvent={loginFunction.inputPassword}
						/>
					</ModalArea>
				</ModalWrapper>
			)}

			{loginErrorModal && (
				<ModalWrapper>
					<ModalArea>
						<ModalBase
							header='접속에 실패하였습니다.'
							content='학교, 학년, 반, 번호, 이름, 접속코드를 다시 한번 확인해주세요.'
							btntext='확인'
							btnEvent={modalFunction.errorModalConfirmBtn}
							closeModalEvent={modalFunction.toggleErrorModal}
						/>
					</ModalArea>
				</ModalWrapper>
			)}
		</WrapperMobile>
	);
};

const WrapperMobile = styled.div`
	width: 100vw;
	height: 100vh;
	background: #f4f5f6;
	position: fixed;
	overflow-y: auto;
`;
const HeaderMobile = styled.div`
	font-family: NotoSansCJKkr;
	font-size: 14px;
	font-weight: bold;
	font-stretch: normal;
	font-style: normal;
	line-height: 1.43;
	letter-spacing: normal;
	color: #0f0f15;
	width: 44px;
	height: 20px;
	margin: 0 auto;
	padding-top: 18px;
`;
const CloseImg = styled.img`
	width: 6vw;
	height: 6vh;
	position: absolute;
	top: 4px;
	right: 16px;
`;
const TitleMobile = styled.div`
	font-family: NotoSansCJKkr;
	font-size: 14px;
	font-weight: 500;
	font-stretch: normal;
	font-style: normal;
	line-height: 1.43;
	letter-spacing: normal;
	color: #0f0f15;
`;
const SubTitleMobile = styled.div`
	font-family: NotoSansCJKkr;
	font-size: 14px;
	font-weight: 500;
	font-stretch: normal;
	font-style: normal;
	line-height: 1.43;
	letter-spacing: normal;
	color: #0f0f15;
	position: absolute;
	top: 33vh;
	right: 9vw;
`;
const ClassNoDiv = styled.div`
	display: flex;
	justify-content: space-between;
	position: absolute;
	top: 46vh;
	left: 3.6vw;
`;
const ModalWrapper = styled.div`
	width: 100%;
	height: 100vh;
	background: rgba(15, 15, 21, 0.8);
	position: fixed;
	top: 0;
	z-index: 90;
	display: flex;
`;
const ModalArea = styled.div`
	margin: 30vh auto;
`;

export default LoginMobileInputPresenter;
