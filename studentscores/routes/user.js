var students = {};
var fs = require('fs');
var list = fs.readFileSync('./public/studentScores.html','utf-8');
/*
 * GET users listing.
 */

exports.list = function(req, res){
	res.render('studentList',{students:students});
};
exports.add = function(req, res){
	var studentInfo = req.body;
	students[studentInfo.studentName] = studentInfo;
	
	res.redirect('/list');
}
