import React from 'react'

const StudentOfMonth = () => {
    return (
        <div className="card" style={{marginTop:'10px'}}>
            <div className="card-body">
                <h6 className="student-month" >Student of the Month</h6>
                <img src="./assets/student_img.svg" className="student-img" />
                <img src="./assets/star.svg" className="star" />
                <h6 className="student-name">Diksha Gupta</h6>
                <p className="student-info" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a vehicula velit. Nulla interdum aliquam quam, et rutrum lacus. Nullam a mauris sodales, elementum tortor ac, consectetur lectus. </p>
            </div>
        </div>
    );
}

export default StudentOfMonth;