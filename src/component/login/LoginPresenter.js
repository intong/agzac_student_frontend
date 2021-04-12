import React from "react";
import styled from "styled-components";
import imgmainbackground from "../../assets/img/img-main-background@2x.png";
import logoMain from "../../assets/img/img-main-logo@3x.png";
import robot from "../../assets/img/img-main-robot@3x.png";
import { ButtonPrimary } from "../../ui/button/Button";
import { InputLineType } from "../../ui/inputBox/Input";
import { DropboxLineTypeSmall } from "../../ui/dropbox/Dropbox";
import { ModalWithInputOneBtn, ModalBase } from "../../ui/modal/Modal";
import logoEY from "../../assets/icons/img-logo-ey.svg";
import kidsn from "../../assets/icons/logo-img-kidsnfuture.svg";

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

const LoginPresenter = ({
	isOpenModal,
	inputPasswordModal,
	loginErrorModal,
	modalFunction,
	loginFunction,
}) => {
	return (
		<Wrapper>
			<Container>
				<LogoBlock src={logoMain} alt='메인로고' />
				<Content style={{ display: "flex" }}>
					<div>
						<TextContainer>
							아그작교실에
							<p />
							오신 것을 환영합니다!
						</TextContainer>
						<RobotContainer src={robot} alt='로봇이미지' />
					</div>
					<LoginBlock>
						<LoginContent>
							<Title>접속코드</Title>
							<InputLineType
								placeholder='제공받은 접속코드를 입력해 주세요.'
								style={{ width: "100%", height: "20px", marginTop: "22px" }}
								onChange={loginFunction.onChangeConnectCode}
							/>
							<Title style={{ marginTop: "32px" }}>학교</Title>
							<InputLineType
								placeholder='학교명을 입력해 주세요.'
								style={{ width: "100%", height: "20px", marginTop: "22px" }}
								onChange={loginFunction.onChangeSchoolName}
							/>
							<div style={{ position: "absolute", top: "150px", right: "4px" }}>
								학교
							</div>
							<div style={{ display: "flex", marginTop: "20px" }}>
								<DropboxLineTypeSmall
									id='grade'
									placeholder='학년'
									style={{ height: "20px" }}
									options={optionsYear}
								/>
								<DropboxLineTypeSmall
									id='studentClass'
									placeholder='반'
									style={{ height: "20px", marginLeft: "12px" }}
									options={optionsClass}
								/>
								<DropboxLineTypeSmall
									id='studentNo'
									placeholder='번호'
									style={{ height: "20px", marginLeft: "12px" }}
									options={optionsStudentNo}
								/>
							</div>
							<Title style={{ marginTop: "40px" }}>이름</Title>
							<InputLineType
								placeholder='이름을 입력해 주세요.'
								style={{ width: "100%", height: "20px", marginTop: "22px" }}
								onChange={loginFunction.onChangeStudentName}
							/>
							<ButtonPrimary
								text='EY한영 아그작교실 시작하기'
								style={{ width: "100%", marginTop: "117px" }}
								onClick={loginFunction.submitStudent}
							/>
						</LoginContent>
					</LoginBlock>
				</Content>
			</Container>
			<Footer>
				<img
					src={logoEY}
					alt=''
					style={{
						marginLeft: "50px",
						marginTop: "14px",
						marginBottom: "17px",
						marginRight: "25px",
					}}
				/>
				<img
					src={kidsn}
					alt=''
					style={{ marginTop: "22px", marginBottom: "14px" }}
				/>
			</Footer>
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
		</Wrapper>
	);
};

export default LoginPresenter;

const Wrapper = styled.div`
	width: 100%;
	/* height: 988px; */
`;
const ModalWrapper = styled.div`
	width: 100%;
	height: 988px;
	background: rgba(15, 15, 21, 0.8);
	position: absolute;
	top: 0;
	z-index: 20;
	display: flex;
`;
const ModalArea = styled.div`
	width: 320px;
	height: 304px;
	margin: auto;
`;

const Container = styled.div`
	min-width: 1024px;
	max-width: 1920px;
	min-height: 900px;
	max-height: 988px;
	background: url(${imgmainbackground});
	background-size: cover;
	display: flex;
	flex-direction: column;
	position: relative;
`;
const LogoBlock = styled.img`
	height: 24px;
	position: absolute;
	top: 25.5px;
	left: 50px;
`;
const Content = styled.div`
	/* background: red; */
	margin: 0 auto;
	width: 944px;
	height: 928px;
	position: relative;
	top: 0px;
	left: 0px;
`;

const RobotContainer = styled.img`
	width: 505px;
	height: 379px;
	margin-top: 105px;
	margin-left: -93px;
`;
const TextContainer = styled.div`
	/* background: lightgreen; */
	width: 292px;
	height: 94px;
	font-size: 32px;
	font-weight: bold;
	line-height: 45px;
	letter-spacing: normal;
	color: #ffffff;
	margin-top: 195px;
`;
const LoginBlock = styled.div`
	background: #ffffff;
	width: 464px;
	height: 553px;
	margin-top: 180px;
	margin-left: 70px;
`;
const LoginContent = styled.div`
	/* background: green; */
	width: 384px;
	height: 489px;
	margin: 0 auto;
	margin-top: 40px;
	position: relative;
`;
const Title = styled.div`
	width: 100%;
	height: 20px;
	font-family: "NotoSansCJKkr";
	font-size: 18px;
	font-weight: 500;
	font-stretch: normal;
	font-style: normal;
	line-height: 1.11;
	letter-spacing: normal;
	color: #0f0f15;
`;
const Footer = styled.div`
	min-width: 1024px;
	max-width: 1920px;
	height: 60px;
	display: flex;
`;
