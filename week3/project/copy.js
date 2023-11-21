let body = document.querySelector("body");
const cardContainer = document.querySelector(".container");


let petCards = [];
let currentEmoji = "";
let currentName = "";
let counter = 0;
let petAlive = true;



const animalEmojis = [
    "🦜", "🦆", "🦄", "🐄", "🐏", "🐕", "🐩", "🐈", "🦚", "🦩", "🐁", "🦝", "🦨", "🦥", "🐿️", "🐉", "🦔", "🐇", "🦤", "🦮", "🦒", "🦘", "🐪", "🐫", "🦣", "🦓", "🦧", "🐆", "🐅", "🐊", "🐋", "🐬", "🐳", "🐠", "🐡", "🐟", "🦎", "🐍", "🦖", "🐢", "🦂", "🪲", "🐞", "🐌", "🐛", "🐝", "🐒", "🦅",
    "🐓", "🐥", "🦢", "🦒"
];

const petNames = [
    "Whiskers", "Luna", "Nimbus", "Mochi", "Zephyr",
    "Oliver", "Bimba", "Charlie", "Lucy", "Leo",
    "Coco", "Max", "Milo", "Lily", "Chloe",
    "Simba", "Mia", "Simba", "Mia", "Rocky",
    "Daisy", "Bailey", "Sadie", "Lola", "Tucker",
    "Teddy", "Zoe", "Sophie", "Lily", "Maddie",
    "Finn", "Oscar", "Molly", "Stella", "Ruby",
    "Jax", "Dexter", "Bear", "Luna", "Zoe",
    "Penny", "Winston", "Abby", "Cleo", "Bentley",
    "Zeus", "Cooper", "Rosie", "Jackson", "Lola", "Gobbin", "Pookie"
];

const epitaphs = [
    "Curiosity never rests.", "Gone but still glowing.", "Forever floating in fluffy clouds.",
    "Sweet memories linger.", "Whisked away by the wind.", "Always chasing rainbows.",
    "In a world of their own.", "Dancing through dreams.", "Purr-fectly loved.",
    "Playful and mischievous.", "Bringing joy one paw at a time.", "Loved beyond words.",
    "A friend like no other.", "Wagging tails in the sky.", "Forever in our hearts.",
    "Chirping melodies in the clouds.", "Napping in sunbeams.", "Eternal belly rubs.",
    "Chasing butterflies in paradise.", "Guardian angel with fur.", "Loving you from afar.",
    "Soaring with the stars.", "Always in bloom.", "Chasing shadows and butterflies.",
    "Slumbering in the sun.", "Infinite purrs and cuddles.", "Leaving pawprints on our hearts.",
    "Galloping through meadows of dreams.", "In the embrace of eternal sunsets.",
    "Gentle soul with a playful spirit.", "Whiskers forever twirling.", "Bouncing on clouds of joy.",
    "Always ready for a treat.", "Pawsitively charming.", "Forever paw-sing in peace.",
    "Barking at the moon with joy.", "Loving you to the moon and back.", "Wiggling into our hearts.",
    "Fluttering in fields of dreams.", "A melody of barks in the breeze.", "Cuddling among the stars.",
    "In the garden of eternal play.", "Sailing on a sea of memories.", "Chirps echoing in eternity.",
    "Sprinting through the celestial meadows.", "Always ready for an adventure.", "Snoozing in the lap of forever.",
    "Happily nibbling on stardust.", "Chasing rainbows and treats.", "Pouncing through the universe.",
    "A purr-fect companion for eternity."
];

// INIT

let card = document.querySelector(".pet_card");
body.appendChild(card);
let emojis = document.querySelector(".emoji");
let nameElement = document.querySelector(".name");
let hunger = document.querySelector(".hunger");
let hProgress = document.querySelector("#hunger_progress");
let hungerBar = document.querySelector("#hunger_bar");

let love = document.querySelector(".love");
let lProgress = document.querySelector("#love_progress");
let loveBar = document.querySelector("#love_bar");

let feed = document.querySelector(".feed");
let quotes = document.querySelector(".quotes");



// RANDOM SELECT

function randomEmoji(){
    let emoji = Math.floor(Math.random() * animalEmojis.length);
    currentEmoji = animalEmojis[emoji];
    return currentEmoji;
} 

