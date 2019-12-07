import React from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios'


function Logout({ setLoggedFalse }) {
    const history = useHistory();

    const handleLogout = () => {
        axios({
            method: 'post',
            url: 'http://localhost:9999/api/user/logout',
            withCredentials: true
        })
        .then(() => {
            setLoggedFalse()
            history.push('/')
        })
        .catch(err => console.error(err))
    }

    return (
        <div>
            {handleLogout()}
        </div>
    );
}

export default Logout;
