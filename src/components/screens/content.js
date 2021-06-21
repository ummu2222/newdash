import React from 'react';
import StudentOfMonth from '../Cards/StudentOfMonth';

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

        </div>

    );
}

export default Content;