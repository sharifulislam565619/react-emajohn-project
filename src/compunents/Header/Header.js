import React from 'react';
import logo from "../../images/logo.png"
import "./Header.css"

const Header = () => {
    return (
        <div className="logo">

            <img src={logo} alt="" />
            <nav className="navbar">
                <a href="/">Shop</a>
                <a href="/order">Order-review</a>
                <a href="/inventory">manage-inventory-here</a>

            </nav>
        </div>
    );
};

export default Header;