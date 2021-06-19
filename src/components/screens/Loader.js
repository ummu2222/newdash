import React from 'react'
import Preloader from "../Atoms/Preloader";

const Loader = () =>{
    return(
        <div className="Loader">
            <header className="Loader-header" >
                <Preloader />
            </header>
        </div>
    );
    
}

export default Loader;