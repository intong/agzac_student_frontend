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

export { LoginButton };
