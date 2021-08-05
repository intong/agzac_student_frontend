import React from "react";
import { BrowserRouter } from "react-router-dom";
import Auth from "./router/Auth";
import { ProcessProvider } from "./contextApi/Process";
import { TempSaveProvider } from "./contextApi/TempSave";
import { MissionQandAProvider } from "./contextApi/MissionQandA";
import { ChannelTalk } from "react-channel-plugin";

function App() {
	const onTalkError = React.useCallback((err) => {
		console.error("Error", err);
	}, []);
	return (
		<>
			<ChannelTalk
				pluginKey='4ee3e7ee-40a7-4861-8227-e64fc829c3ad'
				locale='ko'
				onError={onTalkError}
			/>
			<ProcessProvider>
				<TempSaveProvider>
					<MissionQandAProvider>
						<BrowserRouter>
							<Auth />
						</BrowserRouter>
					</MissionQandAProvider>
				</TempSaveProvider>
			</ProcessProvider>
		</>
	);
}

export default App;
