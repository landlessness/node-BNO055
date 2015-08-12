var i2c = require('i2c');

// I2C addresses
var BNO055_ADDRESS_A                     = 0x28;
var BNO055_ADDRESS_B                     = 0x29;
var BNO055_ID                            = 0xA0;

// Page id register definition
var BNO055_PAGE_ID_ADDR                  = 0X07;

// PAGE0 REGISTER DEFINITION START
var BNO055_CHIP_ID_ADDR                  = 0x00;
var BNO055_ACCEL_REV_ID_ADDR             = 0x01;
var BNO055_MAG_REV_ID_ADDR               = 0x02;
var BNO055_GYRO_REV_ID_ADDR              = 0x03;
var BNO055_SW_REV_ID_LSB_ADDR            = 0x04;
var BNO055_SW_REV_ID_MSB_ADDR            = 0x05;
var BNO055_BL_REV_ID_ADDR                = 0X06;

// Accel data register
var BNO055_ACCEL_DATA_X_LSB_ADDR         = 0X08;
var BNO055_ACCEL_DATA_X_MSB_ADDR         = 0X09;
var BNO055_ACCEL_DATA_Y_LSB_ADDR         = 0X0A;
var BNO055_ACCEL_DATA_Y_MSB_ADDR         = 0X0B;
var BNO055_ACCEL_DATA_Z_LSB_ADDR         = 0X0C;
var BNO055_ACCEL_DATA_Z_MSB_ADDR         = 0X0D;

// Mag data register
var BNO055_MAG_DATA_X_LSB_ADDR           = 0X0E;
var BNO055_MAG_DATA_X_MSB_ADDR           = 0X0F;
var BNO055_MAG_DATA_Y_LSB_ADDR           = 0X10;
var BNO055_MAG_DATA_Y_MSB_ADDR           = 0X11;
var BNO055_MAG_DATA_Z_LSB_ADDR           = 0X12;
var BNO055_MAG_DATA_Z_MSB_ADDR           = 0X13;

// Gyro data registers
var BNO055_GYRO_DATA_X_LSB_ADDR          = 0X14;
var BNO055_GYRO_DATA_X_MSB_ADDR          = 0X15;
var BNO055_GYRO_DATA_Y_LSB_ADDR          = 0X16;
var BNO055_GYRO_DATA_Y_MSB_ADDR          = 0X17;
var BNO055_GYRO_DATA_Z_LSB_ADDR          = 0X18;
var BNO055_GYRO_DATA_Z_MSB_ADDR          = 0X19;

// Euler data registers
var BNO055_EULER_H_LSB_ADDR              = 0X1A;
var BNO055_EULER_H_MSB_ADDR              = 0X1B;
var BNO055_EULER_R_LSB_ADDR              = 0X1C;
var BNO055_EULER_R_MSB_ADDR              = 0X1D;
var BNO055_EULER_P_LSB_ADDR              = 0X1E;
var BNO055_EULER_P_MSB_ADDR              = 0X1F;

// Quaternion data registers
var BNO055_QUATERNION_DATA_W_LSB_ADDR    = 0X20;
var BNO055_QUATERNION_DATA_W_MSB_ADDR    = 0X21;
var BNO055_QUATERNION_DATA_X_LSB_ADDR    = 0X22;
var BNO055_QUATERNION_DATA_X_MSB_ADDR    = 0X23;
var BNO055_QUATERNION_DATA_Y_LSB_ADDR    = 0X24;
var BNO055_QUATERNION_DATA_Y_MSB_ADDR    = 0X25;
var BNO055_QUATERNION_DATA_Z_LSB_ADDR    = 0X26;
var BNO055_QUATERNION_DATA_Z_MSB_ADDR    = 0X27;

// Linear acceleration data registers
var BNO055_LINEAR_ACCEL_DATA_X_LSB_ADDR  = 0X28;
var BNO055_LINEAR_ACCEL_DATA_X_MSB_ADDR  = 0X29;
var BNO055_LINEAR_ACCEL_DATA_Y_LSB_ADDR  = 0X2A;
var BNO055_LINEAR_ACCEL_DATA_Y_MSB_ADDR  = 0X2B;
var BNO055_LINEAR_ACCEL_DATA_Z_LSB_ADDR  = 0X2C;
var BNO055_LINEAR_ACCEL_DATA_Z_MSB_ADDR  = 0X2D;

