import React from "react";
import Navbar from "../Atoms/Navbar";
import StudentContent from "../Content/StudentContent";
import SideNavBar from "../Atoms/SideNavBar";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const StudentDashboard = () => {
	return (
		<Router>
			<div>
				<div className='row'>
					<Navbar />
				</div>
				<div>
					<div
						style={{
							display: "inline-block",
							marginRight: "20px",
						}}>
						<SideNavBar />
					</div>

					<div style={{ display: "inline-block", width: "92%" }}>
						<Switch>
							<Route exact path='/'>
								<StudentContent />
							</Route>
							<Route exact path='/subjects'></Route>
							<Route exact path='/guide'></Route>
							<Route exxact path='/rooms'></Route>
							<Route exact path='/teachers'></Route>
							<Route exact path='/motivation'></Route>
							<Route exact path='/settings'></Route>
						</Switch>
						;
					</div>
				</div>
			</div>
		</Router>
	);
};

export default StudentDashboard;
