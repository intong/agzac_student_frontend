import React from "react";
import styled from "styled-components";
import { InputDefault } from "../../../ui/inputBox/Input";
import { ButtonPrimary } from "../../../ui/button/Button";
import nextIcon from "../../../assets/mobileImage/icn-next-dim@2x.png";
import close from "../../../assets/icons/bnt-x-24.svg";

const inputStyle = {
	width: "80vw",
	height: "42px",
	border: "1px solid #e4e4e4",
	background: "#fcfcfc",
	marginTop: "12px",
};

const Mission1MobileInputPresenter = ({
	wrongModal,
	wrong,
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
			</Wrapper>
		</>
	);
};

const Wrapper = styled.div`
	width: 100vw;
	height: 100vh;
	position: fixed;
	/* top: 0vh; */
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
const RightBox = styled.div`
	padding-left: 9vw;
`;
const TitleText = styled.div`
	font-family: "NotoSansCJKkr";
	font-size: 18px;
	font-weight: 500;
	line-height: 1.33;
	color: #0f0f15;
	margin-top: 55px;
`;
const HeaderText = styled.div`
	font-family: "NotoSansCJKkr";
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
const ModalArea = styled.div`
	background: red;
	/* background: #ffffff; */
	width: 72vw;
	height: 56vh;
	border-radius: 5px;
	box-shadow: 0 0 10px 0 rgba(15, 15, 21, 0.05);
	margin: 0 auto;
	margin-top: 15vh;
	padding: 2vh 4vw;
	position: relative;
`;
const CloseBtn = styled.img``;

export default Mission1MobileInputPresenter;
