var express = require('express');

var controller = require('../controllers/product.controller');


var router = express.Router();

router.get('/', controller.index);

router.get('cookie', function(req, res, next){
	res.cookie('user-id', 12345);
	res.send('Hello');
});

router.get('/search', controller.search);

module.exports = router;