import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import logo from "../../images/logo.png"
import "./Header.css"

const Header = () => {
    const { user, logOut } = useAuth()
    return (

        <nav className="navbar logo">
            <div>
                <Link to="/home">  <img src={logo} alt="" /></Link>
            </div>
            <div className="menu">
                <Link to="/">Shop</Link>
                <Link to="/order">Order-review</Link>
                <Link to="/inventory">manage-inventory-here</Link>
                {user?.email && <span style={{ color: "white" }}>Hello {user?.displayName}</span>}
                {user?.email ? <button onClick={logOut}>sign Out</button> : <Link to="/login">Sign In</Link>}

            </div>
        </nav>

    )
};

export default Header;