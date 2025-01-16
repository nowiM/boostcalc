// components/Nav.js
'use client';
import { useState, useEffect } from 'react';

const Nav = () => {
    // useState 초기값을 localStorage에서 가져옴
    const [darkMode, setDarkMode] = useState('light');

    useEffect(() => {
        const localTheme = window.localStorage.getItem('theme') || null
        if(localTheme) {
            setDarkMode(localTheme);
            document.documentElement.dataset.theme = localTheme
        } else {
            setDarkMode('light');
            document.documentElement.dataset.theme = 'light'
        }
    }, []);

    const toggleDarkMode = () => {
        const newTheme = darkMode === 'light' ? 'dark' : 'light';
        setDarkMode(newTheme);
        window.localStorage.setItem('theme', newTheme);
        document.documentElement.dataset.theme = newTheme
    }

    return (
        <div className="nav">
            <div className="nav-container">
                <div className={`background-container ${darkMode === 'dark' ? 'dark-mode' : 'initial'}`}>
                    <img className="logo" src="/images/logo.png" alt="LOGO" />
                </div>
                <div className={`background-container ${darkMode === 'dark' ? 'dark-mode' : 'initial'}`}>
                    <img
                        className="ModeLogo"
                        src={darkMode === 'dark' ? "/images/rightMode.svg" : "/images/darkMode.png"}
                        alt="Mode Logo"
                        onClick={toggleDarkMode}
                    />
                </div>
            </div>
        </div>
    );
};

export default Nav;
