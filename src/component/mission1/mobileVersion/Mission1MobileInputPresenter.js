import React from "react";
import styled from "styled-components";
import { InputDefault } from "../../../ui/inputBox/Input";
import { ButtonPrimary } from "../../../ui/button/Button";
import { HelpModalMobile } from "../../../ui/modal/Modal";
import close from "../../../assets/icons/bnt-x-24.svg";
import ClipLoader from "react-spinners/ClipLoader";
import btnJobs from "../../../assets/icons/btn-floaing-jobs.svg";

const inputStyle = {
	width: "80vw",
	height: "42px",
	border: "1px solid #e4e4e4",
	background: "#fcfcfc",
	marginTop: "12px",
};

const Mission1MobileInputPresenter = ({
	isOpen,
	loading,
	wrongModal,
	wrong,
	modalFunction,
	answerInputText,
	mobileFunctionList,
	answerFunctionList,
}) => {
	return (
		<>
			<Wrapper>
				<CloseImg src={close} onClick={mobileFunctionList.inputPageHandler} />
				<RightBox>
					<TitleText>직업이름 매칭</TitleText>
					<HeaderText>
						제시된 미래인재 정보를 확인한 후 정확한 직업이름을 맞춰 보세요!
					</HeaderText>
					<SubTitle>* 띄어쓰기 없이 작성해주세요.</SubTitle>
					<InputDefault
						style={inputStyle}
						wrong={wrong}
						onChange={answerFunctionList.onChangeAnswer}
					/>
					<OneMore wrong={wrong}>한번 더 풀어보세요!</OneMore>
					<ButtonDiv>
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
							onClick={mobileFunctionList.checkAnswer}
						/>
					</ButtonDiv>
				</RightBox>
				<JobsBtn src={btnJobs} alt='직업버튼' onClick={modalFunction.openModal} />
			</Wrapper>
			{loading && (
				<ModalWrapper>
					<ModalAreaSave>
						<ClipLoader color={"#ffc300"} style={{ margin: "0 auto" }} />
					</ModalAreaSave>
				</ModalWrapper>
			)}
			{/* 잡카드 모달 */}
			{isOpen && (
				<ModalWrapper>
					<ModalArea>
						<HelpModalMobile modalFunction={modalFunction} />
					</ModalArea>
				</ModalWrapper>
			)}
		</>
	);
};

const Wrapper = styled.div`
	width: 100vw;
	height: 100vh;
	position: fixed;
	/* top: 0vh; */
	overflow-x: hidden;
	overflow-y: auto;
	background: #ffffff;
`;
const CloseImg = styled.img`
	position: absolute;
	top: 0px;
	right: 0px;
	padding-top: 16px;
	padding-right: 16px;
`;
const RightBox = styled.div`
	padding-left: 9vw;
`;
const TitleText = styled.div`
	font-family: NotoSansCJKkr;
	font-size: 18px;
	font-weight: 500;
	line-height: 1.33;
	color: #0f0f15;
	margin-top: 55px;
`;
const HeaderText = styled.div`
	font-family: NotoSansCJKkr;
	font-size: 14px;
	line-height: 1.57;
	color: #0f0f15;
	margin-top: 14px;
	width: 84vw;
`;
const SubTitle = styled.div`
	width: 84vw;
	font-size: 14px;
	line-height: 1.57;
	color: #686868;
	margin-top: 8px;
`;
const OneMore = styled.div`
	font-family: NotoSansCJKkr;
	font-size: 14px;
	font-weight: 500;
	color: #ff3737;
	display: ${(props) => (props.wrong === false ? "" : "none")};
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
	top: 0;
	z-index: 20;
	display: flex;
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

export default Mission1MobileInputPresenter;
