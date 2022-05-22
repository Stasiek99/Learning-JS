import piNumber, { addZero as padZero, convertMonth } from "./utils/helpers.js";

const now = new Date();

const formatted = `${padZero(now.getDate())} ${convertMonth(now.getMonth() + 1)} ${now.getFullYear()}`;

console.log(formatted);

console.log();
