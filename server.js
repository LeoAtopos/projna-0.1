var http = require("http");
var connect = require("connect");

var app = connect();

function index(request, response){
	//send the index home page.
}

app.use('/',index);

http.createServer(app).listen(1337, "127.0.0.1"); 
console.log("Server running at http://127.0.0.1:1337/");