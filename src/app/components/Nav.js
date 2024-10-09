// components/Nav.js
'use client';
import { useState, useEffect } from 'react';

const Nav = () => {
    const [darkMode, setdarkMode] = useState(false);
    useEffect(() => {
        if(darkMode) {
            document.body.classList.add('dark-mode')
        }
        else {
            document.body.classList.remove('dark-mode')
        }
    }, [darkMode])

    const toggleDarkMode = () => setdarkMode(prev => !prev);

    return (
        <div className="nav">
            <div className="nav-container">
                <img className='logo' src="/images/logo.svg" alt="LOGO" />
                <div className="logoConatiner"></div>
                <img
                    className="ModeLogo"
                    src={darkMode ? "/images/rightMode.svg" : "/images/darkMode.png"}
                    alt="Mode Logo"
                    onClick={toggleDarkMode}
                />
            </div>
        </div>
    );
};

export default Nav;
