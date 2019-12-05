import React from 'react';
import './Login.css';

function Login() {
    return (
        <div className="form">
            <h1 className="form-title">Login</h1>
            <form>
                <div className="form-grid">
                    <label htmlFor="username">Username:</label>
                    <input type="text" name="username" id="username" />
                    <label htmlFor="password">Password:</label>
                    <input type="text" name="password" id="password" />
                </div>
                <input className="form-button" type="submit" value="Login"/>
            </form>
        </div>
    );
}

export default Login;
