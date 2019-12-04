import React from 'react';
import './Navigation.css';
import Link from '../shared/Link/Link';

function Navigation() {
    return (
        <nav className="navigation">
            <ul className="navigation-list">
                <li className="navigation-title"><h1>Book Club</h1></li>
                <Link to="#">Home</Link>
                <Link to="#">Browse Books</Link>
            </ul>
        </nav>
    );
}

export default Navigation;
