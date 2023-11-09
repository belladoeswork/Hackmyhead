// What task would you like to run? (sum, convert, low, wordCounter, random, randomRange, capitalize, quit)

// sum: The app will prompt the users for two numbers and return the sum.
// convert: The app will convert minutes into seconds.
// low: The app will state if the first number is lower than the second number.
// random: The app will give a random number between 0 and the user's specified number.
// wordCounter: The app will state how many words are in a sentence.

// Bonus:

// The application will let the user know if it doesn't recognize a particular input.
// randomRange: The app will give a random number between two user specified numbers.
// capitalize: The app will capitalize the first letter of each word.
// quit: The app will terminate and tell the user farewell with the count that it was used.

// resp = prompt("Enter your word to calculate the number of characters:");
// let count = 0;
// let i = 0;
// while (resp[i])
//   {
//       count++;
//       i++;
//   }


function sum_op(){
    let firstnum = +prompt("Enter the first number:");
    let secondnum = +prompt("Enter the second number:");

    let ans = (firstnum) + (secondnum);

    alert(`The sum of these numbers is ${ans}`);
}

function convert_op(){
    let minutes = +prompt("Enter the number of minutes:");
    let seconds = (minutes) * 60;

    alert(`There are ${seconds} seconds in ${minutes} minutes.`);
}

function low_op(){
    let firstnum = +prompt("Enter the first number:");
    let secondnum = +prompt("enter the second number:");

    let ans = firstnum < secondnum;
    if(ans === true){
        alert("The first number is less than the second number");
    }
    else {
        alert("The first number is not less than the second number");
    }
}

function wc_op(){
    let resp = prompt("Enter a sentence to count the words:")
    let count = 0;

    for (let i = 0; i < resp.length; i++) {
        if (resp[i] === " ") {
            count = count + 1;
        }
        else if (i === resp.length - 1) {
            count = count + 1;
        }
    }
    alert(`There are ${count} words.`)
}

function random(){
    let num = +prompt("Enter the maximum number:");
    let ans = Math.floor(Math.random() * num);

    alert(`I have generated the random number: ${ans}`);
}

function randomRange(){
    let min = +prompt("Enter the minimum number:");
    let max = +prompt("Enter the maximum number:")

    let ans = Math.floor(Math.random() * (max - min + 1) + min);

    alert(`I have generated the random number: ${ans}`);
}

function capitalize(){
    let resp = prompt("Enter a sentence to capitalize the first letter of each word:");
    let ans = "";

    for (let i = 0; i < resp.length; i++) {
        if (i === 0) {
            ans += resp[i].toUpperCase();
        } else if (resp[i - 1] === " ") {
            ans += " " + resp[i].toUpperCase();
        } else {
            ans += resp[i];
        }
    }
    alert(ans);
}

let count = 0;

while (true) {
    let request = prompt("What task would you like to run? (sum, convert, low, wordCounter, random, randomRange, capitalize, quit)");

    if (request === "sum") {
        sum_op();
    } else if (request === "convert") {
        convert_op();
    } else if (request === "low") {
        low_op();
    } else if (request === "wordCounter") {
        wc_op();
    } else if (request === "random") {
        random();
    } else if (request === "randomRange") {
        randomRange();
    } else if (request === "capitalize") {
        capitalize();
    } else if (request === "quit" || !request) {
        alert(`You have used this application ${count} times. Farewell!`);
        break;
    } else {
        alert("I don't recognize that command.");
    }
    count = count +1;
}

//    count = count + 1;
