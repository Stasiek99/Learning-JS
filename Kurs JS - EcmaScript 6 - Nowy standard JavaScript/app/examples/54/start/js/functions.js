import {obj} from "./objects";

let value = 10;

export function getValue() {
    getValue = function (){return value + 10};
    return value;
}

export function setValue(newValue) {
    value = newValue;
}

export {obj};