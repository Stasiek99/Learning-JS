const person = {
    "firstName": "Jan",
    "lastName": "Kowalski",
    "age": 30,
    "hobbies": ["IT", "sport", "podróżowanie"]
};

const data = `
{
    "firstName": "Jan",
    "lastName": "Kowalski",
    "age": 30,
    "hobbies": ["IT", "sport", "podróżowanie"]
}
`;

const parsed = JSON.parse(data);

console.log(parsed);

console.log(JSON.stringify(person, null, 4));
