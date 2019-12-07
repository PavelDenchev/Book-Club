import React from 'react';
import './CreateBook.css';
import { useHistory } from 'react-router-dom';
import useForm from 'react-hook-form'
import axios from 'axios'

function CreateBook({ currentUserId }) {
    const history = useHistory();
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = (data) => {
        const { title, author, description, coverImageUrl, genre } = data
        const _id = sessionStorage.getItem('currentUserId')

        axios({
            method: 'post',
            url: 'http://localhost:9999/api/book/create',
            data: {
                title: title,
                author: author,
                description: description,
                coverUrl: coverImageUrl,
                genre: genre,
                user: _id
            },
            withCredentials: true
        })
        .then((res) => {
            console.log(res)
            history.push('/')
        })
        .catch(err => console.error(err))
    }

    return (
        <div className="form">
            <h1 className="form-title">Recommend a book</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
            {errors.title && <p className="form-error">{errors.title.message}</p>}
            {errors.author && <p className="form-error">{errors.author.message}</p>}
            {errors.description && <p className="form-error">{errors.description.message}</p>}
            {errors.coverImageUrl && <p className="form-error">{errors.coverImageUrl.message}</p>}
            {errors.genre && <p className="form-error">{errors.genre.message}</p>}
                <div className="form-grid">
                    <label htmlFor="title">Title:</label>
                    <input type="text" name="title" id="title" ref={register({
                        required: "Title is required",
                        minLength: {
                            value: 4,
                            message: "Title must be atleast 4 characters long."
                        }
                    })} />
                    <label htmlFor="author">Author:</label>
                    <input type="text" name="author" id="author" ref={register({
                        required: "Author is required",
                        minLength: {
                            value: 4,
                            message: "Author must be atleast 4 characters long."
                        }
                    })} />
                    <label htmlFor="description">Description:</label>
                    <textarea name="description" id="description" ref={register({
                        required: "Description is required",
                        minLength: {
                            value: 50,
                            message: "Description must be atleast 50 characters long."
                        },
                        maxLength: {
                            value: 1000,
                            message: "Description cannot be longer than 1000 characters."
                        }
                    })} />
                    <label htmlFor="coverImageUrl">Cover image url:</label>
                    <input type="text" name="coverImageUrl" id="coverImageUrl" ref={register({required: "Cover image url is required"})} />
                    <label htmlFor="genre">Genre:</label>
                    <select name="genre" id="genre" ref={register({required: "Genre is required"})}>
                        <option value="">Choose a genre</option>
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
                <input className="form-button" type="submit" value="Submit" />
            </form>
        </div>
    );
}

export default CreateBook;
