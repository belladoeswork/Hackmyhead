// TODO:

// 1. create a word bank and randomly select a word
function wordBank() {
    let randomWord = Math.floor(Math.random() * 10) + 1;

    let word;

    if (randomWord === 1) word = "apple";
    if (randomWord === 2) word = "banana";
    if (randomWord === 3) word = "orange";
    if (randomWord === 4) word = "pear";
    if (randomWord === 5) word = "grape";
    if (randomWord === 6) word = "pineapple";
    if (randomWord === 7) word = "strawberry";
    if (randomWord === 8) word = "blueberry";
    if (randomWord === 9) word = "raspberry";
    if (randomWord === 10) word = "blackberry";

    return word;
}

// 2. create a function that populates random word with stars except for 'r', 's', 't', 'l', 'n', 'e'
function wordBlur(word){
    let blurred = "";
    let populate = "rstlne";

    for (let i = 0; i < word.length; i++) {
        if (populate.includes(word[i])) {
            blurred += word[i];
        } else {
            blurred += ("★");
        }
    }
    return blurred;
}

// 3. create a function that counts the number of stars in a blurred word
function countStars(word) {
    let count = 0;
    for (let i = 0; i < word.length; i++) {
        if (word[i] === "★") {
            count++;
        }
    }
    return count;
}

// 4. create a function that checks if user guess is in the word
function check(userGuess, word, blurred) {
    let output = "";
    let populate = "rstlne";
    let letterFound = false;

    if (populate.includes(userGuess)) {
        alert("You can't use that letter.");
        return blurred;
    }

    for (let i = 0; i < word.length; i++) {
        if (populate.includes(word[i])) {
            output += word[i];
        } else if (word[i] === userGuess && blurred[i] === "★" && !letterFound) {
            output += userGuess;
            letterFound = true;
        } else {
            output += blurred[i];
        }
    }
    return output;
}

// 5. create a function for incorrect guesses emoji
function getIncorrectGuessesWithEmoji(incorrectGuesses) {
    let emoji = "🪢";
    let result = "";

    for (let i = 0; i < incorrectGuesses; i++) {
        result += emoji;
    }

    return result;
}

// main game loop
let actualWord = wordBank();
let word = wordBlur(actualWord);
let wrongGuesses = "";
let ans = "";
let letters_left = countStars(word);
let wrongGuessesCount = 0;


while(letters_left > 0 && wrongGuessesCount < 3) {
    let userGuess = prompt(`I'm thinking of a word. Would you like to guess a letter? \n\n${word}\n\nIncorrect guesses: ${wrongGuesses}\n\n${getIncorrectGuessesWithEmoji(wrongGuessesCount)}\n`);

    // case 1: user cancels? > exit program    
    if (userGuess === null) {
        break;
    }
    // case 2: user enters nothing or >1 letter > alert
    else if (userGuess.length !== 1) {
        alert("Please enter a single letter.");
    }
    // case 3: user enters a single letter, if correct, replace star with letter
    else {
        if (actualWord.includes(userGuess)) {
            // correct guesses
            let updatedWord = check(userGuess, actualWord, word);

            if (updatedWord !== word) {
                word = updatedWord;
                letters_left = letters_left - 1;

                // if the entire word is guessed
                if (letters_left === 0) {
                    alert("You Won!");
                    break;
                }
            }
        } else {
            // incorrect guesses
            if (!wrongGuesses.includes(userGuess)) {
                wrongGuesses += userGuess;
                wrongGuessesCount = wrongGuessesCount + 1;

                if (wrongGuessesCount === 3) {
                    alert("You lost!");
                    break;
                }
                else {
                    alert("Incorrect guess. Please try another letter.");
                }
            } else {
                wrongGuessesCount = wrongGuessesCount + 1;
                // alert("You have already guessed that letter. Please try another.");

                if (wrongGuessesCount === 3) {
                    alert("You have already guessed that incorrect letter. You lost!");
                    break;
                }
                else {
                    alert("You have already guessed that letter, and it's still incorrect. Please try another letter.");
                }
            }
        }
    }
}
