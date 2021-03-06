var timerEl = document.getElementById("countdown");
var formEl = document.querySelector("#btnStartQuiz")
var startQuizBtn = document.getElementById("btnStartQuiz");
var endgame = 1;
var answeredCorrect = 0;
var answeredWrong = 0;

// set question array
var questionsOptionList = {
    [1]: "What syntax creates an array?",
    option101: "{}",
    option102: "//",
    option103: "<>",
    option104: "[]",

    [2]: "What syntax command adds to an array?",
    option201: ".push",
    option202: ".pull",
    option203: ".fetch",
    option204: ".get",

    [3]: "Which syntax would multiply variables?",
    option301: "var / 2",
    option302: "var * 2",
    option303: "var x 2",
    option304: "var -(var)",

    [4]: "End of Quiz",
    option401: "",
    option402: "",
    option403: "",
    option404: "",
};

function round1() {
    answeredCorrect = 0;
    answeredWrong = 0;
    //quiz questions
    var quizHeaderQuestionsJs = document.getElementById('quizHeaderQuestionsJs')
    quizHeaderQuestionsJs.textContent = questionsOptionList[1];
    // 1st button
    var btn1 = document.getElementById('btn-1')
    btn1.textContent = questionsOptionList.option101;
    // 2nd button
    var btn2 = document.getElementById('btn-2')
    btn2.textContent = questionsOptionList.option102;
    // 3rd button
    var btn3 = document.getElementById('btn-3')
    btn3.textContent = questionsOptionList.option103;
    // 4th button
    var btn4 = document.getElementById('btn-4')
    btn4.textContent = questionsOptionList.option104;
    btn4.addEventListener("click", round1Correct);
    btn1.addEventListener("click", round1Wrong);
    btn2.addEventListener("click", round1Wrong);
    btn3.addEventListener("click", round1Wrong);
};

function round2() {
    //quiz questions
    var quizHeaderQuestionsJs = document.getElementById('quizHeaderQuestionsJs')
    quizHeaderQuestionsJs.textContent = questionsOptionList[2];
    // 1st button
    var btn1 = document.getElementById('btn-1')
    btn1.textContent = questionsOptionList.option201;
    // 2nd button
    var btn2 = document.getElementById('btn-2')
    btn2.textContent = questionsOptionList.option202;
    // 3rd button
    var btn3 = document.getElementById('btn-3')
    btn3.textContent = questionsOptionList.option203;
    // 4th button
    var btn4 = document.getElementById('btn-4')
    btn4.textContent = questionsOptionList.option204;
    btn1.addEventListener("click", round2Correct);
    btn2.addEventListener("click", round2Wrong);
    btn3.addEventListener("click", round2Wrong);
    btn4.addEventListener("click", round2Wrong);
};

function round3() {
    //quiz questions
    var quizHeaderQuestionsJs = document.getElementById('quizHeaderQuestionsJs')
    quizHeaderQuestionsJs.textContent = questionsOptionList[3];
    // 1st button
    var btn1 = document.getElementById('btn-1')
    btn1.textContent = questionsOptionList.option301;
    // 2nd button
    var btn2 = document.getElementById('btn-2')
    btn2.textContent = questionsOptionList.option302;
    // 3rd button
    var btn3 = document.getElementById('btn-3')
    btn3.textContent = questionsOptionList.option303;
    // 4th button
    var btn4 = document.getElementById('btn-4')
    btn4.textContent = questionsOptionList.option304;
    btn2.addEventListener("click", round3Correct);
    btn1.addEventListener("click", round3Wrong);
    btn3.addEventListener("click", round3Wrong);
    btn4.addEventListener("click", round3Wrong);
};

function round4() {
    endgame === 0;
    //quiz questions
    var quizHeaderQuestionsJs = document.getElementById('quizHeaderQuestionsJs')
    quizHeaderQuestionsJs.textContent = questionsOptionList[4];
    // 1st button
    var btn1 = document.getElementById('btn-1')
    btn1.textContent = questionsOptionList.option401;
    // 2nd button
    var btn2 = document.getElementById('btn-2')
    btn2.textContent = questionsOptionList.option402;
    // 3rd button
    var btn3 = document.getElementById('btn-3')
    btn3.textContent = questionsOptionList.option403;
    // 4th button
    var btn4 = document.getElementById('btn-4')
    btn4.textContent = questionsOptionList.option404;
};

//Start Quiz Button Funtion
var startQuiz = function () {
    round1();
    var timeLeft = 10;
    answeredCorrect = 0;
    answeredWrong = 0;
    var timeInterval = setInterval(function () {
        timerEl.textContent = timeLeft + " seconds remaining";
        timeLeft--;
        if (timeLeft === -2 || endgame === 0) {
            timerEl.textContent = "";
            calculateScore();
            clearInterval(timeInterval);
        }
    }, 1000);
}

function round1Correct() {
    round2();
    addToAnsweredCorrect();
};

function round1Wrong() {
    round2();
    addToAnsweredWrong();
};

function round2Correct() {
    round3();
    addToAnsweredCorrect();
};

function round2Wrong() {
    round3();
    addToAnsweredWrong();
};

function round3Correct() {
    round4();
    addToAnsweredCorrect();
};

function round3Wrong() {
    round4();
    addToAnsweredWrong();
};

function addToAnsweredCorrect() {
    answeredCorrect = answeredCorrect + 1;
}

function addToAnsweredWrong() {
    answeredWrong = answeredWrong + 1;
}

function calculateScore() {
    var totalQuestions = answeredCorrect + answeredWrong;
    var decimalCorrect = answeredCorrect / totalQuestions;
    var wholePercent = decimalCorrect.toFixed(2);
    var percentCorrect = wholePercent * 100;
    alert(answeredCorrect + " Correct, " + answeredWrong + " Wrong at " + percentCorrect +
        "%. You attempted " + totalQuestions + " questions.");
}
startQuizBtn.addEventListener("click", startQuiz);