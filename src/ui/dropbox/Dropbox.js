import React, { useState } from "react";
import styled from "styled-components";
import btnDropdown from "../../assets/icons/btn-dropdown.svg";

export function Dropbox({ item, style, options, correct, placeholder, id }) {
	// 변수 item 용도 : loading 된 데이터에서 내용이 있으면 그 내용을 text로 띄워주는 변수
	// selectedOption 용도 : dropdown에서 선택한 내용을 text로 띄워주는 변수
	const [isOpen, setIsOpen] = useState(false);
	const [selectedOption, setSelectedOption] = useState(null);
	const toggling = () => {
		setSelectedOption(null);
		setIsOpen(!isOpen);
	};
	const onOptionClicked = (value) => () => {
		setSelectedOption(value);
		setIsOpen(false);
	};

	return (
		<>
			<DropDownContainer style={style}>
				<DropDownHeader onClick={toggling} open={isOpen} correct={correct}>
					<Text id={id} selectedOption={selectedOption} item={item}>
						{selectedOption ? selectedOption : item ? item : placeholder}
					</Text>
					<Image isOpen={isOpen} src={btnDropdown} alt='화살표' />
				</DropDownHeader>
				{isOpen && (
					<DropDownListContainer>
						<DropDownList>
							{options &&
								options.map((option, i) => (
									<ListItem onClick={onOptionClicked(option)} key={i}>
										<ListText>{option}</ListText>
									</ListItem>
								))}
						</DropDownList>
					</DropDownListContainer>
				)}
			</DropDownContainer>
		</>
	);
}

const DropDownContainer = styled.div`
	margin: 0 auto;
	z-index: 10;
`;
const Text = styled.div`
	font-size: 14px;
	line-height: 3.3;
	padding-left: 10px;
	width: 270px;
	height: 22px;
	text-align: left;
	color: ${(props) =>
		props.selectedOption !== null || props.item !== undefined
			? "#0f0f15"
			: "#d8d8d8"};
`;

const Image = styled.img`
	transform: ${(props) => props.isOpen && "rotate(180deg)"};
	position: absolute;
	bottom: 9px;
	right: 10px;
	&:hover {
		cursor: pointer;
	}
`;

const DropDownHeader = styled.div`
	width: 280px;
	height: 42px;
	border-radius: 2px;
	border: ${(props) =>
		props.open === false
			? props.correct === false
				? "1px solid #ff3737"
				: "solid 1px #e4e4e4"
			: "solid 1px #686868"};
	background-color: #fcfcfc;
	position: relative;
`;

const DropDownListContainer = styled.div`
	height: 200px;
	margin-top: 8px;
	background: #fcfcfc;
	display: fixed;
	&:hover {
		cursor: pointer;
	}
`;

const DropDownList = styled.ul`
	padding: 0;
	margin: 0;
	width: 280px;
	height: 200px;
	border-radius: 2px;
	border: solid 1px #686868;
	overflow-x: hidden;
	overflow-y: auto;
`;

const ListItem = styled.li`
	width: 280px;
	height: 42px;
	border-radius: 2px;
	list-style: none;
	&:hover {
		background: #f5f5f5;
	}
`;

const ListText = styled.div`
	width: 280px;
	height: 22px;
	font-family: NotoSansCJKkr;
	font-size: 14px;
	line-height: 1.57;
	color: #686868;
	margin-left: 18px;
	padding-top: 10px;
	&:hover {
		color: #0f0f15;
	}
`;

export const DropboxLineType = ({ style, options, correct, placeholder }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [selectedOption, setSelectedOption] = useState(null);
	const toggling = () => setIsOpen(!isOpen);
	const onOptionClicked = (value) => () => {
		setSelectedOption(value);
		setIsOpen(false);
	};

	return (
		<DropDownContainerLine style={style}>
			<DropDownHeaderLine onClick={toggling} open={isOpen} correct={correct}>
				<TextLine selectedOption={selectedOption}>
					{selectedOption || placeholder}
				</TextLine>
				<ImageLine isOpen={isOpen} src={btnDropdown} alt='화살표' />
			</DropDownHeaderLine>
			{isOpen && (
				<DropDownListContainerLine>
					<DropDownListLine>
						{options &&
							options.map((option, i) => (
								<ListItemLine onClick={onOptionClicked(option)} key={i}>
									<ListTextLine>{option}</ListTextLine>
								</ListItemLine>
							))}
					</DropDownListLine>
				</DropDownListContainerLine>
			)}
		</DropDownContainerLine>
	);
};

