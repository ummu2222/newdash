import React from 'react';
import Switch from './Switch';

const NavbarStyle = {
    background: '#545454',
    height: '50px',
};

const Navbar = () => {
    
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark" style={NavbarStyle} >
                <a className="navbar-brand" href="/"><img src="./assets/logo.svg" alt="logo" /></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto" style={{marginLeft:'530px'}}>
                        <li className="nav-item active">
                            <a className="nav-link" >I'm Beside You Inc.</a>
                        </li>
                    </ul>
                    <ul className="navbar-nav mr-auto" style={{marginLeft:'400px'}} >
                        <li className="nav-item active">
                            <a className="nav-link" href="" style={{color:'#EACC6A'}}>camera on</a>
                        </li>
                        <li className="nav-item active">
                            <Switch rounded={true} />               
                        </li>
                        <li className="nav-item active" style={{marginLeft:'30px',marginTop:'6px'}}>
                            <img src="./assets/msg_icon.svg" alt="msg" />              
                        </li>
                        <li className="nav-item active" style={{marginLeft:'30px',marginTop:'6px'}}>
                            <img src="./assets/notification.svg" alt="msg" />              
                        </li>
                        <li className="nav-item active" style={{marginLeft:'30px',marginTop:'6px'}}>
                            <img src="./assets/user.svg" alt="msg" />              
                        </li>

                    </ul>
                </div>
            </nav>
        </>
    );

}

export default Navbar;


