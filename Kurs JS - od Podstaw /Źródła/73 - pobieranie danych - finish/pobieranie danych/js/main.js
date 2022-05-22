const button = document.querySelector("button");

button.addEventListener("click", function() {

    fetch("https://jsonplaceholder.typicode.com/posts")
        .then(function(res) {
            return res.json();
        })
        .then(function(posts) {
            console.log(posts);
        })
        .catch(function() {
            console.log("Wystąpił błąd!");
        });

});
