import React, { useState } from "react";
import "./TeacherDash.css";
import ICONS from "../../Atoms/Icon/Icons";

const days = [
	{
		day: "Mo",
		isSelected: 0,
		date: 7,
	},
	{
		day: "Tu",
		isSelected: 1,
		date: 8,
	},
	{
		day: "We",
		isSelected: 0,
		date: 9,
	},
	{
		day: "Th",
		isSelected: 0,
		date: 10,
	},
	{
		day: "Fr",
		isSelected: 0,
		date: 11,
	},
	{
		day: "Sa",
		isSelected: 0,
		date: 12,
	},
	{
		day: "Su",
		isSelected: 0,
		date: 13,
	},
];

const data = [
	{
		id: 1,
		theme: "#FC8379",
		heading: "Physics Test",
		time: "9:00 AM - 10:00 AM",
		students: [ICONS.user1, ICONS.user2, ICONS.user3, ICONS.user4],
		status: ICONS.alertRed,
	},
	{
		id: 2,
		theme: "#EACC6A",
		heading: "English Class",
		time: "11:00 AM - 12:00 AM",
		students: [ICONS.user1, ICONS.user2],
		status: ICONS.alertYellow,
	},
	{
		id: 3,
		theme: "#AFE386",
		heading: "Maths Assignment 1",
		time: "11:00 PM - 4:00 PM",
		students: [],
		status: ICONS.tick,
	},
];

const Calender = () => {
	const [list, setList] = useState(data);

	const goLeft = () => {};

	return (
		<div className='card' style={{ marginTop: "10px" }}>
			<div
				className='card-body'
				style={{
					display: "flex",
					flex: 1,
					flexDirection: "row",
					justifyContent: "space-between",
					alignItems: "center",
				}}>
				<div>
					<h6 className='card-heading'>Calender</h6>
				</div>
				<div style={{ display: "flex", flexDirection: "row" }}>
					<button
						type='button'
						class='btn subjectButton'
						type='button'>
						Daily
					</button>
					<button
						type='button'
						class='btn subjectButtonDrop dropdown-toggle dropdown-toggle-split'
						data-bs-toggle='dropdown'
						aria-expanded='false'>
						<span class='visually-hidden'>Toggle Dropdown</span>
					</button>
					<ul class='dropdown-menu' aria-labelledby='subjectDropdown'>
						<li>
							<a class='dropdown-item'>Daily</a>
						</li>
						<li>
							<a class='dropdown-item'>Weekly</a>
						</li>
						<li>
							<a class='dropdown-item'>Monthly</a>
						</li>
					</ul>
				</div>
			</div>
			<div className='card-body'>
				<div
					style={{
						display: "flex",
						flex: 1,
						flexDirection: "row",
						justifyContent: "space-between",
						alignItems: "center",
					}}>
					<div>
						<p className='calendar'>June 2021</p>
					</div>
					<div
						style={{
							display: "flex",
							flex: 1,
							flexDirection: "row",
							justifyContent: "flex-end",
							alignItems: "center",
						}}>
						<img
							style={{ height: 20 }}
							src={ICONS.arrowLeft}
							alt='Left'
						/>
						<img
							style={{ height: 20 }}
							src={ICONS.arrowRight}
							alt='Right'
						/>
					</div>
				</div>
				<div
					style={{
						display: "flex",
						flex: 1,
						flexDirection: "row",
						alignItems: "center",
					}}>
					{days.map((day) => {
						return (
							<div>
								<div className='dayBox'>
									<p className='day'>{day.day}</p>
								</div>
								<div
									className={
										day.isSelected === 0
											? "dateNotSelected"
											: "dateSelected"
									}>
									<p className='date'>{day.date}</p>
								</div>
							</div>
						);
					})}
				</div>
			</div>


			<div className='card-body'>
				<div>
					{list.map((item) => {
						return (
							<div style={{ paddingBottom: 10 }}>
								<div className='card-body itemCard' style={{ borderLeft: `4px solid ${item.theme}`}} >
									<div>
										<div
											style={{
												display: "flex",
												flexDirection: "row",
												justifyContent: "space-between",
											}}>
											<div>
												<p className='itemHeading'>
													{item.heading}
												</p>
												<p className='itemTime'>
													{item.time}
												</p>
											</div>
											<div
												style={{
													alignItems: "top",
													justifyContent: "flex-end",
												}}>
												<img
													height='40px'
													src={item.status}></img>
											</div>
										</div>
										<div
											style={{
												display: "flex",
												flex: 1,
												flexDirection: "row",
												alignItems: "center",
											}}>
											{item.students.map((student) => {
												return (
													<div>
														<img
															height='40px'
															src={student}></img>
													</div>
												);
											})}
										</div>
									</div>
								</div>
							</div>
						);
					})}
				</div>
				<div
					className='addNewBox'
					style={{
						padding: 20,
						justifyContent: "center",
						alignItems: "center",
					}}>
					<div
						style={{
							display: "flex",
							flexDirection: "row",
							justifyContent: "center",
							alignItems: "center",
						}}>
						<div>
							<img height='50px' src={ICONS.addNew}></img>
						</div>
						<div
							style={{
								alignItems: "center",
								justifyContent: "center",
							}}>
							<p
								className='addNewText'
								style={{
									alignItems: "center",
									justifyContent: "center",
									marginLeft:"4px",
									marginTop:'4px'

								}}>
								Add New
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Calender;
