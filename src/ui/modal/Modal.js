import { useState } from "react";
import styled from "styled-components";
import {
	ButtonPrimary,
	ButtonPrimaryLong,
	ButtonSecondary,
	ButtonSecondaryLong,
} from "../button/Button";
import { InputLineType } from "../inputBox/Input";
import close from "../../assets/icons/bnt-x-24.svg";
import prev from "../../assets/icons/btn-prev.svg";
import next from "../../assets/icons/btn-next.svg";
import droneDeveloper from "../../assets/img/JobCards/droneDeveloper2x.png";
import iotPro from "../../assets/img/JobCards/iotPro2x.png";
import aiScientist from "../../assets/img/JobCards/aiScientist2x.png";
import DprintDeveloper from "../../assets/img/JobCards/3DprintDeveloper2x.png";
import carbonTrader from "../../assets/img/JobCards/carbonTrader2x.png";
import chemicalDeveloper from "../../assets/img/JobCards/chemicalDeveloper2x.png";
import computerSecurity from "../../assets/img/JobCards/computerSecurity2x.png";
import disaster from "../../assets/img/JobCards/disaster2x.png";
import environmentEngineer from "../../assets/img/JobCards/environmentEngineer2x.png";
import functionGameDeveloper from "../../assets/img/JobCards/functionGameDeveloper2x.png";
import profiler from "../../assets/img/JobCards/profiler2x.png";
import renewerableEnergy from "../../assets/img/JobCards/renewableEnergy2x.png";
import softwareDeveloper from "../../assets/img/JobCards/softwareDeveloper2x.png";
import trafficPro from "../../assets/img/JobCards/trafficPro2x.png";
import upcycler from "../../assets/img/JobCards/upcycler2x.png";
import vrEngineer from "../../assets/img/JobCards/vrEngineer2x.png";
import ReactLoading from "react-loading";

export const LoadingModal = () => {
	return (
		<BlockLoading>
			<Content>
				<ReactLoading type={"spin"} color={"#fffff"} width={"50%"} height={"50%"} />
			</Content>
		</BlockLoading>
	);
};

const BlockLoading = styled.div`
	width: 320px;
	padding: 26px 24px;
	position: relative;
`;
const Content = styled.div`
	width: 100px;
	height: 50px;
	margin: auto;
`;

// Type1_버튼 내용이 짧은 경우 _ 1btn
export function ModalBase({
	header,
	content,
	modalStyle,
	btnStyle,
	btntext,
	btnEvent,
	closeModalEvent,
}) {
	return (
		<Block style={modalStyle}>
			<CloseImg src={close} alt='' onClick={closeModalEvent} />
			<HeaderDiv>{header}</HeaderDiv>
			<ContentDiv>{content}</ContentDiv>
			<BtnPosition>
				<ButtonPrimary text={btntext} style={btnStyle} onClick={btnEvent} />
			</BtnPosition>
		</Block>
	);
}
const Block = styled.div`
	background: #ffffff;
	width: 320px;
	padding: 26px 24px;
	position: relative;
`;
const CloseImg = styled.img`
	position: absolute;
	top: 10px;
	right: 10px;
	&:hover {
		cursor: pointer;
	}
`;
const HeaderDiv = styled.div`
	font-family: "NotoSansCJKkr";
	font-size: 18px;
	font-weight: 500;
	font-stretch: normal;
	font-style: normal;
	line-height: 1.33;
	letter-spacing: normal;
	color: #0f0f15;
`;
const ContentDiv = styled.div`
	min-height: 66px;
	font-family: "NotoSansCJKkr";
	font-size: 14px;
	font-weight: normal;
	font-stretch: normal;
	font-style: normal;
	line-height: 1.57;
	letter-spacing: normal;
	color: #0f0f15;
	margin-top: 18px;
	/* background: green; */
`;
const BtnPosition = styled.div`
	/* background: red; */
	width: 320px;
	height: 40px;
	display: flex;
	justify-content: flex-end;
`;

