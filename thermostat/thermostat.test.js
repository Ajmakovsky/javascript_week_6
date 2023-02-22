const ThermostatClass = require("./thermostat");

describe("Thermostat", () => {
  let thermostat;

  beforeEach(() => {
    thermostat = new ThermostatClass();
  });

  it("Returns the initial thermometer temp", () => {
    expect(thermostat.getTemperature()).toBe(20);
  });

  it("Increases the thermometer temp once to 21", () => {
    thermostat.upTemp();
    expect(thermostat.getTemperature()).toBe(21);
  });

  it("Decreases the thermometer temp once to 19", () => {
    thermostat.downTemp();
    expect(thermostat.getTemperature()).toBe(19);
  });

  it("Increases the thermometer temp 6 times - max is 25", () => {
    thermostat.upTemp();
    thermostat.upTemp();
    thermostat.upTemp();
    thermostat.upTemp();
    thermostat.upTemp();
    thermostat.upTemp();
    expect(thermostat.getTemperature()).toBe(25);
  });

  it("turns off powersaving mode", () => {
    thermostat.PowerSaving(false);
    thermostat.upTemp();
    thermostat.upTemp();
    thermostat.upTemp();
    thermostat.upTemp();
    thermostat.upTemp();
    thermostat.upTemp();
    expect(thermostat.getTemperature()).toBe(26);
  });

  it("resets the thermostat temp to 20", () => {
    thermostat.upTemp();
    expect(thermostat.getTemperature()).toBe(21);
    thermostat.reset();
    expect(thermostat.getTemperature()).toBe(20);
  });

  it('returns "low energy usage" when the temp is 17', () => {
    thermostat.downTemp();
    thermostat.downTemp();
    thermostat.downTemp();
    expect(thermostat.CurrentEnergyUsage()).toBe("Low-usage");
  });

  it('returns "medium energy usage" when the temp is 20', () => {
    expect(thermostat.CurrentEnergyUsage()).toBe("Medium-usage");
  });

  it('returns "high energy usage" when the temp is 26', () => {
    thermostat.PowerSaving(false);

    thermostat.upTemp();
    thermostat.upTemp();
    thermostat.upTemp();
    thermostat.upTemp();
    thermostat.upTemp();
    thermostat.upTemp();

    expect(thermostat.CurrentEnergyUsage()).toBe("High-usage");
  });

});
