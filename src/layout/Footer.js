import React from "react";
import styled from "styled-components";
import logoEy from "../assets/icons/img-logo-ey.svg";
import kidsn from "../assets/icons/logo-img-kidsnfuture.svg";

const Footer = () => {
	return (
		<Wrapper>
			<Block>
				<img
					src={logoEy}
					alt=''
					style={{
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
		</Wrapper>
	);
};

export default Footer;

const Wrapper = styled.div`
	/* background: red; */
	width: 100%;
	height: 60px;
`;
const Block = styled.div`
	background: #ffffff;
	width: 944px;
	height: 60px;
	margin: 0 auto;
	color: black;
`;
