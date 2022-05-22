const person = {
    firstName: "Jan",
    lastName: "Kowalski",
    sayHello() {
        console.log(`Cześć! Mam na imię ${this.firstName}`);
    },
    setFirstName(newName) {
        this.firstName = newName;
    }
};

person.sayHello();
person.setFirstName("Jacek");
person.sayHello();
