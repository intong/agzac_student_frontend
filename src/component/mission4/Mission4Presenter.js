import React from "react";
import styled from "styled-components";
import Footer from "../../layout/Footer";
import btnJobs from "../../assets/icons/btn-floaing-jobs.svg";
import btnFaq from "../../assets/icons/btn-floating-faq.svg";
import close from "../../assets/icons/bnt-x-24.svg";
import { ButtonSecondary } from "../../ui/button/Button";
import SocialProblem from "./SocialProblem";
import ProductDeveloper from "./ProductDeveloper";
import { missionFourImage } from "../AnswerList";
import ReasonDevelopProduct from "./ReasonDevelopProduct";
import ItemIntroduction from "./ItemIntroduction";
import {
	HelpModal,
	ModalWithInputOneBtn,
	CompleteModal,
	ModalBaseTwoBtn,
} from "../../ui/modal/Modal";
import ClipLoader from "react-spinners/ClipLoader";

const btnStyle = {
	width: "256px",
	height: "40px",
	position: "absolute",
	bottom: "24px",
	left: "24px",
};

const Mission4Presenter = ({
	loading,
	tabClick, // only css 이벤트 (택클릭시 색깔 변화)
	handleTabClick, // only css 이벤트 (택클릭시 색깔 변화)
	socialProblem,
	texts,
	humanRole1DropDown,
	humanRole2DropDown,
	humanRole3DropDown,
	firstTxtArea,
	secondTxtArea,
	thirdTxtArea,
	fourthTxtArea,
	humanRole1,
	humanRole2,
	humanRole3,
	itemItro1,
	itemItro2,
	itemItro3,
	itemItro4,
	productName,
	productPrice,
	itemNameModal,
	priceSettingModal,
	completeModal,
	prevSelect,
	isOpen,
	faqModal,
	confirm,
	selectTab,
	modalState,
	clickFunctionList,
	modalFunction,
}) => {
	return (
		<LayOutContent>
			<Wrapper>
				<BlockTop>
					<TopContent>
						<TextBoxTop>Mission 04</TextBoxTop>
						<TextBoxMiddle>사회문제를 해결하는 상품을 개발해주세요!</TextBoxMiddle>
						<TextBoxBottom>
							지금까지 4차산업기술을 보유한 미래인재 정보를 확보하고, 다양한 사회문제를
							살펴 보았습니다. 지금부터는 우리 기업이 사회문제를 해결하는 상품을 개발할
							차례입
							<br />
							니다. 확보한 미래인재 정보와 분석한 사회문제를 기반으로 멋진 상품을
							개발해 주세요!
						</TextBoxBottom>
					</TopContent>
				</BlockTop>
				<BlockBottom>
					<BottomContent>
						<Title>사회문제를 해결하는 상품개발 기획서</Title>
						<div
							style={{
								display: "flex",
								marginTop: "16px",
							}}
						>
							<LeftBox>
								{prevSelect && (
									<>
										<LeftTitle>
											{sessionStorage.getItem("user")}&nbsp;님이 선택한 사회문제의
											<br />
											주제는&nbsp;{prevSelect.selectTabContent.name}
											&nbsp;입니다.
										</LeftTitle>
										<LeftImage
											src={
												prevSelect.selectTabContent.name === "고령화 사회"
													? missionFourImage[2].imgUrl
													: prevSelect.selectTabContent.name === "재난과 안전"
													? missionFourImage[1].imgUrl
													: missionFourImage[0].imgUrl
											}
										/>
									</>
								)}
								<ButtonSecondary
									text='다른 사회문제 선택'
									style={btnStyle}
									onClick={clickFunctionList.choiceOtherSocialProblem}
								/>
							</LeftBox>
							<RightBox>
								<Tabs>
									<Tab1
										confirm={confirm}
										selectTab={selectTab}
										tabClick={tabClick} //클릭 : true, unclick: false
										onClick={() => handleTabClick("social")}
									>
										<Text>사회문제 분석</Text>
									</Tab1>
									<Tab2
										confirm={confirm}
										selectTab={selectTab}
										tabClick={tabClick} //클릭 : true, unclick: false
										onClick={() => handleTabClick("reason")}
									>
										<Text>상품개발 이유</Text>
									</Tab2>
									<Tab3
										confirm={confirm}
										selectTab={selectTab}
										tabClick={tabClick} //클릭 : true, unclick: false
										onClick={() => handleTabClick("developer")}
									>
										<Text>미래인재 역할</Text>
									</Tab3>
									<Tab4
										confirm={confirm}
										selectTab={selectTab}
										tabClick={tabClick} //클릭 : true, unclick: false
										onClick={() => handleTabClick("itemIntro")}
									>
										<Text>상품 소개</Text>
									</Tab4>
								</Tabs>
								{/* 변경 자리 */}
								{selectTab === "social" ? (
									<SocialProblem
										socialProblem={socialProblem}
										texts={texts}
										prevSelect={prevSelect}
										clickFunctionList={clickFunctionList}
									/>
								) : selectTab === "reason" ? (
									<ReasonDevelopProduct
										firstTxtArea={firstTxtArea}
										secondTxtArea={secondTxtArea}
										thirdTxtArea={thirdTxtArea}
										fourthTxtArea={fourthTxtArea}
										clickFunctionList={clickFunctionList}
									/>
								) : selectTab === "developer" ? (
									<ProductDeveloper
										humanRole1DropDown={humanRole1DropDown}
										humanRole2DropDown={humanRole2DropDown}
										humanRole3DropDown={humanRole3DropDown}
										humanRole1={humanRole1}
										humanRole2={humanRole2}
										humanRole3={humanRole3}
										modalFunction={modalFunction}
										clickFunctionList={clickFunctionList}
									/>
								) : (
									<ItemIntroduction
										itemItro1={itemItro1}
										itemItro2={itemItro2}
										itemItro3={itemItro3}
										itemItro4={itemItro4}
										clickFunctionList={clickFunctionList}
									/>
								)}
							</RightBox>
						</div>
					</BottomContent>
				</BlockBottom>
				<Footer />

				{/* 잡카드 */}
				{isOpen && (
					<ModalWrapper>
						<ModalArea>
							<HelpModal modalFunction={modalFunction} />
						</ModalArea>
					</ModalWrapper>
				)}
				{/* 도움말 모달 */}
				{faqModal === true && selectTab === "social" ? (
					<ModalWrapperFaq>
						<ModalAreaFaq>
							<CloseDiv
								src={close}
								alt='닫기버튼'
								onClick={modalFunction.toggleFaqModal}
							/>
							<TextDiv>
								이전 미션에서 찾아낸 사회문제 키워드 중 상품을 개발해 해결하고자 하는
								키워드 1가지를 선택해주세요
							</TextDiv>
							<HelpArea></HelpArea>
							<TextDiv2>
								위에서 선택한 사회문제 키워드와 관련된 문제 상황을 작성해주세요
							</TextDiv2>
							<HelpArea2></HelpArea2>
						</ModalAreaFaq>
					</ModalWrapperFaq>
				) : (
					<></>
				)}
				{faqModal === true && selectTab === "reason" ? (
					<ModalWrapperFaq>
						<ModalAreaFaq>
							<CloseDiv
								src={close}
								alt='닫기버튼'
								onClick={modalFunction.toggleFaqModal}
							/>
							<TextDiv>
								선택한 사회문제는 왜 발생하고 있는지 작성해주세요 예시) 길거리의
								쓰레기통 부족으로 쓰레기가 길가에 많이 버려지고 있어요
							</TextDiv>
							<HelpArea></HelpArea>
							<TextDiv1>
								선택한 사회문제는 왜 발생하고 있는지 작성해주세요 예시) 길거리의
								쓰레기통 부족으로 쓰레기가 길가에 많이 버려지고 있어요
							</TextDiv1>
							<HelpArea1></HelpArea1>
							<TextDiv2>
								선택한 사회문제는 왜 발생하고 있는지 작성해주세요 예시) 길거리의
								쓰레기통 부족으로 쓰레기가 길가에 많이 버려지고 있어요
							</TextDiv2>
							<HelpArea2></HelpArea2>
							<TextDiv3>
								선택한 사회문제는 왜 발생하고 있는지 작성해주세요 예시) 길거리의
								쓰레기통 부족으로 쓰레기가 길가에 많이 버려지고 있어요
							</TextDiv3>
							<HelpArea3></HelpArea3>
						</ModalAreaFaq>
					</ModalWrapperFaq>
				) : (
					<></>
				)}
				{faqModal === true && selectTab === "developer" ? (
					<ModalWrapperFaq>
						<ModalAreaFaq>
							<CloseDiv
								src={close}
								alt='닫기버튼'
								onClick={modalFunction.toggleFaqModal}
							/>
							<TextDiv>
								어떤 미래 직업을 활용하여 선택한 사회문제를 해결할 수 있을지
								생각해보시고 미래인재 3가지를 선택해주세요
							</TextDiv>
							<HelpArea></HelpArea>
						</ModalAreaFaq>
					</ModalWrapperFaq>
				) : (
					<></>
				)}

				{/* 임시저장 모달 */}
				{modalState.saveModalOpen && (
					<ModalWrapperSave>
						<ModalAreaSave>
							<ModalBaseTwoBtn
								header='임시 저장 하기'
								content='지금까지 입력한 정보가 저장 됩니다.'
								confirmbtntext='확인'
								cancelbtntext='취소'
								closeModalEvent={modalFunction.toggletempModal}
								cancelbtnEvent={modalFunction.toggletempModal}
								confirmbtnEvent={modalFunction.handleSaveModalConfirmBtn}
							/>
						</ModalAreaSave>
					</ModalWrapperSave>
				)}

				{/* 상품이름 세팅 모달 */}
				{itemNameModal && (
					<ModalWrapper key={1}>
						<ModalAreaPrice key={1}>
							<ModalWithInputOneBtn
								header='상품개발을 완료했습니다.'
								content='상품이름을 보고 사람들이 기능을 알아볼 수 있도록 
								멋진 상품이름을 지어주세요!
								'
								placeholder='상품이름을 입력해주세요.'
								btntext='확인'
								closeModalEvent={modalFunction.toggleProductNameModal}
								onChange={clickFunctionList.setProductName}
								btnEvent={modalFunction.productNameModalConfirmBtn}
								value={productName ? productName : ""}
							/>
						</ModalAreaPrice>
					</ModalWrapper>
				)}

				{/* 상품가격 세팅 모달 */}
				{priceSettingModal && (
					<ModalWrapper key={1}>
						<ModalAreaPrice key={1}>
							<ModalWithInputOneBtn
								header='상품개발을 완료했습니다.'
								content='상품 가격은 얼마로 할까요??'
								placeholder='상품가격을 입력해주세요.'
								btntext='확인'
								closeModalEvent={modalFunction.togglePriceSettingModal}
								onChange={clickFunctionList.setProductPrice}
								btnEvent={modalFunction.toggleCompleteModal}
								value={productPrice ? productPrice : ""}
							/>
						</ModalAreaPrice>
					</ModalWrapper>
				)}

				{/* 모든 미션 완료 및 가격 설정까지 완료 후 모달 */}
				{completeModal && (
					<ModalWrapper>
						<ModalCompleteArea>
							<CompleteModal
								headerText={`${sessionStorage.getItem("user")}님 축하합니다! 
								\n모든 미션을 완료해주셨네요.`}
								contentText='사회문제를 해결하는 상품을 개발해 주셔서 감사합니다. 사회문제로 어려움을 겪고 있는 사람들의 문제가 해결될 수 있을 것 같습니다. 모든 미션을 성공적으로 완료하였으니, 
								최종 보고서를 작성하러 이동해 볼까요?'
								handleCancel={modalFunction.cancelCompleteModal}
								onClickBtn={clickFunctionList.goToFinalReport}
							/>
						</ModalCompleteArea>
					</ModalWrapper>
				)}
				{loading && (
					<ModalWrapper>
						<ModalAreaSave>
							<ClipLoader
								color={"#ffc300"}
								style={{ margin: "0 auto", zIndex: "100" }}
							/>
						</ModalAreaSave>
					</ModalWrapper>
				)}
				<FaqBtn
					src={btnFaq}
					alt='힌트버튼'
					onClick={modalFunction.toggleFaqModal}
				/>
				<JobsBtn src={btnJobs} alt='직업버튼' onClick={modalFunction.openModal} />
			</Wrapper>
		</LayOutContent>
	);
};

