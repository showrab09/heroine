import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <div className="header">
            <h1>Make Your Movie <span style={{ color: "orange" }}>BoxOffice Hit!</span></h1>
            <h2>Maximum Budget: 100M</h2>
        </div>
    );
};

export default Header;