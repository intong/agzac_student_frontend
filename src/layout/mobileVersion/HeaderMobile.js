import React, { useContext } from "react";
import styled from "styled-components";
import TempSaveContext from "../../contextApi/TempSave";
import logo from "../../assets/mobileImage/img-main-logo@2x.png";
import drawer from "../../assets/mobileImage/icn-drawer@2x.png";
import tempSave from "../../assets/icons/icn-save@2x.png";

const HeaderMobile = () => {
	const { modalState, modalActions } = useContext(TempSaveContext);
	return (
		<Wrapper>
			<MenuDiv>
				<MenuIconImg src={drawer} />
			</MenuDiv>
			<LogoDiv>
				<LogoImg src={logo} />
			</LogoDiv>
			<TempSaveIconDiv
				onClick={() => {
					modalActions.setSaveModalOpen(!modalState.saveModalOpen);
				}}
			>
				<TempSave src={tempSave} />
			</TempSaveIconDiv>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	width: 100vw;
	height: 56px;
	background: #0f0f15;
	position: relative;
`;
const MenuDiv = styled.div`
	width: 24px;
	height: 24px;
	position: absolute;
	top: 16px;
	left: 20px;
`;
const MenuIconImg = styled.img`
	width: 24px;
	height: 24px;
`;
const LogoDiv = styled.div`
	width: 133px;
	height: 16px;
	margin: auto;
	padding-top: 20px;
`;
const LogoImg = styled.img`
	width: 133px;
	height: 16px;
	object-fit: contain;
`;
const TempSaveIconDiv = styled.div`
	position: absolute;
	top: 16px;
	right: 20px;
`;
const TempSave = styled.img`
	width: 24px;
	height: 24px;
`;

export default HeaderMobile;
