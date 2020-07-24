var express = require('express');
var app = express();
var port = 3000;

app.get('/', function(request,response){
	response.send('me mua em con heo dat');
});

app.listen(3000, function(){
	console.log('Server listening on port ' + port);
})