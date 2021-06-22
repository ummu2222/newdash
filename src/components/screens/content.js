import React from 'react';
import StudentOfMonth from '../Cards/StudentOfMonth';
import SpeechGraph from '../Cards/SpeechGraph';
import DialogueGraph from '../Cards/DialogueGraph';
const Content = () =>{

    return (
        <div className="fluid-container" >
            <div className="row" >
                <div className="col-6"></div>
                <div className="col-2">
                    <StudentOfMonth />
                </div>
                <div className="col-4"></div>
            </div>
            <div className="row">
                <div className="col-5"><SpeechGraph/></div>
                <div className="col-3"></div>
                <div className="col-4"><DialogueGraph/></div>
            </div>

        </div>

    );
}

export default Content;