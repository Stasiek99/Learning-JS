const fs = require("fs");

console.log("Witaj świecie!");

console.log(global === globalThis);

fs.writeFile(`${__dirname}/hello.txt`, "Witaj świecie!", function(err) {
    if(err) {
        console.log("Wystąpił błąd", err);
    } else {
        console.log("Zapisano plik!");
    }
});