function randomPetNames(){
    let names = Math.floor(Math.random() * petNames.length);
    currentName = petNames[names];
    return currentName;
} 

function randomEpitaphs(){
    let epiQuotes = Math.floor(Math.random() * epitaphs.length);
    return epitaphs[epiQuotes];
}

function feedPet(){
    if (barWidthHunger > 0) {
        barWidthHunger = 0; // decrement value
        hungerBar.style.width = `${barWidthHunger}%`;
    }
}

function lovePet(){
    if (barWidthLove < 100) {
        barWidthLove = 100; // increment value
        loveBar.style.width = `${barWidthLove}%`;
    }
}


// Create pet card
// function petCard() {

//     emojis.textContent = randomEmoji();
//     nameElement.textContent = randomPetNames();
    
//     card.appendChild(hunger);
//     card.appendChild(hProgress);
//     card.appendChild(love);
//     card.appendChild(lProgress);
//     card.appendChild(feed);

//     feed.addEventListener("click", feedPet);
//     emojis.addEventListener("click", lovePet);

//     return card;
// }

function createCard() {
    let newCard = document.createElement("div");
    newCard.className = "pet_card";

    // Create and set content for other elements in the card
    let emojisCopy = document.createElement("p");
    emojisCopy.className = "emoji";
    emojisCopy.textContent = randomEmoji();
    newCard.appendChild(emojisCopy);

    let nameCopy = document.createElement("h3");
    nameCopy.className = "name";
    nameCopy.textContent = randomPetNames();
    newCard.appendChild(nameCopy);

    let hungerCopy = document.createElement("div");
    hungerCopy.className = "hunger";
    hungerCopy.textContent = "Hunger:";
    newCard.appendChild(hungerCopy);
    
    let hProgressCopy = document.createElement("div");
    hProgressCopy.id = "hunger_progress";
    newCard.appendChild(hProgressCopy);

    let hungerBarCopy = document.createElement("div");
    hungerBarCopy.id = "hunger_bar";
    // newCard.appendChild(hungerBarCopy);

    let loveCopy = document.createElement("div");
    loveCopy.className = "love";
    loveCopy.textContent = "Love:";
    newCard.appendChild(loveCopy);


    let lProgressCopy = document.createElement("div");
    lProgressCopy.id = "love_progress";
    newCard.appendChild(lProgressCopy);

    let loveBarCopy = document.createElement("div");
    loveBarCopy.id = "love_bar";
    // newCard.appendChild(loveBarCopy);

    let feedCopy = document.createElement("button");
    feedCopy.className = "feed";
    feedCopy.textContent = "Feed me 🍞"
    newCard.appendChild(feedCopy);

    let quotesCopy = document.createElement("p");
    quotesCopy.className = "quotes";
    newCard.appendChild(quotesCopy);


    feedCopy.addEventListener("click", feedPet);
    emojisCopy.addEventListener("click", lovePet);

    cardContainer.appendChild(newCard);
    petCards.push(newCard);

    startStatsAnimation(newCard);
}

createCard();

// Create multiple cards
// for (let i = 0; i < 10; i++) {
//     createCard();
// }

// petCard();

//petcards


// new cards

// function createCard() {
//     let newCard = petCard();
//     cardContainer.appendChild(newCard);
//     petCards.push(newCard);
// }

// for (let i = 0; i < 10; i++) {
//     createCard();
// }
//     let newCard = document.createElement("div");
//     newCard.className = "pet_card";

//     let newEmojis = document.createElement("p");
//     newEmojis.className = "emoji";
//     newEmojis.textContent = randomEmoji();
//     newCard.appendChild(newEmojis);

//     let newNameElement = document.createElement("h3");
//     newNameElement.className = "name";
//     newNameElement.textContent = randomPetNames();
//     newCard.appendChild(newNameElement);

//     let newHunger = document.createElement("p");
//     newHunger.className = "hunger";
//     newHunger.textContent = "Hunger:";
//     newCard.appendChild(newHunger);

//     let newhProgress = document.createElement("div");
//     newhProgress.id = "hunger_progress";
//     newCard.appendChild(newhProgress);

