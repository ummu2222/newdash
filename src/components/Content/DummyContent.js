import React from "react";

const DummyContent = (props) => {
	return (
		<div className='text-center'>
			<span className='fs-1 fw-bold'>This is {props.name} page</span>
		</div>
	);
};

export default DummyContent;
