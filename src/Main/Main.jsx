import React, { useState, useEffect } from 'react';
import './Main.css';
import axios from 'axios'
import Book from '../Books/Book/Book'

function Main({ isLogged }) {
  const [bestBooks, setBestBooks] = useState([{}])

  useEffect(() => {
    axios({
      method: 'get',
      url: 'http://localhost:9999/api/book/getAll',
    })
      .then((res) => {
        setBestBooks(res.data.slice(0, 12))
      })
      .catch(err => console.error(err))
  }, [])

  const books = bestBooks.length > 0 ? bestBooks.map((book, index) => <Book key={index} id={book._id} title={book.title} author={book.author} description={book.description} coverUrl={book.coverUrl} isLogged={isLogged} />) : null

  return (
    <div className="Main">
      <div className="main-title-container">
        <h1 className="main-title">Welcome to the Book Club</h1>
        <h2 className="main-sub-title">A place to find your new favourite book.</h2>
      </div>
      <div className="container books-page">
        <h1 className="books-page-title">Check out our most liked books</h1>
            {!books && <h2 className="books-page-empty">There are no books yet.</h2>}
          <div className="books-container">
            {books}
          </div>
      </div>
    </div>
  );
}

export default Main;
