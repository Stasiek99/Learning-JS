const box = document.querySelector("#box");

console.log(box.offsetLeft);
console.log(box.offsetTop);
console.log(box.offsetParent);

const pos = box.getBoundingClientRect();

console.log(pos);
