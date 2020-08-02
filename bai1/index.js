var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var port = 3000;

app.set('view engine','pug');
app.set('views','./views');

app.use(bodyParser.json()); //for parsing application/json
app.use(bodyParser.urlencoded({extended: true}));

var users = [
	{id: 1, name: 'Phong'},
	{id: 2, name: 'Phuong'},
	{id: 3, name: 'Hieu'}
]

app.get('/', function(req,res){
	res.render('index',{
		name: 'LLL'
	});
})

app.get('/users', function(req,res){
	res.render('users/index', {
		users: users						
	});
});

app.get('/users/search', function(req,res){
	var q = req.query.q;
	var matchUsers = users.filter(function(users){
		return users.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
	});

	res.render('users/index',{
		users: matchUsers
	});
})

app.get('/users/create', function(req,res){
	res.render('users/create');
})

app.post('/users/create', function(req,res){
	users.push(req.body);
	res.redirect('/users');
})

app.listen(3000, function(){
	console.log('Server listening on port ' + port);
})