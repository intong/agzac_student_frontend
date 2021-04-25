import React from "react";
import styled from "styled-components";
import { Dropbox } from "../../../ui/dropbox/Dropbox";
import { InputDefault } from "../../../ui/inputBox/Input";
import { ButtonPrimary } from "../../../ui/button/Button";

const inputStyle = {
	width: "80vw",
	height: "42px",
	marginBottom: "1vh",
};
const options = [
	"드론개발자",
	"사물인터넷전문가",
	"인공지능과학자",
	"3D프린터개발자",
	"컴퓨터보안전문가",
	"소프트웨어개발자",
	"기능성게임기획자",
	"VR엔지니어",
	"지능형교통시스템전문가",
	"프로파일러",
	"재난대처전문가",
	"신약개발연구원",
	"환경공학기술자",
	"신재생에너지전문가",
	"업사이클러",
	"탄소배출권거래중개인",
];

const ProductDeveloper = ({
	humanRole1,
	humanRole2,
	humanRole3,
	modalFunction,
	clickFunctionList,
}) => {
	return (
		<>
			<RightBox>
				<Question>
					사회문제를 해결하기 위해서는 4차산업기술로 개발된 상품이 필요합니다. 상품을
					개발하기위해 어떤 미래인재가 필요할까요? 3명의 미래인재를 선택하고,
					미래인재가 상품개발을 위해 어떤 역할을 하는지 작성해 주세요.
				</Question>
				<RepeatBlock>
					<Label>미래인재1</Label>
					<Dropbox
						id='roleOne'
						options={options}
						style={{ marginBottom: "1vh" }}
						placeholder='선택'
					/>
					<InputDefault
						placeholder='미래인재가 사회문제 해결을 위해 어떤 활동을 하는지 작성해 보세요.'
						style={inputStyle}
						onChange={clickFunctionList.onChangeHumanFirst}
						value={humanRole1 ? humanRole1 : ""}
					/>
				</RepeatBlock>
				<RepeatBlock>
					<Label>미래인재2</Label>
					<Dropbox
						id='roleTwo'
						options={options}
						style={{ marginBottom: "1vh" }}
						placeholder='선택'
					/>
					<InputDefault
						placeholder='미래인재가 사회문제 해결을 위해 어떤 활동을 하는지 작성해 보세요.'
						style={inputStyle}
						onChange={clickFunctionList.onChangeHumanSecond}
						value={humanRole2 ? humanRole2 : ""}
					/>
				</RepeatBlock>
				<RepeatBlock>
					<Label>미래인재3</Label>
					<Dropbox
						id='roleThree'
						options={options}
						style={{ marginBottom: "1vh" }}
						placeholder='선택'
					/>
					<InputDefault
						placeholder='미래인재가 사회문제 해결을 위해 어떤 활동을 하는지 작성해 보세요.'
						style={inputStyle}
						onChange={clickFunctionList.onChangeHumanThird}
						value={humanRole3 ? humanRole3 : ""}
					/>
				</RepeatBlock>
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
				onClick={() => clickFunctionList.onClickNextFuction("developer")}
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
	width: 86vw;
	height: 12vh;
	font-family: NotoSansCJKkr;
	font-size: 14px;
	font-weight: normal;
	font-stretch: normal;
	font-style: normal;
	line-height: 1.57;
	letter-spacing: normal;
	color: #0f0f15;
	text-align: justify;
`;
const Label = styled.div`
	width: 80vw;
	height: 22px;
	font-family: NotoSansCJKkr;
	font-size: 14px;
	font-weight: normal;
	font-stretch: normal;
	font-style: normal;
	line-height: 1.57;
	letter-spacing: normal;
	color: #0f0f15;
`;
const RepeatBlock = styled.div`
	margin-top: 4vh;
	margin-bottom: 3vh;
`;

export default ProductDeveloper;
