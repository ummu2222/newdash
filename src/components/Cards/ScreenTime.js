import React from 'react';
import ScreenTimeChart from '../Atoms/Charts/ScreenTimeChart'
import ReactColorSquare from "react-color-square"

const ScreenTime = () =>{
    return (
        <div className="card"  style={{marginTop:'10px'}} >
            <div className="card-body" style = {{fontFamily: 'Roboto Mono', fontSize: '24px', fontStyle: 'normal', fontWeight: '700', lineHeight: '32px', letterSpacing: '0em', textAlign: 'left',}}>
                Screen Time
            </div>
            <div style = {{display: 'flex', flexDirection: 'row', padding: 5, alignItems: 'center', justifyContent: 'space-around'}}>
                <p  style = {{fontFamily: 'Montserrat', fontSize: '12px', fontStyle: 'normal', fontWeight: '700', lineHeight: '10px', letterSpacing: '0px', textAlign: 'center',}}>7 days</p>
                <p style = {{fontFamily: 'Montserrat', fontSize: '12px', fontStyle: 'normal', fontWeight: '400', lineHeight: '10px', letterSpacing: '0px', textAlign: 'center',}}>30 days</p>
                <p  style = {{fontFamily: 'Montserrat', fontSize: '12px', fontStyle: 'normal', fontWeight: '400', lineHeight: '10px', letterSpacing: '0px', textAlign: 'center',}}>60 days</p>
            </div>
            <div>
                <ScreenTimeChart />
            </div>
            <div style = {{display: 'flex', flexDirection: 'row', padding: 5, alignItems: 'center', justifyContent: 'space-around'}}>
                <p style = {{fontFamily: 'Montserrat', fontSize: '10px', fontStyle: 'normal', fontWeight: '400', lineHeight: '14px', letterSpacing: '0px', textAlign: 'center',}}>0%</p>
                <p  style = {{fontFamily: 'Montserrat', fontSize: '12px', fontStyle: 'normal', fontWeight: '400', lineHeight: '14px', letterSpacing: '0px', textAlign: 'center',}}>Productive Time</p>
                <p style = {{fontFamily: 'Montserrat', fontSize: '10px', fontStyle: 'normal', fontWeight: '400', lineHeight: '14px', letterSpacing: '0px', textAlign: 'center',}}>100%</p>
            </div>
            <div  style = {{display: 'flex', flexDirection: 'row', padding: 5, alignItems: 'center', justifyContent: 'space-evenly'}}>
                <div style = {{display: 'flex', flexDirection: 'row'}}>
                    <div style = {{paddingRight: 5}}>
                        <ReactColorSquare width={15} height={15} color="#EACC6A" />
                    </div>
                    <div>
                        <p style = {{fontFamily: 'Montserrat', fontSize: '11px', fontStyle: 'normal', fontWeight: '400', lineHeight: '16px', letterSpacing: '0px', textAlign: 'center',}}>Productive</p>
                    </div>
                </div>
                <div style = {{display: 'flex', flexDirection: 'row'}}>
                    <div style = {{paddingRight: 5}}>
                        <ReactColorSquare width={15} height={15} color="#D9DBDB" />
                    </div>
                    <div>
                        <p style = {{fontFamily: 'Montserrat', fontSize: '11px', fontStyle: 'normal', fontWeight: '400', lineHeight: '16px', letterSpacing: '0px', textAlign: 'center',}}>Not Productive</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ScreenTime;