const DropDownContainerLine = styled.div`
	z-index: 10;
`;
const TextLine = styled.div`
	font-size: 14px;
	line-height: 1.57;
	width: 185px;
	height: 22px;
	/* margin: 10px; */
	text-align: left;
	color: ${(props) => (props.selectedOption ? "#0f0f15" : "#d8d8d8")};
`;

const ImageLine = styled.img`
	transform: ${(props) => props.isOpen && "rotate(180deg)"};
	position: absolute;
	bottom: 8px;
	right: 10px;
	&:hover {
		cursor: pointer;
	}
`;

const DropDownHeaderLine = styled.div`
	width: 185px;
	height: 22px;
	padding-bottom: 8px;
	border-radius: 2px;
	border-bottom: ${(props) =>
		props.open === false
			? props.correct === false
				? "1px solid #ff3737"
				: "solid 1px #e4e4e4"
			: "solid 1px #686868"};
	background-color: #ffffff;
	position: relative;
`;

const DropDownListContainerLine = styled.div`
	margin-top: 8px;
	background: #ffffff;
	&:hover {
		cursor: pointer;
	}
`;

const DropDownListLine = styled.ul`
	padding: 0;
	margin: 0;
	width: 185px;
	height: 231px;
	border-radius: 2px;
	border: solid 1px #686868;
	overflow: auto;
`;

const ListItemLine = styled.li`
	width: 185px;
	height: 42px;
	border-radius: 2px;
	list-style: none;
	&:hover {
		background: #f5f5f5;
	}
`;

const ListTextLine = styled.div`
	width: 185px;
	height: 22px;
	font-family: NotoSansCJKkr;
	font-size: 14px;
	line-height: 1.57;
	color: #686868;
	margin-left: 18px;
	padding-top: 10px;
	&:hover {
		color: #0f0f15;
	}
`;

export const DropboxLineTypeSmall = ({
	style,
	options,
	correct,
	placeholder,
	id,
	value,
}) => {
	const [isOpen, setIsOpen] = useState(false);
	const [selectedValue, setSelectedValue] = useState(null);
	const [selectedOption, setSelectedOption] = useState(null);
	const toggling = () => setIsOpen(!isOpen);
	const onOptionClicked = (selected, value) => () => {
		setSelectedOption(selected);
		setSelectedValue(value);
		setIsOpen(false);
	};

	return (
		<DropDownContainerLineSmall style={style}>
			<DropDownHeaderLineSmall onClick={toggling} open={isOpen} correct={correct}>
				<TextLineSmall
					selectedOption={selectedOption}
					id={id}
					value={selectedValue}
				>
					{selectedOption || placeholder}
				</TextLineSmall>
				<ImageLineSmall isOpen={isOpen} src={btnDropdown} alt='화살표' />
			</DropDownHeaderLineSmall>
			{isOpen && (
				<DropDownListContainerLineSmall>
					<DropDownListLineSmall>
						{options &&
							options.map((option, i) => (
								<ListItemLineSmall
									onClick={onOptionClicked(option.text, option.value)}
									key={i}
								>
									<ListTextLineSmall>{option.text}</ListTextLineSmall>
								</ListItemLineSmall>
							))}
					</DropDownListLineSmall>
				</DropDownListContainerLineSmall>
			)}
		</DropDownContainerLineSmall>
	);
};

const DropDownContainerLineSmall = styled.div`
	z-index: 10;
`;
const TextLineSmall = styled.div`
	font-size: 14px;
	line-height: 1.57;
	width: 185px;
	height: 22px;
	text-align: left;
	color: ${(props) => (props.selectedOption ? "#0f0f15" : "#d8d8d8")};
`;

const ImageLineSmall = styled.img`
	transform: ${(props) => props.isOpen && "rotate(180deg)"};
	position: absolute;
	bottom: 8px;
	right: 10px;
	&:hover {
		cursor: pointer;
	}
`;

