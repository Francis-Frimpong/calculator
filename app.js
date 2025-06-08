const numberBtn = document.querySelectorAll(".num-btn");
const operatorBtn = document.querySelectorAll(".operator");
const keysContainer = document.querySelector(".number-keys");
const screen = document.querySelector("#screen");
const resetBtn = document.querySelector(".resetbtn");
const equalBtn = document.querySelector(".equal-btn");
const deleteBtn = document.querySelector(".delete-btn");

const numOperators = ["+", "-", "/", "*"];
let displayExp = "";
let evalExp = "";

keysContainer.addEventListener("click", (e) => {
  numberBtn.forEach((key) => {
    if (e.target === key) {
      displayExp += key.textContent;
      evalExp += key.textContent;
      screen.value = displayExp;
    }
  });

  operatorBtn.forEach((operatorBtn, index) => {
    if (e.target === operatorBtn) {
      displayExp += operatorBtn.textContent;
      evalExp += numOperators[index];
      screen.value = displayExp;
    }
  });
});

equalBtn.addEventListener("click", () => {
  if (screen.value === "") {
    return;
  }

  let result = evalExp;
  screen.value = eval(result);
});

resetBtn.addEventListener("click", () => {
  screen.value = 0;
});

deleteBtn.addEventListener("click", () => {
  if (displayExp !== "") {
    displayExp = displayExp.slice(0, -1);
    evalExp = evalExp.slice(0, -1);
    screen.value = displayExp;
  }
});
