console.log("script.js connected!");

// store answers
let answers = [];

// select all question blocks
const questionBlocks = document.querySelectorAll(".question-block");

questionBlocks.forEach((block, index) => {
  const buttons = block.querySelectorAll(".answer-btn");

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {

      // remove selected from all buttons in this question
      buttons.forEach(b => b.classList.remove("selected"));

      // add selected to clicked
      btn.classList.add("selected");

      // store answer
      answers[index] = btn.getAttribute("data-value");

      console.log(answers);
    });
  });
});

// result button
document.getElementById("result-btn").addEventListener("click", displayResult);

function displayResult() {
  let nyCount = 0;
  let laCount = 0;

  answers.forEach(answer => {
    if (answer === "ny") nyCount++;
    if (answer === "la") laCount++;
  });

  const resultContainer = document.getElementById("result-container");

  if (nyCount > laCount) {
    resultContainer.innerHTML = "<h2>You should live in New York 🗽</h2>";
  } else if (laCount > nyCount) {
    resultContainer.innerHTML = "<h2>You should live in Los Angeles 🌴</h2>";
  } else {
    resultContainer.innerHTML = "<h2>It's a tie! You’d love both cities 😎</h2>";
  }
}