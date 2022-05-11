var guessBtn = document.querySelector(".guess__item-button");
var tryAgainBtn = document.querySelector(".guess__item-button-tryagain");
var divRedGreen = document.getElementById("redgreen");
var divRedGreen = document.querySelector(".guess__item-answer");

function guessTheNumber() {
    var randomNumber = Math.floor(Math.random() * 3) + 1;

    var guessInput = document.getElementById("guessInput").value;
    var divHidden = document.getElementById("hidden");

    console.log(randomNumber);

    if (guessInput == randomNumber) {
        divHidden.classList.remove("hidden");
        console.log("true");
        divRedGreen.innerHTML = "correct";
        divRedGreen.classList.add("answer__correct");
    } else {
        divHidden.classList.remove("hidden");
        console.log("false");
        divRedGreen.classList.add("answer__wrong");
        divRedGreen.innerHTML = "wrong";
    }
}


function tryAgain() {
    document.location.reload();
}

tryAgainBtn.addEventListener("click", tryAgain);
guessBtn.addEventListener("click", guessTheNumber);
