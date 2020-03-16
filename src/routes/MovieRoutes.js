const express = require('express');
const router = express.Router();

const MovieController = require('../controllers/MovieController')

router.post('/', MovieController.create);
router.put('/:id', MovieController.update);
router.delete('/:id', MovieController.delete);
router.get('/filter/title', MovieController.searchTitle);
router.get('/filter/like', MovieController.searchLike);


module.exports = router;
