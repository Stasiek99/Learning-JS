function sayHello(){
    console.log("Witaj świecie");
}

sayHello();

const sayHello2 = function(){
    console.log("Cześć!");
}

sayHello2();

const sayHello3 = function hello(){
    hello();

    console.log("Witam!");
}

sayHello3();