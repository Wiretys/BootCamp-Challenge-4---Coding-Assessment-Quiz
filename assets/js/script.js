var timerEl = document.getElementById("countdown");
var formEl = document.querySelector("#btnStartQuiz")
var startQuizBtn = document.getElementById("btnStartQuiz");



//Start Quiz Button Funtion
var startQuiz = function () {
    var timeLeft = 15;

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

startQuizBtn.addEventListener("click", startQuiz);

// formEl.addEventListener("submit", startQuiz);

// set question array

var questionsOptionList = {
    [1]: "What syntax creates an array?",
    option101: "pp",
    option102: "oo",
    option103: "vv",
    option104: "[]",

    [2]: "What syntax command adds to an array?",
    option201: ".push",
    option202: ".pull",
    option203: ".fetch",
    option204: ".get",
};

// //quiz questions
var quizHeaderQuestionsJs = document.getElementById('quizHeaderQuestionsJs')
quizHeaderQuestionsJs.textContent = questionsOptionList[1];

// // 1st button
var btn1 = document.getElementById('btn-1')
btn1.textContent = questionsOptionList.option101;

// // 2nd button
var btn2 = document.getElementById('btn-2')
btn2.textContent = questionsOptionList.option102;

// // 3rd button
var btn3 = document.getElementById('btn-3')
btn3.textContent = questionsOptionList.option103;

// 4th button
var btn4 = document.getElementById('btn-4')
btn4.textContent = questionsOptionList.option104;