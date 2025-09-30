class Calculator {
  constructor() {
    //   properties
    this.numberBtn = document.querySelectorAll(".num-btn");
    this.operatorBtn = document.querySelectorAll(".operator");
    this.keysContainer = document.querySelector(".number-keys");
    this.screen = document.querySelector("#screen");
    this.resetBtn = document.querySelector(".resetbtn");
    this.equalBtn = document.querySelector(".equal-btn");
    this.deleteBtn = document.querySelector(".delete-btn");

    this.numOperators = ["+", "-", "/", "*"];
    this.displayExp = "";
    this.evalExp = "";
  }

  // number button method
  digitAndOperatorBtnEvent(e) {
    this.numberBtn.forEach((key) => {
      if (e.target === key) {
        this.displayExp += key.textContent;
        this.evalExp += key.textContent;
        this.screen.value = this.displayExp;
      }
    });

    this.operatorBtn.forEach((operatorBtn, index) => {
      if (e.target === operatorBtn) {
        this.displayExp += operatorBtn.textContent;
        this.evalExp += this.numOperators[index];
        this.screen.value = this.displayExp;
      }
    });
  }

  // equal button method
  equalBtnEvent() {
    if (this.screen.value === "") {
      return;
    }

    let result = this.evalExp;
    this.screen.value = eval(result);
  }

  // reset button method
  resetBtnEvent() {
    let ledScreen = (this.screen.value = "");
    this.displayExp = ledScreen;
    this.evalExp = ledScreen;
  }

  // delete button method
  deleteBtnEvent() {
    if (this.displayExp !== "") {
      this.displayExp = this.displayExp.slice(0, -1);
      this.evalExp = this.evalExp.slice(0, -1);
      this.screen.value = this.displayExp;
    }
  }

  // handles all event listeners
  addEventListeners() {
    this.keysContainer.addEventListener("click", (e) =>
      this.digitAndOperatorBtnEvent(e)
    );
    this.equalBtn.addEventListener("click", () => this.equalBtnEvent());
    this.resetBtn.addEventListener("click", () => this.resetBtnEvent());
    this.deleteBtn.addEventListener("click", () => this.deleteBtnEvent());
  }
}

const calculator = new Calculator();
calculator.addEventListeners();
