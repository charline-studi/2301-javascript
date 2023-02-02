const clic = () => {
  console.log("clic");
};

// Récuperer un élément HTML grâce à son ID
const myButton = document.querySelector("#myButton");
myButton.addEventListener("click", clic);

// Sélectionner un élément grâce à un attribut
const buttonData = document.querySelector("[data-myButton]");
console.log(buttonData);
buttonData.addEventListener("mouseenter", (event) => {
  console.log(event.target);
  console.log("mouseenter");
});

// Sélectionner des éléments HTML
const dots = document.querySelectorAll("[data-dot]");
const mySpan = document.querySelector("[data-number]");
console.log(dots);
for (let index = 0; index < dots.length; index++) {
  dots[index].addEventListener("click", (event) => {
    const clickedDot = event.target;
    const number = clickedDot.getAttribute("data-dot");
    // console.log("clic dot", number);
    mySpan.textContent = number;
    // mySpan.innerHTML = `<b>${number}</b>`;
  });
}

const reset = document.querySelector("[data-reset]");
reset.addEventListener("click", () => {
  mySpan.innerHTML = "";
});

console.log(document.getElementsByClassName("dot"));
