import axios from "axios";

const api = axios.create({});

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
	getStudentsByClassroom: (id) =>
		api.get("/api/schools/students-classroom/1?id=1"),
};
