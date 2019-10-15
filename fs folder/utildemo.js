var util = require('util');

var os = require('os');

console.log("OS platform is ", os.version());

console.log('***********************************')

var str = "Congratulate %s on his %dth birthday";

var message = util.format(str, "David", 11);

console.log(message);