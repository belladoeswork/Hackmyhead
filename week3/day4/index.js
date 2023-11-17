let likesContainer = document.querySelector("#likesContainer");

let people = [{name: "Max", money: 0, dogs: 0, laptops: 0}];

function render() {
  for (let person of people) {
    //display object
    let objectLikes = document.createElement("p");
    objectLikes.textContent = JSON.stringify(people[0]);
    likesContainer.appendChild(objectLikes);

    //buy dog
    let buyDogButton = document.createElement("button");
    buyDogButton.textContent = "Buy a dog!";
    const message = document.createElement("p");
    likesContainer.appendChild(buyDogButton);

    buyDogButton.style.marginRight = "5px";


    buyDogButton.addEventListener("click", function () {
      likesContainer.replaceChildren();
      if (person.money >= 100) {
        person.dogs += 1;
        person.money -= 100;
      } else {
        message.textContent = "You need a $100 to buy a dog.";
      }
      render();
      likesContainer.appendChild(message);
    });

    //dog dies
    let dogDiesButton = document.createElement("button");
    dogDiesButton.textContent = "Dog dies..";
    likesContainer.appendChild(dogDiesButton);

    dogDiesButton.style.marginRight = "5px";


    dogDiesButton.addEventListener("click", function () {
      likesContainer.replaceChildren();
      if (person.dogs > 0) {
        person.dogs -= 1;
      } else {
        message.textContent = "You don't have a dog, it couldn't of died.";
      }
      render();
      likesContainer.appendChild(message);
    });

    //work for money
    let workButton = document.createElement("button");

    workButton.textContent = "Work to earn money!";
    likesContainer.appendChild(workButton);

    workButton.style.marginRight = "5px";

    workButton.addEventListener("click", function () {
      likesContainer.replaceChildren();
      person.money += 100;
      render();
    });

    //Buy a new laptop
    let buyLaptop = document.createElement("button");
    buyLaptop.textContent = "Buy a new laptop!";
    likesContainer.appendChild(buyLaptop);

    workButton.style.marginRight = "5px";


    buyLaptop.addEventListener("click", function () {
      likesContainer.replaceChildren();
      if (person.money >= 1000) {
        person.laptops += 1;
        person.money -= 1000;
      } else {
        message.textContent = "You need a $1000 to buy a laptop.";
      }
      render();
      likesContainer.appendChild(message);
    });
  }
}

render();