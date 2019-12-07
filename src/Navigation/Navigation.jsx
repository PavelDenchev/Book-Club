import React from 'react';
import './Navigation.css';
import { Link } from 'react-router-dom';


function Navigation({ isLogged }) {
    return (
        <nav className="navigation">
            <ul className="navigation-list">
                <li className="navigation-title"><Link to="/"><h1>Book Club</h1></Link></li>
                <li className="navigation-item button"><Link to="/books">Browse Books</Link></li>
                { isLogged && <li className="navigation-item button"><Link to="/books/create">Recommend a Book</Link></li>}
                { !isLogged && <li className="navigation-item button"><Link to="/login">Login</Link></li> }
                { !isLogged && <li className="navigation-item button"><Link to="/register">Register</Link></li> }
                { isLogged && <li className="navigation-item button"><Link to="/logout">Logout</Link></li> }
            </ul>
        </nav>
    );
}

export default Navigation;
