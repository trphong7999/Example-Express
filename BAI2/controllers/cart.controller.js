var db = require('../db.js');



module.exports.addToCart = function(req, res, next){
	var temp = req.params.productIdAndPage.split('page');
	var productId = temp[0];
	var page = temp[1];

	var sessionId = req.signedCookies.sessionId;

	if(!sessionId){
		req.redirect('/products');
		return;
	}

	var count = db
	  .get('sessions')
	  .find({ id: sessionId})
	  .get('cart.' + productId, 0)
	  .value();

	db.get('sessions')
	  .find({ id: sessionId})
	  .set('cart.' + productId, count + 1)
	  .write();

	res.redirect('/products?page='+page);
}

module.exports.getNumberCart = function(req, res, next){
	var sessionId = req.signedCookies.sessionId;

	res.locals.countCart = db.get("sessions").find({ id: sessionId }).get("cart").size().value();
}