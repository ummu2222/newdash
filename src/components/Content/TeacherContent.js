import React from 'react';
import StudentOfMonth from '../Cards/TeachersDash/StudentOfMonth';
import Calender from '../Cards/TeachersDash/Calender';
import ScreenTime from '../Cards/TeachersDash/ScreenTime';
import MyEmotion from '../Cards/TeachersDash/MyEmotion';
import Thought from '../Cards/TeachersDash/Thought';
import TeacherOfMonth from '../Cards/TeachersDash/TeacherOfMonth';

const TeacherContent = () =>{

    return (
        <>
        <div className="fluid-container" >
            <div className="row" >
                <div className="col-5">
                    <MyEmotion />
                </div>
                <div className="col-3">
                    <div>
                        <StudentOfMonth />
                    </div>
                    <div>
                        <TeacherOfMonth />
                    </div>
                </div>
                <div className="col-4">
                    <Calender />
                </div>
            </div>
        </div>
        <div className="fluid-container" >
            <div className="row" >
                <div className="col-5">
                    <Thought />
                </div>
                <div className="col-3">
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