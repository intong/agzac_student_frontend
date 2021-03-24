import React, { useState } from "react";
import styled from "styled-components";
import btnDropdown from "../../assets/icons/btn-dropdown.svg";

export function Dropbox({ style, options, correct }) {
	const [isOpen, setIsOpen] = useState(false);
	const [selectedOption, setSelectedOption] = useState(null);
	const toggling = () => setIsOpen(!isOpen);
	const onOptionClicked = (value) => () => {
		setSelectedOption(value);
		setIsOpen(false);
		console.log(selectedOption);
	};

	return (
		<DropDownContainer style={style}>
			<DropDownHeader onClick={toggling} open={isOpen} correct={correct}>
				<Text selectedOption={selectedOption}>{selectedOption || "선택"}</Text>
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
	line-height: 1.57;
	width: 280px;
	height: 22px;
	margin: 10px;
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
	margin-top: 8px;
	background: #fcfcfc;
	&:hover {
		cursor: pointer;
	}
`;

const DropDownList = styled.ul`
	padding: 0;
	margin: 0;
	width: 280px;
	height: 231px;
	border-radius: 2px;
	border: solid 1px #686868;
	overflow: scroll;
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
	font-family: "NotoSansCJKkr";
	font-size: 14px;
	line-height: 1.57;
	color: #686868;
	margin-left: 18px;
	padding-top: 10px;
	&:hover {
		color: #0f0f15;
	}
`;
