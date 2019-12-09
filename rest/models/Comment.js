const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const Model = mongoose.model;
const { String, ObjectId } = Schema.Types;

const commentSchema = new Schema({

    content: {
        type: String,
        required: true
    },

    user: {
        type: ObjectId,
        ref: "User"
    }
})

module.exports = new Model('Comment', commentSchema);