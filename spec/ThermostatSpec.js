describe('Thermostat', function() {
  var thermostat

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  describe('checks temp', function() {
    it ('returns a default temp 20', function() {
      expect(thermostat.currentTemp()).toEqual(thermostat.defaultTemp);
    });
  });

  describe('changes temp', function() {
    it ('can increase the temp', function() {
      var tempTest = thermostat.temp;
      expect(thermostat.increase()).toEqual(tempTest+1);
    });
    it ('can decrease the temp', function() {
      var tempTest = thermostat.temp;
      expect(thermostat.decrease()).toEqual(tempTest-1);
    });
    it ('can reset the temp to default temperature', function() {
      var tempTest = thermostat.temp+1;
      expect(thermostat.reset()).toEqual(thermostat.defaultTemp);
    });
  });

  describe('temp limits', function() {
    it ('minimum is 10', function() {
      expect(thermostat.isAboveMin(thermostat.temp)).toBe(true);
    });
    it ('minimum is 10', function() {
      expect(thermostat.isAboveMin(8)).toBe(false);
    });
    it ('does not reduce temp below 10', function() {
      thermostat.temp = 10
      expect(thermostat.decrease()).toEqual(10);
    });
    it ('can switch mode', function() {
      thermostat.switchMode()
      expect(thermostat.powerSave).toBe(false);
    });
    it ('has a maximum limit of 32 whilst powerSave is off', function() {
      thermostat.switchMode()
      expect(thermostat.maxTemp).toBe(32);
      thermostat.temp = 32
      expect(thermostat.increase()).toEqual(32);
    });
    it ('has a maximum limit of 25 whilst powerSave is on', function() {
      expect(thermostat.maxTemp).toBe(25);
      thermostat.temp = 25
      expect(thermostat.increase()).toEqual(25);
    });
  });

});