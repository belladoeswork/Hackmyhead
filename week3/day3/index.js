let body = document.querySelector("body");


// landing page

// selecting elements from html
let landing = document.querySelector("#landing");
let row = document.querySelector("#row");
let header = document.querySelector("#header");

// hiding row from landing page
document.getElementById("row").style.display = "none";

// function generate random numbers

function render() {

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

        let numbersList = document.createElement("p");
        numbersList.textContent = "[" + randomNum.join(", ") + "]";

        numbersList.style.textAlign = "center";
        numbersList.style.fontSize = "50px";

        body.appendChild(numbersList);
    });

    // display first number
    let first = document.querySelector("#first");

    first.addEventListener("click", function() {

        let getFirst = document.createElement("p");
        getFirst.textContent = randomNum[0];

        getFirst.style.textAlign = "center";
        getFirst.style.fontSize = "50px";

        body.replaceChildren(header, row, getFirst);
        body.appendChild(getFirst);
    })


    // add random number
    let rand = document.querySelector("#rand");

    rand.addEventListener("click", function() {

        let addNum = Math.ceil(Math.random() * 100) + 1;
        randomNum.push(addNum);
        numbersList.textContent = "[" + randomNum.join(", ") + "]";

        numbersList.style.textAlign = "center";
        numbersList.style.fontSize = "50px";

        body.replaceChildren(header, row, numbersList);
    })

                // add bears random number
                let bears = document.querySelector("#bears");
                let bList = document.querySelector("p");

                bears.addEventListener("click", function() {

                    let numbersList = document.createElement("p");
                    numbersList.textContent = "[" + randomNum.join(", ") + "]";
                    
                    function bearNum(numbersList){
                        let blurred = [];
                    
                        for (let i = 0; i < numbersList.length; i++) {
                            blurred.push("🐻");
                        }
                        return blurred;
                    }

                    const blurredNums = bearNum(randomNum);

                    numbersList.textContent = "[" + blurredNums.join(", ") + "]";

                    body.replaceChildren(header, row, numbersList);
                })

        }
        render();
