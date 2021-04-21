import React from "react";
import styled from "styled-components";
import close from "../../../assets/icons/bnt-x-24.svg";
import { DropboxMobile } from "../../../ui/MobileUI";
import { ButtonPrimary } from "../../../ui/button/Button";

const options = [
	"드론개발자",
	"사물인터넷전문가",
	"인공지능과학자",
	"3D프린터개발자",
	"컴퓨터보안전문가",
	"소프트웨어개발자",
	"기능성게임기획자",
	"VR엔지니어",
	"지능형교통시스템전문가",
	"프로파일러",
	"재난대처전문가",
	"신약개발연구원",
	"환경공학기술자",
	"신재생에너지전문가",
	"업사이클러",
	"탄소배출권거래중개인",
];

const Mission2MobileInputPresenter = ({
	normal,
	correctFirst,
	correctSeconds,
	mobileFunctionList,
	answerFunctionList,
}) => {
	const leftDropbox = {
		width: "81vw",
		marginLeft: "10vw",
		border: normal === false && correctFirst === false ? "1px solid #ff3737" : "",
	};

	const rightDropbox = {
		width: "81vw",
		marginLeft: "10vw",
		border:
			normal === false && correctSeconds === false ? "1px solid #ff3737" : "",
	};
	return (
		<>
			<Wrapper>
				<CloseImg src={close} onClick={mobileFunctionList.toggleInputPresenter} />
				<Title>4차산업기술을 보유한 미래인재</Title>
				<SubTitle>
					사회문제를 해결하는 상품을 개발하기 위해서는 4차산업 기술을 보유한 인재가
					필요합니다. 어떤 미래인재가 참여해야 할까요? 상품을 개발한 미래인재 2명을
					찾아주세요!
				</SubTitle>
				<SubTitle style={{ marginLeft: "10vw", marginBottom: "2vh" }}>
					미래인재1
				</SubTitle>
				<DropboxMobile
					id='futureOne'
					style={leftDropbox}
					placeholder='선택'
					options={options}
				/>
				<SubTitle style={{ marginLeft: "10vw", marginBottom: "2vh" }}>
					미래인재2
				</SubTitle>
				<DropboxMobile
					id='futureTwo'
					style={rightDropbox}
					placeholder='선택'
					options={options}
				/>
				<ButtonDiv>
					{normal ? (
						<ButtonPrimary
							text='정답 제출'
							style={{
								width: "100vw",
								height: "8vh",
								fontFamily: "NotoSansCJKkr",
								fontSize: "14px",
								fontWeight: "500",
								textAlign: "center",
								color: "#ffffff",
							}}
							onClick={answerFunctionList.checkAnswer}
						/>
					) : correctFirst && correctSeconds ? (
						<ButtonPrimary
							text='다음'
							style={{
								background: "#ffc300",
								width: "100vw",
								height: "8vh",
								fontFamily: "NotoSansCJKkr",
								fontSize: "14px",
								fontWeight: "500",
								textAlign: "center",
								color: "#ffffff",
							}}
							onClick={mobileFunctionList.addIndex}
						/>
					) : (
						<ButtonPrimary
							text='다시풀기'
							style={{
								background: "#ff3737",
								width: "100vw",
								height: "8vh",
								fontFamily: "NotoSansCJKkr",
								fontSize: "14px",
								fontWeight: "500",
								textAlign: "center",
								color: "#ffffff",
							}}
							onClick={answerFunctionList.checkAnswer}
						/>
					)}
				</ButtonDiv>
			</Wrapper>
		</>
	);
};

const Wrapper = styled.div`
	width: 100vw;
	height: 130vh;
	position: fixed;
	overflow-x: hidden;
	overflow-y: scroll;
	background: #ffffff;
`;
const CloseImg = styled.img`
	position: absolute;
	top: 0px;
	right: 0px;
	padding-top: 16px;
	padding-right: 16px;
`;
const Title = styled.div`
	font-family: "NotoSansCJKkr";
	font-size: 18px;
	font-weight: 500;
	font-stretch: normal;
	font-style: normal;
	line-height: 1.33;
	letter-spacing: normal;
	color: #0f0f15;
	width: 80vw;
	margin: auto;
	margin-top: 6vh;
`;
const SubTitle = styled.div`
	font-family: "NotoSansCJKkr";
	font-size: 14px;
	font-weight: normal;
	font-stretch: normal;
	font-style: normal;
	line-height: 1.57;
	letter-spacing: normal;
	color: #0f0f15;
	text-align: justify;
	width: 85vw;
	margin: auto;
	margin-top: 4vh;
`;
const ButtonDiv = styled.div`
	position: fixed;
	bottom: 0px;
	left: 0px;
`;

export default Mission2MobileInputPresenter;
