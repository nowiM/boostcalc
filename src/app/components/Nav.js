'use client';
import { useState, useEffect } from 'react';

const Nav = () => {
    // useState 초기값은 null로 설정하여 초기 상태를 구분
    const [darkMode, setDarkMode] = useState(null);

    useEffect(() => {
        // 클라이언트에서 localStorage 값을 읽어와 상태를 업데이트
        const localTheme = window.localStorage.getItem('theme') || 'light';
        setDarkMode(localTheme);
        document.documentElement.dataset.theme = localTheme;
    }, []);

    const toggleDarkMode = () => {
        const newTheme = darkMode === 'light' ? 'dark' : 'light';
        setDarkMode(newTheme);
        window.localStorage.setItem('theme', newTheme);
        document.documentElement.dataset.theme = newTheme;
    };

    return (
        <div className="nav">
            <div className="nav-container">
                <div className={`background-container ${darkMode === 'dark' ? 'dark-mode' : 'initial'}`}>
                    <img className="logo" src="/images/logo.png" alt="LOGO" />
                </div>
                <div className={`background-container ${darkMode === 'dark' ? 'dark-mode' : 'initial'}`}>
                    <img
                        className="ModeLogo"
                        src="/images/darkMode.png"
                        alt="Mode Logo"
                        onClick={toggleDarkMode}
                    />
                </div>
            </div>
        </div>
    );
};

export default Nav;
