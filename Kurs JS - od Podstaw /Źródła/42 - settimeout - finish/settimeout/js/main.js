function sayHello() {
    console.log("Witaj świecie!");
}

const timeout = setTimeout(sayHello, 3000);

document.querySelector("#cancel").onclick = function() {
    clearTimeout(timeout);
};
