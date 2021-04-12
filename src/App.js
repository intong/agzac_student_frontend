import React from "react";
import { BrowserRouter } from "react-router-dom";
import Auth from "./router/Auth";
import { ProcessProvider } from "./contextApi/Process";
import { TempSaveProvider } from "./contextApi/TempSave";
import { MissionQandAProvider } from "./contextApi/MissionQandA";

function App() {
	return (
		<ProcessProvider>
			<TempSaveProvider>
				<MissionQandAProvider>
					<BrowserRouter>
						<Auth />
					</BrowserRouter>
				</MissionQandAProvider>
			</TempSaveProvider>
		</ProcessProvider>
	);
}

export default App;
