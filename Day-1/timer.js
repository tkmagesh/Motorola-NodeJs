var http = require("http");
http.createServer(function(req,res){
	if (req.url !== "/favicon.ico"){
		var params = req.url.split('?')[1],
			times = parseInt(params.split('=')[1]),
			currentIteration = 0,
			timerHandle = setInterval(function(){
				res.write(new Date().toString());
				res.write('\n');
				if (++currentIteration === times){
					clearInterval(timerHandle);
					res.end();
				}
			},1000);
	}
}).listen(8080);