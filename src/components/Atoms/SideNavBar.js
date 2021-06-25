import React from "react";
import Icon from "./Icon/Icon";
import { Link } from "react-router-dom";

const SideNavBar = () => {
	return (
		<div className='contianer-fluid' style={{ backgroundColor: "#e5e5e2" }}>
			<div className='row mt-1'>
				<nav>
					<ul className='nav nav-tab text-center'>
						<li className='nav-item mt-3 active'>
							<Icon name='Dashboard' />
							Dashboard
						</li>
						<li className='nav-item mt-3'>
							<Icon name='Subjects' />
							Subjects
						</li>
						<li className='nav-item mt-3'>
							<Icon name='Guide' />
							Guide
						</li>
						<li className='nav-item mt-3'>
							<Icon name='Rooms' />
							Room
						</li>
						<li className='nav-item mt-3'>
							<Icon name='Teachers' />
							Teachers
						</li>
						<li className='nav-item mt-3'>
							<Icon name='Motivation' />
							Motivation
						</li>
						<li className='nav-item mt-3'>
							<Icon name='Settings' />
							Settings
						</li>
					</ul>
				</nav>
			</div>
		</div>
	);
};

export default SideNavBar;
