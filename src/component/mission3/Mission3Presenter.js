import React from "react";
import styled from "styled-components";
import btnJobs from "../../assets/icons/btn-floaing-jobs.svg";
import btnFaq from "../../assets/icons/btn-floating-faq.svg";

const Mission3Presenter = () => {
	return (
		<Wrapper>
			<BlockTop>
				<TopContent>
					<TextBoxTop>Mission 03</TextBoxTop>
					<TextBoxMiddle>사회 문제를 발견해 주세요!</TextBoxMiddle>
					<TextBoxBottom>
						지금부터는 우리에게 일어나고 있거나, 미래에 일어날 다양한 사회문제들을
						찾아보고 분석하는 작업을 진행할 것입니다. 우리 기업이 해결하고자 하는
						사회문제를 찾아보고 분석해봅시다! 제시된 사회문제 테마 3가지 중 1가지를
						선택하여 관련 영상을 시청하고, 선택한 사회문제와 관련된 키워드를
						찾아주세요!
					</TextBoxBottom>
				</TopContent>
			</BlockTop>
			<BlockBottom>
				<BottomContent>
					<Title>사회문제 선정하고 분석하기</Title>
					<SubTitle>
						사회문제 설명영상을 시청한 후 우리 기업이 해결하고 싶은 사회문제 테마
						1가지를 최종 선택해주세요.
					</SubTitle>
					<Tabs>
						<Tab1></Tab1>
						<Tab2></Tab2>
						<Tab3></Tab3>
					</Tabs>
					<VideoArea></VideoArea>
					{/*  */}
					{/* <LeftBox></LeftBox>
					<RightBox></RightBox> */}
				</BottomContent>
				<FaqBtn src={btnFaq} alt='힌트버튼' />
				<JobsBtn src={btnJobs} alt='직업버튼' />
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
	position: relative;
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
	width: 70px;
	height: 14px;
	font-size: 14px;
	font-weight: 500;
	line-height: 1;
	color: #0f0f15;
	padding-top: 40px;
`;
const TextBoxMiddle = styled.div`
	width: 290px;
	height: 38px;
	font-size: 26px;
	font-weight: 500;
	color: #0f0f15;
	margin-top: 8px;
`;
const TextBoxBottom = styled.div`
	width: 944px;
	height: 44px;
	line-height: 1.57;
	font-size: 14px;
	font-weight: 500;
	opacity: 0.8;
	margin-top: 10px;
`;

const Title = styled.div`
	width: 207px;
	height: 24px;
	font-size: 18px;
	font-weight: 500;
	line-height: 1.33;
	color: #0f0f15;
	padding-top: 39px;
`;
const SubTitle = styled.div`
	width: 944px;
	height: 22px;
	opacity: 0.8;
	font-size: 14px;
	font-weight: 500;
	line-height: 1.57;
	color: #0f0f15;
	margin-top: 10px;
`;
const Tabs = styled.div`
	display: flex;
	flex-direction: row;
	margin-top: 16px;
`;

// tab 에서 셀렉트 되면 box-show 속성적용
// 		나머지 tab은 border 및 background 속성만 적용
const Tab1 = styled.div`
	width: 313.3px;
	height: 50px;
	box-shadow: 0 0 10px 0 rgba(15, 15, 21, 0.1);
	border: solid 1px #686868;
	background-color: #ffffff;
`;
const Tab2 = styled.div`
	width: 313.3px;
	height: 50px;
	border: solid 1px #d8d8d8;
	background-color: rgba(255, 255, 255, 0.5);
`;
const Tab3 = styled.div`
	width: 313.3px;
	height: 50px;
	border: solid 1px #d8d8d8;
	background-color: rgba(255, 255, 255, 0.5);
`;
const VideoArea = styled.div`
	width: 624px;
	height: 388px;
	border-radius: 2px;
	box-shadow: 0 0 10px 0 rgba(15, 15, 21, 0.05);
	background-color: #ffffff;
	position: absolute;
	top: 181px;
	left: 0;
`;
const RightBox = styled.div`
	width: 304px;
	height: 388px;
	border-radius: 2px;
	box-shadow: 0 0 10px 0 rgba(15, 15, 21, 0.05);
	background-color: #ffffff;
	position: absolute;
	top: 181px;
	right: 0;
`;

export default Mission3Presenter;
