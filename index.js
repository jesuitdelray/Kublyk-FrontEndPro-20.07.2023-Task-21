class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    displayInfo() {
        console.log(`Ім'я: ${this.name}, Вік: ${this.age}`)
    }
}

class Car {
    constructor(brand, model, year, licensePlate) {
        this.brand = brand
        this.model = model
        this.year = year
        this.licensePlate = licensePlate
    }

    setOwner(owner) {
        if (owner.age >= 18) {
            this.owner = owner
        } else {
            console.log(`Власник повинен бути старше 18 років.`)
        }
    }

    displayCarInfo() {
        console.log(
            `Марка: ${this.brand}, Модель: ${this.model}, Рік: ${this.year}, Номерний знак: ${this.licensePlate}`
        )
        if (this.owner) {
            console.log(`Інформація про власника:`)
            this.owner.displayInfo()
        } else {
            console.log(`Автомобіль ще не має власника.`)
        }
    }
}

const person1 = new Person("Іван", 25)
const person2 = new Person("Марія", 30)
const person3 = new Person("Петро", 17)

const car1 = new Car("Toyota", "Camry", 2022, "AA1234BB")
const car2 = new Car("Honda", "Civic", 2020, "BC5678CA")
const car3 = new Car("Ford", "Focus", 2019, "KH9876PP")

car1.setOwner(person1)
car2.setOwner(person2)
car3.setOwner(person3)

car1.displayCarInfo()
car2.displayCarInfo()
car3.displayCarInfo()
