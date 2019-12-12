import React from 'react';
import './Aside.css'

function Aside({ handleFilter }) {
    return (
        <aside className="container categories">
            <div className="container categories-item button" onClick={() => handleFilter("All")}>All</div>
            <div className="container categories-item button" onClick={() => handleFilter("Biography")}>Biography</div>
            <div className="container categories-item button" onClick={() => handleFilter("Business")}>Business</div>
            <div className="container categories-item button" onClick={() => handleFilter("Children's")}>Children's</div>
            <div className="container categories-item button" onClick={() => handleFilter("Cookbooks")}>Cookbooks</div>
            <div className="container categories-item button" onClick={() => handleFilter("Crime")}>Crime</div>
            <div className="container categories-item button" onClick={() => handleFilter("Education")}>Education</div>
            <div className="container categories-item button" onClick={() => handleFilter("Fantasy")}>Fantasy</div>
            <div className="container categories-item button" onClick={() => handleFilter("Fiction")}>Fiction</div>
            <div className="container categories-item button" onClick={() => handleFilter("Health")}>Health</div>
            <div className="container categories-item button" onClick={() => handleFilter("History")}>History</div>
            <div className="container categories-item button" onClick={() => handleFilter("Horror")}>Horror</div>
            <div className="container categories-item button" onClick={() => handleFilter("Medical")}>Medical</div>
            <div className="container categories-item button" onClick={() => handleFilter("Mystery")}>Mystery</div>
            <div className="container categories-item button" onClick={() => handleFilter("Nonfiction")}>Nonfiction</div>
            <div className="container categories-item button" onClick={() => handleFilter("Poetry")}>Poetry</div>
            <div className="container categories-item button" onClick={() => handleFilter("Philosophy")}>Philosophy</div>
            <div className="container categories-item button" onClick={() => handleFilter("Psychology")}>Psychology</div>
            <div className="container categories-item button" onClick={() => handleFilter("Romance")}>Romance</div>
            <div className="container categories-item button" onClick={() => handleFilter("Science")}>Science</div>
            <div className="container categories-item button" onClick={() => handleFilter("Science Fiction")}>Science Fiction</div>
            <div className="container categories-item button" onClick={() => handleFilter("Thriller")}>Thriller</div>
        </aside>
    );
}

export default Aside;