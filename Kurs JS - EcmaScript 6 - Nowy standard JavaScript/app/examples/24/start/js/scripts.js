class Person {

    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    sayHello() {
        return `${this.firstName} ${this.lastName}`;
    }

    static create({ fName: firstName, lName: lastname} = {}){
        return new Person(firstName, lastname);
    }
}

/*Person.create = function (firstName, lastName){
    return new Person(firstName, lastName);
};*/

let person1 = new Person("Jan", "Kowalski");

let person2 = Person.create("Anna", "Nowak");

let json = `{
    "fName": "Anna",
    "lName": "Kowalska"
}`;

let person2 = Person.create(JSON.parse(json));