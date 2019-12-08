import React, { useState } from 'react';
import './Login.css';
import { useHistory } from 'react-router-dom';
import useForm from 'react-hook-form'
import axios from 'axios'

function Login({ setLoggedTrue }) {
    const [authError, setAuthError] = useState("");
    const history = useHistory();
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        const { username, password } = data

        axios({
            method: 'post',
            url: 'http://localhost:9999/api/user/login',
            data: {
                username: username,
                password: password
            },
            withCredentials: true
        })
            .then((res) => {
                setLoggedTrue()
                history.push('/')
            })
            .catch(err => {
                if (err.response.status === 401) {
                    setAuthError(prevError => prevError = err.response.data)
                }
                else {
                    console.error(err)
                }
            })
    }

    return (
        <div className="form">
            <h1 className="form-title">Login</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                {authError && <p className="form-error">{authError}</p>}
                <div className="form-grid">
                    <label htmlFor="username">Username:</label>
                    <input type="text" name="username" id="username" ref={register} />
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" id="password" ref={register} />
                </div>
                <input className="form-button" type="submit" value="Login" />
            </form>
        </div>
    );
}

export default Login;
