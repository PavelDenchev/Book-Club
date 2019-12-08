import React from 'react';
import './Book.css';
import { Link } from 'react-router-dom';

function Book({ id, title, author, description, coverUrl, isLogged }) {
    return (
        <div className="book">
            <img
                className="book-cover"
                src={coverUrl}
                alt="pic"
            />
            <h2 className="book-title">{title}</h2>
            <p className="book-description">{description}</p>
            <h3 className="book-author">Author: {author}</h3>
            { isLogged && <div className="book-details-button"><Link to={{pathname: `/books/details/${id}`}}>Details</Link></div> }
        </div>
    );
}

export default Book;
