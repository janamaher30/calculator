let operationDisplay = document.getElementById("operation");
let resultDisplay = document.getElementById("result");
let isNewCalculation = false;

function appendValue(value) {
  const operators = ["+", "-", "×", "÷", "%"];

  if (isNewCalculation) {
    if (operators.includes(value)) {
      resultDisplay.textContent += value; // يكمل على الناتج
    } else {
      resultDisplay.textContent = value; // يبدأ مسألة جديدة
      operationDisplay.textContent = "";
    }
    isNewCalculation = false;
  } else {
    if (resultDisplay.textContent === "0" && value !== ".") {
      resultDisplay.textContent = value;
    } else {
      resultDisplay.textContent += value;
    }
  }
}

function clearDisplay() {
  operationDisplay.textContent = "";
  resultDisplay.textContent = "0";
  isNewCalculation = false;
}

function calculateResult() {
  try {
    operationDisplay.textContent = resultDisplay.textContent;
    let expression = resultDisplay.textContent
      .replace(/×/g, "*")
      .replace(/÷/g, "/")
      .replace(/%/g, "/100");

    let result = eval(expression);
    resultDisplay.textContent = result;
    isNewCalculation = true;
  } catch {
    resultDisplay.textContent = "Error";
    isNewCalculation = true;
  }
}

function toggleTheme() {
  document.body.classList.toggle("dark-mode");

  let themeBtn = document.getElementById("themeBtn");
  if (document.body.classList.contains("dark-mode")) {
    themeBtn.textContent = "☀️"; 
  } else {
    themeBtn.textContent = "🌙";
  }
}

document.getElementById("themeBtn").addEventListener("click", toggleTheme);
