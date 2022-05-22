const list = document.querySelector("#list");

// for(let i = 0; i < 5; i++) {
//     const li = document.createElement("li");

//     li.append(document.createTextNode(`Element listy ${i + 1}`));

//     list.append(li);
// }

const dc = document.createDocumentFragment();

for(let i = 0; i < 5; i++) {
    const li = document.createElement("li");

    li.append(document.createTextNode(`Element listy ${i + 1}`));

    dc.append(li);
}

list.append(dc);
