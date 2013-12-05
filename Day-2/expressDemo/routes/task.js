var tasksModel = ['Learn jQuery', 'Explore JavaScript'];
exports.tasks = function(req,res){
	res.render('tasks/index',{tasks : tasksModel});
}
exports.addNew = function(req,res){
	res.render('tasks/new');
}
exports.save = function(req,res){
	tasksModel.push(req.body.newTask);
	res.render('tasks/index',{tasks : tasksModel});
}