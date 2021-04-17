import React from "react";
import styled from "styled-components";

const ProcessCircle = () => {
	return (
		<Wrapper>
			<CircleDiv>
				<Circle />
				<MiddleBar />
				<Circle />
				<MiddleBar />
				<Circle />
				<MiddleBar />
				<Circle />
				<MiddleBar />
				<Circle />
				<MiddleBar />
				<Circle />
			</CircleDiv>
		</Wrapper>
	);
};

// background-color: #0f0f15; : (완료페이지) 미들바 원형 다 적용
// border: solid 1px #0f0f15; background-color: #ffc300; : 현재페이지 (노란색) 원형만 적용
// opacity: 0.2; background-color: #0f0f15; 디폴트 색상 (아직 완료 안한 미션)

const Wrapper = styled.div`
	background: #e4e4e4;
	width: 100vw;
	height: 38px;
	position: relative;
`;
const CircleDiv = styled.div`
	position: absolute;
	left: 35vw;
	bottom: 0px;
	width: 30vw;
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: auto;
`;
const Circle = styled.div`
	width: 8px;
	height: 8px;
	border-radius: 50%;
	/* opacity: 0.2;
	background-color: #0f0f15; */
	border: solid 1px #0f0f15;
	background-color: #ffc300;
`;
const MiddleBar = styled.div`
	width: 6px;
	height: 1px;
	opacity: 0.2;
	background: #0f0f15;
`;

export default ProcessCircle;
