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
    var interval = setInterval(readEuler, 100);
    callback(null, interval);
  }}, 
  function(err,res) {
    if (err) throw (err)
    console.log("\n\n");
  }
);
