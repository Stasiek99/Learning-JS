const isLoggedIn = false;
const hasSubscription = true;

if(isLoggedIn && hasSubscription) {
    console.log("Dziękujemy za zakup abonamentu!");
}

const firstName = "Jacek";
const lastName = "Kowalski";

if(firstName === "Jacek" || lastName === "Nowak") {
    console.log("Jacek lub Nowak");
}

const name = "Piotr";

if(!name) {
    console.log("Imię nie zostało podane!");
}
