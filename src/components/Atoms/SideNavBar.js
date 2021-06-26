import React, { useState } from "react";
import "./SideNavBar.css";
import Icon from "./Icon/Icon";
import { Link } from "react-router-dom";

const SideNavBar = () => {
	// Active logic
	const route = window.location.pathname.split("/")[1];

	let index;

	switch (route) {
		case "":
			index = 0;
			break;
		case "reports":
			index = 1;
			break;

		case "subjects":
			index = 2;
			break;

		case "students":
			index = 3;
			break;
		case "rooms":
			index = 4;
			break;
		case "motivation":
			index = 5;
			break;
		case "settings":
			index = 6;
			break;
		default:
	}

	const array = [false, false, false, false, false, false, false];
	array[index] = true;

	const [active, setActive] = useState(array);
	const isActive = (index) => {
		const updatedArray = [false, false, false, false, false, false, false];
		updatedArray[index] = true;
		setActive(updatedArray);
		// backgroundColor: "#eacc64",
		// fontWeight: "bold",
	};

	const ulStyle = { listStyle: "none", paddingLeft: "0px" };
	const liStyle = (index) => {
		return {
			padding: "8px",
			textAlign: "center",
			fontSize: "10px",
			backgroundColor: active[index] && "#eacc64",
			fontWeight: active[index] && "bold",
			transition: "0.3s,backgroundColor 0.3s ease-in-out",
		};
	};
	const linkStyle = { textDecoration: "none", color: "#545454" };

	const spanStyle = { display: "block", marginTop: "5px" };

	return (
		<nav className='custom-nav'>
			<ul style={ulStyle}>
				<li
					style={liStyle(0)}
					className={active[0] ? "active" : " "}
					onClick={() => isActive(0)}>
					<Link to='/' style={linkStyle}>
						<Icon name='Dashboard' />
						<span style={spanStyle}>Dashboard</span>
					</Link>
				</li>
				<li
					style={liStyle(1)}
					className={active[1] ? "active" : " "}
					onClick={() => isActive(1)}>
					<Link to='/reports' style={linkStyle}>
						<Icon name='Reports' />
						<span>Reports</span>
					</Link>
				</li>
				<li
					style={liStyle(2)}
					className={active[2] ? "active" : " "}
					onClick={() => isActive(2)}>
					<Link to='/subjects' style={linkStyle}>
						<Icon name='Subjects' />
						<span>Subjects</span>
					</Link>
				</li>
				<li
					style={liStyle(3)}
					className={active[3] ? "active" : " "}
					onClick={() => isActive(3)}>
					<Link to='/students' style={linkStyle}>
						<Icon name='Students' />
						<span>Students</span>
					</Link>
				</li>
				<li
					style={liStyle(4)}
					className={active[4] ? "active" : " "}
					onClick={() => isActive(4)}>
					<Link to='/rooms' style={linkStyle}>
						<Icon name='Rooms' />
						<span>Rooms</span>
					</Link>
				</li>
				<li
					style={liStyle(5)}
					className={active[5] ? "active" : " "}
					onClick={() => isActive(5)}>
					<Link to='/motivation' style={linkStyle}>
						<Icon name='Motivation' />
						<span>Motivation</span>
					</Link>
				</li>
				<li
					style={liStyle(6)}
					className={active[6] ? "active" : " "}
					onClick={() => isActive(6)}>
					<Link to='/settings' style={linkStyle}>
						<Icon name='Settings' />
						<span>Settings</span>
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default SideNavBar;
