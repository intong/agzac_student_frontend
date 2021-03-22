import React from "react";
import styled from "styled-components";
import logoEy from "../assets/icons/img-logo-ey.svg";
import kidsn from "../assets/icons/logo-img-kidsnfuture.svg";

const Footer = () => {
	return (
		<Block>
			<img
				src={logoEy}
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
		</Block>
	);
};

export default Footer;

const Block = styled.div`
	background: #ffffff;
	/* background: red; */
	width: 1440px;
	height: 60px;
	margin: 0 auto;
	color: black;
`;
