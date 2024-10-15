class Service {
  name
  ratings = new Array(0)

  constructor (name) {
    this.name = name
  }

  giveRating (rating) {
    this.ratings.push(rating)
  }

  get rating () {
    if (this.ratings.length == 0) {
      return 0
    }
    let result = 0
    this.ratings.forEach(element => {
      result = result + element
    })
    return Number((result / this.ratings.length).toFixed(2))
  }

  calculateCost () {

  }
}

module.exports = Service
