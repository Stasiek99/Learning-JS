const person = {
    firstName: "Jan",
    "last-name": "Kowalski"
};

console.log(person.firstName);

person.firstName = "Jacek";

console.log(person["last-name"]);

person.job = "programista";

delete person.firstName;

console.log(person);
