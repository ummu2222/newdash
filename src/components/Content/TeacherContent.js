import React from 'react';
import StudentOfMonth from '../Cards/TeachersDash/StudentOfMonth';
import Calender from '../Cards/TeachersDash/Calender';
import ScreenTime from '../Cards/TeachersDash/ScreenTime';
import MyEmotion from '../Cards/TeachersDash/MyEmotion';
import Thought from '../Cards/TeachersDash/Thought';
import TeacherOfMonth from '../Cards/TeachersDash/TeacherOfMonth';

const TeacherContent = () =>{

    return (
        <div style={{display:'flex'}}>
        <div>
            <div className="fluid-container" >   
                <div className="row" >
                    <div className="col-7">
                        <MyEmotion />
                    </div>
                    <div className="col-5">
                        <div>
                            <StudentOfMonth />
                        </div>
                        <div>
                            <TeacherOfMonth />
                        </div>
                    </div>
                    
                </div>
            </div>
            <div className="fluid-container" >
                <div className="row" >
                    <div className="col-7">
                        <Thought />
                    </div>
                    <div className="col-5">
                        <ScreenTime />
                    </div>
                </div>
            </div>
        </div>
        <div style={{marginLeft:'20px'}}>
            <Calender />
        </div>
        </div>
    );
}

export default TeacherContent;