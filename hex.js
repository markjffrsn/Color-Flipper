const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const button = document.querySelector(".button");
const text = document.querySelector(".text");
const body = document.body;

button.addEventListener("click", () => {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hex[randomHex()];
  }

  text.textContent = hexColor;
  body.style.backgroundColor = hexColor;
});

const randomHex = () => {
  return Math.floor(Math.random() * hex.length);
};