const DropDownHeaderLineSmall = styled.div`
	width: 120px;
	height: 22px;
	padding-bottom: 8px;
	border-radius: 2px;
	border-bottom: ${(props) =>
		props.open === false
			? props.correct === false
				? "1px solid #ff3737"
				: "solid 1px #e4e4e4"
			: "solid 1px #686868"};
	background-color: #ffffff;
	position: relative;
`;

const DropDownListContainerLineSmall = styled.div`
	margin-top: 8px;
	background: #ffffff;
	&:hover {
		cursor: pointer;
	}
`;

const DropDownListLineSmall = styled.ul`
	padding: 0;
	margin: 0;
	width: 120px;
	height: 231px;
	border-radius: 2px;
	border: solid 1px #686868;
	overflow: auto;
`;

const ListItemLineSmall = styled.li`
	width: 185px;
	height: 42px;
	border-radius: 2px;
	list-style: none;
	&:hover {
		background: #f5f5f5;
	}
`;

const ListTextLineSmall = styled.div`
	width: 185px;
	height: 22px;
	font-family: NotoSansCJKkr;
	font-size: 14px;
	line-height: 1.57;
	color: #686868;
	margin-left: 18px;
	padding-top: 10px;
	&:hover {
		color: #0f0f15;
	}
`;

export const DropboxLineTypeMobileLogin = ({
	style,
	options,
	correct,
	placeholder,
	id,
	value,
}) => {
	const [isOpen, setIsOpen] = useState(false);
	const [selectedValue, setSelectedValue] = useState(null);
	const [selectedOption, setSelectedOption] = useState(null);
	const toggling = () => setIsOpen(!isOpen);
	const onOptionClicked = (selected, value) => () => {
		setSelectedOption(selected);
		setSelectedValue(value);
		setIsOpen(false);
	};

	return (
		<DropDownContainerLineSmallMobile style={style}>
			<DropDownHeaderLineSmallMobile
				onClick={toggling}
				open={isOpen}
				correct={correct}
			>
				<TextLineSmallMobile
					selectedOption={selectedOption}
					id={id}
					value={selectedValue}
				>
					{selectedOption || placeholder}
				</TextLineSmallMobile>
				<ImageLineSmallMobile isOpen={isOpen} src={btnDropdown} alt='화살표' />
			</DropDownHeaderLineSmallMobile>
			{isOpen && (
				<DropDownListContainerLineSmallMobile>
					<DropDownListLineSmallMobile>
						{options &&
							options.map((option, i) => (
								<ListItemLineSmallMobile
									onClick={onOptionClicked(option.text, option.value)}
									key={i}
								>
									<ListTextLineSmallMobile>{option.text}</ListTextLineSmallMobile>
								</ListItemLineSmallMobile>
							))}
					</DropDownListLineSmallMobile>
				</DropDownListContainerLineSmallMobile>
			)}
		</DropDownContainerLineSmallMobile>
	);
};

const DropDownContainerLineSmallMobile = styled.div`
	z-index: 50;
`;
const TextLineSmallMobile = styled.div`
	font-size: 14px;
	line-height: 1.57;
	width: 185px;
	height: 22px;
	text-align: left;
	color: ${(props) => (props.selectedOption ? "#0f0f15" : "#d8d8d8")};
`;

const ImageLineSmallMobile = styled.img`
	transform: ${(props) => props.isOpen && "rotate(180deg)"};
	position: absolute;
	bottom: 8px;
	right: 10px;
	&:hover {
		cursor: pointer;
	}
`;

const DropDownHeaderLineSmallMobile = styled.div`
	width: 42vw;
	height: 22px;
	padding-bottom: 8px;
	border-bottom: ${(props) =>
		props.open === false ? "solid 1px #e4e4e4" : "solid 1px #686868"};
	background-color: #f4f5f6;
	position: relative;
`;

const DropDownListContainerLineSmallMobile = styled.div`
	margin-top: 8px;
	background: #f4f5f6;
	&:hover {
		cursor: pointer;
	}
	width: 30vw;
`;

const DropDownListLineSmallMobile = styled.ul`
	padding: 0;
	margin: 0;
	width: 42vw;
	height: 231px;
	border-radius: 2px;
	border: solid 1px #686868;
	overflow-y: auto;
	overflow-x: hidden;
	background: #f4f5f6;
`;

