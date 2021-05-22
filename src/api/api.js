import axios from "axios";

// 배포용
const api = axios.create({ baseURL: "http://54.180.105.98:4000" });
const apiToken = axios.create({
  baseURL: "http://54.180.105.98:4000",
  headers: { token: sessionStorage.getItem("auth") },
});

// 개발용
// const api = axios.create({});
// const apiToken = axios.create({
//	headers: { token: sessionStorage.getItem("auth") },
// });

export const Student = {
  loginStudent: (
    connectCode,
    grade,
    studentClass,
    studentNo,
    studentName,
    schoolName
  ) =>
    api.post("/api/schools/student/login", {
      schoolName: schoolName,
      grade: grade,
      classroom: studentClass,
      studentName: studentName,
      number: studentNo,
      code: connectCode,
    }),
  createPassword: (id, password) =>
    api.post("/api/schools/password", { id: id, password: password }),
  checkPassword: (id, password) =>
    api.post("/api/schools/check-password", { id: id, password: password }),
};

export const SaveData = {
  save: (pageId, studentInputs) =>
    apiToken.post("/api/activities/data", {
      pageId: pageId,
      studentInputs: studentInputs,
    }),
  // Student 는 토큰값을 이용해서 api 요청해야 하는데, LoginContainer에서 로그인 후 토큰을 세션에 저장하고 바로 가져오기 힘들어서 부득이 apiToken 이 아닌 api axios 로 header에 토큰을 수동으로 담아서 요청
  getTempData: (tokenData) =>
    api.get("/api/activities/data", { headers: { token: tokenData } }),
};

export const Activity = {
  loginStart: () => apiToken.patch("/api/activities/start-page-end"),
  cleanAllMissionData: () => apiToken.delete("/api/activities/data"),
  mission1EndStart: () => apiToken.patch("/api/activities/mission-one-end"),
  mission2EndStart: () => apiToken.patch("/api/activities/mission-two-end"),
  mission3EndStart: () => apiToken.patch("/api/activities/mission-three-end"),
  mission4EndStart: () => apiToken.patch("/api/activities/mission-four-end"),
};

export const DBData = {
  missionOne: (dbSaveArr) =>
    apiToken.post("/api/data/mission-one", {
      missionOneData: dbSaveArr,
    }),
  missionTwo: (dbSaveArr) =>
    apiToken.post("/api/data/mission-two", { missionTwoData: dbSaveArr }),
  missionThree: (dbSaveObj) =>
    apiToken.post("/api/data/mission-three", dbSaveObj),
  missionFour: (dbSave) => apiToken.post("/api/data/mission-four", dbSave),
  getMissionOne: () => apiToken.get("/api/data/mission-one"),
  getMissionTwo: () => apiToken.get("/api/data/mission-two"),
  getMissionThree: () => apiToken.get("/api/data/mission-three"),
  getMissionFour: () => apiToken.get("/api/data/mission-four"),
};
