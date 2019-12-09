const models = require('../models');

module.exports = {
  post: {
    create: (req, res, next) => {
        const { content } = req.body;
        const bookId = req.params.id;
        const userId = req.user._id;
        models.Comment.create({ content: content, user: userId })
        .then(createdComment => {
          return models.Book.findByIdAndUpdate({ _id: bookId }, { $push: { comments: createdComment }}, {new: true}).populate("comments")
        })
        .then(updatedBook => {
          res.send(updatedBook)
        })
        .catch(next)
    }
  },
};