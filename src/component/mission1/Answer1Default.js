import React from "react";
import styled from "styled-components";
import { ButtonPrimary } from "../../ui/button/Button";
import { InputDefault } from "../../ui/inputBox/Input";

const inputStyle = {
	width: "246px",
	height: "42px",
	border: "solid 1px #e4e4e4",
	background: "#fcfcfc",
	marginTop: "12px",
	marginLeft: "24px",
};

const Answer1Default = ({ setProcessFunction }) => {
	return (
		<RightBox>
			<Number>
				<span
					style={{
						fontFamily: "NotoSansCJKkr",
						fontSize: "14px",
						fontWeight: "bold",
						lineHeight: "1.57",
						color: "#0f0f15",
					}}
				>
					1
				</span>{" "}
				<span
					style={{
						fontFamily: "NotoSansCJKkr",
						fontSize: "14px",
						fontWeight: "500",
						lineHeight: "1.57",
						color: "#d8d8d8",
					}}
				>
					/
				</span>{" "}
				<span
					style={{
						fontFamily: "NotoSansCJKkr",
						fontSize: "14px",
						fontWeight: "500",
						lineHeight: "1.57",
						color: "#0f0f15",
					}}
				>
					16
				</span>
			</Number>
			<Title>
				제시된 미래인재 정보를 확인한 후 정확한 직업이름을 맞춰 보세요!{" "}
			</Title>
			<SubTitle>* 띄어쓰기 없이 작성해주세요.</SubTitle>
			<InputDefault style={inputStyle} />
			<ButtonPrimary
				text='정답제출'
				style={{ marginTop: "128px", marginLeft: "200px" }}
				onClick={setProcessFunction}
			/>
		</RightBox>
	);
};

export default Answer1Default;

const RightBox = styled.div`
	width: 304px;
	height: 388px;
	border-radius: 2px;
	box-shadow: 0 0 10px 0 rgba(15, 15, 21, 0.05);
	background-color: #ffffff;
`;
const Number = styled.div`
	width: 304px;
	height: 22px;
	padding-top: 28px;
	margin-left: 245px;
`;
const Title = styled.div`
	width: 256px;
	height: 44px;
	font-size: 14px;
	line-height: 1.57;
	color: #0f0f15;
	margin-top: 18px;
	margin-left: 24px;
`;
const SubTitle = styled.div`
	width: 256px;
	height: 22px;
	font-size: 14px;
	line-height: 1.57;
	color: #686868;
	margin-top: 8px;
	margin-left: 24px;
`;