const ModalWrapperFaq = styled.div`
	width: 100vw;
	height: 100vh;
	background: rgba(15, 15, 21, 0.8);
	position: fixed;
	top: 0;
	z-index: 90;
	display: flex;
`;
const ModalWrapper = styled.div`
	width: 100vw;
	height: 100vh;
	min-height: 900px;
	max-height: 1122px;
	background: rgba(15, 15, 21, 0.8);
	position: fixed;
	top: 0;
	z-index: 60;
	display: flex;
`;
const ModalAreaPrice = styled.div`
	width: 320px;
	height: 304px;
	margin: auto;
`;
const ModalCompleteArea = styled.div`
	width: 387px;
	height: 486px;
	margin: auto;
`;
const ModalAreaFaq = styled.div`
	width: 944px;
	margin: 0 auto;
	color: black;
	position: relative;
`;
const CloseDiv = styled.img`
	width: 24px;
	height: 24px;
	position: absolute;
	top: 200px;
	left: 340px;
	filter: invert(100%);
	&:hover {
		cursor: pointer;
	}
`;
const TextDiv = styled.div`
	padding-left: 10px;
	width: 400px;
	height: 60px;
	line-height: 2;
	border-radius: 2px;
	border: solid 1px #e4e4e4;
	font-family: NotoSansCJKkr;
	font-size: 0.875rem;
	font-style: normal;
	color: white;
	position: absolute;
	top: 250px;
	left: 330px;
`;

