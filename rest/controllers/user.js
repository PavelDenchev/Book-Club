const models = require('../models');
const config = require('../config/config');
const utils = require('../utils');

module.exports = {
  get: {
    getAll: (req, res, next) => {
      models.User.find()
      .then((users) => res.send(users))
      .catch(next)
    },

    getOne: (req, res, next) => {
      const userId = req.user._id
      models.User.findOne({_id: userId}).populate("createdBooks").populate("favouriteBooks")
      .then((user) => res.send(user))
      .catch(next)
    },

    getById: (req, res, next) => {
      const userId = req.params.id
      models.User.findOne({_id: userId}).populate("createdBooks").populate("favouriteBooks")
      .then((user) => res.send(user))
      .catch(next)
    }
  },

  post: {
    register: (req, res, next) => {
      const { username, password } = req.body;
      models.User.findOne({ username })
      .then((user) => {
        if (user) {
          res.status(403).send('User already exists.');
        } else {
          models.User.create({ username, password })
          .then((createdUser) => res.send(createdUser))
          .catch(next)
        }
      }).catch(next)
    },

    login: (req, res, next) => {
      const { username, password } = req.body;
      models.User.findOne({ username })
        .then((user) => !!user ? Promise.all([user, user.matchPassword(password)]) : [null, false])
        .then(([user, match]) => {
          if (!match) {
            res.status(401).send('Invalid username or password.');
            return;
          }

          const token = utils.jwt.createToken({ id: user._id });
          res.cookie(config.authCookieName, token).send(user);
        })
        .catch(next);
    },

    logout: (req, res, next) => {
      const token = req.cookies[config.authCookieName];
      models.TokenBlacklist.create({ token })
        .then(() => {
          res.clearCookie(config.authCookieName).send('Logout successfully!');
        })
        .catch(next);
    }
  },

  put: (req, res, next) => {
    const id = req.params.id;
    const { username, password } = req.body;
    models.User.update({ _id: id }, { username, password })
      .then((updatedUser) => res.send(updatedUser))
      .catch(next)
  },

  delete: (req, res, next) => {
    const id = req.params.id;
    models.User.deleteOne({ _id: id })
      .then((removedUser) => res.send(removedUser))
      .catch(next)
  }
};