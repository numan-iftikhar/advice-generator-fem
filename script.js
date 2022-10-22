const adviceNumber = document.querySelector(".advice-number");
const adviceText = document.querySelector(".advice-text");
const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  showQuote();
});

function showQuote() {
  fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json())
    .then((data) => data.slip)
    .then((data) => {
      adviceNumber.textContent = data.id;
      adviceText.textContent = data.advice;
    })
    .catch((error) => {
      alert(`Error ${error}`);
    });
}
