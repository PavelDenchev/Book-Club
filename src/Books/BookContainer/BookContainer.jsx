import React from 'react';
import './BookContainer.css'
import Book from '../Book/Book'

function BookContainer() {
    return (
        <div className="books-page">
            <h1 className="books-page-title">Books</h1>
            <div className="books-container">
                <Book />
                <Book />
                <Book />
                <Book />
                <Book />
                <Book />
                <Book />
                <Book />
                <Book />
                <Book />
            </div>
        </div>
    );
}

export default BookContainer;
