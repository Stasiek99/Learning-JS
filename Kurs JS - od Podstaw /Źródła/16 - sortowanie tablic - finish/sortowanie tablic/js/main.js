const arr = [10, 2, 5, 39, 1, 100];

console.log(arr);

arr.sort(function(a, b) {
    return a - b;
    // if(a < b) {
    //     return -1;
    // }

    // if(a > b) {
    //     return 1;
    // }

    // return 0;
});

console.log(arr);
