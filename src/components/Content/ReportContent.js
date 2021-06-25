import React from 'react';

import UnderstandingAndAttension from '../Cards/TeachersReport/UnderstandingAndAttention';
import ScreenTime from '../Cards/TeachersReport/ScreenTime';
import MyEmotion from '../Cards/TeachersReport/MyEmotion';
import SpeechSpeed from '../Cards/TeachersReport/SpeechGraph'; 
import DialogueGraph from '../Cards/TeachersReport/DialogueGraph';


const ReportContent = () =>{
    return(
        <>
        <div className="fluid-container" >
            <div className="row" >
                <div className="col-8">
                    <MyEmotion />
                </div>
                <div className="col-4">
                    <UnderstandingAndAttension />
                </div>
            </div>
        </div>
        <div className="fluid-container" >
            <div className="row" >
                <div className="col-6">
                    <SpeechSpeed />
                </div>
                <div className="col-2">
                    <ScreenTime />
                </div>
                <div className="col-4">
                    <DialogueGraph />
                </div>
            </div>
        </div>
        </>
    );
} 


export default ReportContent;