// type2_버튼 내용이 긴 경우 _ 2btn
export const ModalTwoBtnLong = ({
	header,
	content,
	closeModalEvent,
	confirmBtnOnClick,
	cancelBtnOnClick,
}) => {
	return (
		<BlockTwoBtnLong>
			<CloseImgTwoBtnLong src={close} alt='' onClick={closeModalEvent} />
			<HeaderDivTwoBtnLong>{header}</HeaderDivTwoBtnLong>
			<ContentDivTwoBtnLong>{content}</ContentDivTwoBtnLong>
			<ButtonSecondaryLong
				text='다시 시작하기'
				style={{ marginBottom: "6px" }}
				onClick={cancelBtnOnClick}
			/>
			<ButtonPrimaryLong text='이어서 진행하기' onClick={confirmBtnOnClick} />
		</BlockTwoBtnLong>
	);
};

const BlockTwoBtnLong = styled.div`
	background: #ffffff;
	width: 272px;
	height: 198px;
	padding: 26px 24px;
	position: relative;
`;
const CloseImgTwoBtnLong = styled.img`
	position: absolute;
	top: 10px;
	right: 10px;
	&:hover {
		cursor: pointer;
	}
`;
const HeaderDivTwoBtnLong = styled.div`
	font-family: "NotoSansCJKkr";
	font-size: 18px;
	font-weight: 500;
	font-stretch: normal;
	font-style: normal;
	line-height: 1.33;
	letter-spacing: normal;
	color: #0f0f15;
`;
const ContentDivTwoBtnLong = styled.div`
	min-height: 66px;
	font-family: "NotoSansCJKkr";
	font-size: 14px;
	font-weight: normal;
	font-stretch: normal;
	font-style: normal;
	line-height: 1.57;
	letter-spacing: normal;
	color: #0f0f15;
	margin-top: 18px;
	/* background: green; */
`;

// Type1_버튼 내용이 짧은 경우 _ 2btn
export const ModalBaseTwoBtn = ({
	header,
	content,
	modalStyle,
	confitmbtnStyle,
	cancelbtnStyle,
	confirmbtntext,
	cancelbtntext,
	confirmbtnEvent,
	cancelbtnEvent,
	closeModalEvent,
}) => {
	return (
		<BlockTwoBtn style={modalStyle}>
			<CloseImgTwoBtn src={close} alt='' onClick={closeModalEvent} />
			<HeaderDivTwoBtn>{header}</HeaderDivTwoBtn>
			<ContentDivTwoBtn>{content}</ContentDivTwoBtn>
			<BtnPositionTwoBtn>
				<ButtonSecondary
					text={cancelbtntext}
					style={cancelbtnStyle}
					onClick={cancelbtnEvent}
				/>
				<ButtonPrimary
					text={confirmbtntext}
					style={confitmbtnStyle}
					onClick={confirmbtnEvent}
				/>
			</BtnPositionTwoBtn>
		</BlockTwoBtn>
	);
};

const BlockTwoBtn = styled.div`
	background: #ffffff;
	width: 320px;
	padding: 26px 24px;
	position: relative;
`;
const CloseImgTwoBtn = styled.img`
	position: absolute;
	top: 10px;
	right: 10px;
	&:hover {
		cursor: pointer;
	}
`;
const HeaderDivTwoBtn = styled.div`
	font-family: "NotoSansCJKkr";
	font-size: 18px;
	font-weight: 500;
	font-stretch: normal;
	font-style: normal;
	line-height: 1.33;
	letter-spacing: normal;
	color: #0f0f15;
`;
const ContentDivTwoBtn = styled.div`
	min-height: 66px;
	font-family: "NotoSansCJKkr";
	font-size: 14px;
	font-weight: normal;
	font-stretch: normal;
	font-style: normal;
	line-height: 1.57;
	letter-spacing: normal;
	color: #0f0f15;
	margin-top: 18px;
	/* background: green; */
`;
const BtnPositionTwoBtn = styled.div`
	/* background: red; */
	width: 320px;
	height: 40px;
	display: flex;
	justify-content: flex-end;
	gap: 8px;
`;

export const ModalWithInputOneBtn = ({
	header,
	content,
	btnEvent,
	placeholder,
	btntext,
	onChange,
}) => {
	return (
		<BlockWithInput>
			<HeaderDivWithInput>{header}</HeaderDivWithInput>
			<ContentDivWithInput>
				{content}
				<InputLineType
					placeholder={placeholder}
					style={{ marginTop: "20px", marginBottom: "10px" }}
					onChange={onChange}
				/>
			</ContentDivWithInput>
			<BtnPositionWithInput>
				<ButtonPrimary
					text={btntext}
					style={{ marginTop: "10px" }}
					onClick={btnEvent}
				/>
			</BtnPositionWithInput>
		</BlockWithInput>
	);
};

