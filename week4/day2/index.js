let objectsArray = [
    {
      id: 1,
      name: "Victor",
    },
];
  
  const cloneContainer = document.querySelector("#clone-container");
  const select = document.querySelector("select");
  
  function render() {
    select.replaceChildren();
  
    for (let object of objectsArray) {
      const cloneCards = document.createElement("div");
      cloneCards.className = "cards";
  
      const nameElement = document.createElement("h2");
      nameElement.textContent = object.name;
  
      const id = document.createElement("p");
      id.textContent = `ID: ${object.id}`;
  
      const picture = document.createElement("img");
      picture.className = "pic";
      picture.src = "./victor.png";
  
      const cloneButton = document.createElement("button");
      cloneButton.className = "buttn";
      cloneButton.textContent = "Clone!";
  
      const option = document.createElement("option");
      option.textContent = object.id;
      option.value = object.id;
      select.appendChild(option);
  
      cloneContainer.appendChild(cloneCards);
      cloneCards.appendChild(nameElement);
      cloneCards.appendChild(id);
      cloneCards.appendChild(picture);
      cloneCards.appendChild(cloneButton);
  
      cloneButton.addEventListener("click", function () {
        let clone = { ...objectsArray[0] , id: objectsArray.length + 1 };
        objectsArray.push(clone);
        // clone.id = objectsArray.length;
  
        cloneContainer.replaceChildren();
        render();
      });
    }
  }
  
  render();
  
  select.addEventListener("change", function (e) {
    const chosenId = +e.target.value;
  
    objectsArray = objectsArray.filter((object) => object.id !== chosenId);
    cloneContainer.replaceChildren();
    render();
  });
  