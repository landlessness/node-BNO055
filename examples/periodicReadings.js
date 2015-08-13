var BNO055 = require('../lib/BNO055');
var async = require('async');
var bno055;

bno055 = new BNO055();

readEuler = function() {
  bno055.getEuler(function(err,res) {
    if (err) return callback(err);
    console.log('euler: ' + JSON.stringify(res));
  });
};

readAll = function() {

  async.series({
  getTemperature: function(callback) { 
    bno055.getTemperature(function(err,res) {
      if (err) return callback(err);
      console.log('temperature: ' + JSON.stringify(res));
      callback(null,res);
  })},
  getEuler: function(callback) { 
    bno055.getEuler(function(err,res) {
      if (err) return callback(err);
      console.log('euler: ' + JSON.stringify(res));
      callback(null,res);
  })},
  getQuaternion: function(callback) { 
    bno055.getQuaternion(function(err,res) {
      if (err) return callback(err);
      console.log('quaternion: ' + JSON.stringify(res));
      callback(null,res);
  })},
  getMagnetometer: function(callback) { 
    bno055.getMagnetometer(function(err,res) {
      if (err) return callback(err);
      console.log('magnetometer: ' + JSON.stringify(res));
      callback(null,res);
  })},
  getAccelerometer: function(callback) { 
    bno055.getAccelerometer(function(err,res) {
      if (err) return callback(err);
      console.log('accelerometer: ' + JSON.stringify(res));
      callback(null,res);
  })},
  getLinearAcceleration: function(callback) { 
    bno055.getLinearAcceleration(function(err,res) {
      if (err) return callback(err);
      console.log('linear acceleration: ' + JSON.stringify(res));
      callback(null,res);
  })},
  getGravity: function(callback) { 
    bno055.getGravity(function(err,res) {
      if (err) return callback(err);
      console.log('gravity: ' + JSON.stringify(res));
      callback(null,res);
  })},
  getGyroscope: function(callback) { 
    bno055.getGyroscope(function(err,res) {
      if (err) return callback(err);
      console.log('gyroscope: ' + JSON.stringify(res));
      callback(null,res);
  })}
  }, function(err,res) {
    if (err)
      throw (err)
    console.log("\n\n");
  });
}

readStatus = function() {

  async.series({

  getCalibrationStatus: function(callback) {
    bno055.getCalibrationStatus(function(err,res) {
      if (err) return callback(err);
      console.log('calibration status: ' + JSON.stringify(res));
      callback(null,res);
  })},
  getSystemStatus: function(callback) {
    bno055.getSystemStatus(function(err,res) {
      if (err) return callback(err);
      console.log('system status: ' + JSON.stringify(res));
      callback(null,res);
  })}
  }, function(err,res) {
    if (err)
      throw (err)
    console.log("\n\n");
  });
}

async.series({
  begin: function(callback) { 
    bno055.beginNDOF(function(err,res) {
      console.log('began successfully? ' + res);
      callback(err, res);
  })},
  setInterval: function(callback) {
    var interval = setInterval(readAll, 500);
    callback(null, interval);
  }}, 
  function(err,res) {
    if (err) throw (err)
    console.log("\n\n");
  }
);
