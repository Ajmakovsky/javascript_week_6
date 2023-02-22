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
});
