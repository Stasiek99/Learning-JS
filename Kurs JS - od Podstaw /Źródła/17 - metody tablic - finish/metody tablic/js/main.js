const arr = [1, 2, 33, 0, 8, 5];

const half = arr.slice(0, 3);

console.log(half);
console.log(arr);

console.log(arr.join(", "));

console.log(arr.includes(33));

console.log(arr.concat(half));
console.log(arr);

arr.forEach(function(value) {
    console.log(value);
});

const gt5 = arr.filter(function(value) {
    return value > 5;
});

console.log(gt5);

const negative = arr.map(function(value) {
    return value * -1;
});

console.log(negative);
