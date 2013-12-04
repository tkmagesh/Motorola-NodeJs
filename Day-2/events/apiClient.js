var MyApi = require('./MyApi').MyApi;
var api = new MyApi();
api.start();
api.on('time',function(t){
	console.log('current time is', t)
});
setTimeout(function(){
	api.stop();
},10000);