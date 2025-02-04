document.addEventListener("DOMContentLoaded", () => {
  const flower = document.querySelector("#animation-flower");
  const message = document.querySelector("#valentine-message"); // Seleccionamos el mensaje

  setTimeout(() => {
    flower.style.display = "inherit";
    message.classList.add("show"); // Mostramos el mensaje al mismo tiempo que las flores
  }, 8000);
});

function createRaindrop() {
  const body = document.querySelector("body");
  const xPosition = Math.random() * window.innerWidth;
  const delay = Math.random() * 5;
  const duration = Math.random() * 2 + 2;

  const rainDrop = document.createElement("div");
  rainDrop.className = "rain";
  rainDrop.style.left = `${xPosition}px`;
  rainDrop.style.animationDelay = `${delay}s`;
  rainDrop.style.animationDuration = `${duration}s`;
  rainDrop.style.display = "none";
  body.appendChild(rainDrop);

  setTimeout(() => {
    rainDrop.style.display = "inherit";
  }, 800);
}

setInterval(createRaindrop, 100);
