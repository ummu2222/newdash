import React from 'react';


const TwoColorBtn = () => {
    return (
        <div style={{marginTop:'3px'}}>
            <nav aria-label="Page navigation example">
                <ul className="pagination">
                    <li className="page-item active">
                        <a className="page-link" >Student</a>
                    </li>
                    <li className="page-item">
                        <a className="page-link" >Me</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default TwoColorBtn;