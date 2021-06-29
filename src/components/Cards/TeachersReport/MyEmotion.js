import React from 'react';
import MyClassEmotion from '../../Atoms/Charts/MyClassEmotionChart';
import ICONS from '../../Atoms/Icon/Icons';



const MyEmotion = () =>{

    const myEmotionList = [
        { 
            emotion: 'Anger',
            icon: ICONS.anger
        }, 
        { 
            emotion: 'Fear',
            icon: ICONS.fear
        }, 
        { 
            emotion: 'Happiness',
            icon: ICONS.happiness
        }, 
        { 
            emotion: 'Neutral',
            icon: ICONS.neutral
        },    
        { 
            emotion: 'Repulsive',
            icon: ICONS.repulsive
        }, 
        { 
            emotion: 'Sadness',
            icon: ICONS.sadness
        }, 
        { 
            emotion: 'Surprise',
            icon: ICONS.surprise
        }, 
    ]

    return (
        <div className="card"  style={{marginTop:'10px',width:'450px',border:'1px solid white'}} >
            <div className="card-body" style = {{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                <h6 className="c-heading">My Emotion</h6>
                <div>
                    <nav aria-label="Page navigation example"> 
                        <ul className="pagination"> 
                            <li className="page-item active">
                                <a className="page-link" >Average</a>
                            </li> 
                            <li className="page-item">
                                <a className="page-link" >Detail</a>
                            </li> 
                        </ul> 
                    </nav>
                </div>
            </div>
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', marginTop: -30}}>
                <div class="dropdown card-body" style={{display: 'flex', flexDirection: 'row', justifyContent: 'flex-end'}}>
                    <button type="button" class="btn subjectButton" type="button">
                        Subjects
                    </button>
                    <button type="button" class="btn subjectButtonDrop dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                        <span class="visually-hidden">Toggle Dropdown</span>
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="subjectDropdown">
                        <li><a class="dropdown-item">Subject 1</a></li>
                        <li><a class="dropdown-item">Subject 2</a></li>
                        <li><a class="dropdown-item">Subject 3</a></li>
                    </ul>
                </div>
            </div>
            
            <div style = {{display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: -70}}>
                <div>
                    <MyClassEmotion />
                </div>
                <div style = {{justifyContent: 'center'}}>
                    {myEmotionList.map((emotion) => {
                        return (
                            <div style = {{marging: 5, display: 'flex', flexDirection: 'row', padding: 5, alignItems: 'center'}}>
                                <div style = {{marging: 5, paddingLeft: 5}}>
                                    <img src = {emotion.icon} height = '30' width = '30'/>
                                </div>
                                <div style = {{marging: 5, paddingLeft: 10, fontFamily: 'Montserrat', fontSize: '14px', fontStyle: 'normal', fontWeight: '400', lineHeight: '17px', letterSpacing: '0em', textAlign: 'left',}}>
                                    {emotion.emotion}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default MyEmotion;