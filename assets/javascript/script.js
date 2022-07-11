var timerEl = document.getElementById("countdown");
var mainEl = document.getElementById("main");
var btn = document.getElementById("btn-section-3");
var numberQuestion = 1;

function countdown() {
  var timeLeft = 60;

  // describe function of the timer
  var timeInterval = setInterval(function () {
    if (timeLeft > 1) {
      timerEl.textContent = timeLeft + "seconds remaining";
      timeLeft--;
    } else if (timeLeft === 1) {
      timerEl.textContent = timeLeft + "seconds remaining";
      timeLeft--;
    } else {
      timerEl.textContent = "";
      clearInterval(timeInterval);
      displayMessage();
    }
  }, 1000);
}
document.querySelectorAll(".new-answer").forEach(function (answer) {
  answer.addEventListener("click", function (event) {
    console.log(event.target.dataset.correct);
    document
      .getElementById("question-" + numberQuestion)
      .classList.add("hidden");
    numberQuestion += 1;
    document
      .getElementById("question-" + numberQuestion)
      .classList.remove("hidden");
  });
});
document.getElementById("take-quiz").addEventListener("click", function () {
  countdown();
  document.getElementById("question-1").classList.remove("hidden");
});

function saveScore() {
  var score = 48; //replace this with actual score from HTML
  localStorage.setItem("highscore", score);
}
// var highscore = localStorage.getItem("highscore")
