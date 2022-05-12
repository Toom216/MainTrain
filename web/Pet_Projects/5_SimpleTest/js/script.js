var sendAnswersBtn = document.getElementById("sendBtn");
var tryAgainBtn = document.getElementById("tryAgain");
var count = document.querySelector(".test__item-answersCount");

var countAnswers = 0;

sendAnswersBtn.addEventListener("click", checkQuestions);
sendAnswersBtn.addEventListener("click", checkAnswers);
tryAgainBtn.addEventListener("click", tryAgain);

function checkQuestions() {
    if (document.getElementById("q1").value == "100") {
        countAnswers++;
        q1.classList.add("border__green");
    } else {
        q1.classList.add("border__red");
    }
    if (document.getElementById("q2").value == "11") {
        countAnswers++;
        q2.classList.add("border__green");
    } else {
        q2.classList.add("border__red");
    }
    if (document.getElementById("q3").value == "8.5" || document.getElementById("q3").value == "8,5") {
        countAnswers++;
        q3.classList.add("border__green");
    } else {
        q3.classList.add("border__red");
    }
    if (document.getElementById("q4").value == "100") {
        countAnswers++;
        q4.classList.add("border__green");
    } else {
        q4.classList.add("border__red");
    }
}

function checkAnswers() {
    count.innerHTML = `Количество правильных ответов = ${countAnswers}/4`;
}

function tryAgain() {
    document.location.reload();
}
