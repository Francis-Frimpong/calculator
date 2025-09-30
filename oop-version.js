class Calculator {
  constructor() {
    this.numberBtn = document.querySelectorAll(".num-btn");
    this.operatorBtn = document.querySelectorAll(".operator");
    this.keysContainer = document.querySelector(".number-keys");
    this.scrren = document.querySelector("#screen");
    this.resetBtn = document.querySelector(".resetBtn");
    this.equalBtn = document.querySelector(".equal-btn");
    this.deleteBtn = document.querySelector(".delete-btn");

    this.numOperators = ["+", "-", "/", "*"];
    this.displayExp = "";
    this.evalExp = "";
  }

  // number button function

  digitAndOperatorBtnEvent(e) {
    this.numberBtn.forEach((key) => {
      if (e.target === key) {
        this.displayExp += key.textContent;
        this.evalExp += key.textContent;
        this.scrren.value = this.displayExp;
      }
    });

    this.operatorBtn.forEach((operatorBtn, index) => {
      if (e.target === operatorBtn) {
        this.displayExp += operatorBtn.textContent;
        this.evalExp += this.numOperators[index];
        this.scrren.value = this.displayExp;
      }
    });
  }
  // equal button function

  equalBtnEvent() {
    if (this.screeen.value === "") {
      return;
    }

    let result = this.evalExp;
    this.scrren.value = eval(result);
  }
  addEventListeners() {
    this.keysContainer.addEventListener("click", (e) =>
      this.digitAndOperatorBtnEvent(e)
    );
    this.equalBtn.addEventListener("click", () => this.equalBtnEvent());
  }
}

const calculator = new Calculator();
calculator.addEventListeners();
