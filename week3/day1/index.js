
let body = document.querySelector("body");

function number(num) {
  let el = document.createElement("h1");
  el.textContent = num;
  body.appendChild(el);
  return;
}

function line() {
  let hr = document.createElement("hr");
  body.appendChild(hr);
}

// number 1
number("1");

//line break
line();

//square
let square = document.createElement("div");
square.id = "square";
body.appendChild(square);

// number 2
number("2");

//line break
line();

//img
let meme = document.createElement("img");
meme.src = "img.webp";
body.appendChild(meme);

// number 3
number("3");

//line break
line();

//hundred squares

const boxContainer = document.createElement("div");
boxContainer.style.display = "flex";
boxContainer.style.flexWrap = "wrap";
boxContainer.style.flexDirection = "row";
boxContainer.style.gap = "5px";

for (let i = 0; i < 100; i++) {
  let box = document.createElement("div");
  box.className = "box";
  boxContainer.appendChild(box);
}

body.appendChild(boxContainer);

// number 4
number("4");

//line break
line();

//ghost

let ghost = document.createElement("h1");
ghost.textContent = "👻";
body.appendChild(ghost);
ghost.id = "ghost";

setInterval(() => {
  if (ghost.style.visibility === "visible") {
    ghost.style.visibility = "hidden";
  } else {
    ghost.style.visibility = "visible";
  }
}, 3000);

// number 5
number("5");

//line break
line();

// text input
let text = document.createElement("div");
text.textContent = "I'm a magician. If I hover over a rabbit, it will dissapear!";
text.id = "text";
body.appendChild(text);

//hover bunny
const bunnyContainer = document.createElement("div");
bunnyContainer.style.display = "flex";
bunnyContainer.style.flexWrap = "wrap";
bunnyContainer.style.flexDirection = "row";
bunnyContainer.style.gap = "5px";
bunnyContainer.id = "bunnyContainer";

for (let i = 0; i < 20; i++) {
  let bunny = document.createElement("div");
  bunny.textContent = "🐇";
  bunny.className = "bunny";
  bunnyContainer.appendChild(bunny);
}

body.appendChild(bunnyContainer);

// number 6
number("6");

//line break
line();


// destroy input
let seconds = 1000;

let final = document.createElement("h2");
body.appendChild(final);
final.style.backgroundColor = "black";
final.style.color = "red";
final.style.fontSize = "100px";


setInterval(function () {
    final.textContent = "This page will self-destruct in " + `${seconds}` + " seconds.";

  if (seconds === 0) {
    body.style.backgroundColor = "red";
    // body.innerHTML = "";
    body.replaceChildren();

    let bombContainer = document.createElement("div");
    bombContainer.style.display = "flex";
    bombContainer.style.flexWrap = "wrap";
    bombContainer.style.gap = "1px";

    for (let i = 0; i < 1000; i++) {
        let bomb = document.createElement("div");
        bomb.textContent = "💣";
        bombContainer.appendChild(bomb);
    }
    body.appendChild(bombContainer);
    return;
  }
  seconds = seconds - 1;
}, 1000);
