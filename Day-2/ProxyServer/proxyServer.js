var http = require('http');

http.createServer(function(request, response) {
  var proxy = http.createClient(80, request.headers['host']);
  console.log(request.headers);
  var proxy_request = proxy.request(request.method, request.url, request.headers);
  proxy_request.on('response', function (proxy_response) {
    proxy_response.on('data', function(chunk) {
      response.write(chunk, 'binary');
    });
    proxy_response.on('end', function() {
      response.end();
    });
    response.writeHead(proxy_response.statusCode, proxy_response.headers);
  });
  request.on('data', function(chunk) {
    proxy_request.write(chunk, 'binary');
  });
  request.on('end', function() {
    proxy_request.end();
  });
}).listen(8080);