// Gravity data registers
var BNO055_GRAVITY_DATA_X_LSB_ADDR       = 0X2E;
var BNO055_GRAVITY_DATA_X_MSB_ADDR       = 0X2F;
var BNO055_GRAVITY_DATA_Y_LSB_ADDR       = 0X30;
var BNO055_GRAVITY_DATA_Y_MSB_ADDR       = 0X31;
var BNO055_GRAVITY_DATA_Z_LSB_ADDR       = 0X32;
var BNO055_GRAVITY_DATA_Z_MSB_ADDR       = 0X33;

// Temperature data register
var BNO055_TEMP_ADDR                     = 0X34;

// Status registers
var BNO055_CALIB_STAT_ADDR               = 0X35;
var BNO055_SELFTEST_RESULT_ADDR          = 0X36;
var BNO055_INTR_STAT_ADDR                = 0X37;

var BNO055_SYS_CLK_STAT_ADDR             = 0X38;
var BNO055_SYS_STAT_ADDR                 = 0X39;
var BNO055_SYS_ERR_ADDR                  = 0X3A;

// Unit selection register
var BNO055_UNIT_SEL_ADDR                 = 0X3B;
var BNO055_DATA_SELECT_ADDR              = 0X3C;

// Mode registers
var BNO055_OPR_MODE_ADDR                 = 0X3D;
var BNO055_PWR_MODE_ADDR                 = 0X3E;

var BNO055_SYS_TRIGGER_ADDR              = 0X3F;
var BNO055_TEMP_SOURCE_ADDR              = 0X40;

// Axis remap registers
var BNO055_AXIS_MAP_CONFIG_ADDR          = 0X41;
var BNO055_AXIS_MAP_SIGN_ADDR            = 0X42;

// Axis remap values
var AXIS_REMAP_X                         = 0x00;
var AXIS_REMAP_Y                         = 0x01;
var AXIS_REMAP_Z                         = 0x02;
var AXIS_REMAP_POSITIVE                  = 0x00;
var AXIS_REMAP_NEGATIVE                  = 0x01;

// SIC registers
var BNO055_SIC_MATRIX_0_LSB_ADDR         = 0X43;
var BNO055_SIC_MATRIX_0_MSB_ADDR         = 0X44;
var BNO055_SIC_MATRIX_1_LSB_ADDR         = 0X45;
var BNO055_SIC_MATRIX_1_MSB_ADDR         = 0X46;
var BNO055_SIC_MATRIX_2_LSB_ADDR         = 0X47;
var BNO055_SIC_MATRIX_2_MSB_ADDR         = 0X48;
var BNO055_SIC_MATRIX_3_LSB_ADDR         = 0X49;
var BNO055_SIC_MATRIX_3_MSB_ADDR         = 0X4A;
var BNO055_SIC_MATRIX_4_LSB_ADDR         = 0X4B;
var BNO055_SIC_MATRIX_4_MSB_ADDR         = 0X4C;
var BNO055_SIC_MATRIX_5_LSB_ADDR         = 0X4D;
var BNO055_SIC_MATRIX_5_MSB_ADDR         = 0X4E;
var BNO055_SIC_MATRIX_6_LSB_ADDR         = 0X4F;
var BNO055_SIC_MATRIX_6_MSB_ADDR         = 0X50;
var BNO055_SIC_MATRIX_7_LSB_ADDR         = 0X51;
var BNO055_SIC_MATRIX_7_MSB_ADDR         = 0X52;
var BNO055_SIC_MATRIX_8_LSB_ADDR         = 0X53;
var BNO055_SIC_MATRIX_8_MSB_ADDR         = 0X54;

// Accelerometer Offset registers
var ACCEL_OFFSET_X_LSB_ADDR              = 0X55;
var ACCEL_OFFSET_X_MSB_ADDR              = 0X56;
var ACCEL_OFFSET_Y_LSB_ADDR              = 0X57;
var ACCEL_OFFSET_Y_MSB_ADDR              = 0X58;
var ACCEL_OFFSET_Z_LSB_ADDR              = 0X59;
var ACCEL_OFFSET_Z_MSB_ADDR              = 0X5A;

// Magnetometer Offset registers
var MAG_OFFSET_X_LSB_ADDR                = 0X5B;
var MAG_OFFSET_X_MSB_ADDR                = 0X5C;
var MAG_OFFSET_Y_LSB_ADDR                = 0X5D;
var MAG_OFFSET_Y_MSB_ADDR                = 0X5E;
var MAG_OFFSET_Z_LSB_ADDR                = 0X5F;
var MAG_OFFSET_Z_MSB_ADDR                = 0X60

