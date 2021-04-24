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

const ItemIntroduction = ({ clickFunctionList }) => {
	return (
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
			<ButtonPrimary
				text='다음'
				style={{ position: "absolute", bottom: "24px", right: "24px" }}
				onClick={() => clickFunctionList.onClickNextFuction("itemIntro")}
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
	margin-bottom: 8px;
	position: relative;
`;
const Question = styled.div`
	width: 448px;
	height: 22px;
	font-family: NotoSansCJKkr;
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

export default ItemIntroduction;
