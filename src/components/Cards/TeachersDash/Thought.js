import React from 'react';

const Thought = () =>{
    return (
        <div className="card"  style={{marginTop:'10px'}} >
        <div className="card-body">
        <h6 className="c-heading" >Thought of the Day</h6>
            <div className="row" >
                <div style={{display:'flex',justifyContent:'space-around',alignItems:'center',fontFamily:'Montserrat'}}>
                    <div id="quote" style={{fontSize:'34px'}}>
                        <span style={{color:'#e2b51c'}}>❝ </span>
                         <b>Live</b> as if you were to die tomorrow.
                        <b>Learn</b> as if you were to live forever 
                        <span style={{color:'#e2b51c'}}> ❞</span>
                    </div>
                    <img src="../../../assets/Gandhi.png" style={{width:'350px',height:'350px'}}/>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Thought;

