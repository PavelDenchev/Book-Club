import React, { useState, useEffect } from 'react';
import './BookDetails.css';
import { useParams } from 'react-router-dom'
import axios from 'axios'
  

function BookDetails() {
    const [book, setBook] = useState({})
    // const [user, setUser] = useState({})
    const [isRated, setIsRated] = useState("")
    const [isFavourite, setIsFavourite] = useState(false)
    const { id } = useParams()

    useEffect(() => {
        axios({
            method: 'get',
            url: `http://localhost:9999/api/book/getOne/${id}`,
            withCredentials: true
        })
        .then(res => {
            setBook(res.data[0])
            // setUser(res.data[1])
            if (res.data[1].likedBooks.includes(id)) {
                setIsRated("liked")
            } else if(res.data[1].dislikedBooks.includes(id)) {
                setIsRated("disliked")
            } else {
                setIsRated("")
            }

            if (res.data[1].favouriteBooks.includes(id)) {
                setIsFavourite(true)
            } else {
                setIsFavourite(false)
            }
        })
        .catch(err => console.error(err))
    }, [id])

    const handleLikeAndDislike = (action) => {
        axios({
            method: 'post',
            url: `http://localhost:9999/api/book/${action}/${id}`,
            withCredentials: true,
            data: {
                likes: book.likes,
                dislikes: book.dislikes
            }
        })
        .then(res => {
            // setUser(res.data[0])
            setBook(res.data[1])
            
            if (res.data[0].likedBooks.includes(id)) {
                setIsRated("liked")
            } else if(res.data[0].dislikedBooks.includes(id)) {
                setIsRated("disliked")
            } else {
                setIsRated("")
            }
        })
        .catch((err) => console.error(err))
    }

    const handleFavourite = (action) => {
        axios({
            method: 'post',
            url: `http://localhost:9999/api/book/${action}/${id}`,
            withCredentials: true,
        })
        .then(res => {
            if (res.data.favouriteBooks.includes(id)) {
                setIsFavourite(true)
            } else {
                setIsFavourite(false)
            }
        })
        .catch((err) => console.error(err))
    }

    const displayFavourite = () => {
        if (isFavourite) {
            return <button className="book-details-button book-details-favourite" onClick={() => handleFavourite("unfavourite")}>Unfavourite</button>
        } else {
            return <button className="book-details-button book-details-favourite" onClick={() => handleFavourite("favourite")}>Favourite</button>
        }
    }

    const displayLikeAndDislike = () => {
        if (isRated) {
            if (isRated === 'liked') {
                return <div className="book-details-buttons">
                            <button className="book-details-button book-details-like" onClick={() => handleLikeAndDislike("unlike")}>Unlike</button>
                            {displayFavourite()}
                        </div>
            } else if (isRated === 'disliked') {
                return <div className="book-details-buttons">
                            <button className="book-details-button book-details-dislike" onClick={() => handleLikeAndDislike("undislike")}>Undislike</button>
                            {displayFavourite()}
                        </div>
            }
        } else {
            return <div className="book-details-buttons">
                        <button className="book-details-button book-details-like" onClick={() => handleLikeAndDislike("like")}>Like</button>
                        <button className="book-details-button book-details-dislike" onClick={() => handleLikeAndDislike("dislike")}>Dislike</button>
                        {displayFavourite()}
                    </div>
            
        }
    }

    

    return (
        <div className="book-details">
            {console.log(isRated)}
            <div className="book-details-grid">
                <h1 className="book-details-title">{book.title}</h1>
                <img
                    className="book-details-image"
                    src={book.coverUrl}
                    alt="pic"
                />
                <p className="book-details-description">{book.description}</p>
                <h3 className="book-details-author">Author: {book.author}</h3>
                <h3 className="book-details-genre">Genre: {book.genre}</h3>
                {displayLikeAndDislike()}
                <div className="book-details-ratings">
                    <p className="book-details-likes">Likes: {book.likes}</p>
                    <p className="book-details-dislikes">Dislikes: {book.dislikes}</p>
                </div>
            </div>
            <form className="book-details-comment-form">
                <textarea className="book-details-comment-area" placeholder="Add a comment..." />
                <button className="book-details-button book-details-button-comment">Comment</button>
            </form>
            <div className="book-details-comments">
                <h1 className="book-details-comments-title">Comments</h1>
                <p className="book-details-no-comments">There are no comments yet.</p>
            </div>
        </div>
    );
}

export default BookDetails;
