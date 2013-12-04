var http = require("http"),
	result = 0,
	pageTemplate = '<html><head></head><body><form method="get"><input type="text" name="txtNumber" id=""><input type="submit" value="Add"></form><div><strong>{result}</strong></div></body></html>';
http.createServer(function(req,res){
	if (req.url.search('addPage') !== -1){
		var data = req.url.split('?')[1];
		console.log(data);
		if (data) {	
			result += parseInt(data.split('=')[1]); 
		}
		res.end(pageTemplate.replace('{result}',result));
	}
}).listen(8080);