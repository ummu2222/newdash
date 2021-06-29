import React from 'react';
import Search from '../../Atoms/Search';
import DropdownBtn from '../../Atoms/DropdownBtn';
import TwoColorBtn from '../../Atoms/TwoColorBtn';

const seperator = {width:'1px',height:'40px',border:'1px solid #C9C9C9',marginLeft:'8px',backgroundColor:'#C9C9C9'};

const SearchBar = () =>{

    return (
        <div className="card"  style={{marginTop:'0px',height:'70px'}} >
          <div className="card-body search-bar">
            <img src="./assets/filter_icon.svg" height="20px" width="20px" style={{marginTop:'6px'}} />
            <h6 className="c-heading" style={{marginLeft:'8px'}} >Filter</h6>
            <div style={seperator} ></div>
            <Search />
            <DropdownBtn name="6-Jun-2021" />
            <DropdownBtn name="All Classes" />
            <TwoColorBtn />
            <button className="apply-btn">Apply</button>
            <button className="clear-all-btn">Clear all</button>
          </div>
        </div>
    );

}

export default SearchBar;