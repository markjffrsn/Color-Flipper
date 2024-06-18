const colors = ["dodgerblue", "seagreen", "tomato", "burlywood", "chartreuse"];
const button = document.querySelector(".button");
const text = document.querySelector(".text");
const body = document.body;

button.addEventListener("click", () => {
  const currentIndex = randomNumber();
  body.style.backgroundColor = colors[currentIndex];

  text.innerHTML = colors[currentIndex];

  console.log(currentIndex);
});

const randomNumber = () => {
  return Math.floor(Math.random() * colors.length);
};