//     let newLove = document.createElement("p");
//     newLove.className = "love";
//     newLove.textContent = "Love:";
//     newCard.appendChild(newLove);

//     let newlProgress = document.createElement("div");
//     newlProgress.id = "love_progress";
//     newCard.appendChild(newlProgress);

//     let newFeed = document.createElement("button");
//     newFeed.className = "feed";
//     newFeed.textContent = "Feed me 🍞";
//     newCard.appendChild(newFeed);

//     newFeed.addEventListener("click", feedPet);
//     newEmojis.addEventListener("click", lovePet);

//     return newCard;
// }


//STATS
// animate hunger bar
function startStatsAnimation(card) {

    // Set initial values for the bars
    // const hungerBar = card.querySelector("#hunger_bar");
    // const loveBar = card.querySelector("#love_bar");

    const animateHunger = () => {
        barWidthHunger++;
        hungerBar.style.width = `${barWidthHunger}%`;
        // set timeout for death
        if (barWidthHunger === 100 || barWidthLove === 0) {
            clearCardContent(card);
        }
    };

    // animate love bar
    const animateLove = () => {
        barWidthLove--;
        loveBar.style.width = `${barWidthLove}%`;
        if (barWidthHunger === 100 || barWidthLove === 0) {
            clearCardContent(card);
        }
    };

    let barWidthHunger = 0;
    let barWidthLove = 100;


    hungerBar.style.width = "0%";
    loveBar.style.width = "100%";

// Animation starts 1 second after page load
    setTimeout(() => {
        let intervalIDHunger = setInterval(() => {
            if (barWidthHunger === 100) {
                clearInterval(intervalIDHunger);
            } else {
                animateHunger();
            }
        }, 100); // Speed of the animation

        let intervalIDLove = setInterval(() => {
            if (barWidthLove === 0) {
                clearInterval(intervalIDLove);
            } else {
                animateLove();
            }
        }, 100); // Speed of the animation
    }, 1000);
};

// for (let i = 0; i < petCards.length; i++) {
//     startStatsAnimation(petCards[i]);
// }

// const totalCombinations = animalEmojis.length * petNames.length * epitaphs.length;
// const cardContainer = document.querySelector(".container");

// function generateCards() {
//     petCard();
//     for (let i = 0; i < 10; i++) {
//         let newCard = createCard();
//         cardContainer.appendChild(newCard);
//         petCards.push(newCard);

//         startStatsAnimation(newCard);
//     }
// }

// ...

const intervalTimeout = [];

// Function to display cards at intervals
function displayCardsSequentially() {
    let index = 0;

    function displayNextCard() {
        if (index < petCards.length) {
            // Hide the previous card (if any)
            if (index > 0) {
                petCards[index - 1].style.display = 'none';
            }

            // Display the current card
            petCards[index].style.display = 'block';

            // Increment index for the next card
            index++;

            // Set timeout for the next card
            let timeoutId = setTimeout(displayNextCard, 3000); // 3000 milliseconds (3 seconds)
            intervalTimeout.push(timeoutId);
        }
    }

    // Start displaying cards
    displayNextCard();
}

// Call the function to display cards sequentially
displayCardsSequentially();



// if hungry and not loved
function clearCardContent() {
    petAlive = false;
    emojis.textContent = currentEmoji;
    nameElement.textContent = currentName;
    quotes.textContent = randomEpitaphs();

    // styling
    card.style.backgroundColor = "red";
    nameElement.style.color = "white";
    quotes.style.color = "white";
    emojis.style.backgroundColor = "black";
    quotes.style.textAlign = "center";

    // Hide unnecessary elements
    hunger.style.display = "none";
    hProgress.style.display = "none";
    love.style.display = "none";
    lProgress.style.display = "none";
    feed.style.display = "none";
};

// generateCards();










// // Create initial pet card
// let initialCard = petCard();
// body.appendChild(initialCard);
// // petCards.push(initialCard);


// let cardContainer = document.createElement("div");
// cardContainer.className = "card-container";
// body.appendChild(cardContainer);


// cardContainer.appendChild(initialCard);

// add card on interval
// const intervalID = setInterval(addNewCard, 2000);


// add cards
// const totalCombinations = animalEmojis.length * petNames.length * epitaphs.length;

