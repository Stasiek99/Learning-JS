const list1 = document.querySelector("#list1");

const li = document.createElement("li");
const text = document.createTextNode("Treść");

li.appendChild(text);

list1.append(li); //prepend, before, after

document.querySelector("#list2").append(li);

list1.querySelector(":last-child").remove;