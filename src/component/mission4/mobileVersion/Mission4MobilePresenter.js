import React from "react";
import styled from "styled-components";
import { missionFourImage } from "../../AnswerList";
import SocialProblemMobile from "./SocialProblemMobile";
import ReasonDevelopProductMobile from "./ReasonDevelopProductMobile";
import ProductDeveloperMobile from "./ProductDeveloperMobile";
import ItemIntroductionMobile from "./ItemIntroductionMobile";
import {
	ModalWithInputOneBtn,
	CompleteModal,
	ModalBaseTwoBtn,
	HelpModalMobile,
} from "../../../ui/modal/Modal";
import { ButtonSecondary } from "../../../ui/button/Button";
import btnJobs from "../../../assets/icons/btn-floaing-jobs.svg";
import ClipLoader from "react-spinners/ClipLoader";

const Mission4MobilePresenter = ({
	humanRole1DropDown,
	humanRole2DropDown,
	humanRole3DropDown,
	socialProblem,
	texts,
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
	loading,
	confirm,
	selectTab,
	modalState,
	clickFunctionList,
	modalFunction,
}) => {
	return (
		<Wrapper>
			<ProcessArea>
				<CircleDiv>
					<Circle
						style={{
							background: "#0f0f15",
							opacity: "1",
							border: "1px solid #0f0f15",
						}}
					/>
					<MiddleBar style={{ background: "#0f0f15", opacity: "1" }} />
					<Circle
						style={{
							background: "#0f0f15",
							opacity: "1",
							border: "1px solid #0f0f15",
						}}
					/>
					<MiddleBar style={{ background: "#0f0f15", opacity: "1" }} />
					<Circle
						style={{
							background: "#0f0f15",
							opacity: "1",
							border: "1px solid #0f0f15",
						}}
					/>
					<MiddleBar style={{ background: "#0f0f15", opacity: "1" }} />
					<Circle
						style={{
							background: "#0f0f15",
							opacity: "1",
							border: "1px solid #0f0f15",
						}}
					/>
					<MiddleBar style={{ background: "#0f0f15", opacity: "1" }} />
					<Circle
						style={{
							background: "#ffc300",
							opacity: "1",
							border: "1px solid #0f0f15",
						}}
					/>
					<MiddleBar />
					<Circle />
				</CircleDiv>
			</ProcessArea>
			<TopContent>
				<TextDivTop>Mission 04</TextDivTop>
				<TextDivMiddle>사회문제를 해결하는 상품을 개발해주세요!</TextDivMiddle>
				<TextDivBottom>
					지금까지 4차산업기술을 보유한 미래인재 정보를 확보하고, 다양한 사회문제를
					살펴 보았습니다. 지금부터는 우리 기업이 사회문제를 해결하는 상품을 개발할
					차례입니다. 확보한 미래인재 정보와 분석한 사회문제를 기반으로 멋진 상품을
					개발해 주세요!
				</TextDivBottom>
			</TopContent>
			<BottomContent>
				<BottomTextTile>사회문제를 해결하는 상품개발 기획서</BottomTextTile>
				{prevSelect && (
					<>
						<LeftTitle>
							{sessionStorage.getItem("user")}님이 선택한 사회문제의 주제는
							<span style={{ fontWeight: "bold" }}>
								&nbsp;{prevSelect.selectTabContent.name}&nbsp;
							</span>
							입니다.
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
				<div
					style={{
						// background: "red",
						widht: "80vw",
						height: "7vh",
						marginTop: "3vh",
						marginBottom: "3vh",
					}}
				>
					<ButtonSecondary
						text='다른 사회문제 선택하기'
						style={{ width: "80vw", height: "7vh", marginLeft: "10vw" }}
					/>
				</div>
				<Tabs>
					<Tab1
						confirm={confirm}
						selectTab={selectTab}
						onClick={() => clickFunctionList.selectedTabFunction("social")}
					>
						<Text>사회문제 분석</Text>
					</Tab1>
					<Tab2
						confirm={confirm}
						selectTab={selectTab}
						onClick={() => clickFunctionList.selectedTabFunction("reason")}
					>
						<Text>상품개발 이유</Text>
					</Tab2>
					<Tab3
						confirm={confirm}
						selectTab={selectTab}
						onClick={() => clickFunctionList.selectedTabFunction("developer")}
					>
						<Text>미래인재 역할</Text>
					</Tab3>
					<Tab4
						confirm={confirm}
						selectTab={selectTab}
						onClick={() => clickFunctionList.selectedTabFunction("itemIntro")}
					>
						<Text>상품 소개</Text>
					</Tab4>
				</Tabs>
				{/* 변경 자리 */}
				{selectTab === "social" ? (
					<SocialProblemMobile
						socialProblem={socialProblem}
						texts={texts}
						prevSelect={prevSelect}
						clickFunctionList={clickFunctionList}
					/>
				) : selectTab === "reason" ? (
					<ReasonDevelopProductMobile
						firstTxtArea={firstTxtArea}
						secondTxtArea={secondTxtArea}
						thirdTxtArea={thirdTxtArea}
						fourthTxtArea={fourthTxtArea}
						clickFunctionList={clickFunctionList}
					/>
				) : selectTab === "developer" ? (
					<ProductDeveloperMobile
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
					<ItemIntroductionMobile
						itemItro1={itemItro1}
						itemItro2={itemItro2}
						itemItro3={itemItro3}
						itemItro4={itemItro4}
						clickFunctionList={clickFunctionList}
					/>
				)}
			</BottomContent>
			<JobsBtn src={btnJobs} alt='직업버튼' onClick={modalFunction.openModal} />
			{loading && (
				<ModalWrapper>
					<ModalAreaSave>
						<ClipLoader color={"#ffc300"} style={{ margin: "0 auto" }} />
					</ModalAreaSave>
				</ModalWrapper>
			)}
			{/* 잡카드 모달 */}
			{isOpen && (
				<ModalWrapper>
					<ModalArea>
						<HelpModalMobile modalFunction={modalFunction} />
					</ModalArea>
				</ModalWrapper>
			)}
			{/* 임시저장 모달 */}
			{modalState.saveModalOpen && (
				<ModalWrapperSave>
					<ModalAreaSave>
						<ModalBaseTwoBtn
							header='임시 저장 하기'
							content='지금까 입력한 정보가 저장 됩니다.'
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
						<ClipLoader color={"#ffc300"} style={{ margin: "0 auto" }} />
					</ModalAreaSave>
				</ModalWrapper>
			)}
		</Wrapper>
	);
};

const Wrapper = styled.div`
	width: 100vw;
	overflow-x: hidden;
	overflow-y: auto;
`;
const ProcessArea = styled.div`
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
	opacity: 0.2;
	background: #0f0f15;
`;
const MiddleBar = styled.div`
	width: 6px;
	height: 1px;
	opacity: 0.2;
	background: #0f0f15;
`;
const TopContent = styled.div`
	background: #e4e4e4;
`;
const TextDivTop = styled.div`
	font-family: NotoSansCJKkr;
	font-size: 14px;
	font-weight: 500;
	line-height: 14px;
	text-align: center;
	color: #0f0f15;
	width: 165px;
	height: 15px;
	margin: auto;
	padding-top: 14px;
`;
const TextDivMiddle = styled.div`
	font-family: NotoSansCJKkr;
	font-size: 26px;
	font-weight: 500;
	line-height: 40px;
	color: #0f0f15;
	width: 80vw;
	margin: auto;
	margin-top: 20px;
`;
const TextDivBottom = styled.div`
	font-family: NotoSansCJKkr;
	font-size: 14px;
	line-height: 1.57;
	color: #0f0f15;
	width: 80vw;
	margin: auto;
	margin-top: 20px;
	text-align: justify;
	padding-bottom: 30px;
`;
const BottomContent = styled.div`
	background: #f4f5f6;
	position: relative;
	padding-top: 30px;
	padding-bottom: 8vh;
`;
const BottomTextTile = styled.div`
	font-family: NotoSansCJKkr;
	font-size: 18px;
	font-weight: 500;
	line-height: 1.33;
	color: #0f0f15;
	width: 80vw;
	margin: auto;
	margin-bottom: 3vh;
`;
const LeftTitle = styled.div`
	width: 90vw;
	height: 48px;
	font-family: NotoSansCJKkr;
	font-size: 14px;
	font-weight: 500;
	font-stretch: normal;
	font-style: normal;
	line-height: 1.33;
	letter-spacing: normal;
	color: #0f0f15;
	text-align: justify;
	margin-left: 5vw;
`;
const LeftImage = styled.img`
	width: 80vw;
	margin-left: 10vw;
`;
const Tabs = styled.div`
	margin-left: 10vw;
	margin-bottom: 16px;
`;
const Text = styled.div`
	box-sizing: border-box;
	font-size: 14px;
	font-weight: 500;
	line-height: 6vh;
	border-radius: 2px;
	opacity: 0.8;
`;
// social
const Tab1 = styled.div`
	width: 80vw;
	height: 6vh;
	background-color: #0f0f15;
	color: #ffffff;
	opacity: ${(props) => props.confirm.social === "ok" && "0.8"};
	text-align: center;
	/* line-height: 5vh; */
	&:hover {
		cursor: pointer;
		opacity: 0.7;
	}
`;
//reason
const Tab2 = styled.div`
	width: 80vw;
	height: 6vh;
	background-color: ${(props) =>
		props.confirm.social === "ok" ? "#0f0f15" : "#ffffff"};
	color: ${(props) => (props.confirm.social === "ok" ? "#ffffff" : "#686868")};
	opacity: ${(props) =>
		props.confirm.social === "ok" && props.confirm.reason === "ok" ? "0.8" : "1"};
	text-align: center;
	line-height: 53px;
	&:hover {
		cursor: pointer;
		opacity: 0.7;
	}
`;
// developer
const Tab3 = styled.div`
	width: 80vw;
	height: 6vh;
	background-color: ${(props) =>
		props.confirm.reason === "ok" ? "#0f0f15" : "#ffffff"};
	color: ${(props) => (props.confirm.reason === "ok" ? "#ffffff" : "#686868")};
	opacity: ${(props) =>
		props.confirm.reason === "ok" && props.confirm.developer === "ok"
			? "0.8"
			: "1"};
	text-align: center;
	line-height: 53px;
	&:hover {
		cursor: pointer;
		opacity: 0.7;
	}
`;
const Tab4 = styled.div`
	width: 80vw;
	height: 6vh;
	background-color: ${(props) =>
		props.confirm.developer === "ok" ? "#0f0f15" : "#ffffff"};
	color: ${(props) =>
		props.confirm.developer === "ok" ? "#ffffff" : "#686868"};
	text-align: center;
	line-height: 53px;
	&:hover {
		cursor: pointer;
		opacity: 0.7;
	}
`;
const ModalWrapper = styled.div`
	width: 100vw;
	height: 100vh;
	background: rgba(15, 15, 21, 0.8);
	position: fixed;
	top: 0;
	z-index: 60;
	display: flex;
`;
const ModalAreaPrice = styled.div`
	/* width: 80vw;
	height: 304px; */
	margin: auto;
	/* margin-top: 30vh; */
`;
const ModalCompleteArea = styled.div`
	/* width: 70vw;
	height: 486px;
	margin-top: 10vh; */
	margin: auto;
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
const ModalArea = styled.div`
	/* background: red; */
	background: #ffffff;
	width: 72vw;
	height: 56vh;
	border-radius: 5px;
	box-shadow: 0 0 10px 0 rgba(15, 15, 21, 0.05);
	margin: 0 auto;
	margin-top: 15vh;
	padding: 2vh 4vw;
	position: relative;
`;
const JobsBtn = styled.img`
	width: 13vw;
	height: 13vh;
	position: fixed;
	bottom: 7vh;
	right: 3.5vw;
	filter: drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.2));
	&:hover {
		cursor: pointer;
	}
`;
export default Mission4MobilePresenter;
