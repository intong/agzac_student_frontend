import React from "react";
import styled from "styled-components";
import imgmainbackground from "../../../assets/img/img-main-background@2x.png";

const LoginMobilePresenter = () => {
	return (
		<ContentBackground>
			<Content></Content>
		</ContentBackground>
	);
};

const ContentBackground = styled.div`
	background-image: url(${imgmainbackground});
	background-size: 100vw 100vh;
`;
const Content = styled.div`
	background-image: url(${imgmainbackground});
	background-size: 100vw 100vh;
`;

export default LoginMobilePresenter;
