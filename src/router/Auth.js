import React, { useEffect, useState } from "react";
import { Route, Redirect } from "react-router-dom";
import LoginContainer from "../component/login/LoginContainer";
import Layout from "../layout/Layout";

const Auth = () => {
	const [token, setToken] = useState(null);

	useEffect(() => {
		// console.log(token);
		const settingToken = () => {
			setToken(sessionStorage.getItem("auth"));
		};
		settingToken();
	}, []);
	return (
		<>
			{token !== null ? (
				<>
					<Route path='/' component={Layout} />
					<Redirect to='/mainVideo' />
				</>
			) : (
				<>
					<Route exact path='/' component={LoginContainer} />
				</>
			)}
		</>
	);
};

export default Auth;
