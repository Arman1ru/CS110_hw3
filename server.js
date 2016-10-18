const http = require('http');
http.createServer(function (req, res) {
	
	if (req.url === '/') {
		res.writeHead(200, {'Content-Type' : 'text/plain'});
		res.end('Hello Ladies and Gentlemen, Please type D to learn more about HungryLemonPanda,type A to Learn his age, type H to learn where he has born,type K to learn what is his favorite food,type E to learn what is the meaning of life');
	} else if (req.url === '/D') {
		res.writeHead(200, {'Content-Type' : 'text/plain'});
		res.end('HungryLemonPanda is a unique creature in this World');
	} else if (req.url === '/A') {
		res.writeHead(200, {'Content-Type' : 'text/plain'});
		res.end('HungryLemonPanda has no age, He is ageless and infinite');
	} else if (req.url === '/H') {
		res.writeHead(200, {'Content-Type' : 'text/plain'});
		res.end('HungryLemon Panda was born in Chocolate');
	} else if (req.url === '/K') {
		res.writeHead(200, {'Content-Type' : 'text/plain'});
		res.end('Cherry Ice-Cream');
	} else if (req.url === '/E') {
		res.writeHead(200, {'Content-Type' : 'text/plain'});
		res.end('Happiness');
	} else {
		res.writeHead(200, {'Content-Type' : 'text/plain'});
		res.end('Error');
	}
}).listen('3001');