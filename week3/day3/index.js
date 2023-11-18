let body = document.querySelector("body");


// landing page

// selecting elements from html
let landing = document.querySelector("#landing");
let row = document.querySelector("#row");
let header = document.querySelector("#header");
let numbers;

// hiding row from landing page
document.getElementById("row").style.display = "none";

// function generate random numbers

function render() {

    function generateRandom(){
        let randoms = 10;
        numbers = [];

        for (let i = 0; i < randoms; i++) {
            let num = Math.floor(Math.random() * 100) + 1;
            numbers.push(num);
        }
    
        return (numbers) ;
    } 

    let randomNum = generateRandom();

    function bearNum(randomNum){
 
        for (let i = 0; i < randomNum.length; i++){
            randomNum[i] = "🐻";
        }
        return randomNum;
    }

    function replFibu(randomNum) {

        for (let i = 1; i < randomNum.length; i++) {

            if ((randomNum[i] % 3 === 0) && (randomNum[i] % 5 === 0)) {
                randomNum[i] = "🫧✨";
            }
            else if (randomNum[i] % 3 === 0) {
                randomNum[i] = "🫧";
            }
            else if (randomNum[i] % 5 === 0) {
                randomNum[i] = "✨";
            }
        }
        return randomNum;
    }
    
    function isNums() {
        for (let num of numbers) {
            if (typeof num !== 'number') {
                return false;
            }
        }
        return true;
    }

    let remove = document.querySelector("#remove");
    let menu = document.createElement("option");
    menu.textContent = "Remove a number!";

    function updateRemove() {

        remove.innerHTML = "";
        remove.appendChild(menu);

        for (let num of randomNum) {
            if (typeof num !== "number") {
                continue;
            }
            let option = document.createElement("option");
            option.value = num;
            option.text = num;
            remove.appendChild(option);
        }
    }
    


    let numbersList = document.createElement("p");
    numbersList.textContent = "[" + randomNum.join(", ") + "]";
    numbersList.style.textAlign = "center";
    numbersList.style.fontSize = "50px";

    updateRemove();



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


        for(let i = 0; i < randomNum.length; i++) {
            if (typeof randomNum[i] !== "number") {
                getFirst.textContent = "No number found in array.";
            }
            else {
                getFirst.textContent = randomNum[i];
                break;
            }
        }
        
        getFirst.style.textAlign = "center";
        getFirst.style.fontSize = "50px";

        body.replaceChildren(header, row, getFirst);
        body.appendChild(getFirst);
    
    });


    // add random number
    let rand = document.querySelector("#rand");

    rand.addEventListener("click", function() {
        let addNum = Math.ceil(Math.random() * 100) + 1;    

        if (numbersList.textContent.includes("🐻")) {
            randomNum.push(addNum);
        }
        else{
            randomNum.push(addNum);
        }
        updateRemove();

        numbersList.textContent = "[" + randomNum.join(", ") + "]";
        body.replaceChildren(header, row, numbersList);

    })

    // bears list
    let bears = document.querySelector("#bears");

    bears.addEventListener("click", function() {

        let blurredNums = bearNum(randomNum);
        
        updateRemove();

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

        replFibu(randomNum);

        updateRemove();

        numbersList.textContent = "[" + randomNum.join(", ") + "]";            
        
        body.replaceChildren(header, row, numbersList);
    });

    // heart show corresponding to num list
    let heart = document.querySelector("#heart");

    heart.addEventListener("click", function() {

        if (!isNums()) {
            alert(
                "Super bonus hearts can only be performed with an array of all numbers. Please reset!"
            );
            return;
        }

        let i = 0; 

        let intervalId = setInterval(function() {
            if (i < randomNum.length) {
                let heartShow = document.createElement("p");
                let hearts = "❤️".repeat(randomNum[i]);

                heartShow.textContent = hearts;
                heartShow.style.textAlign = "center";
                body.replaceChildren(header, row, numbersList, heartShow);
                i++;
            } else {
                clearInterval(intervalId);
            }
        }, 1000);

    });

    // remove dropdown

    remove.appendChild(menu);

    remove.addEventListener("change", function() {
        
            let selectedNum = remove.value;

            // Remove the selected number from randomNum
            if (selectedNum !== "Remove a number!") {

                let newList = [];
                for (let value of randomNum) {
                    if (value != selectedNum) {
                        newList.push(value);
                    }
                }
                randomNum = newList;

                updateRemove();
                numbersList.textContent = "[" + randomNum.join(", ") + "]";
                body.replaceChildren(header, row, numbersList);
            }
        
    });


    // reset randomNum list

    let reset = document.querySelector("#reset");
    reset.addEventListener("click", function() {
        randomNum = generateRandom();

        
        numbersList.textContent = "[" + randomNum.join(", ") + "]";
        body.replaceChildren(header, row, numbersList);
        updateRemove();
    });


}

    render();


