const list = document.querySelector("#list");

const children = list.childNodes;
const elementChildrem = list.children;

const first = list.firstChild;
const firstElement = list.firstElementChild;

const last = list.lastChild;
const lastElement = list.lastElementChild;

const second = firstElement.nextSibling;
const secondElement = firstElement.nextElementSibling;

const lastbutOne = lastElement.previousSibling;
const lastbutOneElement = lastElement.previousElementSibling;

const parentElement = firstElement.parentNode;