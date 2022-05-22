const button = document.querySelector("button");

const post = {
    title: "Nowy wpis",
    body: "Treść nowego wpisu"
};

button.addEventListener("click", function() {
    button.disabled = true;

    console.log("Przed wysłaniem");

    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify(post),
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(res => res.json())
    .then(json => {
        console.log(json);
        button.textContent = "Wysłano";
        console.log("Właśnie wysłałem");
    });

    console.log("Po wysłaniu");
});
