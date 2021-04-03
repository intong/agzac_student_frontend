import React from "react";
import { BrowserRouter } from "react-router-dom";
import Auth from "./router/Auth";
import { ProcessProvider } from "./contextApi/Process";
import { TempSaveProvider } from "./contextApi/TempSave";

function App() {
	return (
		<ProcessProvider>
			<TempSaveProvider>
				<BrowserRouter>
					<Auth />
				</BrowserRouter>
			</TempSaveProvider>
		</ProcessProvider>
	);
}

export default App;
