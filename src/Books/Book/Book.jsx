import React from 'react';
import './Book.css';
import { Link } from 'react-router-dom';

function Book({ id, title, author, description, coverUrl }) {
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
            <div className="book-details button"><Link to="/books/details">Details</Link></div>
        </div>
    );
}

export default Book;
