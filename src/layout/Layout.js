import React from "react";
import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";
import Routes from "../router/Routes";

const Layout = () => {
	return (
		<Wrapper>
			<Header />
			<Routes />
			<Footer />
		</Wrapper>
	);
};

export default Layout;

const Wrapper = styled.div`
	min-width: 1024px;
	max-width: 1920px;
`;
