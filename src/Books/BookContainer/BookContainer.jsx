import React, { useState, useEffect } from 'react';
import './BookContainer.css'
import Book from '../Book/Book'
import Aside from '../../Aside/Aside'
import axios from 'axios'

function BookContainer({ isLogged }) {

    const [allBooks, setAllBooks] = useState([{}])
    const [displayedBooks, setDisplayedBooks] = useState([{}])

    useEffect(() => {
        axios({
            method: 'get',
            url: 'http://localhost:9999/api/book/getAll',
        })
        .then((res) => {
            setAllBooks(res.data)
            setDisplayedBooks(res.data)
        })
        .catch(err => console.error(err))
    }, [])

    const handleFilter = (genre) => {
        if (genre === "All") {
            setDisplayedBooks(allBooks)
        } else {
            const fliteredBooks = allBooks.filter(book => book.genre === genre)
            setDisplayedBooks(fliteredBooks)
        }
    }

    const bookComponents = displayedBooks.map(book => <Book key={book._id} id={book._id} title={book.title} author={book.author} description={book.description} coverUrl={book.coverUrl} isLogged={isLogged} />)

    const displayBooks = () => {
        if (bookComponents.length > 0) {
            return <div className="books-container">
                        {bookComponents}
                    </div>
        } else {
            return <h2 className="books-page-empty">There are no books yet.</h2>
        }
    }

    return (
        <div className="books-page-grid">
            <Aside handleFilter={handleFilter} />
            <div className="books-page">
                <h1 className="books-page-title">Books</h1>
                {displayBooks()}
            </div>
        </div>
    );
}

export default BookContainer;
