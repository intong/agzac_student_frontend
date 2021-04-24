import React, { useState } from "react";
import { Student } from "../../api/api";
import LoginPresenter from "./LoginPresenter";
import LoginMobilePresenter from "./mobileVersion/LoginMobilePresenter";
import LoginMobileInputPresenter from "./mobileVersion/LoginMobileInputPresenter";

const LoginContainer = () => {
	const [isOpenModal, setIsOpenModal] = useState(); // 비밀번호 없을 시 (비밀번호생성)
	const [inputPasswordModal, setInputPasswordModal] = useState(); // 비밀번호 이미 있을시 (있는 비밀번호로 로그인)
	const [loginErrorModal, setLoginErrorModal] = useState();
	const [connectCode, setConnectCode] = useState();
	const [schoolName, setSchoolName] = useState();
	const [studentName, setStudentName] = useState();
	const [studentId, setStudentId] = useState(); // 학교 및 이름 정보 입력 후 result.data.studentId
	const [password, setPassword] = useState();
	const [dimension] = useState({
		width: window.innerWidth,
		height: window.innerHeight,
	});

	// 모바일 state
	const [startAgzac, setStartAgzac] = useState(); // 아그작시작하기 (로그인페이지이동 state)

	const modalFunction = {
		// 비밀번호 없을 시, 비밀번호 생성모달
		toggleModal: () => {
			setIsOpenModal(!isOpenModal);
		},
		// 비밀번호 있을 시, 비밀번호 입력모달
		toggleInputPasswordModal: () => {
			setInputPasswordModal(!inputPasswordModal);
		},
		// 로그인 입력값 validation 오류 시 error 모달
		toggleErrorModal: () => {
			setLoginErrorModal(!loginErrorModal);
		},
		errorModalConfirmBtn: () => {
			// modalFunction.toggleInputPasswordModal();
			modalFunction.toggleErrorModal();
		},
	};

	const loginFunction = {
		onChangeConnectCode: (e) => {
			setConnectCode(e.target.value);
		},
		onChangeSchoolName: (e) => {
			setSchoolName(e.target.value + "학교");
		},
		onChangeStudentName: (e) => {
			setStudentName(e.target.value);
		},
		submitStudent: async () => {
			const grade = document.getElementById("grade").getAttribute("value");
			const studentClass = document
				.getElementById("studentClass")
				.getAttribute("value");
			const studentNo = document.getElementById("studentNo").getAttribute("value");
			if (
				grade &&
				studentClass &&
				studentNo !== null &&
				studentName &&
				schoolName &&
				connectCode !== undefined
			) {
				const result = await Student.loginStudent(
					connectCode,
					grade,
					studentClass,
					studentNo,
					studentName,
					schoolName
				);
				if (result.data.ok === true && result.data.status === "비밀번호 있음") {
					modalFunction.toggleInputPasswordModal();
					setStudentId(result.data.studentId);
					console.log(result);
					sessionStorage.setItem(
						"missionOne",
						JSON.stringify(result.data.missionOneQandA)
					);
					sessionStorage.setItem(
						"missionTwo",
						JSON.stringify(result.data.missionTwoQandA)
					);
				} else if (
					result.data.ok === true &&
					result.data.status === "비밀번호 없음"
				) {
					modalFunction.toggleModal();
					setStudentId(result.data.studentId);
					sessionStorage.setItem(
						"missionOne",
						JSON.stringify(result.data.missionOneQandA)
					);
					sessionStorage.setItem(
						"missionTwo",
						JSON.stringify(result.data.missionTwoQandA)
					);
				} else {
					setLoginErrorModal(!loginErrorModal);
				}
			} else {
				setLoginErrorModal(!loginErrorModal);
			}
		},
		onChangePassword: (e) => {
			setPassword(e.target.value);
		},
		inputPassword: async () => {
			const result2 = await Student.checkPassword(studentId, password);
			if (result2.data.ok) {
				sessionStorage.setItem("auth", result2.data.token);
				sessionStorage.setItem("user", studentName);
				modalFunction.toggleInputPasswordModal();
				window.location.href = "/";
			} else {
				modalFunction.toggleInputPasswordModal();
				modalFunction.toggleErrorModal();
			}
		},
		createPassword: async () => {
			// 최초접속 && 임시저장데이터 없음
			const result3 = await Student.createPassword(studentId, password);
			if (result3.data.ok) {
				sessionStorage.setItem("auth", result3.data.token);
				sessionStorage.setItem("user", studentName);
				modalFunction.toggleModal();
				window.location.href = "/";
			}
		},
	};

	const MobileFunctionList = {
		startAgzacBtn: () => {
			setStartAgzac(!startAgzac);
		},
		closeLoginMobileInputPage: () => {
			setStartAgzac(!startAgzac);
		},
	};

	return (
		<>
			{dimension.width < 415 ? (
				startAgzac ? (
					<LoginMobileInputPresenter
						isOpenModal={isOpenModal}
						inputPasswordModal={inputPasswordModal}
						loginErrorModal={loginErrorModal}
						modalFunction={modalFunction}
						loginFunction={loginFunction}
						MobileFunctionList={MobileFunctionList}
					/>
				) : (
					<LoginMobilePresenter MobileFunctionList={MobileFunctionList} />
				)
			) : (
				<LoginPresenter
					isOpenModal={isOpenModal}
					inputPasswordModal={inputPasswordModal}
					loginErrorModal={loginErrorModal}
					modalFunction={modalFunction}
					loginFunction={loginFunction}
				/>
			)}
		</>
	);
};

export default LoginContainer;
