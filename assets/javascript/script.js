var timerEl = document.getElementById("countdown");
var mainEl = document.getElementById("main");
var btn = document.getElementById("btn-section-3");
var numberQuestion = 1;
var timeLeft = 100;
var score = 0;
var timeInterval = null;

// James' Advice: set a var for parsing from local storage; if not pulling from local storatge, be an empty array
// var savedScores = JSON.parse(localStorage.getItem("highscore")) || [];
// console.log('savedScores is', savedScores);
var savedScoresArray = [];

function displaySavedScores() {
  var savedScores = localStorage.getItem("highscore");

  if (!savedScores) {
    console.log('No saved scores to load from storage!');
    // savedScoresArray.push(savedScores);
    // console.log('savedScoresArray is', savedScoresArray);
  } else {
    var parsedScores = JSON.parse(savedScores);
    console.log("parsedScores is", parsedScores);
    savedScoresArray = parsedScores;
    console.log('savedScoresArray is now', savedScoresArray);
    highScoreList.innerHTML = savedScoresArray;
  }
}

//   var existingScores = JSON.parse(localScctorage.getItem("highscore"));
//   console.log("existingScores is", existingScores);

//   if (existingScores) {
//   }
// }
function countdown() {
  // describe function of the timer
  timeInterval = setInterval(function () {
    if (timeLeft > 0) {
      timerEl.textContent = timeLeft + "seconds remaining";
      timeLeft--;
    } else {
      timerEl.textContent = "Times Up!";
      clearInterval(timeInterval);
      saveScore();
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
    if (event.target.dataset.correct === "true") {
      score += 5;
    } else {
      timeLeft -= 20;
    }
    if (numberQuestion > 4) {
      clearInterval(timeInterval);
      saveScore();
    } else {
      document
        .getElementById("question-" + numberQuestion)
        .classList.remove("hidden");
    }
  });
});

document
  .getElementById("take-quiz")
  .addEventListener("click", function (event) {
    event.target.classList.add("hidden");
    countdown();
    document.getElementById("question-1").classList.remove("hidden");
  });

function saveScore() {
  document.getElementById("highScoreScreen").classList.remove("hidden");
}

document.getElementById("submitScore").addEventListener("click", function () {
  console.log(score);

  var highScoreName = document.getElementById("highScoreName").value;

  console.log("highScoreName is", highScoreName);

  // var existingUserScores = JSON.parse(localStorage.getItem("highscore"));

  var myObject = {
    userName: highScoreName,
    userScore: timeLeft,
  };

  savedScoresArray.push(myObject);

  // console.log("savedScores is now", savedScores);

  localStorage.setItem("highscore", JSON.stringify(savedScoresArray));
});

displaySavedScores();
