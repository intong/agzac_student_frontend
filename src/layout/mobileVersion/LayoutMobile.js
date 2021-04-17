import React from "react";
import styled from "styled-components";
import HeaderMobile from "./HeaderMobile";
import Routes from "../../router/Routes";

const LayoutMobile = () => {
	return (
		<>
			<HeaderMobile />
			<Content>
				<Routes />
			</Content>
		</>
	);
};

const Content = styled.div`
	width: 100vw;
	overflow-x: hidden;
	overflow-y: scroll;
`;

export default LayoutMobile;
