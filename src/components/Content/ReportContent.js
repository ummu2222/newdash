import React from 'react';
import UnderstandingAndAttension from '../Cards/TeachersReport/UnderstandingAndAttention';
import ScreenTime from '../Cards/TeachersReport/ScreenTime';
import PeakPoint from '../Cards/TeachersReport/PeakPoint';
import SpeechSpeed from '../Cards/TeachersReport/SpeechGraph'; 
import DialogueGraph from '../Cards/TeachersReport/DialogueGraph';
import SearchBar from '../Cards/TeachersReport/SearchBar';


const ReportContent = () =>{
    return(
        <>
        <div className="fluid-container" >
        <div className="row">
                <div className="col">
                    <SearchBar />
                </div>
            </div>
            <div className="row" >
                <div className="col-8">
                    <PeakPoint />
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