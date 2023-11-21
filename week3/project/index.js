let body = document.querySelector("body");
const cardContainer = document.querySelector(".container");

let petCards = [];
let currentEmoji = "";
let currentName = "";
let counter = 0;
let petAlive = true;
let barWidthHunger = 0;
let barWidthLove = 100;


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


// const loveBar = card.querySelector("#love_bar");
// const hungerBar = card.querySelector("#hunger_bar");



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

// function feedPet(){
//     if (barWidthHunger > 0) {
//         barWidthHunger = 0; // decrement value
//         hungerBar.style.width = `${barWidthHunger}%`;
//         console.log("Feed button clicked. Bar width decreased.");

//     }
// }

// function lovePet(){
//     if (barWidthLove < 100) {
//         barWidthLove = 100; // increment value
//         loveBar.style.width = `${barWidthLove}%`;
//         console.log("Love button clicked. Bar width increased.");

//     }
// }

function feedPet(){
    if (barWidthHunger > 0) {
        barWidthHunger = 0; // decrement value
        hungerBar.style.width = `${barWidthHunger}%`;
        console.log("Feed button clicked. Bar width decreased.");
    }
}

function lovePet(){
    if (barWidthLove < 100) {
        barWidthLove = 100; // increment value
        loveBar.style.width = `${barWidthLove}%`;
        console.log("Love button clicked. Bar width increased.");
    }
}

// Create pet card
function petCard() {

    emojis.textContent = randomEmoji();
    nameElement.textContent = randomPetNames();
    
    card.appendChild(hunger);
    card.appendChild(hProgress);
    card.appendChild(love);
    card.appendChild(lProgress);
    card.appendChild(feed);


    feed.addEventListener("click", feedPet);
    emojis.addEventListener("click", lovePet);

    return card;
}


petCard();

// new cards
// function createCard() {
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

//     let newHungerBar = document.createElement("div");
//     newHungerBar.id = "hunger_bar";
//     newHungerBar.style.width = "0%";
//     newhProgress.appendChild(newHungerBar);
//     // newCard.appendChild(newhProgress);

//     let newLove = document.createElement("p");
//     newLove.className = "love";
//     newLove.textContent = "Love:";
//     newCard.appendChild(newLove);

//     let newlProgress = document.createElement("div");
//     newlProgress.id = "love_progress";
//     newCard.appendChild(newlProgress);

//     let newLoveBar = document.createElement("div");
//     newLoveBar.id = "love_bar";
//     newLoveBar.style.width = "100%";
//     newlProgress.appendChild(newLoveBar);

//     let newFeed = document.createElement("button");
//     newFeed.className = "feed";
//     newFeed.textContent = "Feed me 🍞";
//     newCard.appendChild(newFeed);

//     // newFeed.addEventListener("click", feedPet);
//     // newEmojis.addEventListener("click", lovePet);

//     newFeed.addEventListener("click", feedPet);
//     newEmojis.addEventListener("click", lovePet);

//     cardContainer.appendChild(newCard);

//     startStatsAnimation(newCard);

//     return newCard;
// }


// animate hunger bar
function startStatsAnimation(card) {

    // const loveBar = card.querySelector("#love_bar");
    // const hungerBar = card.querySelector("#hunger_bar");
    // let barWidthHunger = 0;
    // let barWidthLove = 100;


    const animateHunger = () => {
        barWidthHunger++;
        hungerBar.style.width = `${barWidthHunger}%`;
        // set timeout for death
        if (barWidthHunger === 100 || barWidthLove === 0) {
            clearCardContent();
        }
    };

    // animate love bar
    const animateLove = () => {
        barWidthLove--;
        loveBar.style.width = `${barWidthLove}%`;
        if (barWidthHunger === 100 || barWidthLove === 0) {
            clearCardContent();
        }
    };


    // Set initial values for the bars
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

startStatsAnimation();
// startStatsAnimation(createCard());



// const totalCombinations = animalEmojis.length * petNames.length * epitaphs.length;


// function generateCards() {
//     petCard();
//     for (let i = 0; i < 10; i++) {
//         let newCard = createCard();
//         cardContainer.appendChild(newCard);
//         petCards.push(newCard);

//         startStatsAnimation(newCard);
//     }
// }


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

