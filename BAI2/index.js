var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');

var userRoute = require('./routes/user.route');
var authRoute = require('./routes/auth.route');

var authMiddleware = require('./middlewares/auth.middleware');

var db = require('./db');

var port = 3000;

var app = express();
app.set('view engine','pug');
app.set('views','./views');

app.use(bodyParser.json()); //for parsing application/json
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser('eqweekrpkgke234'));

app.use(express.static('public'));

//Routes
app.get('/', function(req,res){
	res.render('index',{
		name: 'Pennsylvania'
	});
})

app.use('/users', authMiddleware.requireAuth, userRoute);
app.use('/auth', authRoute);

app.listen(3000, function(){
	console.log('Server listening on port ' + port);
})