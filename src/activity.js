const Service = require('./service')

class Activity extends Service {
  #instructor=null
  constructor (name, fixedCost = 0, variableCost = 0, assistance = 0) {
    super(name)
    this.fixedCost = fixedCost
    this.assistance = assistance
    this.variableCost = variableCost

  }
  get instructor(){
    return this.#instructor
  }

  calculateCost () {
    return this.fixedCost + this.variableCost * this.assistance
  }

  ledBy(instructor){
    this.#instructor=instructor
  }
}
module.exports = Activity
