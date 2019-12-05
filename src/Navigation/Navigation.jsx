import React from 'react';
import './Navigation.css';
import { Link } from 'react-router-dom';


function Navigation() {
    return (
        <nav className="navigation">
            <ul className="navigation-list">
                <li className="navigation-title"><Link to="/"><h1>Book Club</h1></Link></li>
                <li className="navigation-item button"><Link to="/books">Browse Books</Link></li>
                <li className="navigation-item button"><Link to="/createBook">Recommend a Book</Link></li>
                <li className="navigation-item button"><Link to="/login">Login</Link></li>
                <li className="navigation-item button"><Link to="/register">Register</Link></li>
            </ul>
        </nav>
    );
}

export default Navigation;
