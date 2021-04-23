import React, { useState } from "react";
import styled from "styled-components";
import btnDropdown from "../assets/icons/btn-dropdown.svg";

export function DropboxMobile({ style, options, correct, placeholder, id }) {
	const [isOpen, setIsOpen] = useState(false);
	const [selectedOption, setSelectedOption] = useState(null);
	const toggling = () => setIsOpen(!isOpen);
	const onOptionClicked = (value) => () => {
		setSelectedOption(value);
		setIsOpen(false);
	};

	return (
		<DropDownContainer style={style}>
			<DropDownHeader onClick={toggling} open={isOpen} correct={correct}>
				<Text id={id} selectedOption={selectedOption}>
					{selectedOption || placeholder}
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
	color: ${(props) => (props.selectedOption ? "#0f0f15" : "#d8d8d8")};
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
	width: 80vw;
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
	margin-top: 8px;
	background: #fcfcfc;
	&:hover {
		cursor: pointer;
	}
`;

const DropDownList = styled.ul`
	padding: 0;
	margin: 0;
	width: 80vw;
	border-radius: 2px;
	border: solid 1px #686868;
	overflow-x: hidden;
	position: absolute;
	overflow-y: auto;
	z-index: 10;
`;

const ListItem = styled.li`
	background: #ffffff;
	width: 80vw;
	height: 42px;
	border-radius: 2px;
	list-style: none;
	z-index: 10;
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
