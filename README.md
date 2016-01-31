
# node-BNO055

## Installation

Install i2c following instructions here:
https://github.com/kelly/node-i2c

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
            calibrationStatus: imu.getCalibrationStatus.bind(imu),
            quaternion: imu.getQuaternion.bind(imu),
            euler: imu.getEuler.bind(imu),
            linearAcceleration: imu.getLinearAcceleration.bind(imu)
        },
        function(err, results) {
            console.info( 'imu: ', JSON.stringify(results) );
        });
    }, 1000);
});
```


#TODO: cache calibration
Usage