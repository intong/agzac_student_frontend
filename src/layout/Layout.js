import React from "react";
import Header from "./Header";
import Routes from "../router/Routes";
import styled from "styled-components";

const Layout = () => {
	return (
		<>
			<Header />
			<Routes />
		</>
	);
};

const Wrapper = styled.div`
	width: 100vh;
`;
const LayoutContent = styled.div`
	background: red;
	max-width: 1920px;
`;

export default Layout;
