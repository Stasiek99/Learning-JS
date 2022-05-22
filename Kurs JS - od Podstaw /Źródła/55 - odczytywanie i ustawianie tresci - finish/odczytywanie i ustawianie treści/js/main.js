const container = document.querySelector(".container");

console.log(container.innerHTML);

console.log(container.outerHTML);

// container.innerHTML = `
//     <h3>Nagłówek h3</h3>
// `;

const p = document.querySelector("p");

console.log(p.textContent);

p.textContent = "<span>Nowa treść paragrafu</span>";
