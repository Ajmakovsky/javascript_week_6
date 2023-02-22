class Thermostat {
  constructor(){
    this.temperature = 20
    this.maxtemp = 25
  }

  getTemperature = () => {
    return this.temperature
  }

  upTemp = () => {
    if(this.temperature < this.maxtemp){
      this.temperature += 1
    }
  }

  downTemp = () => {
    if(this.temperature > 10){
      this.temperature -= 1
    }
  }

  PowerSaving = (state) => {
    if(state === true){
      this.maxtemp = 25
    }
    else if(state === false){
      this.maxtemp = 32
    }
  }

  reset = () => {
    this.temperature = 20
  }

  CurrentEnergyUsage = () => {
    if(this.temperature < 18){
      return "Low-usage"
    } else if(this.temperature <= 25){
      return "Medium-usage"
    } else {
      return "High-usage"
    }
  }

}

module.exports = Thermostat; 