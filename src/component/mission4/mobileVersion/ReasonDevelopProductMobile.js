import React from "react";
import styled from "styled-components";
import { InputDefault } from "../../../ui/inputBox/Input";
import { ButtonPrimary } from "../../../ui/button/Button";
import ClipLoader from "react-spinners/ClipLoader";

const inputStyle1 = {
	width: "80vw",
	height: "42px",
	borderRadius: "2px",
	border: "solid 1px #e4e4e4",
	backgroundColor: "#fcfcfc",
	marginBottom: "6vh",
};
const inputStyle2 = {
	width: "80vw",
	height: "42px",
	borderRadius: "2px",
	border: "solid 1px #e4e4e4",
	backgroundColor: "#fcfcfc",
	marginBottom: "6vh",
};
const inputStyle3 = {
	width: "80vw",
	height: "42px",
	borderRadius: "2px",
	border: "solid 1px #e4e4e4",
	backgroundColor: "#fcfcfc",
	marginBottom: "6vh",
};
const inputStyle4 = {
	width: "80vw",
	height: "42px",
	borderRadius: "2px",
	border: "solid 1px #e4e4e4",
	backgroundColor: "#fcfcfc",
};

const ReasonDevelopProduct = ({
	loading,
	firstTxtArea,
	secondTxtArea,
	thirdTxtArea,
	fourthTxtArea,
	clickFunctionList,
}) => {
	return (
		<>
			<RightBox>
				<Question style={{ top: "26px" }}>
					분석한 사회문제의 원인은 무엇인가요?
				</Question>
				<InputDefault
					style={inputStyle1}
					onChange={clickFunctionList.onChangeReasonFirst}
					value={firstTxtArea ? firstTxtArea : ""}
				/>
				<Question style={{ top: "118px" }}>
					이 문제로 어려움을 겪고 있는 사람은 누구인가요?
				</Question>
				<InputDefault
					style={inputStyle2}
					onChange={clickFunctionList.onChangeReasonSecond}
					value={secondTxtArea ? secondTxtArea : ""}
				/>
				<Question style={{ top: "210px" }}>어떤 어려움을 겪고 있나요?</Question>
				<InputDefault
					style={inputStyle3}
					onChange={clickFunctionList.onChangeReasonThird}
					value={thirdTxtArea ? thirdTxtArea : ""}
				/>
				<Question style={{ top: "302px" }}>
					왜 이 문제가 해결되어야 하나요?
				</Question>
				<InputDefault
					style={inputStyle4}
					onChange={clickFunctionList.onChangeReasonFourth}
					value={fourthTxtArea ? fourthTxtArea : ""}
				/>
			</RightBox>
			<ButtonPrimary
				text='다음'
				style={{
					width: "100vw",
					height: "8vh",
					fontFamily: "NotoSansCJKkr",
					fontSize: "14px",
					fontWeight: "500",
					textAlign: "center",
				}}
				onClick={() => clickFunctionList.onClickNextFuction("reason")}
			/>
			{loading && (
				<ModalWrapper>
					<ModalAreaSave>
						<ClipLoader color={"#ffc300"} style={{ margin: "0 auto" }} />
					</ModalAreaSave>
				</ModalWrapper>
			)}
		</>
	);
};

const RightBox = styled.div`
	width: 90vw;
	/* height: 80vh; */
	border-radius: 2px;
	box-shadow: 0 0 10px 0 rgba(15, 15, 21, 0.05);
	background-color: #ffffff;
	margin-left: 5vw;
	margin-bottom: 27px;
	box-sizing: border-box;
	padding: 2vh 0;
	padding-left: 2vw;
`;
const Question = styled.div`
	width: 90vw;
	height: 5vh;
	font-family: NotoSansCJKkr;
	font-size: 14px;
	font-weight: normal;
	font-stretch: normal;
	font-style: normal;
	line-height: 1.57;
	letter-spacing: normal;
	color: #0f0f15;
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

export default ReasonDevelopProduct;
