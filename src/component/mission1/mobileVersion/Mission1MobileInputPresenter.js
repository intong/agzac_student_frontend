import React from "react";
import styled from "styled-components";
import { InputDefault } from "../../../ui/inputBox/Input";
import { ButtonPrimary } from "../../../ui/button/Button";
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
const ButtonDiv = styled.div`
	position: fixed;
	bottom: 0px;
	left: 0px;
`;

export default Mission1MobileInputPresenter;
