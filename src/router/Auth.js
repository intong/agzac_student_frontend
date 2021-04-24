import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import LoginContainer from "../component/login/LoginContainer";
import Layout from "../layout/Layout";
import LayoutMobile from "../layout/mobileVersion/LayoutMobile";

const Auth = () => {
	const [token, setToken] = useState(null);
	const [dimension] = useState({
		width: window.innerWidth,
		height: window.innerHeight,
	});

	useEffect(() => {
		// console.log(token);x
		const settingToken = () => {
			setToken(sessionStorage.getItem("auth"));
		};
		settingToken();
	}, []);
	return (
		<>
			{token !== null ? (
				<>
					<Route
						path='/'
						component={dimension.width < 415 ? LayoutMobile : Layout}
					/>
					{/* <Redirect
						to={{
							pathname: "/mainVideo",
						}}
					/> */}
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
