import React from "react";
import styled from "styled-components";
import imgmainbackground from "../../assets/img/img-main-background@2x.png";
import logoMain from "../../assets/img/img-main-logo@3x.png";
import robot from "../../assets/img/img-main-robot@3x.png";
import { ButtonPrimary } from "../../ui/button/Button";
import { InputLineType } from "../../ui/inputBox/Input";
import { DropboxLineType } from "../../ui/dropbox/Dropbox";
import { ModalBase } from "../../ui/modal/Modal";
import logoEY from "../../assets/icons/img-logo-ey.svg";
import kidsn from "../../assets/icons/logo-img-kidsnfuture.svg";

const optionsClass = ["1", "1", "1", "1", "1", "1"];
const optionsYear = ["2", "2", "2", "2", "2", "2", "2"];

const LoginPresenter = ({ isOpenModal, modalFunction }) => {
	return (
		<>
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
								/>
								<Title style={{ marginTop: "32px" }}>학교</Title>
								<InputLineType
									placeholder='학교명을 입력해 주세요. '
									style={{ width: "100%", height: "20px", marginTop: "22px" }}
								/>
								<div style={{ display: "flex", marginTop: "24px" }}>
									<DropboxLineType
										placeholder='학년'
										style={{ width: "185px", height: "20px" }}
										options={optionsYear}
									/>
									<DropboxLineType
										placeholder='반'
										style={{ width: "185px", height: "20px", marginLeft: "14px" }}
										options={optionsClass}
									/>
								</div>
								<Title style={{ marginTop: "32px" }}>이름</Title>
								<InputLineType
									placeholder='이름을 입력해 주세요.'
									style={{ width: "100%", height: "20px", marginTop: "22px" }}
								/>
								<ButtonPrimary
									text='EY한영 아그작교실 시작하기'
									style={{ width: "100%", marginTop: "117px" }}
									onClick={modalFunction.openModal}
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
							<ModalBase
								header='타이틀 영역입니다.'
								content='내용이 들어갑니다.내용이 들어갑니다.'
								btntext='확인'
								closeModalEvent={modalFunction.closeModal}
								btnEvent={modalFunction.closeModal}
							/>
						</ModalArea>
					</ModalWrapper>
				)}
			</Wrapper>
		</>
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
