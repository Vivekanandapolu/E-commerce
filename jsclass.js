class Person {
    constructor(name, age, salary) {
        this.name = name,
            this.age = age,
            this.salary = salary
    }
    details(name) {
        console.log(name, this.age, this.salary);
    }
}

let person = new Person("vivek", 23, 50000)
person.details("prasad")