import styled from "styled-components";
import { ButtonPrimary } from "../button/Button";
import close from "../../assets/icons/bnt-x-24.svg";

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
