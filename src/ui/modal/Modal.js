import { useState } from "react";
import styled from "styled-components";
import {
	ButtonPrimary,
	ButtonPrimaryLong,
	ButtonSecondary,
	ButtonSecondaryLong,
} from "../button/Button";
import { InputLineType } from "../inputBox/Input";
import close from "../../assets/icons/bnt-x-24.svg";
import prev from "../../assets/icons/btn-prev.svg";
import next from "../../assets/icons/btn-next.svg";
import { jobCards } from "../../component/JobCards";
import ReactLoading from "react-loading";

export const LoadingModal = () => {
	return (
		<BlockLoading>
			<Content>
				<ReactLoading type={"spin"} color={"#fffff"} width={"50%"} height={"50%"} />
			</Content>
		</BlockLoading>
	);
};

const BlockLoading = styled.div`
	width: 320px;
	padding: 26px 24px;
	position: relative;
`;
const Content = styled.div`
	width: 100px;
	height: 50px;
	margin: auto;
`;

// Type1_버튼 내용이 짧은 경우 _ 1btn
export function ModalBase({
	header,
	content,
	modalStyle,
	btnStyle,
	btntext,
	btnEvent,
	closeModalEvent,
}) {
	return (
		<Block style={modalStyle}>
			<CloseImg src={close} alt='' onClick={closeModalEvent} />
			<HeaderDiv>{header}</HeaderDiv>
			<ContentDiv>{content}</ContentDiv>
			<BtnPosition>
				<ButtonPrimary text={btntext} style={btnStyle} onClick={btnEvent} />
			</BtnPosition>
		</Block>
	);
}
const Block = styled.div`
	background: #ffffff;
	width: 320px;
	padding: 26px 24px;
	position: relative;
`;
const CloseImg = styled.img`
	position: absolute;
	top: 10px;
	right: 10px;
	&:hover {
		cursor: pointer;
	}
`;
const HeaderDiv = styled.div`
	font-family: "NotoSansCJKkr";
	font-size: 18px;
	font-weight: 500;
	font-stretch: normal;
	font-style: normal;
	line-height: 1.33;
	letter-spacing: normal;
	color: #0f0f15;
`;
const ContentDiv = styled.div`
	min-height: 66px;
	font-family: "NotoSansCJKkr";
	font-size: 14px;
	font-weight: normal;
	font-stretch: normal;
	font-style: normal;
	line-height: 1.57;
	letter-spacing: normal;
	color: #0f0f15;
	margin-top: 18px;
	/* background: green; */
`;
const BtnPosition = styled.div`
	/* background: red; */
	width: 320px;
	height: 40px;
	display: flex;
	justify-content: flex-end;
`;

// type2_버튼 내용이 긴 경우 _ 2btn
export const ModalTwoBtnLong = ({
	header,
	content,
	closeModalEvent,
	confirmBtnOnClick,
	cancelBtnOnClick,
}) => {
	return (
		<BlockTwoBtnLong>
			<CloseImgTwoBtnLong src={close} alt='' onClick={closeModalEvent} />
			<HeaderDivTwoBtnLong>{header}</HeaderDivTwoBtnLong>
			<ContentDivTwoBtnLong>{content}</ContentDivTwoBtnLong>
			<ButtonSecondaryLong
				text='다시 시작하기'
				style={{ marginBottom: "6px" }}
				onClick={cancelBtnOnClick}
			/>
			<ButtonPrimaryLong text='이어서 진행하기' onClick={confirmBtnOnClick} />
		</BlockTwoBtnLong>
	);
};

const BlockTwoBtnLong = styled.div`
	background: #ffffff;
	width: 272px;
	height: 198px;
	padding: 26px 24px;
	position: relative;
`;
const CloseImgTwoBtnLong = styled.img`
	position: absolute;
	top: 10px;
	right: 10px;
	&:hover {
		cursor: pointer;
	}
`;
const HeaderDivTwoBtnLong = styled.div`
	font-family: "NotoSansCJKkr";
	font-size: 18px;
	font-weight: 500;
	font-stretch: normal;
	font-style: normal;
	line-height: 1.33;
	letter-spacing: normal;
	color: #0f0f15;
`;
const ContentDivTwoBtnLong = styled.div`
	min-height: 66px;
	font-family: "NotoSansCJKkr";
	font-size: 14px;
	font-weight: normal;
	font-stretch: normal;
	font-style: normal;
	line-height: 1.57;
	letter-spacing: normal;
	color: #0f0f15;
	margin-top: 18px;
	/* background: green; */
`;

