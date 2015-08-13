var BNO055 = require('../lib/BNO055');
var async = require('async');
var bno055;

bno055 = new BNO055();

async.series({
  begin: function(callback) { 
    bno055.beginNDOF(function(err,res) {
      if (err) return callback(err);
      console.log('began successfully? ' + res);
      callback(null, res);
  })},
  chipIdentifier: function(callback) { 
    bno055.validateChipIdentifier(function(err,res) {
      if (err) return callback(err);
      console.log('valid chip identifier? ' + res);
      callback(null, res);
  })},
  config: function(callback) { 
    bno055.setModeConfig(function(err,res) {
      if (err) return callback(err);
      console.log('config mode: ' + formatHex(res));
      callback(null, res);
  })},
  verifyConfig: function(callback) { 
    bno055.getMode(function(err,res) {
      if (err) return callback(err);
      console.log('operating mode: ' + formatHex(res));
      callback(null, res);
  })},
  ndof: function(callback) { 
    bno055.setModeNDOF(function(err,res) {
      if (err) return callback(err);
      console.log('nine degrees of freedom mode: ' + formatHex(res));
      callback(null, res);
  })},
  ndofVerify: function(callback) { 
    bno055.getMode(function(err,res) {
      if (err) return callback(err);
      console.log('operating mode: ' + formatHex(res));
      callback(null,res);
  })},
  getEuler: function(callback) { 
    bno055.getEuler(function(err,res) {
      if (err) return callback(err);
      console.log('euler: ' + JSON.stringify(res));
      callback(null,res);
  })},
  reset: function(callback) {
    bno055.reset(function(err) {
      if (err) return callback(err);
      console.log('reset');
      callback(null, null);
  })}
}, function(err,res) {
  if (err)
    throw (err)
  console.log('series results: ' + JSON.stringify(res));
});

var formatHex = function(hexValue) {
  var value;
  
  if (Buffer.isBuffer(hexValue)) {
    value = hexValue.toString('hex')
  } else {
    value = hexValue.toString(16)
  }
  
  return ('0x' + ('00' + value).slice(-2));
};