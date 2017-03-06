var fs = require('fs');

exports.pwd = function() {
	process.stdout.write(process.env.PWD);
	process.stdout.write('\nprompt > ');
};

exports.date = function() {
	var now = new Date();
	process.stdout.write(now.toString());
	process.stdout.write('\nprompt > ');
};

exports.ls = function() {
	 fs.readdir('.', function(err, files) {
		if(err) throw err;
		filesArr = files.forEach(function(file) {
			process.stdout.write(file+ "\n");
		});
		process.stdout.write('\nprompt > ');
	})
};

exports.echo = function(str){
	if(str[0] === '$'){
		var name = str.slice(1);
		process.stdout.write(process.env[name].toString());
	}

	process.stdout.write(str);
	process.stdout.write('\nprompt > ');

}
