var BNO055 = require('../lib/BNO055');
var bno055;

bno055 = new BNO055();

bno055.validateChipIdentifier(function(err,res) {
  console.log('Chip Identifier is Valid? ' + res);
});
