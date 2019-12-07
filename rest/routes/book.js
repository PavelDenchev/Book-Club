const controllers = require('../controllers/');
const router = require('express').Router();
const { auth } = require('../utils');

router.get('/', controllers.book.get);
router.post('/create', auth(), controllers.book.post.add);

module.exports = router;