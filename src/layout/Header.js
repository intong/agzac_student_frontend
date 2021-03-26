import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import devide from "../assets/icons/icn-devide.svg";
import nextBefor from "../assets/icons/icn-next-dim.svg";
import nextAfter from "../assets/icons/icn-next.svg";
import leaveout from "../assets/icons/icn-leaveout.svg";
import ProcessContext from "../contextApi/Process";

const Header = () => {
	const { state } = useContext(ProcessContext);
	const activeStyle = {
		color: "#ffc300",
	};
	return (
		<Wrapper>
			<Block>
				<img
					src={leaveout}
					alt='나가기버튼'
					style={{ margin: "19px 4px 23px 50px" }}
				/>
				<div
					style={{
						fontSize: "14px",
						margin: "25px 14px 25px 0",
						fontFamily: "NotoSansCJKkr-Medium",
						color: "#ffffff",
					}}
				>
					나가기
				</div>
				{/* 이미지교체부분 (임시저장이미지로 교체) */}
				<img
					src={leaveout}
					alt='나가기버튼'
					style={{ marginRight: "4px", marginTop: "-3px" }}
				/>
				<div
					style={{
						fontSize: "14px",
						fontFamily: "NotoSansCJKkr-Medium",
						color: "#ffffff",
						marginRight: "37px",
					}}
				>
					임시저장
				</div>
				<ULStyled>
					<div
						style={{
							fontSize: "14px",
							color: "#ffffff",
						}}
					>
						홍길동님의 아그작 기업 보고서
					</div>
					<img src={devide} alt='분단기호' style={{ marginTop: "-3px" }} />
					{console.log(state.video)}
					<LIStyled>
						<NavLinkStyled1
							to='/mainVideo'
							activeStyle={activeStyle}
							confirm={state.video}
						>
							EY한영 아그작교실 영상시청
						</NavLinkStyled1>
					</LIStyled>
					<img src={nextBefor} alt='다음기호' style={{ marginTop: "-3px" }} />
					<LIStyled>
						<NavLinkStyled2
							to='/mission1'
							activeStyle={activeStyle}
							confirm={state.mission1}
						>
							Mission01
						</NavLinkStyled2>
					</LIStyled>
					<img src={nextBefor} alt='다음기호' style={{ marginTop: "-3px" }} />
					<LIStyled>
						<NavLinkStyled3
							to='/mission2'
							activeStyle={activeStyle}
							confirm={state.mission2}
						>
							Mission02
						</NavLinkStyled3>
					</LIStyled>
					<img src={nextBefor} alt='다음기호' style={{ marginTop: "-3px" }} />
					<LIStyled>
						<NavLinkStyled4
							to='/mission3'
							activeStyle={activeStyle}
							confirm={state.mission3}
						>
							Mission03
						</NavLinkStyled4>
					</LIStyled>
					<img src={nextBefor} alt='다음기호' style={{ marginTop: "-3px" }} />
					<LIStyled>
						<NavLinkStyled5
							to='/mission4'
							activeStyle={activeStyle}
							confirm={state.mission4}
						>
							Mission04
						</NavLinkStyled5>
					</LIStyled>
					<img src={nextBefor} alt='다음기호' style={{ marginTop: "-3px" }} />
					<LIStyled>
						<NavLinkStyled6 to='/finalreport' activeStyle={activeStyle}>
							최종보고서
						</NavLinkStyled6>
					</LIStyled>
				</ULStyled>
			</Block>
		</Wrapper>
	);
};

export default Header;

const Wrapper = styled.div`
	background: black;
	width: 1440px;
	height: 70px;
	margin: 0 auto;
`;

const Block = styled.div`
	/* background: lightgreen; */
	margin: 0 auto;
	display: flex;
	flex-direction: row;
	align-items: center;
`;

const ULStyled = styled.ul`
	/* background: blue; */
	display: flex;
	flex-direction: row;
	align-items: center;
	padding: 25px 0;
`;

const LIStyled = styled.li`
	font-size: 14px;
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
