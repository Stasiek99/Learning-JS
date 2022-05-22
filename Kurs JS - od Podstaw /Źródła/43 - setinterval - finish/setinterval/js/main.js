let counter = 5;

// const interval = setInterval(function() {
//     console.log(counter--);

//     if(counter < 0) {
//         clearInterval(interval);
//     }
// }, 1000);

function tick() {
    console.log(counter--);

    if(counter >= 0) {
        setTimeout(tick, 1000);
    }
}

tick();
