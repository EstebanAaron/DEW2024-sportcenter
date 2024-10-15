class Client{
    #age
constructor(name, age=50) {
    this.name = name
    if (age <0) {
    this.#age=50
    }
    else{
      this.#age = age  
    }
}

get category(){
    if (this.#age<=21) {
        return "Promesa"
    }
    if (this.#age>20&& this.#age<=40) {
        return "Senior"
    }
    else{
        return "Veterano"
    }
}
get age(){
    return this.#age
}

turnedYearsOld(){
    this.#age++
}
set age(n){
    if (n>0) {
        this.#age=n
    }
}
}
module.exports =Client