var http = require("http");
var connect = require("connect");
var fs = require("fs");

var app = connect();

function index(request, response, next){
	//send the index home page.
	response.writeHead(200,{"Context-Type":"text/plain"});
	response.write("hahah");
	response.end();
	next();
}

function homepage(request, response) {

    if( request.method == 'GET' ){
        response.writeHead(200, {"Content-Type": "text/html"});
        //Open file as readable stream, pipe stream to response object
        fs.createReadStream(__dirname + "/views/index.html").pipe(response);
    }else{
        send404Response(response);
    }

}

function send404Response(response){
    response.writeHead(404, {"Content-Type": "text/plain"});
    response.write("Error 404 - Page not found");
    response.end();
}

// app.use('/',index);
app.use('/home',homepage);


http.createServer(app).listen(1337); 
console.log("Server running at http://127.0.0.1:1337/");



//Handle their request
function onRequest(request, response) {

    if( request.method == 'GET' && request.url == '/' ){
        response.writeHead(200, {"Content-Type": "text/html"});
        //Open file as readable stream, pipe stream to response object
        fs.createReadStream("./index.html").pipe(response);
    }else{
        send404Response(response);
    }

}