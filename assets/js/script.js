var timerEl = document.getElementById("countdown");
var formEl = document.querySelector("#btnStartQuiz")




var startQuiz = function () {
    var timeLeft = 5;

    var timeInterval = setInterval(function () {
        timerEl.textContent = timeLeft + " seconds remaining";
        timeLeft--;

        if (timeLeft === -2) {
            timerEl.textContent = "";
            calculateScore();
            clearInterval(timeInterval);
        }

    }, 1000);
}


function calculateScore() {
    var answeredCorrect = 1;
    var answeredWrong = 1;
    var totalQuestions = answeredCorrect + answeredWrong;
    var decimalCorrect = answeredCorrect / totalQuestions;
    var wholePercent = decimalCorrect.toFixed(3);
    var percentCorrect = wholePercent * 100;

    alert(answeredCorrect + " Correct, " + answeredWrong + " Wrong at " + percentCorrect +
        "%. You attempted " + totalQuestions + " questions.");
}
startQuiz();

formEl.addEventListener("submit", startQuiz);