import React from 'react';
import './BookDetails.css';

function BookDetails() {
    return (
        <div className="book-details">
            <div className="book-details-grid">
                <h1 className="book-details-title">The Witcher</h1>
                <img
                    className="book-details-image"
                    src="https://i.pinimg.com/originals/49/80/fc/4980fcdbb14f52b06bc50d01e23d174b.jpg"
                    alt="pic"
                />
                <p className="book-details-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Gravida in fermentum et sollicitudin ac orci phasellus egestas tellus. Non odio euismod lacinia at quis risus sed vulputate. Amet consectetur adipiscing elit duis tristique sollicitudin nibh sit. Commodo ullamcorper a lacus vestibulum sed arcu. Sapien nec sagittis aliquam malesuada bibendum arcu vitae elementum curabitur. Id ornare arcu odio ut. Faucibus turpis in eu mi bibendum neque egestas congue.</p>
                <h3 className="book-details-author">Author: Andrzej Sapkowski</h3>
                <div className="empty"></div>
                <div className="book-details-buttons">
                    <button className="book-details-button book-details-like">Like</button>
                    <button className="book-details-button book-details-dislike">Dislike</button>
                    <button className="book-details-button book-details-favourite">Favourite</button>
                </div>
                <div className="book-details-ratings">
                    <p className="book-details-likes">Likes: 0</p>
                    <p className="book-details-dislikes">Dislikes: 0</p>
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
