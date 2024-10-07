import React from 'react';
import logo from '../images/logo.svg';
import rightModeLogo from '../images/rightMode.svg';
import darkModeLogo from '../images/darkMode.png';

const Nav = ({ darkMode, toggleDarkMode }) => {
    return (
        <div className="nav">
            <div className="nav-container">
                <img className='logo' src={logo} alt="LOGO" />
                <img className="ModeLogo" src={`${darkMode ? rightModeLogo : darkModeLogo}`} onClick={toggleDarkMode} />
            </div>
        </div>
    );
}

export default Nav;
