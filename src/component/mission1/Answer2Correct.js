import React from "react";
import styled from "styled-components";
import { ButtonPrimary, ButtonSecondary } from "../../ui/button/Button";

const Answer2Correct = ({
	index,
	modalFunction,
	answerFunctionList,
	makeSaveDataFunctionList,
}) => {
	return (
		<RightBox>
			<Number>
				<HeaderSuccess>미래인재 매칭 성공!</HeaderSuccess>
				<div
					style={{
						position: "absolute",
						top: "28px",
						right: "24px",
						height: "24px",
					}}
				>
					<span
						style={{
							fontFamily: "NotoSansCJKkr",
							fontSize: "14px",
							fontWeight: "bold",
							lineHeight: "1.57",
							color: "#0f0f15",
						}}
					>
						{index}
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
				</div>
			</Number>
			<Title>
				미래인재에 대해 더 알아보고 싶다면,
				<br /> 더 알아보기 버튼을 눌러주세요!
			</Title>
			<ButtonSecondary
				text='더 알아보기'
				style={{
					width: "256px",
					height: "40px",
					marginTop: "20px",
					marginLeft: "24px",
				}}
				onClick={() => {
					modalFunction.toggleNextMediaModal();
					makeSaveDataFunctionList.onClickMoreCount();
				}}
			/>
			<ButtonPrimary
				text='다음'
				style={{ marginTop: "150px", marginLeft: "200px" }}
				onClick={answerFunctionList.addIndex}
			/>
		</RightBox>
	);
};

export default Answer2Correct;

const RightBox = styled.div`
	width: 304px;
	height: 388px;
	border-radius: 2px;
	box-shadow: 0 0 10px 0 rgba(15, 15, 21, 0.05);
	border: solid 1px #ffc300;
	background-color: #ffffff;
	position: relative;
`;
const Number = styled.div`
	width: 304px;
	height: 22px;
	padding-top: 28px;
	margin-left: 245px;
`;
const HeaderSuccess = styled.div`
	width: 147px;
	height: 24px;
	margin: 0 29px 20px 0;
	font-family: NotoSansCJKkr;
	font-size: 18px;
	font-weight: 500;
	font-stretch: normal;
	font-style: normal;
	line-height: 1.33;
	letter-spacing: normal;
	color: #0f0f15;
	position: absolute;
	top: 28px;
	left: 24px;
`;
const Title = styled.div`
	width: 256px;
	height: 44px;
	font-size: 14px;
	line-height: 1.57;
	color: #0f0f15;
	margin-top: 20px;
	margin-left: 24px;
`;
// const SubTitle = styled.div`
// 	width: 256px;
// 	height: 22px;
// 	font-size: 14px;
// 	line-height: 1.57;
// 	color: #686868;
// 	margin-top: 8px;
// 	margin-left: 24px;
// `;
