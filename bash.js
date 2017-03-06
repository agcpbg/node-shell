var fs = require('fs');


var commands = require('./command');



// Output a prompt
process.stdout.write('prompt > ');

process.stdin.on('data', function (data) {
  var arr = data.toString().trim().split(' ');
  var cmd = arr.shift();
  var argstr = arr.join(' ');


  commands[cmd](argstr);
});

