var fs = require('fs');

exports.pwd = function(cmd) {
	return process.env.PWD;
};

exports.date = function() {
	var now = new Date();
	return now.toString();
};

exports.ls = function() {
	var filesArr;

	fs.readdir('.', function(err, files) {
		if(err) throw err;
		filesArr = files.map(function(file) {
			file.toString() + "\n";
		});

		return filesArr;
	})


};