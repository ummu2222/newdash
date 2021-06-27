import React from 'react';
import Video from '../../Atoms/Video';
import MyEmotion from './MyEmotion';

const PeakPoint = () =>{
    return (
        <div className="card"  style={{marginTop:'10px'}} >
        <div className="card-body"  >
            <div className="fluid-container" style={{display:'flex',width:'200px'}} >
                <div >
                  <MyEmotion />
                </div>
                <div className="seperator" ></div>
                <div style={{marginLeft:'50px',marginTop:'20px'}} >
                <h6 className="c-heading" >Peak Points</h6>
                <Video />
                <p className="video-text">“... tomorrow we will have our first test, start studying ...”</p>
                </div>

            </div>
            
        </div>
    </div>
    );
}

export default PeakPoint;

