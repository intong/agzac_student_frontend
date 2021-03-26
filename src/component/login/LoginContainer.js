import React, { useState } from "react";
import LoginPresenter from "./LoginPresenter";

const LoginContainer = () => {
	const [isOpenModal, setIsOpenModal] = useState(false);

	const modalFunction = {
		openModal: () => {
			setIsOpenModal(!isOpenModal);
		},
		closeModal: () => {
			setIsOpenModal(!isOpenModal);
		},
	};
	return (
		<LoginPresenter isOpenModal={isOpenModal} modalFunction={modalFunction} />
	);
};

export default LoginContainer;
