import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../images/logo.png"
import "./Header.css"

const Header = () => {
    return (
        <div className="logo">

            <img src={logo} alt="" />
            <nav className="navbar">
                <Link to="/">Shop</Link>
                <Link to="/order">Order-review</Link>
                <Link to="/inventory">manage-inventory-here</Link>

            </nav>
        </div>
    );
};

export default Header;