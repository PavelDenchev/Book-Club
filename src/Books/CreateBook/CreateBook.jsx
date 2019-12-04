import React from 'react';
import './CreateBook.css';

function CreateBook() {
    return (
        <div className="create-book">
            <h1 className="create-book-title">Recommend a book</h1>
            <form>
                <div className="create-book-form">
                    <label htmlFor="title">Title:</label>
                    <input type="text" name="title" id="title" />
                    <label htmlFor="author">Author:</label>
                    <input type="text" name="author" id="author" />
                    <label htmlFor="description">Description:</label>
                    <textarea name="description" id="description" />
                    <label htmlFor="coverImageUrl">Cover image url:</label>
                    <input type="text" name="coverImageUrl" id="coverImageUrl" />
                    <label htmlFor="genre">Genre:</label>
                    <select name="genre" id="genre">
                        <option value="Biography">Biography</option>
                        <option value="Business">Business</option>
                        <option value="Children's">Children's</option>
                        <option value="Cookbooks">Cookbooks</option>
                        <option value="Crime">Crime</option>
                        <option value="Education">Education</option>
                        <option value="Fantasy">Fantasy</option>
                        <option value="Fiction">Fiction</option>
                        <option value="Health">Health</option>
                        <option value="History">History</option>
                        <option value="Horror">Horror</option>
                        <option value="Medical">Medical</option>
                        <option value="Mystery">Mystery</option>
                        <option value="Nonfiction">Nonfiction</option>
                        <option value="Poetry">Poetry</option>
                        <option value="Philosophy">Philosophy</option>
                        <option value="Psychology">Psychology</option>
                        <option value="Romance">Romance</option>
                        <option value="Science">Science</option>
                        <option value="ScienceFiction">Science Fiction</option>
                        <option value="Thriller">Thriller</option>
                    </select>
                </div>
                <input className="create-book-button" type="submit" value="Submit"/>
            </form>
        </div>
    );
}

export default CreateBook;
