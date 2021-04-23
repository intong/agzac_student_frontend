import React, { useContext, useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import close from "../../assets/icons/bnt-x-24.svg";
import TempSaveContext from "../../contextApi/TempSave";
import ProcessContext from "../../contextApi/Process";
import { ButtonPrimary } from "../../ui/button/Button";
import logo from "../../assets/mobileImage/img-main-logo@2x.png";
import drawer from "../../assets/mobileImage/icn-drawer@2x.png";
import tempSave from "../../assets/icons/icn-save@2x.png";

const HeaderMobile = ({ sidebar, toggleSidebar }) => {
	const { state } = useContext(ProcessContext);
	const { modalState, modalActions } = useContext(TempSaveContext);

	const Logout = () => {
		const ok = window.confirm("정말 나가시겠습니까?");
		if (ok) {
			sessionStorage.removeItem("auth");
			sessionStorage.removeItem("user");
			sessionStorage.removeItem("missionOne");
			sessionStorage.removeItem("missionTwo");
			window.location.href = "/";
		}
	};

	const activeStyle = {
		color: "#ffc300",
	};

	return (
		<>
			<Wrapper>
				<MenuDiv>
					<MenuIconImg src={drawer} onClick={toggleSidebar} />
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
			{/* 사이드바 열기 */}
			<WrapperSidebar sidebar={sidebar}>
				<div
					style={{
						position: "absolute",
						right: "0vw",
						width: "40vw",
						height: "100vh",
					}}
					onClick={toggleSidebar}
				/>
				<Sidebar>
					<SidebarHeader>
						<CloseImg src={close} alt='끄기' onClick={toggleSidebar} />
					</SidebarHeader>
					<SidebarContentBlock>
						<SidebarContent>
							<NavLinkStyled1
								to='/'
								exact={true}
								activeStyle={activeStyle}
								confirm={state.video} // css 글자색상 변경 state
								onClick={(e) => {
									toggleSidebar();
								}}
							>
								EY한영 아그작교실 영상시청
							</NavLinkStyled1>
						</SidebarContent>
						<SidebarContent>
							<NavLinkStyled2
								to={`/mission1/${state.index}`}
								exact={true}
								activeStyle={activeStyle}
								confirm={state.mission1} // css 글자색상 변경 state
								onClick={(e) => {
									toggleSidebar();
									// if (state.video !== "ok") {
									// 	e.preventDefault();
									// 	alert("EY한영 아그작교실 영상시청을 완료해 주세요");
									// }
								}}
							>
								Mission01
							</NavLinkStyled2>
						</SidebarContent>
						<SidebarContent>
							<NavLinkStyled3
								to={`/mission2/${state.mission2Index}`}
								exact={true}
								activeStyle={activeStyle}
								confirm={state.mission2} // css 글자색상 변경 state
								onClick={(e) => {
									toggleSidebar();
									// if (state.mission1 !== "ok") {
									// 	e.preventDefault();
									// 	alert("Mission1 을 완료해 주세요");
									// }
								}}
							>
								Mission02
							</NavLinkStyled3>
						</SidebarContent>
						<SidebarContent>
							<NavLinkStyled4
								to={`/mission3/${state.mission3Index}`}
								exact={true}
								activeStyle={activeStyle}
								confirm={state.mission3} // css 글자색상 변경 state
								onClick={(e) => {
									toggleSidebar();
									// if (state.mission2 !== "ok") {
									// 	e.preventDefault();
									// 	alert("Mission2 을 완료해 주세요");
									// }
								}}
							>
								Mission03
							</NavLinkStyled4>
						</SidebarContent>
						<SidebarContent>
							<NavLinkStyled5
								to={`/mission4/${state.mission4Index}`}
								exact={true}
								activeStyle={activeStyle}
								confirm={state.mission4} // css 글자색상 변경 state
								onClick={(e) => {
									toggleSidebar();
									// if (state.mission3 !== "ok") {
									// 	e.preventDefault();
									// 	alert("Mission3 을 완료해 주세요");
									// }
								}}
							>
								Mission04
							</NavLinkStyled5>
						</SidebarContent>
						<SidebarContent>
							<NavLinkStyled6
								to='/finalreport'
								exact={true}
								activeStyle={activeStyle}
								onClick={(e) => {
									toggleSidebar();
									// if (state.mission4 !== "ok") {
									// 	e.preventDefault();
									// 	alert("Mission4 을 완료해 주세요");
									// }
								}}
							>
								최종보고서
							</NavLinkStyled6>
						</SidebarContent>
					</SidebarContentBlock>
					<ButtonPrimary
						style={{
							width: "100%",
							height: "7vh",
							marginTop: "10vh",
							fontSize: "20px",
						}}
						text='로그아웃'
						onClick={Logout}
					/>
				</Sidebar>
			</WrapperSidebar>
		</>
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
const WrapperSidebar = styled.div`
	width: 100vw;
	height: 100vh;
	display: ${(props) => props.sidebar !== true && "none"};
	background: rgba(15, 15, 21, 0.8);
	position: fixed;
	top: 0px;
	left: ${(props) => (props.sidebar !== true ? "-60vw" : "0vw")};
	z-index: 90;
`;
const Sidebar = styled.div`
	background: #0f0f15;
	width: 60vw;
	height: 100vh;
	border-radius: 5px;
	box-shadow: 0 0 10px 0 rgba(15, 15, 21, 0.05);
	transition: all ease 0.5s 0s;
`;
const SidebarHeader = styled.div`
	width: 100%;
	height: 8vh;
	box-sizing: border-box;
	position: relative;
`;
const CloseImg = styled.img`
	position: absolute;
	top: 2vh;
	right: 4vw;
	filter: invert(100%);
`;
const SidebarContentBlock = styled.ul`
	box-sizing: border-box;
	padding: 10vw;
`;
const SidebarContent = styled.li`
	font-family: NotoSansCJKkr;
	font-size: 18px;
	font-stretch: normal;
	font-style: normal;
	line-height: normal;
	letter-spacing: normal;
	margin-top: 3vh;
	color: #0f0f15;
	opacity: 0.8;
`;
const NavLinkStyled1 = styled(NavLink)`
	text-decoration: none;
	color: ${(props) => (props.confirm === "ok" ? "#ffffff" : "grey")};
`;
const NavLinkStyled2 = styled(NavLink)`
	text-decoration: none;
	color: ${(props) => (props.confirm === "ok" ? "#ffffff" : "grey")};
`;
const NavLinkStyled3 = styled(NavLink)`
	text-decoration: none;
	color: ${(props) => (props.confirm === "ok" ? "#ffffff" : "grey")};
`;
const NavLinkStyled4 = styled(NavLink)`
	text-decoration: none;
	color: ${(props) => (props.confirm === "ok" ? "#ffffff" : "grey")};
`;
const NavLinkStyled5 = styled(NavLink)`
	text-decoration: none;
	color: ${(props) => (props.confirm === "ok" ? "#ffffff" : "grey")};
`;
const NavLinkStyled6 = styled(NavLink)`
	text-decoration: none;
	color: ${(props) => (props.confirm === "ok" ? "#ffffff" : "grey")};
`;

export default HeaderMobile;
