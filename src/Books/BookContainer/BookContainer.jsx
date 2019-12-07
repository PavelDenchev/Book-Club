import React, { useState, useEffect } from 'react';
import './BookContainer.css'
import Book from '../Book/Book'
import axios from 'axios'

function BookContainer() {

    const [books, setBooks] = useState([{}])

    useEffect(() => {
        axios({
            method: 'get',
            url: 'http://localhost:9999/api/book/',
        })
        .then((res) => {
            setBooks(res.data)
        })
        .catch((err) => console.error(err))
    }, [])

    const bookComponents = books.map(book => <Book key={book.id} id={book.id} title={book.title} author={book.author} description={book.description} coverUrl={book.coverUrl} />)
    
    return (
        <div className="books-page">
            <h1 className="books-page-title">Books</h1>
            <div className="books-container">
                {bookComponents}
            </div>
        </div>
    );
}

export default BookContainer;
