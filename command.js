var fs = require('fs');

exports.pwd = function(str) {
	process.stdout.write(process.env.PWD);
	process.stdout.write('\nprompt > ');
};

exports.date = function(str) {
	var now = new Date();
	process.stdout.write(now.toString());
	process.stdout.write('\nprompt > ');
};

exports.ls = function(str) {
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

exports.cat = function(str){
	fs.readFile('./'+str, (err, data) => {
		if (err) throw err;
		process.stdout.write(data);
		process.stdout.write('\nprompt > ');

	});

}
