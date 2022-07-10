var buttonEl = document.querySelector("#take-quiz");
// console.log(buttonEl);

buttonEl.addEventListener("click", function () {
  ("the clankers are coming!");
});

var buttonEl = document.querySelector("#save-quiz");
var quizToDoEl = document.querySelector("#quiz-to-do");

let question = (document.getElementById("question").innerHTML =
  quiz.quests[0].question);
let answer1 = (document.getElementById("answer1").innerHTML =
  quiz.quests[0].answer[0].alt);
let answer2 = (document.getElementById("answer2").innerHTML =
  quiz.quests[0].answer[1].alt);
let answer3 = (document.getElementById("answer3").innerHTML =
  quiz.quests[0].answer[2].alt);
let answer4 = (document.getElementById("answer4").innerHTML =
  quiz.quests[0].answer[3].alt);

// var timerEle = document.getElementByID("countdown");
// var mainEle = doucment.getElementByID("main");

// function countdown() {
//   var timeLeft = 60;

//   // describe function of the timer
//   var timeInterval = setInterval(function () {
//     if (timeLeft > 1) {
//       timerEle.textContent = timeLeft + "seconds remaining";
//       timeLeft--;
//     } else if (timeLeft === 1) {
//       timerEle.textContent = timeLeft + "seconds remaining";
//       timeLeft--;
//     } else {
//       timerEle.textContent = "";
//       clearInterval(timeInterval);
//       displayMessage();
//     }
//   }, 1000);
// }