const ListItemLineSmallMobile = styled.li`
	width: 42vw;
	height: 42px;
	list-style: none;
	&:hover {
		background: #f5f5f5;
	}
	background: #f4f5f6;
`;

const ListTextLineSmallMobile = styled.div`
	width: 185px;
	height: 22px;
	font-family: NotoSansCJKkr;
	font-size: 14px;
	line-height: 1.57;
	color: #686868;
	padding-top: 10px;
	&:hover {
		color: #0f0f15;
	}
`;

export const DropboxLineTypeMobileLoginLong = ({
	style,
	options,
	correct,
	placeholder,
	id,
	value,
}) => {
	const [isOpen, setIsOpen] = useState(false);
	const [selectedValue, setSelectedValue] = useState(null);
	const [selectedOption, setSelectedOption] = useState(null);
	const toggling = () => setIsOpen(!isOpen);
	const onOptionClicked = (selected, value) => () => {
		setSelectedOption(selected);
		setSelectedValue(value);
		setIsOpen(false);
	};

	return (
		<DropDownContainerLineSmallMobileLong style={style}>
			<DropDownHeaderLineSmallMobileLong
				onClick={toggling}
				open={isOpen}
				correct={correct}
			>
				<TextLineSmallMobileLong
					selectedOption={selectedOption}
					id={id}
					value={selectedValue}
				>
					{selectedOption || placeholder}
				</TextLineSmallMobileLong>
				<ImageLineSmallMobileLong isOpen={isOpen} src={btnDropdown} alt='화살표' />
			</DropDownHeaderLineSmallMobileLong>
			{isOpen && (
				<DropDownListContainerLineSmallMobileLong>
					<DropDownListLineSmallMobileLong>
						{options &&
							options.map((option, i) => (
								<ListItemLineSmallMobileLong
									onClick={onOptionClicked(option.text, option.value)}
									key={i}
								>
									<ListTextLineSmallMobileLong>
										{option.text}
									</ListTextLineSmallMobileLong>
								</ListItemLineSmallMobileLong>
							))}
					</DropDownListLineSmallMobileLong>
				</DropDownListContainerLineSmallMobileLong>
			)}
		</DropDownContainerLineSmallMobileLong>
	);
};

const DropDownContainerLineSmallMobileLong = styled.div`
	z-index: 80;
`;
const TextLineSmallMobileLong = styled.div`
	font-size: 14px;
	line-height: 1.57;
	width: 87vw;
	height: 22px;
	text-align: left;
	color: ${(props) => (props.selectedOption ? "#0f0f15" : "#d8d8d8")};
`;

const ImageLineSmallMobileLong = styled.img`
	transform: ${(props) => props.isOpen && "rotate(180deg)"};
	position: absolute;
	bottom: 8px;
	right: 10px;
	&:hover {
		cursor: pointer;
	}
`;

const DropDownHeaderLineSmallMobileLong = styled.div`
	width: 87vw;
	height: 22px;
	padding-bottom: 8px;
	border-bottom: ${(props) =>
		props.open === false ? "solid 1px #e4e4e4" : "solid 1px #686868"};
	background-color: #f4f5f6;
	position: relative;
`;

const DropDownListContainerLineSmallMobileLong = styled.div`
	width: 87vw;
	margin-top: 8px;
	background: #f4f5f6;
	&:hover {
		cursor: pointer;
	}
`;

const DropDownListLineSmallMobileLong = styled.ul`
	padding: 0;
	margin: 0;
	width: 87vw;
	border-radius: 2px;
	border: solid 1px #686868;
	overflow-y: auto;
	overflow-x: hidden;
	background: #f4f5f6;
`;

const ListItemLineSmallMobileLong = styled.li`
	width: 87vw;
	height: 42px;
	border-radius: 2px;
	list-style: none;
	&:hover {
		background: #f5f5f5;
	}
	background: #f4f5f6;
`;

const ListTextLineSmallMobileLong = styled.div`
	width: 87vw;
	height: 22px;
	font-family: NotoSansCJKkr;
	font-size: 14px;
	line-height: 1.57;
	color: #686868;
	margin-left: 18px;
	padding-top: 10px;
	&:hover {
		color: #0f0f15;
	}
`;
