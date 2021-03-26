import React from "react";
import styled from "styled-components";
import { InputDefault } from "../../ui/inputBox/Input";
import { ButtonPrimary } from "../../ui/button/Button";

const inputStyle1 = {
	width: "566px",
	height: "42px",
	borderRadius: "2px",
	border: "solid 1px #e4e4e4",
	backgroundColor: "#fcfcfc",
	position: "absolute",
	top: "62px",
	left: "24px",
};
const inputStyle2 = {
	width: "566px",
	height: "42px",
	borderRadius: "2px",
	border: "solid 1px #e4e4e4",
	backgroundColor: "#fcfcfc",
	position: "absolute",
	top: "154px",
	left: "24px",
};
const inputStyle3 = {
	width: "566px",
	height: "42px",
	borderRadius: "2px",
	border: "solid 1px #e4e4e4",
	backgroundColor: "#fcfcfc",
	position: "absolute",
	top: "246px",
	left: "24px",
};
const inputStyle4 = {
	width: "566px",
	height: "42px",
	borderRadius: "2px",
	border: "solid 1px #e4e4e4",
	backgroundColor: "#fcfcfc",
	position: "absolute",
	top: "338px",
	left: "24px",
};

const ReasonDevelopProduct = ({ clickFunctionList }) => {
	return (
		<RightBox>
			<Question style={{ top: "26px" }}>
				분석한 사회문제의 원인은 무엇인가요?
			</Question>
			<InputDefault style={inputStyle1} />
			<Question style={{ top: "118px" }}>
				이 문제로 어려움을 겪고 있는 사람은 누구인가요?
			</Question>
			<InputDefault style={inputStyle2} />
			<Question style={{ top: "210px" }}>어떤 어려움을 겪고 있나요?</Question>
			<InputDefault style={inputStyle3} />
			<Question style={{ top: "302px" }}>왜 이 문제가 해결되어야 하나요?</Question>
			<InputDefault style={inputStyle4} />
			<ButtonPrimary
				text='다음'
				style={{ position: "absolute", bottom: "24px", right: "24px" }}
				onClick={() => clickFunctionList.onClickNextFuction("reason")}
			/>
		</RightBox>
	);
};

const RightBox = styled.div`
	width: 624px;
	height: 462px;
	border-radius: 2px;
	box-shadow: 0 0 10px 0 rgba(15, 15, 21, 0.05);
	background-color: #ffffff;
	position: relative;
	margin-bottom: 179px;
`;
const Question = styled.div`
	width: 448px;
	height: 22px;
	font-family: "NotoSansCJKkr";
	font-size: 14px;
	font-weight: normal;
	font-stretch: normal;
	font-style: normal;
	line-height: 1.57;
	letter-spacing: normal;
	color: #0f0f15;
	position: absolute;
	left: 24px;
`;

export default ReasonDevelopProduct;
