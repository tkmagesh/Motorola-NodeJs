var util = require('util'),
	events = require('events');
	MyApi = function(){};
	timerHandle = undefined;

util.inherits(MyApi,events.EventEmitter);

MyApi.prototype.start = function(){
	var self = this;
	timerHandle = setInterval(function(){
		self.emit('time',new Date());
	},2000);
};

MyApi.prototype.stop = function(){
	if (timerHandle) clearInterval(timerHandle);
}

exports.MyApi = MyApi;
