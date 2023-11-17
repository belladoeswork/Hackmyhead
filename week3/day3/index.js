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

    function bearNum(numbersList){
        let blurred = [];

        for (let i = 0; i < numbersList.length; i++) {
            blurred.push("🐻");
        }
        return blurred;
    }

    function replFibu(randomNum) {

        for (let i = 1; i < randomNum.length; i++) {

            if ((randomNum[i] % 3 === 0) && (randomNum[i] % 5 === 0)) {
                randomNum[i]("🫧✨");
            }
            else if (randomNum[i] % 3 === 0) {
                randomNum[i]("🫧");
            }
            else if (randomNum[i] % 5 === 0) {
                randomNum[i]("✨");
            }
            else
                numbersList.textContent = "[" + randomNum.join(", ") + "]";
        }
    }    // // Assuming numbersList is an array of mixed values (numbers and bears)
    // function highestNum(arr) {
    //     let num [];
    //     let highestNum;

    //     for (let i = 0; i < arr.length; i++) {
    //         // Check if the element is a number and if it's higher than the current highestNumber
    //         if (typeof arr[i] === 'number' && (highestNumber === null || arr[i] > highestNumber)) {
    //             highestNumber = arr[i];
    //         }
    //     }

    //     return highestNumber;
    // }



    let numbersList = document.createElement("p");
    numbersList.textContent = "[" + randomNum.join(", ") + "]";
    numbersList.style.textAlign = "center";
    numbersList.style.fontSize = "50px";



    // row appears on click + array
    landing.addEventListener("click", function() {

        document.getElementById("row").style.display = "flex";
        body.replaceChildren(header, row);
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
        // numbersList.textContent = "[" + randomNum.join(", ") + "]";


        if (numbersList.textContent.includes("🐻")) {
            let blurredNums = bearNum(randomNum);
            blurredNums.push(addNum);

            numbersList.textContent = "[" + blurredNums.join(", ") + "]";
            // randomNum.push(addNum);
        } else {
            // randomNum.push(addNum);
            numbersList.textContent = "[" + randomNum.join(", ") + "]";
        }

        body.replaceChildren(header, row, numbersList);
    })

    // bears list
    let bears = document.querySelector("#bears");

    bears.addEventListener("click", function() {

        const blurredNums = bearNum(randomNum);

        numbersList.textContent = "[" + blurredNums.join(", ") + "]";

        body.replaceChildren(header, row, numbersList);
    })

    // reverse list

    let reverse = document.querySelector("#reverse");

    reverse.addEventListener("click", function() {

        randomNum.reverse();

        numbersList.textContent = "[" + randomNum.join(", ") + "]";

        body.replaceChildren(header, row, numbersList);
    })

    // show highest number
    let high = document.querySelector("#high");

    high.addEventListener("click", function() {

        let getHigh = document.createElement("p");
        let highestNum = randomNum[0];

        for (let i = 1; i < randomNum.length; i++) {

            if (randomNum[i] > highestNum) {
                highestNum = randomNum[i];
            }
        }

            getHigh.textContent = highestNum;
            getHigh.style.textAlign = "center";
            getHigh.style.fontSize = "50px";
        
            body.replaceChildren(header, row, getHigh);
            body.appendChild(getHigh);
    });

    // fizbuzz num: 1-100, %3 and 5 > fizzbuzz , %3 fizz, %5 buzz

    let fibu = document.querySelector("#fibu");

    fibu.addEventListener("click", function() {

        let fizzBuzz = document.createElement("p");

        const fibuNum = replFibu(randomNum);

        numbersList.textContent = "[" + fibuNum.join(", ") + "]";         
        //fizzBuzz.style.textAlign = "center";
        // fizzBuzz.style.fontSize = "50px";   
        
        body.replaceChildren(header, row, numbersList);
        // body.appendChild(fizzBuzz);
    });







}
render();


        // /fix fix fizzbuzz of randomNum. if num % 3 == 0 && num %5 === 0 replace num in numberslist with fizzbuzz. if num %3 === 0 replace num in nunmberslist with fizz. if num %5 === 0 replace num in numberslist with buzz