const ModalArea = styled.div`
	width: 700px;
	height: 503px;
	position: absolute;
	bottom: 122px;
	right: 114px;
`;

const LayOutContent = styled.div`
	width: 100vw;
`;

const Wrapper = styled.div`
	min-width: 1024px;
	max-width: 1920px;
	overflow-x: hidden;
	overflow-y: auto;
	margin: 0 auto;
`;

const BlockTop = styled.div`
	background: #e4e4e4;
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
	margin: 0 auto;
	position: relative;
`;
const BottomContent = styled.div`
	width: 944px;
	margin: 0 auto;
	position: relative;
`;
const Title = styled.div`
	width: 278px;
	height: 24px;
	font-family: NotoSansCJKkr;
	font-size: 18px;
	font-weight: 500;
	font-stretch: normal;
	font-style: normal;
	line-height: 1.33;
	letter-spacing: normal;
	color: #0f0f15;
	padding-top: 39px;
`;
const Tabs = styled.div`
	width: 624px;
	height: 50px;
	display: flex;
	flex-direction: row;
	box-shadow: 0 0 10px 0 rgba(15, 15, 21, 0.05);
	margin-bottom: 16px;
`;
const Text = styled.div`
	width: 156px;
`;
// social
const Tab1 = styled.div`
	width: 156px;
	height: 50px;
	background-color: ${(props) =>
		props.selectTab === "social" || props.confirm.social === "ok"
			? "#0f0f15"
			: "#ffffff"};
	color: ${(props) =>
		props.selectTab === "social" || props.confirm.social === "ok"
			? "#ffffff"
			: "#686868"};
	opacity: ${(props) => (props.confirm.social === "ok" ? "0.8" : "1")};
	text-align: center;
	line-height: 53px;
	&:hover {
		cursor: pointer;
	}
`;
//reason
const Tab2 = styled.div`
	width: 156px;
	height: 50px;
	background-color: ${(props) =>
		props.selectTab === "reason" || props.confirm.reason === "ok"
			? "#0f0f15"
			: "#ffffff"};
	color: ${(props) =>
		props.selectTab === "reason" || props.confirm.reason === "ok"
			? "#ffffff"
			: "#686868"};
	opacity: ${(props) => (props.confirm.reason === "ok" ? "0.8" : "1")};
	text-align: center;
	line-height: 53px;
	&:hover {
		cursor: pointer;
	}
`;
// developer
const Tab3 = styled.div`
	width: 156px;
	height: 50px;
	background-color: ${(props) =>
		props.selectTab === "developer" || props.confirm.developer === "ok"
			? "#0f0f15"
			: "#ffffff"};
	color: ${(props) =>
		props.selectTab === "developer" || props.confirm.developer === "ok"
			? "#ffffff"
			: "#686868"};
	opacity: ${(props) => (props.confirm.developer === "ok" ? "0.8" : "1")};
	text-align: center;
	line-height: 53px;
	&:hover {
		cursor: pointer;
	}
`;
const Tab4 = styled.div`
	width: 156px;
	height: 50px;
	background-color: ${(props) =>
		props.selectTab === "itemIntro" || props.confirm.itemIntro === "ok"
			? "#0f0f15"
			: "#ffffff"};
	color: ${(props) =>
		props.selectTab === "itemIntro" || props.confirm.itemIntro === "ok"
			? "#ffffff"
			: "#686868"};
	opacity: ${(props) => (props.confirm.itemIntro === "ok" ? "0.8" : "1")};
	text-align: center;
	line-height: 53px;
	&:hover {
		cursor: pointer;
	}
`;
const LeftBox = styled.div`
	width: 304px;
	height: 458px;
	border-radius: 2px;
	box-shadow: 0 0 10px 0 rgba(15, 15, 21, 0.05);
	background-color: #ffffff;
	position: relative;
`;
const RightBox = styled.div`
	width: 304px;
	height: 100%;
	margin-left: 16px;
`;
const LeftTitle = styled.div`
	width: 256px;
	height: 48px;
	font-family: NotoSansCJKkr;
	font-size: 18px;
	font-weight: 500;
	font-stretch: normal;
	font-style: normal;
	line-height: 1.33;
	letter-spacing: normal;
	color: #0f0f15;
	text-align: justify;
	position: absolute;
	top: 26px;
	left: 24px;
`;
const LeftImage = styled.img`
	width: 280px;
	position: absolute;
	bottom: 80px;
	left: 12px;
`;

