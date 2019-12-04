// Your code goes here

const background = document.querySelector("*");
document.addEventListener("keydown", event => {
  if (background.style.backgroundColor != "black") {
    background.style.backgroundColor = "black";
    background.style.color = "whitesmoke";
  }
});

document.addEventListener("keypress", event => {
  if (background.style.backgroundColor != "white") {
    background.style.backgroundColor = "white";
    background.style.color = "black";
  }
});

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

// const bodyColor = document.querySelector('body')
// bodyColor.style.backgroundColor = '#2b2b28'

const adventure = document.querySelectorAll(".img-content img");
adventure[0].addEventListener("dblclick", () => {
  adventure[0].style.transform = "rotateY(360deg)";
  adventure[0].style.transition = "2s";
});
adventure[1].addEventListener("mouseover", event => {
  adventure[1].style.transform = "rotateX(360deg)";
  adventure[1].style.transition = "1s";
});

const para = document.querySelectorAll(".text-content");

para.forEach(text => {
  text.addEventListener("pointermove", () => {
    text.style.fontSize = "3rem";
    text.style.color = "lightblue";
    text.style.transition = "0.3s";
  });
 text.addEventListener("pointerout", () => {
      text.style.fontSize = "1.6rem";
      text.style.color = "black";
      text.style.transition = "1s";
    });
});

// const introsec = document.querySelector('.intro').addEventListener("contextmenu", (event) => {
//     gsap.to('.intro', {
//          duration: 1,
//          rotateY: 180,
//          ease: "elastic(1, 0.75)"

//         })
//         event.stopPropagation();
//     })
