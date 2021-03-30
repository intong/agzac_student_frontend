import React from "react";
import styled from "styled-components";
import { Dropbox } from "../../ui/dropbox/Dropbox";
import { InputDefault } from "../../ui/inputBox/Input";
import { ButtonPrimary } from "../../ui/button/Button";

const inputStyle = {
	width: "566px",
	height: "42px",
	position: "absolute",
	top: "88px",
};

const ProductDeveloper = ({ clickFunctionList }) => {
	return (
		<RightBox>
			<Question>
				사회문제를 해결하기 위해서는 4차산업기술로 개발된 상품이 필요합니다. 상품을
				개발하기위해 어떤 미래인재가 필요할까요? 3명의 미래인재를 선택하고,
				미래인재가 상품개발을 위해 어떤 역할을 하는지 작성해 주세요.
			</Question>
			<div
				style={{
					width: "624px",
					height: "1px",
					background: "#e4e4e4",
					marginTop: "18px",
				}}
			></div>
			<RepeatBlock>
				<Label>미래인재1</Label>
				<Dropbox
					style={{ position: "absolute", top: "36px", zIndex: "30" }}
					placeholder='선택'
				/>
				<InputDefault
					placeholder='미래인재가 사회문제 해결을 위해 어떤 활동을 하는지 작성해 보세요.'
					style={inputStyle}
				/>
			</RepeatBlock>
			<RepeatBlock>
				<Label>미래인재2</Label>
				<Dropbox
					style={{ position: "absolute", top: "36px", zIndex: "20" }}
					placeholder='선택'
				/>
				<InputDefault
					placeholder='미래인재가 사회문제 해결을 위해 어떤 활동을 하는지 작성해 보세요.'
					style={inputStyle}
				/>
			</RepeatBlock>
			<RepeatBlock>
				<Label>미래인재3</Label>
				<Dropbox style={{ position: "absolute", top: "36px" }} placeholder='선택' />
				<InputDefault
					placeholder='미래인재가 사회문제 해결을 위해 어떤 활동을 하는지 작성해 보세요.'
					style={inputStyle}
				/>
			</RepeatBlock>
			<ButtonPrimary
				text='다음'
				style={{ position: "absolute", bottom: "24px", right: "24px" }}
				onClick={() => clickFunctionList.onClickNextFuction("developer")}
			/>
		</RightBox>
	);
};

const RightBox = styled.div`
	width: 624px;
	height: 633px;
	border-radius: 2px;
	box-shadow: 0 0 10px 0 rgba(15, 15, 21, 0.05);
	background-color: #ffffff;
	margin-bottom: 8px;
	position: relative;
`;
const Question = styled.div`
	width: 576px;
	height: 66px;
	font-family: "NotoSansCJKkr";
	font-size: 14px;
	font-weight: normal;
	font-stretch: normal;
	font-style: normal;
	line-height: 1.57;
	letter-spacing: normal;
	color: #0f0f15;
	padding-top: 26px;
	margin-left: 24px;
`;
const Label = styled.div`
	width: 60px;
	height: 22px;
	font-family: "NotoSansCJKkr";
	font-size: 14px;
	font-weight: normal;
	font-stretch: normal;
	font-style: normal;
	line-height: 1.57;
	letter-spacing: normal;
	color: #0f0f15;
`;
const RepeatBlock = styled.div`
	width: 576px;
	height: 130px;
	margin-top: 18px;
	margin-left: 24px;
	position: relative;
`;

export default ProductDeveloper;
