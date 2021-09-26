import React from 'react';
import Home from '../Home/Home';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <nav>

                <a href="/home">Home</a>
                <a href="/about">About</a>
                <a href="/contract">Contract</a>
            </nav>
            <Home></Home>
            
        </div>
    );
};

export default Header;