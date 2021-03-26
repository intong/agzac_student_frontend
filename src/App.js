import React from "react";
import { BrowserRouter } from "react-router-dom";
import Auth from "./router/Auth";
import { ProcessProvider } from "./contextApi/Process";

function App() {
	return (
		<ProcessProvider>
			<BrowserRouter>
				<Auth />
			</BrowserRouter>
		</ProcessProvider>
	);
}

export default App;
