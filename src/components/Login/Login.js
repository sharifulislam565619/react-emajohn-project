import React from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import "./Login.css"

const Login = () => {

    const { handleSignInWithGoogle } = useAuth()
    const location = useLocation()
    const redirect_url = location.state?.from || "/"
    const history = useHistory()
    const handleGoogleSignIn = () => {
        handleSignInWithGoogle()
            .then(result => {
                history.push(redirect_url)
            })
    }
    return (
        <div className="login-form">
            <div>
                <h2>Please log In</h2>
                <form onSubmit="">
                    <input type="email" name="" id="" placeholder="Enter your email" /><br />
                    <input type="password" name="" id="" placeholder="Enter your password" /><br />
                    <input type="submit" value="Login" />

                </form>
                <p>Create new account <Link to="/register">Register</Link></p>
                <p>Or login</p>
                <button onClick={handleGoogleSignIn}>google</button>
                <button>Facebook</button>
                <button>twitter</button>
                <button>github</button>

            </div>
        </div>
    );
};

export default Login;