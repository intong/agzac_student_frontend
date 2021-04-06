import React, { useState } from "react";
import { Student } from "../../api/api";
import LoginPresenter from "./LoginPresenter";

const LoginContainer = ({ history }) => {
	const [isOpenModal, setIsOpenModal] = useState(); // 비밀번호 없을 시 (비밀번호생성)
	const [inputPasswordModal, setInputPasswordModal] = useState(); // 비밀번호 이미 있을시 (있는 비밀번호로 로그인)
	const [loginErrorModal, setLoginErrorModal] = useState();
	const [connectCode, setConnectCode] = useState();
	const [schoolName, setSchoolName] = useState();
	const [studentName, setStudentName] = useState();
	const [studentId, setStudentId] = useState(); // 학교 및 이름 정보 입력 후 result.data.studentId
	const [password, setPassword] = useState();

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
				// console.log("grade" + grade);
				// console.log("studentClass", studentClass);
				// console.log("studentNo", studentNo);
				// console.log("studentName", studentName);
				// console.log("schoolName", schoolName);
				// console.log("connectCode", connectCode);
				const result = await Student.loginStudent(
					connectCode,
					grade,
					studentClass,
					studentNo,
					studentName,
					schoolName
				);
				// console.log(result);
				if (result.data.ok === true && result.data.status === "비밀번호 있음") {
					modalFunction.toggleInputPasswordModal();
					setStudentId(result.data.studentId);
				} else if (
					result.data.ok === true &&
					result.data.status === "비밀번호 없음"
				) {
					modalFunction.toggleModal();
					setStudentId(result.data.studentId);
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
			console.log(result2);
			sessionStorage.setItem("auth", result2.data.token);
			modalFunction.toggleInputPasswordModal();
			window.location.href = "/";
		},
		createPassword: async () => {
			const result3 = await Student.createPassword(studentId, password);
			console.log(result3);
			sessionStorage.setItem("auth", result3.data.token);
			modalFunction.toggleModal();
			window.location.href = "/";
		},
	};

	return (
		<>
			<LoginPresenter
				isOpenModal={isOpenModal}
				inputPasswordModal={inputPasswordModal}
				loginErrorModal={loginErrorModal}
				modalFunction={modalFunction}
				loginFunction={loginFunction}
			/>
		</>
	);
};

export default LoginContainer;
