import React from "react";

import Navbar from "../Atoms/Navbar";
import SideNavBar from "../Atoms/SideNavBar";

import TeacherContent from "../Content/TeacherContent";
import ReportContent from "../Content/ReportContent";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const TeacherDashboard = () => {
	return (
		<Router>
			<div className='container-fluid'>
				<div className='row'>
					<Navbar />
				</div>
				<div className='row'>
					<div
						style={{
							display: "inline-block",
							width: "5%",
							marginRight: "20px",
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
							<Route exact path='/subjects'></Route>
							<Route exact path='/students'></Route>
							<Route exact path='/rooms'></Route>
							<Route exact path='/motivation'></Route>
							<Route exact path='/settings'></Route>
						</Switch>
					</div>
				</div>
			</div>
		</Router>
	);
};

export default TeacherDashboard;
