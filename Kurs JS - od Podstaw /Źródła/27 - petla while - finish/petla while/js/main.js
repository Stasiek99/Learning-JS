let number = 10;

while(number > 0) {
    console.log(number);
    number--;
}

const secretNumber = 2;

while(prompt("Podaj liczbę") != secretNumber) {
    alert("Nie trafiłeś!");
}

alert("Brawo!");
