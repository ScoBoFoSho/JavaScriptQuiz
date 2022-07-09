var timerEle = document.getElementByID("countdown");
var mainEle = doucment.getElementByID("main");

function countdown() {
  var timeLeft = 60;

  // describe function of the timer
  var timeInterval = setInterval(function () {
    if (timeLeft > 1) {
      timerEle.textContent = timeLeft + "seconds remaining";
      timeLeft--;
    } else if (timeLeft === 1) {
      timerEle.textContent = timeLeft + "seconds remaining";
      timeLeft--;
    } else {
      timerEle.textContent = "";
      clearInterval(timeInterval);
      displayMessage();
    }
  }, 1000);
}
