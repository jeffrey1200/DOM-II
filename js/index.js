// Your code goes here

const navA = document.querySelectorAll(".nav-link");
console.log(navA);

navA.forEach(items => {
  items.addEventListener("mouseenter", () => {
    items.style.fontSize = "3rem";
    items.style.transition = "0.3s";
    items.style.color = "#46b5d1";
  });
  items.addEventListener("mouseleave", () => {
    items.style.fontSize = "1.6rem";
    items.style.color = "black";
  });
});

const heroImg = document.querySelector(".intro img");

heroImg.addEventListener("mousedown", () => {
  heroImg.style.transform = "scale(1.2)";
  heroImg.style.transition = "transform 0.3s";
  heroImg.addEventListener("mouseup", () => {
    heroImg.style.transform = "scale(1)";
  });
});
