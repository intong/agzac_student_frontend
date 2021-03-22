import React from "react";
import styled from "styled-components";
import imgmainbackground from "../../assets/img/img-main-background@3x.png";
import logoMain from "../../assets/img/img-main-logo@3x.png";
import robot from "../../assets/img/img-main-robot@3x.png";
import Footer from "../../layout/Footer";
import { LoginButton } from "../../ui/button/Button";

const LoginPresenter = () => {
	return (
		<Wrapper>
			<Container>
				<LogoContainer src={logoMain} alt='메인로고' />
				<RobotContainer src={robot} alt='로봇이미지' />
				<TextContainer>
					아그작교실에
					<p />
					오신 것을 환영합니다!
				</TextContainer>
				<LoginBlock>
					<LoginButton
						text='EY한영 아그작교실 시작하기'
						background='#0f0f15'
						color='#ffffff'
						width='384px'
						height='46px'
						bottom='24px'
						left='40px'
						onClick={() => alert(11)}
					/>
				</LoginBlock>
				<ImgDiv />
				<Footer />
			</Container>
		</Wrapper>
	);
};

export default LoginPresenter;

const Wrapper = styled.div`
	width: 100%;
`;

const Container = styled.div`
	width: 1440px;
	height: 900px;
	display: flex;
	flex-direction: column;
	margin: 0 auto;
	position: relative;
`;
const LogoContainer = styled.img`
	width: 199px;
	height: 24px;
	position: absolute;
	top: 25.5px;
	left: 50px;
`;

const RobotContainer = styled.img`
	width: 505px;
	height: 379px;
	position: absolute;
	top: 393.5px;
	left: 104px;
`;
const TextContainer = styled.div`
	position: absolute;
	top: 194.5px;
	left: 248px;
	width: 292px;
	height: 94px;
	font-size: 32px;
	font-weight: bold;
	line-height: 45px;
	letter-spacing: normal;
	color: #ffffff;
`;

const LoginBlock = styled.div`
	background: #ffffff;
	width: 464px;
	height: 553px;
	position: absolute;
	top: 179.5px;
	right: 248px;
`;

const ImgDiv = styled.div`
	width: 1440px;
	height: 880px;
	background: url(${imgmainbackground});
	background-size: cover;
	flex: 1;
`;
