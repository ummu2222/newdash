import React from 'react';
import StudentOfMonth from '../Cards/StudentOfMonth';
import Calender from '../Cards/Calender';
import ScreenTime from '../Cards/ScreenTime';
import MyEmotion from '../Cards/MyEmotion';
import Thought from '../Cards/Thought';

const Content = () =>{

    return (
        <>
        <div className="fluid-container" >
            <div className="row" >
                <div className="col-5">
                    <MyEmotion />
                </div>
                <div className="col-3">
                    <StudentOfMonth />
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

export default Content;