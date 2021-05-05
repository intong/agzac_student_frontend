import React from "react";
import styled from "styled-components";
import { ButtonPrimary } from "../../../ui/button/Button";
import { TextArea } from "../../../ui/inputBox/Input";
import { Dropbox } from "../../../ui/dropbox/Dropbox";
import ClipLoader from "react-spinners/ClipLoader";

const SocialProblem = ({
	loading,
	socialProblem,
	texts,
	prevSelect,
	clickFunctionList,
}) => {
	const options = prevSelect && prevSelect.studentAnswerList;
	return (
		<>
			<RightBox>
				<TitleRight>
					선택한 사회문제관련 키워드 중 상품을 개발하여 해결할 사회문제 키워드
					1가지를 선택해주세요.
				</TitleRight>
				<Dropbox
					id='question'
					item={socialProblem}
					options={options}
					placeholder='사회문제 현상 키워드 선택'
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
						width: "80vw",
						height: "40vh",
						resize: "none",
						overflowY: "auto",
					}}
					onChange={clickFunctionList.onChangeTextArea}
					value={texts ? texts : ""}
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
				onClick={() => clickFunctionList.onClickNextFuction("social")}
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
	height: 80vh;
	border-radius: 2px;
	box-shadow: 0 0 10px 0 rgba(15, 15, 21, 0.05);
	background-color: #ffffff;
	margin-left: 5vw;
	margin-bottom: 27px;
	box-sizing: border-box;
	padding: 2vh 0;
	padding-left: 2vw;
`;
const TitleRight = styled.div`
	width: 85vw;
	height: 6vh;
	font-family: NotoSansCJKkr;
	font-size: 14px;
	font-weight: normal;
	font-stretch: normal;
	font-style: normal;
	line-height: 1.57;
	letter-spacing: normal;
	color: #0f0f15;
	text-align: justify;
	margin-bottom: 1vh;
`;
const TitleRight2 = styled.div`
	width: 85vw;
	height: 10vh;
	font-family: NotoSansCJKkr;
	font-size: 14px;
	font-weight: normal;
	font-stretch: normal;
	font-style: normal;
	line-height: 1.57;
	letter-spacing: normal;
	color: #0f0f15;
	text-align: justify;
	margin-top: 10vh;
	margin-bottom: 1vh;
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

export default SocialProblem;
