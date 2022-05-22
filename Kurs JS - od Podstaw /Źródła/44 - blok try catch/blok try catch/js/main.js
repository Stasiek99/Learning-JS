function openDbConnection(){
    console.log("Otwieram połączenie do bazy danych");
}

function getData(){
    return data;  
}

function closeDbConnection(){
    console.log("Zamykam połączenie do bazy danych");
}

try {
    openDbConnection();
    getData();
}
catch(e) {
    console.log(`Wystąpił błąd ${e.message}`);
}
finally {
    closeDbConnection();
}