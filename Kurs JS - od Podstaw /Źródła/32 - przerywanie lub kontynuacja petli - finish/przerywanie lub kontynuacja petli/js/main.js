for(let i = 0; i <= 20; i++) {
    if(i % 2 !== 0) {
        continue;
    }

    // console.log(i);
}

const numbers = [2, 3, 6, 100, 0, 52, 11];
let containsZero = false;

for(let number of numbers) {
    if(number === 0) {
        containsZero = true;
        break;
    }

    console.log(number);
}
