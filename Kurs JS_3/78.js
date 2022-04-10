document.addEventListener("DOMContentLoaded", function(){

    showUsers();

    document.querySelector("#addUser").onclick=function(){
        addUser();
    };
    document.querySelector("#delAll").onclick=function(){
        delAll();
    };
});
class Kontakt{
    constructor(imie, nazwisko, telefon){
        this.imie = imie;
        this.nazwisko = nazwisko;
        this.telefon = telefon
    }
}

addUser = () => {
    let imie=document.querySelector("#imie").value;
    let nazwisko=document.querySelector("#nazwisko").value;
    let telefon=document.querySelector("#telefon").value;

    if(imie != "" && nazwisko !="" && telefon !=""){
        let kontakt = new Kontakt(imie, nazwisko, telefon);

        let daneJSON = localStorage.getItem("KT");
        if(daneJSON == null){
            let dane = [];
            dane.push(kontakt);
            localStorage.setItem("KT", JSON.stringify(dane));

            // let dane = [];
            // dane.push(kontakt);
            // localStorage.setItem("KT", JSON.stringify(dane));
            // ALBO
            //localStorage.setItem("KT", JSON.stringify([kontakt]));
        }
        else{
            let daneTab = JSON.parse(daneJSON);
            daneTab.push(kontakt);
            localStorage.setItem("KT", JSON.stringify(daneTab));
        }
        document.querySelector("#imie").value = "";
        document.querySelector("#nazwisko").value = "";
        document.querySelector("#telefon").value = "";
    }

    showUsers();
}

showUsers = () =>{
    let daneJSON = localStorage.getItem("KT");
    let daneTab = JSON.parse(daneJSON);
    let html = "";

    if( daneTab!=null){
        html += "<ul>";
        for(let x of daneTab){
            html += "<li>";
                html += x.imie+" "+x.nazwisko+" "+x.telefon;
            html += "</li>";
        }
        html += "</ul>";
    }
    document.querySelector("#showUser").innerHTML = html;
}

delAll = () => {
    localStorage.removeItem("KT");
    showUsers();
}