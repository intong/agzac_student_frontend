import React from "react";
import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";
import Routes from "../router/Routes";

const Layout = () => {
	return (
		<Wrapper>
			<Header />
			<Contents>
				<Routes />
			</Contents>
			<Footer />
		</Wrapper>
	);
};

export default Layout;

const Wrapper = styled.div`
	max-height: 988px;
	display: flex;
	flex-direction: column;
`;

const Contents = styled.div`
	background: #f5f5f5;
	width: 1440px;
	max-height: 858px;
	flex: 1;
	margin: 0 auto;
`;
