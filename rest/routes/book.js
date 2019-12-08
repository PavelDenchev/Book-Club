const controllers = require('../controllers/');
const router = require('express').Router();
const { auth } = require('../utils');

router.get('/getAll', controllers.book.get.getAll);
router.get('/getOne/:id', auth(), controllers.book.get.getOne);
router.post('/like/:id', auth(), controllers.book.post.like);
router.post('/dislike/:id', auth(), controllers.book.post.dislike);
router.post('/unlike/:id', auth(), controllers.book.post.unlike);
router.post('/undislike/:id', auth(), controllers.book.post.undislike);
router.post('/favourite/:id', auth(), controllers.book.post.favourite);
router.post('/unfavourite/:id', auth(), controllers.book.post.unfavourite);
router.post('/create', auth(), controllers.book.post.add);

module.exports = router;