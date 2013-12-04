
var fs = require("fs");
var http = require("http");
http.createServer(function(req,res){
	console.log('a new request received at ',new Date(), ' for ', req.url);
	if (req.url === "/favicon.ico") 
	{
		res.writeHead(404);
		res.end();
	} else {
		var rs = fs.createReadStream("./test.txt" , {encoding : 'utf8'});
		rs.pipe(res);	
	}
}).listen(8080);
console.log("Server running on port 8080...");
