import polar from "../assets/img/img-mission-4-polarbear@2x.png";
import disaster from "../assets/img/img-mission-4-disaster@2x.png";
import senior from "../assets/img/img-mission-4-senior@2x.png";

const MediaSecretCodeAnswer = {
	openingMedia: "https://youtu.be/F9SwDvsn6lE",
	code: "아그작교실",
	endingMedia: "https://youtu.be/VrFGrKIzpmI",
};

// missionOne 과 missionTwo 는 Mission1Container 와 Mission2Container 에 따로 설정 되어있음

const missionOneMedia = [
	{ prev: "1번 영상 문제 풀기 전", next: "1번 영상 문제 푼 이후" },
	{ prev: "2번 영상 문제 풀기 전", next: "2번 영상 문제 푼 이후" },
	{ prev: "3번 영상 문제 풀기 전", next: "3번 영상 문제 푼 이후" },
	{ prev: "4번 영상 문제 풀기 전", next: "4번 영상 문제 푼 이후" },
	{ prev: "5번 영상 문제 풀기 전", next: "5번 영상 문제 푼 이후" },
	{ prev: "6번 영상 문제 풀기 전", next: "6번 영상 문제 푼 이후" },
	{ prev: "7번 영상 문제 풀기 전", next: "7번 영상 문제 푼 이후" },
	{ prev: "8번 영상 문제 풀기 전", next: "8번 영상 문제 푼 이후" },
	{ prev: "9번 영상 문제 풀기 전", next: "9번 영상 문제 푼 이후" },
	{ prev: "10번 영상 문제 풀기 전", next: "10번 영상 문제 푼 이후" },
	{ prev: "11번 영상 문제 풀기 전", next: "11번 영상 문제 푼 이후" },
	{ prev: "12번 영상 문제 풀기 전", next: "12번 영상 문제 푼 이후" },
	{ prev: "13번 영상 문제 풀기 전", next: "13번 영상 문제 푼 이후" },
	{ prev: "14번 영상 문제 풀기 전", next: "14번 영상 문제 푼 이후" },
	{ prev: "15번 영상 문제 풀기 전", next: "15번 영상 문제 푼 이후" },
	{ prev: "16번 영상 문제 풀기 전", next: "16번 영상 문제 푼 이후" },
];

const missionThreeQandA = [
	{
		category: "tab1",
		name: "기후변화와 환경",
		video: "기후변화 영상",
		answer: [
			"녹아내리는 빙하",
			"사라지는 섬",
			"이산화탄소 발생증가",
			"이상기후",
			"수질오염",
			"쓰레기증가",
		],
	},
	{
		category: "tab2",
		name: "고령화 사회",
		video: "고령 영상",
		answer: [
			"독거노인 증가",
			"고독사 증가",
			"출생률 감소",
			"사라지는 도시",
			"낮아지는 국가성장율",
			"노동력 상실",
		],
	},
	{
		category: "tab3",
		name: "재난과 안전",
		video: "재난 영상",
		answer: [
			"교통사고",
			"전염병",
			"범죄발생 증가",
			"아동 실종",
			"음주 운전",
			"자연재해",
		],
	},
];

const missionFourImage = [
	{ name: "기후변화와 환경", imgUrl: polar },
	{ name: "재난과 안전", imgUrl: disaster },
	{ name: "고령화 사회", imgUrl: senior },
];

export {
	MediaSecretCodeAnswer,
	missionOneMedia,
	missionThreeQandA,
	missionFourImage,
};
