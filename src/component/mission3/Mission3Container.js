import React, { useState } from "react";
import Mission3Presenter from "./Mission3Presenter";

const Mission3Container = () => {
	const [selectTab, setSelectTab] = useState();
	const [choosed, setChoosed] = useState(false);
	const [firstAnswer, setFirstAnswer] = useState();
	const [secondAnswer, setSecondAnswer] = useState();
	const [thirdAnswer, setThirdAnswer] = useState();
	const [aa, setAa] = useState();
	const [bb, setBb] = useState();
	const [cc, setCc] = useState();

	const uiFunctionList = {
		tabSelectFunction: (tab) => {
			setSelectTab(tab);
		},
		clickFinalChoice: () => {
			if (selectTab !== undefined) {
				setChoosed(!choosed);
			} else {
				alert("사회문제를 먼저 선택하세요");
			}
		},
		checkAnswer: () => {
			const correct = {
				first: "드론개발자",
				second: "드론",
				third: "개발자",
			};
			console.log("aa", aa);
			console.log("bb", bb);
			console.log("cc", cc);

			if (aa === correct.first) {
				setFirstAnswer(true);
			} else {
				setFirstAnswer(false);
			}

			if (bb === correct.second) {
				setSecondAnswer(true);
			} else {
				setSecondAnswer(false);
			}

			if (cc === correct.third) {
				setThirdAnswer(true);
			} else {
				setThirdAnswer(false);
			}
		},
		onChange: (e) => {
			const name = e.target.name;
			const value = e.target.value;
			console.log("name", name);
			if (name === "first") {
				setAa(value);
			} else if (name === "second") {
				setBb(value);
			} else {
				setCc(value);
			}
			if (firstAnswer === false) {
				setAa();
			}
			if (secondAnswer === false) {
				setBb();
			}
			if (thirdAnswer === false) {
				setCc();
			}
		},
	};

	return (
		<>
			<Mission3Presenter
				selectTab={selectTab}
				choosed={choosed}
				firstAnswer={firstAnswer}
				secondAnswer={secondAnswer}
				thirdAnswer={thirdAnswer}
				aa={aa}
				bb={bb}
				cc={cc}
				uiFunctionList={uiFunctionList}
			/>
		</>
	);
};

export default Mission3Container;
