let firstName = "Jacek";

let firstName2 = firstName;

firstName = "Piotr";

console.log(firstName2);

const arr = [1, 2, 3];
const arr2 = arr;

arr.push(4);

console.log(arr2);

const person = {
    firstName: "Jan"
};

const person2 = {
    firstName: "Jan"
};

console.log(person === person2);
console.log(arr === arr2);
