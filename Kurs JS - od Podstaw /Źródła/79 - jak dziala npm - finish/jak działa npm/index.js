const luxon = require("luxon");

const now = luxon.DateTime.now();

console.log(now.toFormat("dd.MM.y"));
