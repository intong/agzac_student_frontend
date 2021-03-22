import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import devide from "../assets/icons/icn-devide.svg";
import nextBefor from "../assets/icons/icn-next-dim.svg";
import nextAfter from "../assets/icons/icn-next.svg";
import leaveout from "../assets/icons/icn-leaveout.svg";

const Header = () => {
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
						margin: "25px 131px 25px 0",
						fontFamily: "NotoSansCJKkr-Medium",
						color: "#ffffff",
					}}
				>
					나가기
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
					<LIStyled>
						<NavLinkStyled to='/mainVideo' activeStyle={activeStyle}>
							메인영상
						</NavLinkStyled>
					</LIStyled>
					<img src={nextBefor} alt='다음기호' style={{ marginTop: "-3px" }} />
					<LIStyled>
						<NavLinkStyled to='/mission1' activeStyle={activeStyle}>
							Mission01
						</NavLinkStyled>
					</LIStyled>
					<img src={nextBefor} alt='다음기호' style={{ marginTop: "-3px" }} />
					<LIStyled>
						<NavLinkStyled to='/mission2' activeStyle={activeStyle}>
							Mission02
						</NavLinkStyled>
					</LIStyled>
					<img src={nextBefor} alt='다음기호' style={{ marginTop: "-3px" }} />
					<LIStyled>
						<NavLinkStyled to='/mission3' activeStyle={activeStyle}>
							Mission03
						</NavLinkStyled>
					</LIStyled>
					<img src={nextBefor} alt='다음기호' style={{ marginTop: "-3px" }} />
					<LIStyled>
						<NavLinkStyled to='/mission4' activeStyle={activeStyle}>
							Mission04
						</NavLinkStyled>
					</LIStyled>
					<img src={nextBefor} alt='다음기호' style={{ marginTop: "-3px" }} />
					<LIStyled>
						<NavLinkStyled to='/finalreport' activeStyle={activeStyle}>
							최종보고서
						</NavLinkStyled>
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

const NavLinkStyled = styled(NavLink)`
	text-decoration: none;
	color: grey;
`;
