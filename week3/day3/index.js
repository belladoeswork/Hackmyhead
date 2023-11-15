let body = document.querySelector("body");


// landing page

// selecting elements from html
let landing = document.querySelector("#landing");
let row = document.querySelector("#row");
let header = document.querySelector("#header");

// hiding row from landing page
document.getElementById("row").style.display = "none";

// function generate random numbers

function generateRandom(){
    let randoms = 10;
    let numbers = [];

    for (let i = 0; i < randoms; i++) {
        let num = Math.floor(Math.random() * 100) + 1;
        numbers.push(num);
    }
    return (numbers) ;
} 

const randomNum = generateRandom();


// row appears on click + array
landing.addEventListener("click", function() {

    document.getElementById("row").style.display = "flex";
    body.replaceChildren(header, row);


    // let generatedNum = generateRandom();

    let numbersList = document.createElement("p");
    numbersList.textContent = "[" + randomNum + ", " + "]";

    numbersList.style.textAlign = "center";
    numbersList.style.fontSize = "50px";

    body.appendChild(numbersList);
});

// display first number
let first = document.querySelector("#first");
// let getFirst = generateRandom();
let numbersList;


first.addEventListener("click", function() {


    let getFirst = document.createElement("p");
    getFirst.textContent = randomNum[0];

    getFirst.style.textAlign = "center";
    getFirst.style.fontSize = "50px";

    numbersList.replaceChildren();

    body.appendChild(getFirst);
})