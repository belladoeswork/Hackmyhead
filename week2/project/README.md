 clone of [Project - Hangman](https://hangmanish.netlify.app/)

Specs:
A word is chosen at random from a pool of, at minimum, five words.
The following characters are automatically populated in the chosen random word: 'r', 's', 't', 'l', 'n', 'e'.
A player types in a letter as a guess, if they are correct the letter is filled in and if they are incorrect one rope emoji appears in the prompt.
If the user guesses all the correct letters, they win.
If the user gets three incorrect guesses, they lose.
show the previous guesses of the user and alert them that they've already guessed that character if they attempt to do so again.
























<!-- 
        let index = word.indexOf(user_guess);
        ans[index] = user_guess;
        letters_left = letters_left - 1;
        while (word.indexOf(user_guess, index + 1) !== -1) {
            index = word.indexOf(user_guess, index + 1);
            ans[index] = user_guess;
            letters_left = letters_left - 1;
        } -->
