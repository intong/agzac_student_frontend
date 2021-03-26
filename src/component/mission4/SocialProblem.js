import React from "react";
import styled from "styled-components";
import { ButtonPrimary } from "../../ui/button/Button";
import { TextArea } from "../../ui/inputBox/Input";
import { Dropbox } from "../../ui/dropbox/Dropbox";

const options = ["1", "1", "1", "1", "1", "1"];

const SocialProblem = ({ clickFunctionList }) => {
	return (
		<>
			<RightBox>
				<TitleRight>
					선택한 사회문제관련 키워드 중 상품을 개발하여 해결할 사회문제 키워드
					1가지를 선택해주세요.
				</TitleRight>
				<Dropbox
					options={options}
					placeholder='사회문제 현상 키워드 선택'
					style={{ position: "absolute", top: "62px", left: "24px" }}
				/>
				<TitleRight2>
					선택한 사회문제 현상 키워드와 관련된 문제상황을 작성해주세요.
					<br />
					<span style={{ color: "#686868" }}>
						* 직접 겪은 상황, 뉴스에서 본 것 등
					</span>
				</TitleRight2>
				<TextArea
					style={{
						position: "absolute",
						top: "178px",
						left: "24px",
						width: "556px",
						height: "86px",
					}}
				/>
				<ButtonPrimary
					text='다음'
					style={{ position: "absolute", top: "328px", right: "24px" }}
					onClick={() => clickFunctionList.onClickNextFuction("social")}
				/>
			</RightBox>
		</>
	);
};

const RightBox = styled.div`
	width: 624px;
	height: 392px;
	border-radius: 2px;
	box-shadow: 0 0 10px 0 rgba(15, 15, 21, 0.05);
	background-color: #ffffff;
	position: relative;
	margin-bottom: 27px;
`;
const TitleRight = styled.div`
	width: 549px;
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
	top: 26px;
	left: 24px;
`;
const TitleRight2 = styled.div`
	width: 576px;
	height: 44px;
	font-family: "NotoSansCJKkr";
	font-size: 14px;
	font-weight: normal;
	font-stretch: normal;
	font-style: normal;
	line-height: 1.57;
	letter-spacing: normal;
	color: #0f0f15;
	position: absolute;
	top: 120px;
	left: 24px;
`;

export default SocialProblem;
