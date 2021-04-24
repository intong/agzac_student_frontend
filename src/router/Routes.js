import React from "react";
import { Route } from "react-router-dom";
import MainVideoContainer from "../component/mainVideo/MainVideoContainer";
import Mission1Container from "../component/mission1/Mission1Container";
import Mission2Container from "../component/mission2/Mission2Container";
import Mission3Container from "../component/mission3/Mission3Container";
import Mission4Container from "../component/mission4/Mission4Container";
import FinalReport from "../component/finalReport/FinalReportContainer";

const Routes = () => {
	return (
		<>
			{/* <Route path='/mainVideo' component={MainVideoContainer} /> */}
			<Route exact path='/' component={MainVideoContainer} />
			<Route path='/mission1/:id' component={Mission1Container} />
			<Route path='/mission2/:id' component={Mission2Container} />
			<Route path='/mission3/:id' component={Mission3Container} />
			<Route path='/mission4/:id' component={Mission4Container} />
			<Route path='/finalreport' component={FinalReport} />
		</>
	);
};

export default Routes;
