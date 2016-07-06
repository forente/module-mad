
var a = require('./moduleOne.js');
var b = require('./moduleTwo.js');

module.exports.value = b.convert(a.ammount);
module.exports.message = function(){
  return  '\nAccount balance: \n';
};

//console.log(module.exports.message() + module.exports.value);
