import {isSelector, isHTMLTag, isDOMNode} from "./Utils/Check"

function init(param){
    let nodes = null;

    if(isSelector(param)){
        console.log("selektor");
        //nodes = findElements(param);
    }
    else if (isHTMLTag(param)){
        console.log("tag html");
        //nodes = createElement(param);
    }
    else if(isDOMNode(param)){
        console.log("element DOM");
        //nodes = param;
    }


}

window.eQuery = init;