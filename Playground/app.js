
whenThereIsARequestDoThis = function(req, res){
	res.writeHead(200, {
		'connection': 'close',
		'Content-type': 'text/html',
	});
	res.end('<h1>Hello World</h1>');
};

http = require('http');
var port = 12200;
http.createServer(whenThereIsARequestDoThis).listen(12200);
console.log("listening on port: " + port)
