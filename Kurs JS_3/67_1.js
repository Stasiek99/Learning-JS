document.addEventListener("DOMContentLoaded", function() {

	document.querySelector("input[type='button']").onclick = function(){
        wyslij();
    }


});

function wyslij(){

    let imie = document.querySelector("input[name='imie']").value;
    document.querySelector("#imie").innerHTML = imie;
    // let elem = document.querySelector("#imie");
    // elem.innerHTML = imie;

    let nazwisko = document.querySelector("input[name='nazwisko']").value;
    document.querySelector("#nazwisko").innerHTML = nazwisko;

    let miasto = document.querySelector("select[name='miasto']").value;
    document.querySelector("#miasto").innerHTML = miasto;

    let technologie = document.querySelectorAll("input[type='checkbox']");
    document.querySelector("#technologie").innerHTML = "";
    for(let x of technologie){
        if(x.checked){
            
            document.querySelector("#technologie").innerHTML += x.value+" ";
        }
    }
    let stanowisko = document.querySelectorAll("input[name='stanowisko']");
    for(let x in stanowisko){
        if(stanowisko[x].checked){
            document.querySelector("#stanowisko").innerHTML = stanowisko[x].value;
            break;
        }
    }
    let opis = document.querySelector("textarea[name='uwagi']").value;
    document.querySelector("#uwagi").innerHTML = opis;
}
