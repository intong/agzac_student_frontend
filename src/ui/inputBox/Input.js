import styled from "styled-components";
const InputDefault = ({ style, onChange, placeholder, wrong }) => {
	return (
		<Input
			style={style}
			onChange={onChange}
			placeholder={placeholder}
			wrong={wrong}
		/>
	);
};

const Input = styled.input`
	font-family: NotoSansCJKkr-Regular;
	font-size: 14px;
	line-height: 1.57;
	color: #0f0f15;
	padding-left: 10px;
	::placeholder {
		color: #d8d8d8;
	}
	&:focus {
		outline: ${(props) =>
			props.wrong === true ? "solid 1px #ff3737" : "solid 1px #686868"};
		border-radius: 2px;
		background: #fcfcfc;
	}
`;

const InputLineType = ({ style, onChange, placeholder }) => {
	return (
		<InputStyle style={style} onChange={onChange} placeholder={placeholder} />
	);
};
const InputStyle = styled.input`
	outline: none;
	border: 0;
	border-bottom: 1px solid #e4e4e4;
	padding-bottom: 8px;
	::placeholder {
		font-family: NotoSansCJKkr-Regular;
		font-size: 14px;
		color: #d8d8d8;
	}
	&:focus {
		border-bottom: solid 1px #0f0f15;
		font-family: NotoSansCJKkr-Regular;
		font-size: 14px;
		color: #0f0f15;
	}
`;

export { InputDefault, InputLineType };
