var BNO055 = require('../lib/BNO055');

bno055 = new BNO055('/dev/i2c-1', function(err, res) {
    console.log('after begin')
    bno055.readEuler(function(err, res) {
        console.log('euler: ' + res);
    });    
});

