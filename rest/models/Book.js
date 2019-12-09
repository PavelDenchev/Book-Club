const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const Model = mongoose.model;
const { String, Number, ObjectId } = Schema.Types;

const bookSchema = new Schema({

    title: {
        type: String,
        unique: true,
        required: true
    },

    author: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    coverUrl: {
        type: String,
        required: true
    },

    genre: {
        type: String,
        required: true
    },

    likes: {
        type: Number,
        default: 0
    },

    dislikes: {
        type: Number,
        default: 0
    },

    user: {
        type: ObjectId,
        ref: "User"
    },

    comments: [{
        type: ObjectId,
        ref: "Comment"
    }]
})

module.exports = new Model('Book', bookSchema);