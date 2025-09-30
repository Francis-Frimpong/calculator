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

  digitAndOperatorBtnEvent(e) {
    this.numberBtn.forEach((key) => {
      if (e.target === key) {
        this.displayExp += key.textContent;
        this.evalExp += key.textContent;
        this.scrren.value = this.displayExp;
      }
    });
  }
  addEventListeners() {}
}
