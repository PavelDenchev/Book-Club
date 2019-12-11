import React, { useState, useEffect } from 'react';
import Book from '../../Books/Book/Book'
import './Profile.css';
import axios from 'axios'

function Profile({ isLogged }) {
  const [user, setUser] = useState({})
  const [createdBooks, setCreatedBooks] = useState([{}])
  const [favouriteBooks, setFavouriteBooks] = useState([{}])

  useEffect(() => {
    axios({
      method: 'get',
      url: 'http://localhost:9999/api/user/getOne',
      withCredentials: true
    })
      .then((res) => {
        setUser(res.data)
        setCreatedBooks(res.data.createdBooks)
        setFavouriteBooks(res.data.favouriteBooks)
      })
      .catch(err => console.error(err))
  }, [])

  const createdBookComponents = createdBooks.length > 0 ? createdBooks.map((book, index) => <Book key={index} id={book._id} title={book.title} author={book.author} description={book.description} coverUrl={book.coverUrl} isLogged={isLogged} />) : null
  const favouriteBookComponents = favouriteBooks.length > 0 ? favouriteBooks.map((book, index) => <Book key={index} id={book._id} title={book.title} author={book.author} description={book.description} coverUrl={book.coverUrl} isLogged={isLogged} />) : null

  return (
    <div>
      <h1 className="main-title">Welcome {user.username}</h1>
      <div className="books-page">
        <h1 className="books-page-title">Recommended Books</h1>
        {!createdBookComponents && <h2 className="books-page-empty">You have not recommended any books yet.</h2>}
        <div className="books-container">
          {createdBookComponents}
        </div>
      </div>
      <div className="books-page">
        <h1 className="books-page-title">Favourite Books</h1>
        {!favouriteBookComponents && <h2 className="books-page-empty">You have not favourited any books yet.</h2>}
        <div className="books-container">
          {favouriteBookComponents}
        </div>
      </div>
    </div>
  );
}

export default Profile;
