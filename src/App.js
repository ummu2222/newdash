import React from "react";
import Loader from "./components/screens/Loader";
import "./App.css";
import StudentDashboard from "./components/screens/StudentDashboard";
import TeacherDashboard from "./components/screens/TeacherDashboard";

const App = () => {
	return (
		<>
			<TeacherDashboard />
			{/* <StudentDashboard /> */}
		</>
	);
};

export default App;
