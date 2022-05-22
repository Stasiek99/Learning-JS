const list = document.querySelector("#list");

const children = list.childNodes;
const elementChildren = list.children;

const first = list.firstChild;
const firstElement = list.firstElementChild;

const last = list.lastChild;
const lastElement = list.lastElementChild;

const second = firstElement.nextSibling;
const secondElement = firstElement.nextElementSibling;

const lastButOne = lastElement.previousSibling;
const lastButOneElement = lastElement.previousElementSibling;

const parentElement = firstElement.parentNode;
