import styled from "styled-components";
const InputDefault = ({
	name,
	style,
	onChange,
	placeholder,
	wrong,
	value,
	id,
}) => {
	return (
		<Input
			id={id}
			name={name}
			style={style}
			onChange={onChange}
			placeholder={placeholder}
			wrong={wrong}
			value={value}
		/>
	);
};

const Input = styled.input`
	font-family: NotoSansCJKkr;
	font-size: 14px;
	line-height: 1.57;
	color: #0f0f15;
	padding-left: 10px;
	border-radius: 2px;
	box-shadow: ${(props) =>
		props.wrong === false ? " 0 0 0 1px #ff3737" : " 0 0 0 1px #e4e4e4"};
	::placeholder {
		color: #d8d8d8;
	}
	&:focus {
		box-shadow: 0 0 0 1px #686868;
		border-radius: 2px;
		background: #fcfcfc;
	}
`;

const InputLineType = ({ style, onChange, placeholder, value }) => {
	return (
		<InputStyle
			style={style}
			onChange={onChange}
			placeholder={placeholder}
			value={value}
		/>
	);
};
const InputStyle = styled.input`
	width: 200px;
	outline: none;
	border-bottom: 1px solid #e4e4e4;
	padding-bottom: 8px;
	::placeholder {
		font-family: NotoSansCJKkr;
		font-size: 14px;
		color: #d8d8d8;
	}
	&:focus {
		border-bottom: 1px solid #0f0f15;
		font-family: NotoSansCJKkr;
		font-size: 14px;
		color: #0f0f15;
	}
`;

const TextArea = ({ style, onChange, placeholder, id, value }) => {
	return (
		<StyledTextArea
			style={style}
			onChange={onChange}
			placeholder={placeholder}
			id={id}
			value={value}
		/>
	);
};

const StyledTextArea = styled.textarea`
	outline: none;
	border-radius: 2px;
	border: solid 1px #e4e4e4;
	background-color: #fcfcfc;
	padding: 10px;
	font-family: NotoSansCJKkr;
	font-size: "14px";
	font-weight: "normal";
	font-stretch: "normal";
	font-style: "normal";
	line-height: "1.57";
	letter-spacing: "normal";
	color: "#0f0f15";
`;

export { InputDefault, InputLineType, TextArea };
