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
	humanRole1DropDown,
	humanRole2DropDown,
	humanRole3DropDown,
	humanRole1,
	humanRole2,
	humanRole3,
	modalFunction,
	clickFunctionList,
}) => {
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
					id='roleOne'
					item={humanRole1DropDown}
					options={options}
					style={{ position: "absolute", top: "36px", zIndex: "30" }}
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
					item={humanRole2DropDown}
					options={options}
					style={{ position: "absolute", top: "36px", zIndex: "20" }}
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
					item={humanRole3DropDown}
					options={options}
					style={{ position: "absolute", top: "36px" }}
					placeholder='선택'
				/>
				<InputDefault
					placeholder='미래인재가 사회문제 해결을 위해 어떤 활동을 하는지 작성해 보세요.'
					style={inputStyle}
					onChange={clickFunctionList.onChangeHumanThird}
					value={humanRole3 ? humanRole3 : ""}
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
	font-family: NotoSansCJKkr;
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
	width: 576px;
	height: 130px;
	margin-top: 18px;
	margin-left: 24px;
	position: relative;
`;

export default ProductDeveloper;
