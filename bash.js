
var commands = require('./command');



// Output a prompt
process.stdout.write('prompt > ');

process.stdin.on('data', function (data) {
  var cmd = data.toString().toLowerCase().trim(); // remove the newline

  var output = commands[cmd];
  process.stdout.write(output());

  process.stdout.write('\nprompt > ');

});