// Type1_버튼 내용이 짧은 경우 _ 2btn
export const ModalBaseTwoBtn = ({
	header,
	content,
	modalStyle,
	confitmbtnStyle,
	cancelbtnStyle,
	confirmbtntext,
	cancelbtntext,
	confirmbtnEvent,
	cancelbtnEvent,
	closeModalEvent,
}) => {
	return (
		<BlockTwoBtn style={modalStyle}>
			<CloseImgTwoBtn src={close} alt='' onClick={closeModalEvent} />
			<HeaderDivTwoBtn>{header}</HeaderDivTwoBtn>
			<ContentDivTwoBtn>{content}</ContentDivTwoBtn>
			<BtnPositionTwoBtn>
				<ButtonSecondary
					text={cancelbtntext}
					style={cancelbtnStyle}
					onClick={cancelbtnEvent}
				/>
				<ButtonPrimary
					text={confirmbtntext}
					style={confitmbtnStyle}
					onClick={confirmbtnEvent}
				/>
			</BtnPositionTwoBtn>
		</BlockTwoBtn>
	);
};

const BlockTwoBtn = styled.div`
	background: #ffffff;
	width: 320px;
	padding: 26px 24px;
	position: relative;
`;
const CloseImgTwoBtn = styled.img`
	position: absolute;
	top: 10px;
	right: 10px;
	&:hover {
		cursor: pointer;
	}
`;
const HeaderDivTwoBtn = styled.div`
	font-family: "NotoSansCJKkr";
	font-size: 18px;
	font-weight: 500;
	font-stretch: normal;
	font-style: normal;
	line-height: 1.33;
	letter-spacing: normal;
	color: #0f0f15;
`;
const ContentDivTwoBtn = styled.div`
	min-height: 66px;
	font-family: "NotoSansCJKkr";
	font-size: 14px;
	font-weight: normal;
	font-stretch: normal;
	font-style: normal;
	line-height: 1.57;
	letter-spacing: normal;
	color: #0f0f15;
	margin-top: 18px;
	/* background: green; */
`;
const BtnPositionTwoBtn = styled.div`
	/* background: red; */
	width: 320px;
	height: 40px;
	display: flex;
	justify-content: flex-end;
	gap: 8px;
`;

export const ModalWithInputOneBtn = ({
	header,
	content,
	btnEvent,
	placeholder,
	btntext,
	onChange,
	closeModalEvent,
}) => {
	return (
		<BlockWithInput>
			<CloseImgTwoBtn src={close} alt='' onClick={closeModalEvent} />
			<HeaderDivWithInput>{header}</HeaderDivWithInput>
			<ContentDivWithInput>
				{content}
				<InputLineType
					placeholder={placeholder}
					style={{ marginTop: "20px", marginBottom: "10px" }}
					onChange={onChange}
				/>
			</ContentDivWithInput>
			<BtnPositionWithInput>
				<ButtonPrimary
					text={btntext}
					style={{ marginTop: "10px" }}
					onClick={btnEvent}
				/>
			</BtnPositionWithInput>
		</BlockWithInput>
	);
};

const BlockWithInput = styled.div`
	background: #ffffff;
	width: 320px;
	padding: 26px 24px;
	position: relative;
`;
const HeaderDivWithInput = styled.div`
	font-family: "NotoSansCJKkr";
	font-size: 18px;
	font-weight: 500;
	font-stretch: normal;
	font-style: normal;
	line-height: 1.33;
	letter-spacing: normal;
	color: #0f0f15;
`;
const ContentDivWithInput = styled.div`
	min-height: 66px;
	font-family: "NotoSansCJKkr";
	font-size: 14px;
	font-weight: normal;
	font-stretch: normal;
	font-style: normal;
	line-height: 1.57;
	letter-spacing: normal;
	color: #0f0f15;
	margin-top: 18px;
	/* background: green; */
`;
const BtnPositionWithInput = styled.div`
	/* background: red; */
	width: 320px;
	height: 40px;
	display: flex;
	justify-content: flex-end;
	gap: 8px;
`;

