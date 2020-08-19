var express = require('express');

var controller = require('../controllers/cart.controller');

var router = express.Router();



router.get('/add/:productIdAndPage', controller.addToCart);
router.get('/', controller.getNumberCart);

module.exports = router;