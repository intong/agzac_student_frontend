import React from "react";
import styled from "styled-components";
import imgmainbackground from "../../../assets/img/img-main-background@2x.png";
import logoMainMobile from "../../../assets/img/img-main-logo@3x.png";
import robotMobile from "../../../assets/img/img-main-robot@3x.png";
import { ButtonPrimary } from "../../../ui/button/Button";

const LoginMobilePresenter = ({ MobileFunctionList }) => {
	return (
		<ContentBackground>
			<Content>
				<LogoAgazac src={logoMainMobile} />
				<TextContainer>EY한영 아그작교실에 오신 것을 환영합니다!</TextContainer>
				<SubTextContainer>
					참가자 정보를 입력하고 기업경영을 시작해 보세요.
				</SubTextContainer>
				<RobotImg src={robotMobile} />
				<ButtonPrimary
					text='EY한영 아그작교실 시작하기'
					style={{
						width: "90vw",
						height: "7vh",
						position: "absolute",
						top: "75vh",
						left: "5vw",
					}}
					onClick={MobileFunctionList.startAgzacBtn}
				/>
			</Content>
		</ContentBackground>
	);
};

const ContentBackground = styled.div`
	width: 100vw;
	height: 100vh;
	height: calc(var(--vh, 1vh) * 100);
	background-image: url(${imgmainbackground});
	background-size: cover;
	background-position-x: 470vw;
	position: fixed;
`;
const Content = styled.div`
	padding-left: 10vw;
	padding-top: 5vh;
`;
const LogoAgazac = styled.img`
	width: 50vw;
`;
const TextContainer = styled.div`
	font-family: NotoSansCJKkr;
	font-size: 24px;
	font-weight: bold;
	line-height: 1.25;
	color: #ffffff;
	width: 65vw;
	height: 8vh;
	margin-top: 8vh;
`;
const SubTextContainer = styled.div`
	opacity: 0.9;
	font-family: NotoSansCJKkr;
	font-size: 16px;
	font-weight: normal;
	font-stretch: normal;
	font-style: normal;
	line-height: normal;
	letter-spacing: normal;
	color: #ffffff;
	margin-top: 2vh;
	width: 66vw;
	height: 5vh;
`;
const RobotImg = styled.img`
	width: 90vw;
	position: absolute;
	top: 40vh;
	left: -5vw;
`;

export default LoginMobilePresenter;