const FaqBtn = styled.img`
	position: fixed;
	right: 30px;
	bottom: 108px;
	filter: drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.2));
	&:hover {
		cursor: pointer;
	}
`;
const JobsBtn = styled.img`
	position: fixed;
	right: 30px;
	bottom: 30px;
	filter: drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.2));
	&:hover {
		cursor: pointer;
	}
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
	width: 458px;
	height: 38px;
	font-size: 26px;
	font-weight: 500;
	color: #0f0f15;
	margin-top: 8px;
`;
const TextBoxBottom = styled.div`
	width: 944px;
	height: 44px;
	opacity: 0.8;
	font-size: 14px;
	font-weight: 500;
	line-height: 1.57;
	color: #0f0f15;
	margin-top: 10px;
`;

// 임시저장 모달 css
const ModalWrapperSave = styled.div`
	width: 100vw;
	height: 100vh;
	background: rgba(15, 15, 21, 0.8);
	position: fixed;
	top: 0px;
	display: flex;
	z-index: 90;
`;
const ModalAreaSave = styled.div`
	margin: auto;
`;
const HelpArea = styled.div`
	border: 1px solid red;
	width: 650px;
	height: 600px;
	position: absolute;
	top: 330px;
	left: 310px;
`;
const TextDiv2 = styled.div`
	padding-left: 10px;
	width: 400px;
	height: 60px;
	line-height: 2;
	border-radius: 2px;
	border: solid 1px #e4e4e4;
	font-family: NotoSansCJKkr;
	font-size: 0.875rem;
	font-style: normal;
	color: white;
	position: absolute;
	top: 580px;
	left: -110px;
`;
const HelpArea2 = styled.div`
	border: 1px solid red;
	width: 600px;
	height: 70px;
	position: absolute;
	top: 580px;
	left: 330px;
`;
const TextDiv1 = styled.div`
	padding-left: 10px;
	width: 400px;
	height: 60px;
	line-height: 2;
	border-radius: 2px;
	border: solid 1px #e4e4e4;
	font-family: NotoSansCJKkr;
	font-size: 0.875rem;
	font-style: normal;
	color: white;
	position: absolute;
	top: 490px;
	left: -110px;
`;
const HelpArea1 = styled.div`
	border: 1px solid red;
	width: 600px;
	height: 70px;
	position: absolute;
	top: 490px;
	left: 330px;
`;
const TextDiv3 = styled.div`
	padding-left: 10px;
	width: 400px;
	height: 60px;
	line-height: 2;
	border-radius: 2px;
	border: solid 1px #e4e4e4;
	font-family: NotoSansCJKkr;
	font-size: 0.875rem;
	font-style: normal;
	color: white;
	position: absolute;
	top: 680px;
	left: -110px;
`;
const HelpArea3 = styled.div`
	border: 1px solid red;
	width: 600px;
	height: 70px;
	position: absolute;
	top: 680px;
	left: 330px;
`;

export default Mission4Presenter;
