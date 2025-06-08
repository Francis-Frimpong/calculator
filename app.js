const numberBtn = document.querySelectorAll(".num-btn");
const keysContainer = document.querySelector(".number-keys");
const screen = document.querySelector("#screen");

keysContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("num-btn")) {
    numberBtn.forEach((key) => {
      if (e.target === key) {
        screen.value += key.textContent;
      }
    });
  }
});
