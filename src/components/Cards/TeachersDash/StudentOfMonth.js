import React from 'react'


const divStyle = {
    height:'100px',
    display:'inline-flex'
    
};

const StudentOfMonth = () => {
    return (
        <div className="card" style={{ marginTop: '10px' }}>
            <div className="card-body">
                <h6 className="c-heading" >Student of the Month</h6>
                <div style={divStyle} >
                    <div>
                        <img src="./assets/student_img.svg" className="student-img-td" />
                        <img src="./assets/star.svg" className="star-td" />
                    </div>
                    <div>
                        <h6 className="student-name-td">Diksha Gupta</h6>
                        <p className="student-info-td" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a vehicula velit. Nulla interdum aliquam quam, et rutrum lacus. Nullam a mauris sodales, elementum tortor ac, consectetur lectus. </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StudentOfMonth;