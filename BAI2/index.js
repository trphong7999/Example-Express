var express = require('express');
var bodyParser = require('body-parser');

var userRoute = require('./routes/user.route');

var db = require('./db');

var port = 3000;

var app = express();
app.set('view engine','pug');
app.set('views','./views');

app.use(bodyParser.json()); //for parsing application/json
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req,res){
	res.render('index',{
		name: 'LLL'
	});
})

app.use('/users', userRoute);

app.listen(3000, function(){
	console.log('Server listening on port ' + port);
})