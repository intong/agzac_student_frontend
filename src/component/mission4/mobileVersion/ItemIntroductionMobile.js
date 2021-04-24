import React from "react";
import styled from "styled-components";
import { InputDefault } from "../../../ui/inputBox/Input";
import { ButtonPrimary } from "../../../ui/button/Button";

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

const ItemIntroduction = ({ clickFunctionList }) => {
	return (
		<>
			<RightBox>
				<Question style={{ top: "26px" }}>상품의 모습을 설명해 주세요.</Question>
				<InputDefault
					style={inputStyle1}
					onChange={clickFunctionList.onChangeItemIntro1}
				/>
				<Question style={{ top: "118px" }}>상품의 사용법을 설명해 주세요.</Question>
				<InputDefault
					style={inputStyle2}
					onChange={clickFunctionList.onChangeItemIntro2}
				/>
				<Question style={{ top: "210px" }}>
					이 상품의 단점 혹은 예상되는 문제점은 무엇인가요?
				</Question>
				<InputDefault
					style={inputStyle3}
					onChange={clickFunctionList.onChangeItemIntro3}
				/>
				<Question style={{ top: "302px" }}>
					단점 혹은 문제점을 해결할 수 있는 방법은 무엇인가요?
				</Question>
				<InputDefault
					style={inputStyle4}
					onChange={clickFunctionList.onChangeItemIntro4}
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
				onClick={() => clickFunctionList.onClickNextFuction("itemIntro")}
			/>
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

export default ItemIntroduction;
