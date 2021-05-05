import React from "react";
import styled from "styled-components";
import close from "../../../assets/icons/bnt-x-24.svg";
import { DropboxMobile } from "../../../ui/MobileUI";
import { ButtonPrimary } from "../../../ui/button/Button";
import { HelpModalMobile } from "../../../ui/modal/Modal";
import ClipLoader from "react-spinners/ClipLoader";
import btnJobs from "../../../assets/icons/btn-floaing-jobs.svg";

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
	index,
	isOpen,
	loading,
	normal,
	correctFirst,
	correctSeconds,
	firstFeedback,
	secondFeedback,
	modalFunction,
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
				<Title>4차산업기술을 보유한 미래인재&nbsp;({index}&nbsp;/&nbsp;4)</Title>
				<SubTitle>
					사회문제를 해결하는 상품을 개발하기 위해서는 4차산업 기술을 보유한 인재가
					필요합니다. 어떤 미래인재가 참여해야 할까요? 상품을 개발한 미래인재 2명을
					찾아주세요!
				</SubTitle>
				<div style={{ marginBottom: "20vh" }}>
					<SubTitle style={{ marginLeft: "10vw", marginBottom: "2vh" }}>
						미래인재1
					</SubTitle>
					<DropboxMobile
						id='futureOne'
						style={leftDropbox}
						placeholder='선택'
						options={options}
					/>
					<SubFeedbackFirst normal={normal} correctFirst={correctFirst}>
						{firstFeedback && firstFeedback}
					</SubFeedbackFirst>
					<SubTitle style={{ marginLeft: "10vw", marginBottom: "2vh" }}>
						미래인재2
					</SubTitle>
					<DropboxMobile
						id='futureTwo'
						style={rightDropbox}
						placeholder='선택'
						options={options}
					/>
					<SubFeedbackSeconds normal={normal} correctSeconds={correctSeconds}>
						{secondFeedback && secondFeedback}
					</SubFeedbackSeconds>
				</div>
				<JobsBtn src={btnJobs} alt='직업버튼' onClick={modalFunction.openModal} />
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
				{/* 잡카드 모달 */}
				{isOpen && (
					<ModalWrapper>
						<ModalArea>
							<HelpModalMobile modalFunction={modalFunction} />
						</ModalArea>
					</ModalWrapper>
				)}
				{loading && (
					<ModalWrapper>
						<ModalAreaSave>
							<ClipLoader color={"#ffc300"} style={{ margin: "0 auto" }} />
						</ModalAreaSave>
					</ModalWrapper>
				)}
			</Wrapper>
		</>
	);
};

const Wrapper = styled.div`
	width: 100vw;
	height: 100vh;
	/* position: fixed; */
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
	font-family: NotoSansCJKkr;
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
	font-family: NotoSansCJKkr;
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
const SubFeedbackFirst = styled.div`
	display: ${(props) =>
		props.normal === false && props.correctFirst === true ? "show" : "none"};
	font-family: NotoSansCJKkr;
	font-size: 0.875rem;
	font-weight: normal;
	font-stretch: normal;
	font-style: normal;
	line-height: 1.57;
	letter-spacing: normal;
	color: #0f0f15;
	text-align: justify;
	width: 85vw;
	margin: auto;
	margin-top: 2vh;
`;
const SubFeedbackSeconds = styled.div`
	display: ${(props) =>
		props.normal === false && props.correctSeconds === true ? "show" : "none"};
	font-family: NotoSansCJKkr;
	font-size: 0.875rem;
	font-weight: normal;
	font-stretch: normal;
	font-style: normal;
	line-height: 1.57;
	letter-spacing: normal;
	color: #0f0f15;
	text-align: justify;
	width: 85vw;
	margin: auto;
	margin-top: 2vh;
`;
const ButtonDiv = styled.div`
	position: fixed;
	bottom: 0px;
	left: 0px;
`;
const ModalWrapper = styled.div`
	width: 100vw;
	height: 100vh;
	background: rgba(15, 15, 21, 0.8);
	position: fixed;
	top: 0px;
	display: flex;
	z-index: 20;
`;
const ModalAreaSave = styled.div`
	margin: auto;
`;
const ModalArea = styled.div`
	/* background: red; */
	background: #ffffff;
	width: 72vw;
	height: 56vh;
	border-radius: 5px;
	box-shadow: 0 0 10px 0 rgba(15, 15, 21, 0.05);
	margin: 0 auto;
	margin-top: 15vh;
	padding: 2vh 4vw;
	position: relative;
`;
const JobsBtn = styled.img`
	width: 13vw;
	height: 13vh;
	position: fixed;
	bottom: 7vh;
	right: 3.5vw;
	filter: drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.2));
	&:hover {
		cursor: pointer;
	}
`;

export default Mission2MobileInputPresenter;
