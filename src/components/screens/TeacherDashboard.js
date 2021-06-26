import React from "react";

import Navbar from "../Atoms/Navbar";
import SideNavBar from "../Atoms/SideNavBar";

import TeacherContent from "../Content/TeacherContent";
import ReportContent from "../Content/ReportContent";
import DummyContent from "../Content/DummyContent";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const TeacherDashboard = () => {
	return (
		<Router>
			<div>
				<div
					className='container-fluid'
					style={{ paddingRight: "0px", paddingLeft: "0px" }}>
					<Navbar />
				</div>

				<div
					style={{
						display: "inline-block",
						width: "75px",
						height: "93vh",
						marginRight: "20px",
						backgroundColor: "#e4e4e2",
					}}>
					<SideNavBar />
				</div>

				<div style={{ display: "inline-block", width: "92%" }}>
					<Switch>
						<Route exact path='/'>
							<TeacherContent />
						</Route>
						<Route exact path='/reports'>
							<ReportContent />
						</Route>
						<Route exact path='/subjects'>
							<DummyContent name='subjects' />
						</Route>
						<Route exact path='/students'>
							<DummyContent name='students' />
						</Route>
						<Route exact path='/rooms'>
							<DummyContent name='rooms' />
						</Route>
						<Route exact path='/motivation'>
							<DummyContent name='motivation' />
						</Route>
						<Route exact path='/settings'>
							<DummyContent name='settings' />
						</Route>
					</Switch>
				</div>
			</div>
		</Router>
	);
};

export default TeacherDashboard;
