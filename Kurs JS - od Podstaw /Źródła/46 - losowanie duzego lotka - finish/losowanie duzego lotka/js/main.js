// 1. Znajdź sposób na generowanie losowej liczby
// 2. Stwórz funkcję, do losowania liczb z podanego przedziału
// 3. Stwórz funkcję, która wylosuje 6 liczb z przedziału 1-49
// 4. Wyświetl wylosowane liczby
// 5. Dodaj mechanizm, który nie pozwoli wylosować drugi raz tej samej liczby

function getRandom(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

function getRandomNumbers() {
    const numbers = [];
    let random;

    for(let i = 0; i < 6; i++) {
        random = getRandom(1, 49);

        while(numbers.includes(random)) {
            random = getRandom(1, 49);
            console.log(`Powtórzyła się liczba ${random}`);
        }

        numbers.push(random);
    }

    return numbers;
}

const numbers = getRandomNumbers();

console.log(`Wylosowane liczby to: ${numbers.join(", ")}`);
