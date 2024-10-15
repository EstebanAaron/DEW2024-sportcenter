const Activity = require('./activity')
const Facility = require('./facility')
const Instructor = require('./instructor')
const Service = require('./service')

class SportCenter {
  #services
  #instructor
  constructor (name, fee, membership = 0) {
    this.name = name
    this.fee = fee
    this.membership = membership
    this.#services = []
    this.#instructor = []
  }

  income () {
    return this.fee * this.membership
  }

  getServices () {
    return this.#services
  }

  addService (...services) {
    services.forEach(service => {
      if (service instanceof Service && !this.#services.includes(service)) {
        this.#services.push(service)
      }
    })
  }

  removeService (service) {
    if (this.#services.indexOf(service) != -1) {
      this.#services.splice(this.#services.indexOf(service), 1)
    }
  }

  getFacilities () {
    return this.#services.filter(service => {
      if (service instanceof Facility) {
        return service
      }
    })
  }

  getActivities () {
    return this.#services.filter(service => {
      if (service instanceof Activity) {
        return service
      }
    })
  }

  orderServicesBy (order) {
    if (order == 'name') {
      return this.#services.sort((a, b) => a.name.localeCompare(b.name))
    }
    if (order === 'rating') {
      return this.#services.sort((b, a) => a.rating - b.rating)
    }
  }

  getInstructors () {
    return this.#instructor
  }

  addInstructor (instructor) {
    if (instructor instanceof Instructor && !this.#instructor.includes(instructor)) {
      this.#instructor.push(instructor)
    }
  }

  removeInstructor (instructor) {
    if (instructor instanceof Instructor && this.#instructor.includes(instructor)) {
      this.#instructor.splice(this.#instructor.indexOf(instructor), 1)
    }
  }

  listInstructorsActivities () {
    const finalarray = []

    this.getInstructors().forEach(instructor => {
      const array1 = []
      array1.push(instructor.name)

      instructor.ledActivities.forEach(activity => {
        array1.push(activity.name)
      })
      finalarray.push(array1)
    })
    return finalarray
  }

  costServices () {
    let total = 0
    this.getServices().forEach(service => {
      total += service.calculateCost()
    })
    return total
  }

  costInstructors () {
    let total = 0
    this.getInstructors().forEach(instructor => {
      total += instructor.salary
    })
    return total
  }
}
module.exports = SportCenter
