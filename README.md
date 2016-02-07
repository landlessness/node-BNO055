
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

Change the mounting position of the sensor. See section 3.4 Axis remap in the datasheet for details.

```js
var imu = new BNO055({
        orientation: BNO055.orientation(BNO055.AXIS_REMAP_Y, BNO055.AXIS_REMAP_X, BNO055.AXIS_REMAP_Z, 0,1,0)
    });
```

Resuse the sensor's calibration data.  See section 3.10 Calibration for details on manual calibration.

```js
// get calibration values, and save for later
var calibrationData;

imu.getCalibrationData(function(err, results) {
    if (!err && results) {
        calibrationData = results;
    }
});


//then use that data later when initializing the sensor
var imu = new BNO055({
    calibration: calibrationData
});
```

## Datasheet

https://www.adafruit.com/datasheets/BST_BNO055_DS000_12.pdf 