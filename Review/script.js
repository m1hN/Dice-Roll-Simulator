// Dice Simulator

//variable to Store HTML Elements
let rollBtn = document.getElementById("button-roll");
let resetBtn = document.getElementById("button-reset");
let changeBtn = document.getElementById("button-change");
let answerBtn = document.getElementById("button-answer");
let themeBtn = document.getElementById("button-theme");

let display = document.getElementById("display");
let displayMath = document.getElementById("display-math");
let dice1 = document.getElementById("dice1");
let dice2 = document.getElementById("dice2");

// Dice Animation Variables
let dice1Angle = 0;
let dice2Angle = 0;

let timer = setInterval(rotateDice, 10);

function rotateDice() {
  document.getElementById("dice1").style.transform = `rotate(${dice1Angle}deg)`;
  dice1Angle++;

  document.getElementById("dice2").style.transform = `rotate(${dice2Angle}deg)`;
  dice2Angle--;
}

// Global Variables
dice1 = 0;
dice2 = 0;

let randNum1 = 0;
let randNum2 = 0;
let operation = 0;
let themeFlag = true;

// Event Listeners
rollBtn.addEventListener("click", roll);
resetBtn.addEventListener("click", reset);
changeBtn.addEventListener("click", change);
answerBtn.addEventListener("click", answer);
themeBtn.addEventListener("click", theme);

//Event Functions

function theme() {
  if (themeFlag == true) {
    const dStyle = document.querySelector("style");
    dStyle.innerHTML =
      "html {background-color: black;} body {background: grey;width: 500px;padding: 25px 100px;margin: 25px auto;text-align: center;font-family: Verdana, Geneva, Tahoma, sans-serif;}";
    themeFlag = false;
  } else {
    const dStyle = document.querySelector("style");
    dStyle.innerHTML =
      "html {background-color: purple;} body {background: rgba(94, 82, 255, 0.7);width: 500px;padding: 25px 100px;margin: 25px auto;text-align: center;font-family: Verdana, Geneva, Tahoma, sans-serif;}";
    themeFlag = true;
  }
}

function answer() {
  let answerNum = +prompt("What's the answer?");
  let answerReal = eval(`${randNum1} ${operation} ${randNum2}`);

  if (answerNum != answerReal) {
    displayMath.innerHTML = `No that is incorrect. try again!`;
  } else {
    displayMath.innerHTML = `${answerReal} is correct!`;
  }
}

function change() {
  clearInterval(timer);
  let randNum = Math.round(Math.random() * (15 - 1) + 1);
  timer = setInterval(rotateDice, randNum);
}

function roll() {
  let choice = document.getElementById("dice-menu").value;

  randNum1 = Math.round(Math.random() * (6 - 1) + 1);
  randNum2 = Math.round(Math.random() * (6 - 1) + 1);
  let i = 0;
  document.getElementById("dice1").src = `images/${randNum1}.png`;
  document.getElementById("dice2").src = `images/${randNum2}.png`;

  // Math

  operation = Math.round(Math.random() * (4 - 1) + 1);

  if (operation == 1) {
    operation = "*";
  } else if (operation == 2) {
    operation = "+";
  } else if (operation == 3) {
    operation = "-";
  } else if (operation == 4) {
    operation = "/";
  }

  if (choice == 1) {
    // Roll Options

    display.innerHTML += `<span>${randNum1}, ${randNum2}</span>`;
  }

  if (choice == 2) {
    while (i <= 5) {
      randNum1 = Math.round(Math.random() * (6 - 1) + 1);
      randNum2 = Math.round(Math.random() * (6 - 1) + 1);
      display.innerHTML += `<span>${randNum1}, ${randNum2}</span>`;
      i++;
      document.getElementById("dice1").src = `images/${randNum1}.png`;
      document.getElementById("dice2").src = `images/${randNum2}.png`;
    }
  }

  if (choice == 3) {
    let numDice = prompt("How many rolls?");

    while (i < numDice) {
      randNum1 = Math.round(Math.random() * (6 - 1) + 1);
      randNum2 = Math.round(Math.random() * (6 - 1) + 1);
      display.innerHTML += `<span>${randNum1}, ${randNum2}</span>`;
      i++;
      document.getElementById("dice1").src = `images/${randNum1}.png`;
      document.getElementById("dice2").src = `images/${randNum2}.png`;
    }
  }

  if (choice == 4) {
    do {
      randNum1 = Math.round(Math.random() * (6 - 1) + 1);
      randNum2 = Math.round(Math.random() * (6 - 1) + 1);
      display.innerHTML += `<span>${randNum1}, ${randNum2}</span>`;
      document.getElementById("dice1").src = `images/1.png`;
      document.getElementById("dice2").src = `images/1.png`;
    } while (!(randNum1 == 1 && randNum2 == 1));
  }

  displayMath.innerHTML = `${randNum1} ${operation} ${randNum2} =`;
}

function reset() {
  clearInterval(timer);
  display.innerHTML = ``;
  document.getElementById("dice1").src = `images/0.png`;
  document.getElementById("dice2").src = `images/0.png`;
  timer = setInterval(rotateDice, 10);
  displayMath.innerHTML = ``;
}
