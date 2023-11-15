let body = document.querySelector("body");


// row1 
let title1 = document.querySelector("#title1");
body.appendChild(title1);


// row2
let title2 = document.querySelector("#title2");
body.appendChild(title2);

let box = document.querySelector("#box");

box.addEventListener("click", function(event) {
    if (event.target.style.backgroundColor === "blue") {
        event.target.style.backgroundColor = "white";
    } else {
        event.target.style.backgroundColor = "blue"
    }
})


// row3
let title3 = document.querySelector("#title3");
body.appendChild(title3);

let input = document.querySelector("#input_box");

input.addEventListener("input", function(event) {

    let mirror = document.querySelector("#mirror");
    mirror.textContent = event.target.value
})


// row4
let title4 = document.querySelector("#title4");
body.appendChild(title4);

let counter = document.querySelector("#counterContainer");

let decr_btn = document.querySelector("#decr");
let carPosition = 0;

decr_btn.addEventListener("click", function(event) {
    let counter = document.querySelector("#counterDisplay");
    counter.textContent = Number(counter.textContent) - 1;
})

let incr_btn = document.querySelector("#incr");
incr_btn.addEventListener("click", function(event) {
    let counter = document.querySelector("#counterDisplay");
    counter.textContent = Number(counter.textContent) + 1;
})

// row5
let title5 = document.querySelector("#title5");
body.appendChild(title5);

let car = document.querySelector("#car");

body.addEventListener("keydown", function(event) {
    if (event.key === "ArrowRight") {
        carPosition += 5;
        car.style.marginLeft = `${carPosition}px`;
    } else if (event.key === "ArrowLeft") {
        carPosition -= 5;
        car.style.marginLeft = `${carPosition}px`;
    }
});


// row6
let title6 = document.querySelector("#title6");
body.appendChild(title6);

let seconds = 0;

let final = document.createElement("p");
body.appendChild(final);
final.style.color = "green";
final.style.fontSize = "50px";
final.textContent = `${seconds} seconds`;

let stopwatch = document.querySelector("#stopContainer");
body.appendChild(stopwatch);

let intervalId;

function startCounter() {
    final.textContent = `${seconds} seconds`;
    seconds++;
}

let start_btn = document.querySelector("#start");
start_btn.addEventListener("click", function() {
    if (!intervalId) {
        seconds = 0;
        final.textContent = `${seconds} seconds`;
        intervalId = setInterval(startCounter, 1000);
    }
});

let stop_btn = document.querySelector("#stop");
stop_btn.addEventListener("click", function() {
    clearInterval(intervalId);
    intervalId = null;
});

let clear_btn = document.querySelector("#clear");
clear_btn.addEventListener("click", function() {
    clearInterval(intervalId);
    seconds = 0;
    final.textContent = `${seconds} seconds`;
});

