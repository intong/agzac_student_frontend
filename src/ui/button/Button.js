import styled from "styled-components";

const LoginButton = ({
	text,
	onClick,
	background,
	color,
	width,
	height,
	top,
	bottom,
	left,
	right,
}) => {
	return (
		<Button
			onClick={onClick}
			background={background}
			color={color}
			width={width}
			height={height}
			top={top}
			bottom={bottom}
			left={left}
			right={right}
		>
			{text}
		</Button>
	);
};

const Button = styled.button`
	position: absolute;
	top: ${(props) => props.top};
	bottom: ${(props) => props.bottom};
	left: ${(props) => props.left};
	right: ${(props) => props.right};
	border: 0;
	outline: 0;
	font-size: 14px;
	font-weight: 500;
	text-decoration: none;
	background: ${(props) => props.background};
	color: ${(props) => props.color};
	width: ${(props) => props.width};
	height: ${(props) => props.height};
	&:hover {
		cursor: pointer;
		background: #555557;
		color: #ffffff;
		opacity: 0.7;
	}
`;

const ButtonPrimary = ({ text, style, onClick }) => {
	return (
		<BTNDefault style={style} onClick={onClick}>
			{text}
		</BTNDefault>
	);
};
const BTNDefault = styled.button`
	border: 0;
	outline: 0;
	width: 80px;
	height: 40px;
	border-radius: 2px;
	background: #0f0f15;
	padding: 10px 14px 10px 14px;
	font-size: 14px;
	font-weight: 500;
	line-height: 1.43;
	text-align: center;
	color: #ffffff;

	&:hover {
		border-radius: 2px;
		background: #555557;
		cursor: pointer;
		font-size: 14px;
		font-weight: 500;
		line-height: 1.43;
		text-align: center;
		color: rgba(255, 255, 255, 0.7);
	}
	&:active {
		border-radius: 2px;
		background-color: #0f0f15;
	}
`;

const ButtonPrimaryLong = ({ text, style, onClick }) => {
	return (
		<BTNDefaultLong style={style} onClick={onClick}>
			{text}
		</BTNDefaultLong>
	);
};
const BTNDefaultLong = styled.button`
	border: 0;
	outline: 0;
	width: 272px;
	height: 40px;
	border-radius: 2px;
	background: #0f0f15;
	padding: 10px 14px 10px 14px;
	font-size: 14px;
	font-weight: 500;
	line-height: 1.43;
	text-align: center;
	color: #ffffff;

	&:hover {
		border-radius: 2px;
		background: #555557;
		cursor: pointer;
		font-size: 14px;
		font-weight: 500;
		line-height: 1.43;
		text-align: center;
		color: rgba(255, 255, 255, 0.7);
	}
	&:active {
		border-radius: 2px;
		background-color: #0f0f15;
	}
`;

const ButtonPrimaryDisable = ({ text, style }) => {
	return <BtnPrimaryDisable style={style}>{text}</BtnPrimaryDisable>;
};
const BtnPrimaryDisable = styled.button`
	width: 80px;
	height: 40px;
	opacity: 0.1;
	border-radius: 2px;
	background: #0f0f15;
	font-size: 14px;
	font-weight: 500;
	line-height: 1.43;
	text-align: center;
	color: #ffffff;
`;

const ButtonSecondary = ({ text, style, onClick }) => {
	return (
		<BTNSecondary style={style} onClick={onClick}>
			{text}
		</BTNSecondary>
	);
};
const BTNSecondary = styled.button`
	border: 0;
	outline: 0;
	width: 80px;
	height: 40px;
	padding: 10px 14px 10px 14px;
	border-radius: 2px;
	border: solid 1px #e4e4e4;
	background-color: #ffffff;
	font-size: 14px;
	font-weight: 500;
	line-height: 1.43;
	text-align: center;
	color: #000000;
	&:hover {
		cursor: pointer;
		border: solid 1px #e4e4e4;
		background-color: #f3f3f3;
	}
	&:active {
		border: solid 1px #e4e4e4;
		background-color: #e4e4e4;
	}
`;
const ButtonSecondaryLong = ({ text, style, onClick }) => {
	return (
		<BTNSecondaryLong style={style} onClick={onClick}>
			{text}
		</BTNSecondaryLong>
	);
};
const BTNSecondaryLong = styled.button`
	border: 0;
	outline: 0;
	width: 272px;
	height: 40px;
	padding: 10px 14px 10px 14px;
	border-radius: 2px;
	border: solid 1px #e4e4e4;
	background-color: #ffffff;
	font-size: 14px;
	font-weight: 500;
	line-height: 1.43;
	text-align: center;
	color: #000000;
	&:hover {
		cursor: pointer;
		border: solid 1px #e4e4e4;
		background-color: #f3f3f3;
	}
	&:active {
		border: solid 1px #e4e4e4;
		background-color: #e4e4e4;
	}
`;
const ButtonSecondaryDisable = ({ text, style }) => {
	return <BtnSecondaryDisable style={style}>{text}</BtnSecondaryDisable>;
};
const BtnSecondaryDisable = styled.button`
	width: 80px;
	height: 40px;
	border-radius: 2px;
	border: solid 1px #e4e4e4;
	background: #ffffff;
	opacity: 0.2;
	font-size: 14px;
	font-weight: 500;
	line-height: 1.43;
	text-align: center;
	color: #000000;
`;

const FinalReportBtn = ({ text, style, onClick }) => {
	return (
		<FinalBrn style={style} onClick={onClick}>
			<TextStyle>{text}</TextStyle>
		</FinalBrn>
	);
};
const FinalBrn = styled.button`
	width: 148px;
	height: 40px;
	opacity: 0.2;
	border-radius: 2px;
	background-color: #0f0f15;
`;
const TextStyle = styled.span`
	font-family: NotoSansCJKkr;
	font-size: 14px;
	font-weight: 500;
	font-stretch: normal;
	font-style: normal;
	line-height: normal;
	letter-spacing: normal;
	text-align: center;
	color: #ffffff;
`;

export {
	LoginButton,
	ButtonPrimary,
	ButtonPrimaryLong,
	ButtonPrimaryDisable,
	ButtonSecondary,
	ButtonSecondaryLong,
	ButtonSecondaryDisable,
	FinalReportBtn,
};
