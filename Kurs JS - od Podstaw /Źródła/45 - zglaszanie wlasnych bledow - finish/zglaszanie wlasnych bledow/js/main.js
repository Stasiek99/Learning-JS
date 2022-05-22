function searchInDb(query) {
    if(!query) {
        throw new Error("Podaj frazę wyszukiwania");
    }

    return `Wyniki wyszukiwania dla frazy: ${query}`;
}

try {
    const result = searchInDb("laptop");

    console.log(result);
} catch(e) {
    console.log(`Wystąpił błąd: ${e.message}`);
}

console.log("Dalsza część programu");

