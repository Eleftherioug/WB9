let answers = [];

const questionBlocks = document.querySelectorAll(".question-block");

questionBlocks.forEach((block, index) => {
  const buttons = block.querySelectorAll(".answer-btn");

  buttons.forEach(button => {
    button.addEventListener("click", () => {

      buttons.forEach(btn => btn.classList.remove("selected"));

      button.classList.add("selected");

      answers[index] = button.getAttribute("data-value");
    });
  });
});

document.getElementById("result-btn").addEventListener("click", displayResult);

function displayResult() {
  let ny = 0;
  let la = 0;

  answers.forEach(answer => {
    if (answer === "ny") ny++;
    if (answer === "la") la++;
  });

  const result = document.getElementById("result-container");

  if (ny > la) {
    result.innerHTML = "<h2>You should live in New York 🗽</h2>";
  } else if (la > ny) {
    result.innerHTML = "<h2>You should live in Los Angeles 🌴</h2>";
  } else {
    result.innerHTML = "<h2>It's a tie! 😎</h2>";
  }
}
// final version of quiz