import React from 'react';
import './Book.css';
import { Link } from 'react-router-dom';

function Book() {
    return (
        <div className="book">
            <img
                className="book-cover"
                src="https://i.pinimg.com/originals/49/80/fc/4980fcdbb14f52b06bc50d01e23d174b.jpg"
                alt="pic"
            />
            <h2 className="book-title">The Witcher</h2>
            <p className="book-description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem aliquam magni vitae animi ratione laboriosam id hic nemo, dolore nihil nisi quae necessitatibus veniam facere officiis dignissimos! Quod, doloremque possimus!</p>
            <h3 className="book-author">Author: Andrzej Sapkowski</h3>
            <div className="book-details button"><Link to="#">Details</Link></div>
        </div>
    );
}

export default Book;
