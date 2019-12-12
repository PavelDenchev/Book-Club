import React from 'react';
import './Navigation.css';
import { Link } from 'react-router-dom';

function Navigation({ isLogged }) {
    return (
        <nav className="navigation">
            <ul className="navigation-list">
                <li><Link className="navigation-title" to="/"><h1>Book Club</h1></Link></li>
                <li><Link className="button" to="/books">Browse Books</Link></li>
                { isLogged && <li><Link className="button" to="/books/create">Recommend a Book</Link></li>}
                { !isLogged && <li><Link className="button" to="/login">Login</Link></li> }
                { !isLogged && <li><Link className="button" to="/register">Register</Link></li> }
                { isLogged && <li><Link className="button" to="/profile">Profile</Link></li> }
                { isLogged && <li><Link className="button" to="/logout">Logout</Link></li> }
            </ul>
        </nav>
    );
}

export default Navigation;