export const HelpModal = ({ style, modalFunction }) => {
	const [count, setCount] = useState(1);

	const handleClickPage = {
		handlePrev: () => {
			if (count > 1) {
				setCount(count - 1);
			}
		},
		handleNext: () => {
			if (count < 16) {
				setCount(count + 1);
			}
		},
	};

	return (
		<Wrapper style={style}>
			<CloseBtn src={close} alt='' onClick={modalFunction.closeModal} />
			<Title>4차 산업혁명과 미래인재</Title>
			<BtnBox style={{ position: "absolute", top: "222px", left: "10px" }}>
				<PrevBtn src={prev} alt='이전' onClick={handleClickPage.handlePrev} />
			</BtnBox>
			<LeftCard>
				<CardTitle>{jobCards[count - 1].title}</CardTitle>
				<LeftImage src={jobCards[count - 1].imgUrl} alt='드론개발자' />
			</LeftCard>
			<RightCard>
				<TitleDiv style={{ marginBottom: "10px" }}>하는일</TitleDiv>
				<TodoExplain>{jobCards[count - 1].todo}</TodoExplain>
				<BarUnder style={{ marginBottom: "12px" }} />
				<TitleDiv style={{ marginBottom: "10px" }}>인터뷰</TitleDiv>
				<InterviewExplain>{jobCards[count - 1].interview}</InterviewExplain>
				<BarUnder style={{ marginBottom: "12px" }} />
				<TitleDiv style={{ marginBottom: "10px" }}>학과</TitleDiv>
				<SubjectExplain>{jobCards[count - 1].subject}</SubjectExplain>
			</RightCard>
			<BtnBox style={{ position: "absolute", top: "222px", left: "650px" }}>
				<NextBtn src={next} alt='다음' onClick={handleClickPage.handleNext} />
			</BtnBox>
			<BottomNo>
				<div
					style={{
						display: "inline-block",
						width: "26px",
						height: "22px",
						fontFamily: "NotoSansCJKkr",
						fontSize: "14px",
						fontWeight: "bold",
						lineHeight: "1.57",
						color: "#0f0f15",
						marginLeft: "10px",
						paddingTop: "6px",
					}}
				>
					{count}
				</div>
				<div
					style={{
						display: "inline-block",
						width: "26px",
						height: "22px",
						fontFamily: "NotoSansCJKkr",
						fontSize: "14px",
						fontWeight: "500",
						lineHeight: "1.57",
						color: "#d8d8d8",
					}}
				>
					/
				</div>
				<div
					style={{
						display: "inline-block",
						widht: "34px",
						height: "22px",
						fontFamily: "NotoSansCJKkr",
						fontSize: "14px",
						fontweight: "500",
						lineHeight: "1.57",
						color: "#0f0f15",
					}}
				>
					16
				</div>
			</BottomNo>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	/* background: red; */
	border-radius: 2px;
	box-shadow: 0 0 10px 0 rgba(15, 15, 21, 0.05);
	background-color: #ffffff;
	width: 700px;
	height: 503px;
`;
const CloseBtn = styled.img`
	position: absolute;
	top: 10px;
	right: 10px;
	&:hover {
		cursor: pointer;
	}
`;
const Title = styled.div`
	width: 184px;
	height: 24px;
	font-family: "NotoSansCJKkr";
	font-size: 18px;
	font-weight: 500;
	font-stretch: normal;
	font-style: normal;
	line-height: 1.33;
	letter-spacing: normal;
	color: #0f0f15;
	position: absolute;
	top: 26px;
	left: 24px;
`;
const BtnBox = styled.div`
	width: 40px;
	height: 40px;
`;
const PrevBtn = styled.img`
	&:hover {
		cursor: pointer;
	}
`;
const LeftCard = styled.div`
	width: 270px;
	height: 336px;
	border-radius: 2px;
	border: solid 1px #e4e4e4;
	position: absolute;
	top: 80px;
	left: 64px;
`;
const CardTitle = styled.div`
	width: 270px;
	height: 20px;
	text-align: center;
	font-family: "NotoSansCJKkr";
	font-size: 18px;
	font-weight: 500;
	font-stretch: normal;
	font-style: normal;
	line-height: 1.11;
	letter-spacing: normal;
	text-align: center;
	color: #0f0f15;
	position: absolute;
	top: 14px;
`;
const LeftImage = styled.img`
	width: 270px;
	height: 336px;
`;
const RightCard = styled.div`
	/* background: red; */
	width: 258px;
	height: 308px;
	border-radius: 2px;
	border: solid 1px #e4e4e4;
	background-color: #f8f8f8;
	padding: 14px;
	overflow: scroll;
	position: absolute;
	top: 80px;
	left: 350px;
`;
const TitleDiv = styled.div`
	width: 39px;
	height: 20px;
	font-family: "NotoSansCJKkr";
	font-size: 14px;
	font-weight: 500;
	font-stretch: normal;
	font-style: normal;
	line-height: 1.43;
	letter-spacing: normal;
	color: #0f0f15;
`;
const BarUnder = styled.div`
	width: 258px;
	height: 1px;
	opacity: 0.3;
	background-color: #d8d8d8;
`;
const TodoExplain = styled.div`
	width: 258px;
	font-family: "NotoSansCJKkr";
	font-size: 14px;
	line-height: 1.57;
	color: #0f0f15;
	margin-bottom: 12px;
	text-align: justify;
`;
const InterviewExplain = styled.div`
	width: 258px;
	font-family: "NotoSansCJKkr";
	font-size: 14px;
	line-height: 1.57;
	color: #0f0f15;
	margin-bottom: 12px;
	text-align: justify;
`;
const SubjectExplain = styled.div`
	width: 258px;
	font-family: "NotoSansCJKkr";
	font-size: 14px;
	line-height: 1.57;
	color: #0f0f15;
	text-align: justify;
`;
const NextBtn = styled.img`
	&:hover {
		cursor: pointer;
	}
`;
const BottomNo = styled.div`
	width: 86px;
	height: 35px;
	padding: 0 10px;
	border: solid 1px #e4e4e4;
	position: absolute;
	bottom: 26px;
	left: 297px;
`;
