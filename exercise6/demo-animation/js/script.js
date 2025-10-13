document.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector(".elementcontainer");
  const toggleButton = document.getElementById("toggle");
  const playButton = document.getElementById("play");
  const pauseButton = document.getElementById("pause");

  let elementsVisible = false;
  let elements = [];

 
  function randomPosition() {
    const x = Math.random() * (window.innerWidth - 120);
    const y = Math.random() * (window.innerHeight - 120);
    return { x, y };
  }

  function createElements() {
    container.innerHTML = ""; 
    elements = [];

    for (let i = 0; i < 10; i++) {
      const el = document.createElement("div");
      el.classList.add("element");

      const img = document.createElement("img");
      img.src = "images/dog.png";
      el.appendChild(img);

      const pos = randomPosition();
      el.style.left = `${pos.x}px`;
      el.style.top = `${pos.y}px`;

      container.appendChild(el);
      elements.push(el);
    }
  }

 
  toggleButton.addEventListener("click", () => {
    if (elementsVisible) {
      container.innerHTML = "";
      elementsVisible = false;
    } else {
      createElements();
      elementsVisible = true;
    }
  });

  
  playButton.addEventListener("click", () => {
    elements.forEach(el => el.classList.add("play"));
  });

 
  pauseButton.addEventListener("click", () => {
    elements.forEach(el => el.classList.remove("play"));
  });
});
