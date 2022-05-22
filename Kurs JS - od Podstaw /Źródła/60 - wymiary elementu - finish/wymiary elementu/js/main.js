const wrapper = document.querySelector("#wrapper");
const box = document.querySelector("#box");

console.log(box.offsetWidth);
console.log(box.offsetHeight);

console.log(wrapper.offsetWidth);
console.log(wrapper.offsetHeight);

console.log(wrapper.clientWidth);
console.log(wrapper.clientHeight);

console.log(wrapper.scrollWidth);
console.log(wrapper.scrollHeight);

console.log(box.getBoundingClientRect().width);
console.log(box.getBoundingClientRect().height);

console.log(window.innerWidth);
console.log(window.innerHeight);
