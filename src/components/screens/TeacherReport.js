import React from 'react';
import Navbar from '../Atoms/Navbar';

import SideNavBar from "../Atoms/SideNavBar";

const Dashboard = () => {
	return (
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
					
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
