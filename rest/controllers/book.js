const models = require('../models');

module.exports = {
  get: {
      getAll: (req, res, next) => {
        models.Book.find().populate('user')
        .then((books) => res.send(books))
        .catch(next)
    },

      getOne: (req, res, next) => {
        const id = req.params.id
        const user = req.user
        models.Book.findById(id)
        .populate('user')
        .populate('comments')
        .then((book) => res.send([book, user]))
        .catch(next)
      }
  },

  post: {
    add: (req, res, next) => {
      const { title, author, description, coverUrl, genre } = req.body
      const userId = req.user._id
      models.Book.create({ title, author, description, coverUrl, genre, user: userId })
      .then((createdBook) => {
          return Promise.all([
              models.User.updateOne({ userId }, { $push: { createdBooks: createdBook } }),
              models.Book.findOne({ _id: createdBook._id })
          ])
      })
      .then((result) => {
          res.send(result)
      })
      .catch(next)
    },

    like: (req, res, next) => {
      const id = req.params.id
      const userId  = req.user._id
      const updatedLikes = req.body.likes + 1
      models.Book.findByIdAndUpdate(
        {_id: id},
        { $set: {likes: updatedLikes}},
        {new: true}
      )
      .then((updatedBook) => {
        return Promise.all([
          models.User.findByIdAndUpdate({ _id: userId }, { $push: { likedBooks: updatedBook } }, {new: true}),
          models.Book.findOne({ _id: updatedBook._id }).populate("comments")
        ]);
      })
      .then((result) => {
        res.send(result)
      })
      .catch(next)
    },

    unlike: (req, res, next) => {
      const id = req.params.id
      const userId  = req.user._id
      const updatedLikes = req.body.likes - 1
      models.Book.findByIdAndUpdate(
        {_id: id},
        { $set: {likes: updatedLikes}},
        {new: true}
      )
      .then((updatedBook) => {
        return Promise.all([
          models.User.findByIdAndUpdate({ _id: userId }, { $pull: { likedBooks: updatedBook._id } }, {new: true}),
          models.Book.findOne({ _id: updatedBook._id }).populate("comments")
        ]);
      })
      .then((result) => {
        res.send(result)
      })
      .catch(next)
    },

    dislike: (req, res, next) => {
      const id = req.params.id
      const userId  = req.user._id
      const updatedDislikes = req.body.dislikes + 1
      models.Book.findByIdAndUpdate(
        {_id: id},
        {dislikes: updatedDislikes},
        {new: true}
      )
      .then((updatedBook) => {
        return Promise.all([
          models.User.findByIdAndUpdate({ _id: userId }, { $push: { dislikedBooks: updatedBook._id } }, {new: true}),
          models.Book.findOne({ _id: updatedBook._id }).populate("comments")
        ]);
      })
      .then((result) => {
        res.send(result)
      })
      .catch(next)
    },

    undislike: (req, res, next) => {
      const id = req.params.id
      const userId  = req.user._id
      const updatedDislikes = req.body.dislikes - 1
      models.Book.findByIdAndUpdate(
        {_id: id},
        {dislikes: updatedDislikes},
        {new: true}
      )
      .then((updatedBook) => {
        return Promise.all([
          models.User.findByIdAndUpdate({ _id: userId }, { $pull: { dislikedBooks: updatedBook._id } }, {new: true}),
          models.Book.findOne({ _id: updatedBook._id }).populate("comments")
        ]);
      })
      .then((result) => {
        res.send(result)
      })
      .catch(next)
    },

    favourite: (req, res, next) => {
      const id = req.params.id
      const userId  = req.user._id
      models.User.findByIdAndUpdate({ _id: userId }, { $push: { favouriteBooks: id } }, {new: true})
      .then((updatedUser) => {
        res.send(updatedUser)
      })
      .catch(next)
    },

    unfavourite: (req, res, next) => {
      const id = req.params.id
      const userId  = req.user._id
      models.User.findByIdAndUpdate({ _id: userId }, { $pull: { favouriteBooks: id } }, {new: true})
      .then((updatedUser) => {
        res.send(updatedUser)
      })
      .catch(next)
    },
  }
};