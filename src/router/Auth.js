import React, { useState } from "react";
import { Route, Redirect } from "react-router-dom";
import LoginContainer from "../component/login/LoginContainer";
import Layout from "../layout/Layout";

const Auth = () => {
	const [token, setToken] = useState(true);
	return (
		<>
			{token ? (
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
