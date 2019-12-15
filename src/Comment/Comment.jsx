import React, { useState, useEffect } from 'react';
import './Comment.css';
import axios from 'axios'

function Comment({ content, userId }) {
    const [user, setUser] = useState({})

    useEffect(() => {
        axios({
            method: 'get',
            url: `http://localhost:9999/api/user/getById/${userId}`,
            withCredentials: true
        })
        .then(res => {
            setUser(res.data)
        })
        .catch(err => console.error(err))
    }, [userId])

    return (
        <div>
            <hr/>
            <p className="comment">By {user.username}:</p>
            <p className="comment">{content}</p>
        </div>
    );
}

export default Comment;
