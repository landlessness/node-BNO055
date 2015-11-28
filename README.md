
# node-BNO055

## Installation

```sh
$ npm install --save bno-055
```

## Usage

```js

var BNO055 = require('bno-055');

var async = require('async');

var imu = new BNO055();

imu.beginNDOF(function() {
    console.info('imu running');

    setInterval(function() {
        async.series({
            temperature: imu.getTemperature
            quaternion: imu.getQuaternion
            euler: imu.getEuler
            linearAcceleration: imu.getLinearAcceleration
        },
        function(err, results) {
            console.info( 'imu: ', JSON.stringify(results) );
        });
    }, 1000);
});
```


#TODO: cache calibration
Usage