const BlockWithInput = styled.div`
	background: #ffffff;
	width: 320px;
	padding: 26px 24px;
	position: relative;
`;
const HeaderDivWithInput = styled.div`
	font-family: "NotoSansCJKkr";
	font-size: 18px;
	font-weight: 500;
	font-stretch: normal;
	font-style: normal;
	line-height: 1.33;
	letter-spacing: normal;
	color: #0f0f15;
`;
const ContentDivWithInput = styled.div`
	min-height: 66px;
	font-family: "NotoSansCJKkr";
	font-size: 14px;
	font-weight: normal;
	font-stretch: normal;
	font-style: normal;
	line-height: 1.57;
	letter-spacing: normal;
	color: #0f0f15;
	margin-top: 18px;
	/* background: green; */
`;
const BtnPositionWithInput = styled.div`
	/* background: red; */
	width: 320px;
	height: 40px;
	display: flex;
	justify-content: flex-end;
	gap: 8px;
`;

export const HelpModal = ({ style, modalFunction }) => {
	const [count, setCount] = useState(1);

	const handleClickPage = {
		handlePrev: () => {
			if (count > 1) {
				setCount(count - 1);
			}
		},
		handleNext: () => {
			if (count < 16) {
				setCount(count + 1);
			}
		},
	};
	const jobCards = [
		{
			imgUrl: droneDeveloper,
			title: "드론개발자",
			todo:
				"드론에 카메라, 센서, 통신장비 등을 탑재하여 정보를 수집하거나 사람을 대신하여 배송하는 드론을 설계 및 개발",
			interview:
				"사람이 들어가기 힘든 재난 현장에 드론을 보내거나, 드론 택배를 개발할 수 있어요.",
			subject: "기계공학, 항공우주공학, 전기전자 등",
		},
		{
			imgUrl: iotPro,
			title: "사물인터넷전문가",
			todo:
				"인터넷을 통하여 모든 사물을 연결시켜 사람과 사물 혹은 사물과 사물 간에 정보를 실시간으로 주고 받게 하는 기술 및 통신 환경을 개발",
			interview:
				"추운 날 집을 나서기 10분전 자동으로 차량 시동이 켜지고, 귀가시간 즘 미리 집안 보일러가 켜지도록 만들어요.",
			subject: "통신공학, 컴퓨터공학, 전자공학, 제어계측공학, 기계공학 등",
		},
		{
			imgUrl: aiScientist,
			title: "인공지능과학자",
			todo:
				"컴퓨터, 로봇 등이 사람처럼 사고하고 학습하며, 의사결정을 할 수 있도록 하는 프로그램을 연구 및 개발",
			interview:
				"스스로 학습하고 데이터를 축적하여 점점 더 똑똑해지고 더 빠르게 성장하여 사람보다 더 빠르고 정확하게 일을 수행하게 합니다.",
			subject: "컴퓨터공학, 로봇공학, 기초과학, 신경생리학, 정보통신공학 등",
		},
		{
			imgUrl: DprintDeveloper,
			title: "3D프린터개발자",
			todo:
				"글이나 사진을 기존 프린터로 2차원 출력하듯이 3D프린터를 활용하여 원하는 3차원 입체 물건을 출력(제작)할 수 있도록 함",
			interview:
				"사람의 손으로 만들기에는 복잡하고 정교한 인공 장기, 피규어 등의 것들을 보다 저렴한 가격에 효과적으로 만들 수 있기 때문에 사회적으로 가치 있는 일을 실현하는데 필수요소로 주목받고 있어요.",
			subject: "기계설계, 기계공학 등",
		},
		{
			imgUrl: computerSecurity,
			title: "컴퓨터보안전문가",
			todo:
				"컴퓨터 프로그램 및 전산망(네트워크)에 접속하려는 외부 해킹 시도나 바이러스 등의 위협으로부터 정보 시스템과 네트워크를 보호하고 관리함",
			interview:
				"IT기술이 발절할수록 해킹, 바이러스 가은 사이버 테러가 나날이 늘어가는 추세지요. 이를 막고 미리 보호하는 제 분야의 중요성은 더 강조될 거예요.",
			subject: "디지털정보, 정보통신공학, 컴퓨터공학, 컴퓨터보안 등",
		},
		{
			imgUrl: softwareDeveloper,
			title: "소프트웨어개발자",
			todo:
				"컴퓨터 운영 체제에서 쓸 수 있는 소프트웨어들의 설계와 코딩 작업을 수행함",
			interview:
				"컴퓨터가 일을 할 수 있도록 명령을 내리기 위해 컴퓨터 언어를 사용하는데, 이를 코딩이라고 하면 코딩으로 재미있는 프로그램들을 만들 수 있어요.",
			subject: "시스템공학, 컴퓨터공학, 컴퓨터응용제어 등",
		},
		{
			imgUrl: functionGameDeveloper,
			title: "기능성게임기획자",
			todo:
				"게임요소를 활용하여 지식과 정보를 습득할 수 있는 게임을 만들고, 교육, 훈련, 사회문제 해결 등에 활용되는 게임을 기획, 연구함",
			interview:
				"멸종위기 동물과 관련하여 기후변화 문제를 주제로 잡아 게임을 한들었어요. 기후변화에 따른 빙하감소 및 생태위기를 게임체제로 구현하여 북극곰이 처한 환경의 어려움을 표현했답니다.",
			subject: "게임공학, 전산, 시스템공학 등",
		},
		{
			imgUrl: vrEngineer,
			title: "VR엔지니어",
			todo:
				"가상현실을 다루는 전문가로 상상 속 공간 혹은 실제 세계를 가상 환경에서 경험할 수 있도록 IT 기술을 응용하여 개발",
			interview:
				"가짜 세계라기 보단, 우리가 경험하고 있는 시간과 공간 등 물리적인 환경이 지닌 한계를 넘어 새로운 경험을 제고하고 있어요.",
			subject:
				"컴퓨터공학, 컴퓨터그래픽, 컴퓨터디자인, 컴퓨터응용제어, 컴퓨터프로그래밍 등",
		},
		{
			imgUrl: trafficPro,
			title: "지능형교통시스템전문가",
			todo:
				"교통 시스템의 효율성과 안정을 위해 다양한 전자, 통신 기술을 활용하여, 지능형 교통 시스템을 구축하고 개발",
			interview:
				"요즘 네이게이션 어플리케이션을 많이 쓰고 있죠. 모바일로 택시를 호출하거나 나의 위치를 전송해 주기도 하지요. 그리고 교통사고를 막고 교통 체증을 없애는 일도 해요.",
			subject: "물류학, 행정학, 전기전자공학, 교통공학과 등",
		},

		{
			imgUrl: profiler,
			title: "프로파일러",
			todo:
				"범죄자 심리와 성격, 직업, 연령 등의 정보를 토대로 사건의 범행동기, 범인상 등을 유추해 수사방향을 제시하는 업무를 수행",
			interview:
				"미래에는 데이터 분석기법을 활용하여 범죄가 일어날 것을 미리 예측하고 사건현장에 요원을 파견해 범죄를 막을 수도 있겠지요.",
			subject: "심리학, 범죄심리학, 경찰행정학 등",
		},

		{
			imgUrl: disaster,
			title: "재난대처전문가",
			todo:
				"지진, 태풍, 홍수 등 자연 재해를 비록하여 대형화재, 안전사고 등 재난이 발생하지 않도록 예방활동을 수행하며, 재난발생시 위기에 대처할 수 있는 해결책을 수립",
			interview:
				"다양한 분야의 전무가들이 모여 예방책을 만들고 준비하며, 최근에는 원자력 발전소의 방사능 유출이나 신종 질병 전염병처럼 국제적인 문제들까지 다루고 있습니다.",
			subject: "소방안전관리, 응급구조, 행정학, 공학계열(토목, 전기공학) 등",
		},
		{
			imgUrl: chemicalDeveloper,
			title: "신약개발연구원",
			todo:
				"환경 변화에 따른 신종 질병 위협으로 벗어날 수 있도록 새로운 의약품을 연구 개발하며, 저렴한 비용으로 백신을 개발",
			interview:
				"아프리카 빈곤지역의 아동에게 말라리아 백신을 보다 저렴하게 공급할 수 있다면 더많은 아동의 생명을 구할 수 있겠지요? 비싼 백신을 구하기 힘들어 지금 이 순간에도 희생되는 아동들을 생각한다면 백신이나 의약품 개발을 서둘러야 해요.",
			subject: "약학, 의예, 생물학 등",
		},

		{
			imgUrl: environmentEngineer,
			title: "환경공학기술자",
			todo:
				"환경 문제의 원인을 분석하고 예방할 수 있는 기술 및 시설 등을 연구하며, 배기가스, 미세먼지 등 대기오염 측정, 폐기물 및 오염물질 등에 대한 관리와 에너지 자원에 대한 관리 및 연구개발을 수행",
			interview:
				"먼 미래에 발생할 환경 위기를 다루고 있습니다. 오염된 토지나 폐수처리 및 수질관리, 독성물질의 정화, 대기 오염 방지를 위해 연구를 거듭하고 있어요.",
			subject: "화학공학, 환경공학, 환경과학 등",
		},

		{
			imgUrl: renewerableEnergy,
			title: "신재생에너지전문가",
			todo:
				"기후변화 문제 등 환경위기에 직면함에 따라 태양광, 풍력, 수력, 지열, 해양 등 재생이 가능한 친환경 에너지를 개발 및 연구",
			interview:
				"혹시 제주도 가보셨나요? 제주도에 가장 많은 것은 바람입니다. 그래서 풍력발전기를 종종 볼 수 있는데요, 저는 기존의 에너지원이 지닌 문제를 극복하고 대체에너지를 찾는 연구를 하고 있습니다.",
			subject: "기계공학, 항공우주공학, 전기전자 등",
		},

		{
			imgUrl: upcycler,
			title: "업사이클러",
			todo:
				"사용하던 물건, 버려진 물건에 디자인을 입혀 새로운 용도와 가치를 지닌 물건으로 재탄생시키고, 새로운 친환경 제품을 연구 개발하는 작업을 수행",
			interview:
				"폐차 후 분해하면 나오는 부품들은 주로 폐기물로 버려져요. 엄청난 양의 쓰레기가 배출되는 셈인데, 저는 제 동생과 함께 이를 활용하여 새로운 제품을 만들었습니다. 업사이클링은 누구나 일상에서 손쉽게 시작할 수 있어요.",
			subject: "디자인학, 예술계열 등",
		},

		{
			imgUrl: carbonTrader,
			title: "탄소배출권거래중개인",
			todo:
				"기후변화의 원인이 되는 온실가스의 양이 늘어나면 탄소배출량도 증가합니다. 이에 국제 협약을 통해 탄소배출량을 줄이도록 만들어진 탄소 배출권을 거래 및 중개하는 역할을 수행",
			interview:
				"국가, 회사 별로 배출 할 수 있는 탄소배출권 수량이 정해져 있어요. 예를 들어 A와 B회사에 배출 한계가 100으로 정해졌는데, A가 120을 배출하였고, B가 80을 배출하였다면 A는 B로부터 20만큼의 배출권을 사도록 하는 거예요. 이런 회사들이 서로 거래할 수 있도록 중개하는 게 제 일이죠.",
			subject: "경제학, 경영학, 공학계열 등",
		},
	];
	return (
		<Wrapper style={style}>
			<CloseBtn src={close} alt='' onClick={modalFunction.closeModal} />
			<Title>4차 산업혁명과 미래인재</Title>
			<BtnBox style={{ position: "absolute", top: "222px", left: "10px" }}>
				<PrevBtn src={prev} alt='이전' onClick={handleClickPage.handlePrev} />
			</BtnBox>
			<LeftCard>
				<CardTitle>{jobCards[count - 1].title}</CardTitle>
				<LeftImage src={jobCards[count - 1].imgUrl} alt='드론개발자' />
			</LeftCard>
			<RightCard>
				<TitleDiv style={{ marginBottom: "10px" }}>하는일</TitleDiv>
				<TodoExplain>{jobCards[count - 1].todo}</TodoExplain>
				<BarUnder style={{ marginBottom: "12px" }} />
				<TitleDiv style={{ marginBottom: "10px" }}>인터뷰</TitleDiv>
				<InterviewExplain>{jobCards[count - 1].interview}</InterviewExplain>
				<BarUnder style={{ marginBottom: "12px" }} />
				<TitleDiv style={{ marginBottom: "10px" }}>학과</TitleDiv>
				<SubjectExplain>{jobCards[count - 1].subject}</SubjectExplain>
			</RightCard>
			<BtnBox style={{ position: "absolute", top: "222px", left: "650px" }}>
				<NextBtn src={next} alt='다음' onClick={handleClickPage.handleNext} />
			</BtnBox>
			<BottomNo>
				<div
					style={{
						display: "inline-block",
						width: "26px",
						height: "22px",
						fontFamily: "NotoSansCJKkr",
						fontSize: "14px",
						fontWeight: "bold",
						lineHeight: "1.57",
						color: "#0f0f15",
						marginLeft: "10px",
						paddingTop: "6px",
					}}
				>
					{count}
				</div>
				<div
					style={{
						display: "inline-block",
						width: "26px",
						height: "22px",
						fontFamily: "NotoSansCJKkr",
						fontSize: "14px",
						fontWeight: "500",
						lineHeight: "1.57",
						color: "#d8d8d8",
					}}
				>
					/
				</div>
				<div
					style={{
						display: "inline-block",
						widht: "34px",
						height: "22px",
						fontFamily: "NotoSansCJKkr",
						fontSize: "14px",
						fontweight: "500",
						lineHeight: "1.57",
						color: "#0f0f15",
					}}
				>
					16
				</div>
			</BottomNo>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	/* background: red; */
	border-radius: 2px;
	box-shadow: 0 0 10px 0 rgba(15, 15, 21, 0.05);
	background-color: #ffffff;
	width: 700px;
	height: 503px;
`;
const CloseBtn = styled.img`
	position: absolute;
	top: 10px;
	right: 10px;
	&:hover {
		cursor: pointer;
	}
`;
const Title = styled.div`
	width: 184px;
	height: 24px;
	font-family: "NotoSansCJKkr";
	font-size: 18px;
	font-weight: 500;
	font-stretch: normal;
	font-style: normal;
	line-height: 1.33;
	letter-spacing: normal;
	color: #0f0f15;
	position: absolute;
	top: 26px;
	left: 24px;
`;
const BtnBox = styled.div`
	width: 40px;
	height: 40px;
`;
const PrevBtn = styled.img`
	&:hover {
		cursor: pointer;
	}
`;
const LeftCard = styled.div`
	width: 270px;
	height: 336px;
	border-radius: 2px;
	border: solid 1px #e4e4e4;
	position: absolute;
	top: 80px;
	left: 64px;
`;
const CardTitle = styled.div`
	width: 270px;
	height: 20px;
	text-align: center;
	font-family: "NotoSansCJKkr";
	font-size: 18px;
	font-weight: 500;
	font-stretch: normal;
	font-style: normal;
	line-height: 1.11;
	letter-spacing: normal;
	text-align: center;
	color: #0f0f15;
	position: absolute;
	top: 14px;
`;
const LeftImage = styled.img`
	width: 270px;
	height: 336px;
`;
const RightCard = styled.div`
	/* background: red; */
	width: 258px;
	height: 308px;
	border-radius: 2px;
	border: solid 1px #e4e4e4;
	background-color: #f8f8f8;
	padding: 14px;
	overflow: scroll;
	position: absolute;
	top: 80px;
	left: 350px;
`;
const TitleDiv = styled.div`
	width: 39px;
	height: 20px;
	font-family: "NotoSansCJKkr";
	font-size: 14px;
	font-weight: 500;
	font-stretch: normal;
	font-style: normal;
	line-height: 1.43;
	letter-spacing: normal;
	color: #0f0f15;
`;
const BarUnder = styled.div`
	width: 258px;
	height: 1px;
	opacity: 0.3;
	background-color: #d8d8d8;
`;
const TodoExplain = styled.div`
	width: 258px;
	font-family: "NotoSansCJKkr";
	font-size: 14px;
	line-height: 1.57;
	color: #0f0f15;
	margin-bottom: 12px;
`;
const InterviewExplain = styled.div`
	width: 258px;
	font-family: "NotoSansCJKkr";
	font-size: 14px;
	line-height: 1.57;
	color: #0f0f15;
	margin-bottom: 12px;
`;
const SubjectExplain = styled.div`
	width: 258px;
	font-family: "NotoSansCJKkr";
	font-size: 14px;
	line-height: 1.57;
	color: #0f0f15;
`;
const NextBtn = styled.img`
	&:hover {
		cursor: pointer;
	}
`;
const BottomNo = styled.div`
	width: 86px;
	height: 35px;
	padding: 0 10px;
	border: solid 1px #e4e4e4;
	position: absolute;
	bottom: 26px;
	left: 297px;
`;
