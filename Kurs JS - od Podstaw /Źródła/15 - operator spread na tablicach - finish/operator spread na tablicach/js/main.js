const arr1 = [1, 2, 3];

// const arr2 = arr1.concat([4, 5, 6]);

const arr2 = [...arr1, ...[4, 5, 6]];

console.log(arr2);
