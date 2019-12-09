const controllers = require('../controllers/');
const router = require('express').Router();
const { auth } = require('../utils');

router.post('/create/:id', auth(), controllers.comment.post.create);

module.exports = router;