var timerEl = document.getElementById("countdown");
var formEl = document.querySelector("#btnStartQuiz")



function startQuiz() {
  var timeLeft = 5;

  var timeInterval = setInterval(function () {
    timerEl.textContent = timeLeft + " seconds remaining";
    timeLeft--;

    if (timeLeft === 0) {
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

     alert (answeredCorrect + " Correct, " + answeredWrong + " Wrong at " + percentCorrect + 
     "%. You attempted " + totalQuestions + " questions.");
}

startQuiz();

formEl.addEventListener("submit", startQuiz)






// function prepareRead() {
//     var timer = 20;
//     var timeInterval = setInterval(function () {
//       timerEl.textContent = timeLeft + " seconds remaining";
//       timeLeft--;
  
//       if (timer === 0) {
//         timerEl.textContent = "";
//         speedRead();
//         clearInterval(timeInterval);
//       }
  
//     }, 1000);
//   }


// Click a button. Wait 3 seconds, and the page will alert "Hello":
// <button onclick="setTimeout(myFunction, 3000)">Try it</button>

// <script>
// function myFunction() {
//   alert('Hello');
// }
// </script>

