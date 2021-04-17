import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import devide from "../assets/icons/icn-devide.svg";
import nextBefor from "../assets/icons/icn-next-dim.svg";
// import nextAfter from "../assets/icons/icn-next.svg";
import leaveout from "../assets/icons/icn-leaveout.svg";
import tempSave from "../assets/icons/icn-save@2x.png";
import ProcessContext from "../contextApi/Process";
import TempSaveContext from "../contextApi/TempSave";

const Header = ({ match, history, location }) => {
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
		<Wrapper>
			<Block>
				<ULStyled>
					<div
						style={{
							fontSize: "14px",
							color: "#ffffff",
						}}
					>
						{sessionStorage.getItem("user")}님의 아그작 기업 보고서
					</div>
					<img src={devide} alt='분단기호' style={{ marginTop: "-3px" }} />
					<LIStyled>
						<NavLinkStyled1
							to='/mainVideo'
							activeStyle={activeStyle}
							confirm={state.video} // css 글자색상 변경 state
						>
							EY한영 아그작교실 영상시청
						</NavLinkStyled1>
					</LIStyled>
					<img src={nextBefor} alt='다음기호' style={{ marginTop: "-3px" }} />
					<LIStyled>
						<NavLinkStyled2
							to='/mission1'
							activeStyle={activeStyle}
							confirm={state.mission1} // css 글자색상 변경 state
							onClick={(e) => {
								if (state.video !== "ok") {
									e.preventDefault();
									alert("EY한영 아그작교실 영상시청을 완료해 주세요");
								}
							}}
						>
							Mission01
						</NavLinkStyled2>
					</LIStyled>
					<img src={nextBefor} alt='다음기호' style={{ marginTop: "-3px" }} />
					<LIStyled>
						<NavLinkStyled3
							to='/mission2'
							activeStyle={activeStyle}
							confirm={state.mission2} // css 글자색상 변경 state
							onClick={(e) => {
								if (state.mission1 !== "ok") {
									e.preventDefault();
									alert("Mission1 을 완료해 주세요");
								}
							}}
						>
							Mission02
						</NavLinkStyled3>
					</LIStyled>
					<img src={nextBefor} alt='다음기호' style={{ marginTop: "-3px" }} />
					<LIStyled>
						<NavLinkStyled4
							to='/mission3'
							activeStyle={activeStyle}
							confirm={state.mission3} // css 글자색상 변경 state
							onClick={(e) => {
								if (state.mission2 !== "ok") {
									e.preventDefault();
									alert("Mission2 을 완료해 주세요");
								}
							}}
						>
							Mission03
						</NavLinkStyled4>
					</LIStyled>
					<img src={nextBefor} alt='다음기호' style={{ marginTop: "-3px" }} />
					<LIStyled>
						<NavLinkStyled5
							to='/mission4'
							activeStyle={activeStyle}
							confirm={state.mission4} // css 글자색상 변경 state
							onClick={(e) => {
								if (state.mission3 !== "ok") {
									e.preventDefault();
									alert("Mission3 을 완료해 주세요");
								}
							}}
						>
							Mission04
						</NavLinkStyled5>
					</LIStyled>
					<img src={nextBefor} alt='다음기호' style={{ marginTop: "-3px" }} />
					<LIStyled>
						<NavLinkStyled6
							to='/finalreport'
							activeStyle={activeStyle}
							onClick={(e) => {
								if (state.mission4 !== "ok") {
									e.preventDefault();
									alert("Mission4 을 완료해 주세요");
								}
							}}
						>
							최종보고서
						</NavLinkStyled6>
					</LIStyled>
				</ULStyled>
			</Block>
			<BtnsBlock>
				<img
					src={tempSave}
					alt='임시저장'
					style={{ width: "24px", height: "24px", marginRight: "4px" }}
					onClick={() => {
						modalActions.setSaveModalOpen(!modalState.saveModalOpen);
					}}
				/>
				<div
					style={{
						width: "52px",
						height: "20px",
						fontSize: "14px",
						lineHeight: "23px",
						fontFamily: "NotoSansCJKkr-Medium",
						color: "#ffffff",
						marginRight: "20px",
					}}
					onClick={() => {
						modalActions.setSaveModalOpen(!modalState.saveModalOpen);
					}}
				>
					임시저장
				</div>
				<img
					src={leaveout}
					alt='나가기버튼'
					style={{ width: "24px", height: "24px", marginRight: "4px" }}
					onClick={Logout}
				/>
				<div
					style={{
						width: "39px",
						height: "20px",
						fontSize: "14px",
						lineHeight: "23px",
						fontFamily: "NotoSansCJKkr-Medium",
						color: "#ffffff",
						marginRight: "12px",
					}}
					onClick={Logout}
				>
					나가기
				</div>
			</BtnsBlock>
		</Wrapper>
	);
};

export default Header;

const Wrapper = styled.div`
	background: #0f0f15;
	min-width: 1024px;
	max-width: 1920px;
	height: 70px;
	margin: 0 auto;
	display: flex;
`;

const Block = styled.div`
	/* background: lightgreen; */
	width: 944px;
	margin: 0 auto;
	display: flex;
	flex-direction: row;
	/* align-items: center; */
	justify-content: center;
`;
const BtnsBlock = styled.div`
	/* background: red; */
	width: 179px;
	display: flex;
	flex-direction: row;
	justify-content: flex-end;
	align-items: center;
	&:hover {
		cursor: pointer;
	}
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
