import React, { useState } from "react";
import styled from "styled-components";
import HeaderMobile from "./HeaderMobile";
import Routes from "../../router/Routes";

const LayoutMobile = () => {
	const [sidebar, setSidebar] = useState(false);

	const toggleSidebar = () => {
		setSidebar(!sidebar);
	};
	return (
		<>
			<div style={{ position: "fixed", zIndex: "40" }}>
				<HeaderMobile sidebar={sidebar} toggleSidebar={toggleSidebar} />
			</div>
			<Content>
				<Routes />
			</Content>
		</>
	);
};

const Content = styled.div`
	width: 100vw;
	position: absolute;
	top: 56px;
	overflow-x: hidden;
	overflow-y: auto;
`;

export default LayoutMobile;
