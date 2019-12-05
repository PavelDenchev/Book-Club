import React from 'react';
import './Register.css';

function Register() {
    return (
        <div className="form">
            <h1 className="form-title">Register</h1>
            <form>
                <div className="form-grid">
                    <label htmlFor="username">Username:</label>
                    <input type="text" name="username" id="username" />
                    <label htmlFor="password">Password:</label>
                    <input type="text" name="password" id="password" />
                    <label htmlFor="repeatPassword">Repeat Password:</label>
                    <input type="text" name="repeatPassword" id="repeatPassword" />
                </div>
                <input className="form-button" type="submit" value="Register"/>
            </form>
        </div>
    );
}

export default Register;