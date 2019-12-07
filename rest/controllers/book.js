const models = require('../models');

module.exports = {
  post: {
    add: (req, res, next) => {
      const { title, author, description, coverUrl, genre, user } = req.body
      models.Book.create({ title, author, description, coverUrl, genre, user: user })
      .then((createdBook) => {
          return Promise.all([
              models.User.updateOne({ user }, { $push: { createdBooks: createdBook } }),
              models.Book.findOne({ _id: createdBook._id })
          ])
      })
      .then(([modifiedObj, bookObj]) => {
          res.send(bookObj)
      })
      .catch(next)
    } 
  }
};