// function createNewCard() {
//     let newCard = document.createElement("div");
//     newCard.className = "pet_card";

//     newCard.textContent = petCard();

//     return newCard;
// }


// function addNewCard() {
//     if (petAlive && petCards.length < totalCombinations) {
//         let otherCard = createNewCard();
//         // newCard.className = "pet_card";
        
        
//         // newCard.textContent = petCard();
//         cardContainer.appendChild(otherCard);

//         // petCards.push(newCard);
//         // return newCard;
//     } else {
//         clearInterval(intervalID);
//     }
// }

// rows
// const cardContainer = document.querySelector(".pet_card");
// const cardMethods = () => {
//     petCard.map((postData)=>{
//         const postElement = document.createElement("div");
//         postElement.classList.add("pet_card");
//         postElement.innerHTML = `
//         petCard()`

//         cardContainer.appendChild(postElement)
//     })
// }

// cardMethods()


// <h3 class = ""> ${postData.heading}<h3>





  

// IN CASE OF H=100 & L=0

// setInterval(function () {
//   if (seconds === 0) {
//     body.style.backgroundColor = "red";
//     // body.innerHTML = "";
//     body.replaceChildren();

//     let bombContainer = document.createElement("div");
//     bombContainer.style.display = "flex";
//     bombContainer.style.flexWrap = "wrap";
//     bombContainer.style.gap = "1px";

//     for (let i = 0; i < 1000; i++) {
//         let bomb = document.createElement("div");
//         bomb.textContent = "💣";
//         bombContainer.appendChild(bomb);
//     }
//     body.appendChild(bombContainer);
//     return;
//   }
//   seconds = seconds - 1;
// }, 1000);










// feedButton.addEventListener("click", function () {
//     likesContainer.replaceChildren();
//     if (person.money >= 100) {
//       person.dogs += 1;
//       person.money -= 100;
//     } else {
//       message.textContent = "You need a $100 to buy a dog.";
//     }
//     render();
//     likesContainer.appendChild(message);
//   });



// const progressBar = document.getElementById("hunger_bar");

// let barWidth = 0;

// const animate = () => {
//   barWidth++;
//   hungerBar.style.width = `${barWidth}%`;
//   setTimeout(() => {
//   }, 10100);
// };

// hungerBar.style.width = "50%";
// loveBar.style.width = "50%";




// function render(){
//     card.replaceChildren()
//     for let per of petarry{
//         generatecard
//     }
// }

// bars function{
//     for pet in petarry
//     if pet hunger === 100 || pet.love == 0
//     petisalive = false
//     else
//     pet.hunger += 1;
//     pet.love -1 ;
// }

// // emoji: generate random
// name: generate random
// epitath: generate random


// const interval = setInterval(function() {
//     const randomPet = petNames[Math.floor(Math.random() * petNames.length)];
//     PetCard(randomPet);
// }, 3000);


// // FUNCTION NEWPET(){
//     NCREATE NEW card()
//     render ();

//     if alive(){
//         setTimeout(  (newpet)          
//         }, 1000);
//     }
// }








// // Generate a random cards
// let randomCards = Math.ceil(Math.random() * 50) + 1;
// for (let i = 0; i < randomCards; i++) {
//     let randomPet = petNames[Math.floor(Math.random() * petNames.length)];
//     PetCard(randomPet);
// }

// // Display new pet card every 3 seconds
// let i = 1;
// const interval = setInterval(function() {
//     if (i < petNames.length) {
//         const pet = petNames[i];
//         PetCard();
//         const newCard = document.createElement("div");
//         newCard.className = "pets";
//         updatePetCard(pet);
//         i++;
//     } else {
//         clearInterval(interval);
//     }
// }, 3000);






// function updateProgressBar(barClass, value) {
//     const progressBar = document.querySelector(`.${barClass}`);
//     const progress = progressBar.querySelector(".progress");

//     // Update the width of the progress element based on the value
//     progress.style.width = value + "%";

//     // Set the color based on the progress direction
//     if (barClass === "hunger_bar") {
//         progress.style.backgroundColor = "red"; // Increase in red
//     } else if (barClass === "love_bar") {
//         progress.style.backgroundColor = "green"; // Decrease in green
//     }
// }