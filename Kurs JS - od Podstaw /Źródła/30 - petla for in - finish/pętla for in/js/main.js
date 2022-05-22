const person = {
    "imię": "Maciej",
    "nazwisko": "Kowalski",
    "wiek": 32
};

for(let key in person) {
    console.log(`${key}: ${person[key]}`);
}

const person2 = {};

for(let key in person) {
    person2[key] = person[key];
}

console.log(person2);
console.log(person === person2);
