import React from 'react';
import StudentOfMonth from '../Cards/TeachersDash/StudentOfMonth';
import Calender from '../Cards/TeachersDash/Calender';
import ScreenTime from '../Cards/TeachersDash/ScreenTime';
import MyEmotion from '../Cards/TeachersDash/MyEmotion';
import Thought from '../Cards/TeachersDash/Thought';

const TeacherContent = () =>{

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

export default TeacherContent;