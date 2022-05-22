const link = document.querySelector(".link");

const href = link.getAttribute("href");

link.setAttribute("href", "http://google.pl");

link.removeAttribute("class");

const button = document.querySelector("button");

button.setAttribute("disabled", true);

const img = document.createElement("img");

img.src = "https://space.eduweb.pl/files/images/emoji.jpg";

document.body.append(img);

const attrs = img.attributes;
