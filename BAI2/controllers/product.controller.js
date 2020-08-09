var db = require('../db');
var shortid = require('shortid');

module.exports.index = function(req,res){
	var page = parseInt(req.query.page) || 1;//n
	var perPage= 4; //x
	
	var start = (page-1) * perPage;
	var end = page * perPage;
	
	res.render('products/index', {
		products: db.get('products').value().slice(start,end),
		page:page			
	});
};

module.exports.search = function(req,res){
	var q = req.query.q;
	var matchProducts = db.get('products').value().filter(function(product){
		return product.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
	});

	res.render('products/index',{
		products: matchProducts
	});
};




