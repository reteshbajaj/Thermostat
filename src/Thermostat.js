var Thermostat = function() {
  this.defaultTemp = 20;
  this.temp = this.defaultTemp;
  this.powerSave = true;
  this.maxTemp = 25;
};

Thermostat.prototype.currentTemp = function() {
  return this.temp;
};

Thermostat.prototype.increase = function() {
  if (this.isBelowMax(this.temp)){
    return this.temp += 1;
   } else {
    return this.temp;
  };
};

Thermostat.prototype.decrease = function() {
  if (this.isAboveMin(this.temp)){
    return this.temp -= 1;
   } else {
    return this.temp;
  };
};

Thermostat.prototype.reset = function() {
  return this.temp = this.defaultTemp;
};

Thermostat.prototype.isAboveMin = function(number) {
  if (number > 10) {
  return true;
  } else {
  return false;
  };
};

Thermostat.prototype.switchMode = function() {
  if (this.powerSave === true) {
    this.powerSave = false;
    this.maxTemp = 32;
  } else {
    this.powerSave = true;
    this.maxTemp = 25;
  };
};

Thermostat.prototype.isBelowMax = function(number) {
  if (number < this.maxTemp) {
  return true;
  } else {
  return false;
  };
};

