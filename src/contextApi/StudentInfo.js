import React, { createContext, useState } from "react";

const StudentInfoContext = createContext({
	studentState: {
		studentId: "",
	},
	studentActions: {
		setStudentId: () => {},
	},
});

const StudentInfoProvider = ({ children }) => {
	const [studentId, setStudentId] = useState("");
	const value = {
		studentState: { studentId },
		studentActions: { setStudentId },
	};
	return (
		<StudentInfoContext.Provider value={value}>
			{children}
		</StudentInfoContext.Provider>
	);
};

const { Consumer: StudentInfoConsumer } = StudentInfoContext;

export { StudentInfoProvider, StudentInfoConsumer };

export default StudentInfoContext;
