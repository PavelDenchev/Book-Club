import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import useForm from 'react-hook-form'
import axios from 'axios'


export default function Register() {
    const history = useHistory();
    const [regError, setRegError] = useState("");
    const { register, handleSubmit, watch, errors } = useForm();

    const onSubmit = (data) => {
        const { username, password } = data

        axios({
            method: 'post',
            url: 'http://localhost:9999/api/user/register',
            data: {
                username: username,
                password: password
            }
        })
        .then((res) => {
            history.push('/')
        })
        .catch(err => {
            if (err.response.status === 403) {
                setRegError(err.response.data)
            } else {
                console.error(err)
            }
        })
    }

    return (
        <div className="container form">
            <h1 className="form-title">Register</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                {errors.username && <p className="form-error">{errors.username.message}</p>}
                {errors.password && <p className="form-error">{errors.password.message}</p>}
                {errors.repeatPassword && <p className="form-error">Passwords don't match.</p>}
                {regError && <p className="form-error">{regError}</p>}
                <div className="form-grid">
                    <label htmlFor="username">Username:</label>
                    <input type="text" name="username" id="username"
                        ref={register({
                            required: "Username is required",
                            minLength: {
                                value: 4,
                                message: "Username must be atleast 4 characters long."
                            },
                            maxLength: {
                                value: 15,
                                message: "Username must not be longer than 15 characters."
                            }
                        })} />
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" id="password"
                        ref={register({
                            required: "Password is required",
                            minLength: {
                                value: 6,
                                message: "Password must be atleast 6 characters long."
                            },
                        })} />
                    <label htmlFor="repeatPassword">Repeat Password:</label>
                    <input type="password" name="repeatPassword" id="repeatPassword"
                        ref={register({
                            validate: (value) => { return value === watch("password") }
                        })} />
                </div>
                <input className="form-button" type="submit" value="Register" />
            </form>
        </div>
    );
}