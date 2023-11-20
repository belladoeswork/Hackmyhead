let body = document.querySelector("body");

import { alienPlanets } from "./alienPlanets.js";

let boxes = document.querySelector(".boxes");
    
for (let i = 0; i < alienPlanets.length; i++) {

    let planet = document.createElement("div");
    planet.className ="deets"

    let nameElement = document.createElement("p");
    nameElement.textContent = alienPlanets[i].name;
    planet.appendChild(nameElement);
    let emojiElement = document.createElement("p");
    emojiElement.textContent = alienPlanets[i].emoji;
    planet.appendChild(emojiElement);

    boxes.appendChild(planet);
}
body.appendChild(boxes);
