const arr = ["Tomek", "Ania", "Jacek", "Mariusz"];

// arr.length = 0;

// const last = arr.pop();
// const first = arr.shift();

const removed = arr.splice(arr.indexOf("Jacek"), 1);

console.log(removed);
// console.log(last);
console.log(arr);
