import React from 'react';

const DropdownBtn = (props) => {
    return (
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', marginTop:'-12px' }}>
                <div class="dropdown card-body" style={{display: 'flex', flexDirection: 'row', justifyContent: 'flex-end'}}>
                    <button type="button" class="btn subjectButton" type="button">
                        {props.name}
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
    );
}

export default DropdownBtn;