// Gyroscope Offset register s
var GYRO_OFFSET_X_LSB_ADDR               = 0X61;
var GYRO_OFFSET_X_MSB_ADDR               = 0X62;
var GYRO_OFFSET_Y_LSB_ADDR               = 0X63;
var GYRO_OFFSET_Y_MSB_ADDR               = 0X64;
var GYRO_OFFSET_Z_LSB_ADDR               = 0X65;
var GYRO_OFFSET_Z_MSB_ADDR               = 0X66;

// Radius registers
var ACCEL_RADIUS_LSB_ADDR                = 0X67;
var ACCEL_RADIUS_MSB_ADDR                = 0X68;
var MAG_RADIUS_LSB_ADDR                  = 0X69;
var MAG_RADIUS_MSB_ADDR                  = 0X6A;

// Power modes
var POWER_MODE_NORMAL                    = 0X00;
var POWER_MODE_LOWPOWER                  = 0X01;
var POWER_MODE_SUSPEND                   = 0X02;

// Operation mode settings
var OPERATION_MODE_CONFIG                = 0X00;
var OPERATION_MODE_ACCONLY               = 0X01;
var OPERATION_MODE_MAGONLY               = 0X02;
var OPERATION_MODE_GYRONLY               = 0X03;
var OPERATION_MODE_ACCMAG                = 0X04;
var OPERATION_MODE_ACCGYRO               = 0X05;
var OPERATION_MODE_MAGGYRO               = 0X06;
var OPERATION_MODE_AMG                   = 0X07;
var OPERATION_MODE_IMUPLUS               = 0X08;
var OPERATION_MODE_COMPASS               = 0X09;
var OPERATION_MODE_M4G                   = 0X0A;
var OPERATION_MODE_NDOF_FMC_OFF          = 0X0B;
var OPERATION_MODE_NDOF                  = 0X0C;

var BNO055 = module.exports = function() {
  console.log("constructor");
  this.wire = new i2c(BNO055_ADDRESS_A, {device: arguments[0]});
  this.begin(OPERATION_MODE_NDOF, function(err, res) {
    if (err) {
      throw (err);
    }
    console.log('begin results: ' + res)
  });
};


BNO055.prototype.setMode = function(mode, cb) {
  console.log("setMode");
  this.wire.writeBytes(BNO055_OPR_MODE_ADDR, [mode & 0xFF], function(err) {
    if (err) {
      throw(err);
    }
    cb(err);
  });
}

BNO055.prototype.configMode = function(cb) {
  console.log("configMode");
  this.setMode(OPERATION_MODE_CONFIG, function(err) {
    if (err) {
      throw(err);
    }
    cb(err);
  });
}

// Initialize the BNO055 sensor.  Must be called once before any other
// BNO055 library functions.  Will return True if the BNO055 was
// successfully initialized, and False otherwise.
BNO055.prototype.begin = function(mode, cb) {
  console.log("begin");
  var self = this;
  this.normalOperationMode = mode;
  this.wire.writeBytes(BNO055_PAGE_ID_ADDR, [0], function(err) {
    if (err) {
      console.log('ignore err on begin: ' + err);
    }
    self.configMode(function(err, res) {
      if (err) {
        throw(err);
      }
      self.wire.writeBytes(BNO055_PAGE_ID_ADDR, [0], function(err) {
        if (err) {
          throw(err);
        }
        self.wire.readBytes(BNO055_CHIP_ID_ADDR, 1, function(err, res) {
          if (err) {
            throw(err);
          }
          if (BNO055_ID !== res) {
            console.log('Expected BNO055_ID: ' + BNO055_ID);
            console.log('Actual BNO055_ID: ' + res);
            cb(err, false);
          }
          
        });
      })
    });
  });
}

BNO055.prototype.readVector = function(address, count, cb) {
  console.log("readVector");
  console.log('count: ' + count);
  // Read count number of 16-bit signed values starting from the provided
  // address. Returns a tuple of the values that were read.
  data = this.wire.readBytes(address, count*2, function(err, data) {
    if (err) {
      throw (err);
    }
    console.log(data);
    cb(err, [1,2,3]);
  });
}

BNO055.prototype.readEuler = function(cb) {
  console.log("readEuler");
  // heading, roll, pitch
  this.readVector(BNO055_EULER_H_LSB_ADDR, 3, function(err, data) {
    if (err) {
      throw (err);
    }
    for (i=0; i < data.length; i++) {
      data[i] /= 16;
    }
    cb(err, data)
  });
}