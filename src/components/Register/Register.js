import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="login-form">
            <div>
                <h2>Create a new account</h2>
                <form onSubmit="">
                    <input type="email" name="" id="" placeholder="Enter your email" /><br />
                    <input type="password" name="" id="" placeholder="Enter your password" /><br />
                    <input type="password" name="" id="" placeholder="Enter your re-password" /><br />
                    <input type="submit" value="Register" />
                </form>
                <p>I have an account <Link to="/login">Sign In</Link></p>
            </div>
        </div>
    );
};

export default Register;