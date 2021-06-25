import React from 'react';
import StudentOfMonth from '../Cards/StudentDash/StudentOfMonth';
import Calender from '../Cards/StudentDash/Calender';
import ScreenTime from '../Cards/StudentDash/ScreenTime';
import MyEmotion from '../Cards/StudentDash/MyEmotion';
import Thought from '../Cards/StudentDash/Thought';

const StudentContent = () =>{

    return (
        <>
        <div className="fluid-container" >
            <div className="row" >
                <div className="col-6">
                    <MyEmotion />
                </div>
                <div className="col-2">
                    <StudentOfMonth />
                </div>
                <div className="col-4">
                    <Calender />
                </div>
            </div>
        </div>
        <div className="fluid-container" >
            <div className="row" >
                <div className="col-6">
                    <Thought />
                </div>
                <div className="col-2">
                    <ScreenTime />
                </div>
                <div className="col-4">
                </div>
            </div>
        </div>
        </>
    );
}

export default StudentContent;