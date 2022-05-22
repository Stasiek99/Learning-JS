import Attributes from "../Library/Attributes";
import Iteration from "../Library/Iteration";

export function mixin(...mixins){

    const fn = function () {};

    Object.assign(fn.prototype, ...mixins);

    return fn;
}