import {DateTime} from "luxon";

const now = DateTime.now();

console.log(now.toFormat("dd.MM.yy"));
