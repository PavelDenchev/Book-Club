import React from 'react';
import './Aside.css'

function Aside({ handleFilter }) {
    return (
        <aside className="categories">
            <div className="categories-item" onClick={() => handleFilter("All")}>All</div>
            <div className="categories-item" onClick={() => handleFilter("Biography")}>Biography</div>
            <div className="categories-item" onClick={() => handleFilter("Business")}>Business</div>
            <div className="categories-item" onClick={() => handleFilter("Children's")}>Children's</div>
            <div className="categories-item" onClick={() => handleFilter("Cookbooks")}>Cookbooks</div>
            <div className="categories-item" onClick={() => handleFilter("Crime")}>Crime</div>
            <div className="categories-item" onClick={() => handleFilter("Education")}>Education</div>
            <div className="categories-item" onClick={() => handleFilter("Fantasy")}>Fantasy</div>
            <div className="categories-item" onClick={() => handleFilter("Fiction")}>Fiction</div>
            <div className="categories-item" onClick={() => handleFilter("Health")}>Health</div>
            <div className="categories-item" onClick={() => handleFilter("History")}>History</div>
            <div className="categories-item" onClick={() => handleFilter("Horror")}>Horror</div>
            <div className="categories-item" onClick={() => handleFilter("Medical")}>Medical</div>
            <div className="categories-item" onClick={() => handleFilter("Mystery")}>Mystery</div>
            <div className="categories-item" onClick={() => handleFilter("Nonfiction")}>Nonfiction</div>
            <div className="categories-item" onClick={() => handleFilter("Poetry")}>Poetry</div>
            <div className="categories-item" onClick={() => handleFilter("Philosophy")}>Philosophy</div>
            <div className="categories-item" onClick={() => handleFilter("Psychology")}>Psychology</div>
            <div className="categories-item" onClick={() => handleFilter("Romance")}>Romance</div>
            <div className="categories-item" onClick={() => handleFilter("Science")}>Science</div>
            <div className="categories-item" onClick={() => handleFilter("Science Fiction")}>Science Fiction</div>
            <div className="categories-item" onClick={() => handleFilter("Thriller")}>Thriller</div>
        </aside>
    );
}

export default Aside;