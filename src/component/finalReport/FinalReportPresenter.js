import React from "react";
import styled from "styled-components";
import btnJobs from "../../assets/icons/btn-floaing-jobs.svg";
import btnFaq from "../../assets/icons/btn-floating-faq.svg";
import { FinalReportBtn } from "../../ui/button/Button";

const FinalReportPresenter = () => {
	return (
		<Wrapper>
			<BlockTop>
				<TopContent>
					<TextBoxTop>최종 보고서</TextBoxTop>
					<TextBoxMiddle>
						최종보고서를 작성하기 위해 마무리 영상을 시청해주세요.
					</TextBoxMiddle>
					<TextBoxBottom>
						지금까지 EY한영 아그작교실 프로젝트를 통해 4차산업혁명기술을 활용하여
						사회문제를 해결하는 상품을 개발해 보았습니다.
						<br /> 최종보고서를 작성하기위해 영상을 시청한 후 최종보고서를 작성하여
						제출해 주시기 바랍니다.
						<br />
						<span style={{ color: "#686868" }}>
							*영상시청이 완료되어야 최종보고서를 제출할 수 있습니다. 최종보고서 제출이
							완료되어야 모든 미션이 종료된 것입니다.
						</span>
					</TextBoxBottom>
				</TopContent>
			</BlockTop>
			<BlockBottom>
				<BottomContent>
					<VideoArea>영상</VideoArea>
				</BottomContent>
				<FaqBtn src={btnFaq} alt='힌트버튼' />
				<JobsBtn src={btnJobs} alt='직업버튼' />
				<FinalReportBtn
					text='최종보고서 제출하기'
					style={{
						width: "148px",
						height: "40px",
						position: "absolute",
						top: "459px",
						left: "0px",
					}}
				/>
			</BlockBottom>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	/* background: lightgreen; */
	width: 100%;
	height: 100%;
`;

const BlockTop = styled.div`
	background: #e4e4e4;
	width: 1440px;
	height: 206px;
	margin: 0 auto;
	margin-bottom: 39px;
`;
const TopContent = styled.div`
	width: 944px;
	height: 206px;
	margin: 0 auto;
`;

const BlockBottom = styled.div`
	background: #f7f7f7;
	/* background: red; */
	width: 1440px;
	height: 652px;
	margin: 0 auto;
	position: relative;
`;
const BottomContent = styled.div`
	width: 944px;
	height: 652px;
	margin: 0 auto;
`;
const VideoArea = styled.div`
	width: 944px;
	height: 458px;
	border-radius: 2px;
	box-shadow: 0 0 10px 0 rgba(15, 15, 21, 0.05);
	background-color: #ffffff;
`;

const FaqBtn = styled.img`
	position: absolute;
	right: 30px;
	bottom: 108px;
	filter: drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.2));
`;
const JobsBtn = styled.img`
	position: absolute;
	right: 30px;
	bottom: 30px;
	filter: drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.2));
`;

const TextBoxTop = styled.div`
	width: 68px;
	height: 14px;
	font-size: 14px;
	font-weight: 500;
	line-height: 1;
	color: #0f0f15;
	padding-top: 40px;
`;
const TextBoxMiddle = styled.div`
	width: 612px;
	height: 38px;
	font-size: 26px;
	font-weight: 500;
	color: #0f0f15;
	margin-top: 8px;
`;
const TextBoxBottom = styled.div`
	width: 944px;
	height: 88px;
	opacity: 0.8;
	font-size: 14px;
	font-weight: 500;
	line-height: 1.57;
	color: #0f0f15;
	margin-top: 10px;
`;

export default FinalReportPresenter;
