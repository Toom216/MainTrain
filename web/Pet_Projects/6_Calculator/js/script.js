var firstNumber = document.getElementById("n1").value;
var secondNumber = document.getElementById("n2").value;
var answer = document.querySelector(".calculator__item-answer");

var op1 = document.getElementById("op1");
var op2 = document.getElementById("op2");
var op3 = document.getElementById("op3");
var op4 = document.getElementById("op4");
var op5 = document.getElementById("op5");

op1.addEventListener("click", operationPlus);
op2.addEventListener("click", operationMinus);
op3.addEventListener("click", operationMultiple);
op4.addEventListener("click", operationDivide);
op5.addEventListener("click", operationModular);

function operationPlus() {
    var firstNumber = parseInt(document.getElementById("n1").value);
    var secondNumber = parseInt(document.getElementById("n2").value);
    console.log("click");
    answer.innerHTML = firstNumber + secondNumber;
}

function operationMinus() {
    var firstNumber = parseInt(document.getElementById("n1").value);
    var secondNumber = parseInt(document.getElementById("n2").value);
    console.log("click");
    answer.innerHTML = firstNumber - secondNumber;
}

function operationMultiple() {
    var firstNumber = parseInt(document.getElementById("n1").value);
    var secondNumber = parseInt(document.getElementById("n2").value);
    console.log("click");
    answer.innerHTML = firstNumber * secondNumber;
}
function operationDivide() {
    var firstNumber = parseInt(document.getElementById("n1").value);
    var secondNumber = parseInt(document.getElementById("n2").value);
    console.log("click");
    answer.innerHTML = firstNumber / secondNumber;
}
function operationModular() {
    var firstNumber = parseInt(document.getElementById("n1").value);
    var secondNumber = parseInt(document.getElementById("n2").value);
    console.log("click");
    answer.innerHTML = firstNumber % secondNumber;
}

//  function operation() {
//      var firstNumber = parseInt(document.getElementById("n1").value);
//      var secondNumber = parseInt(document.getElementById("n2").value);
//      var answer = document.querySelector(".calculator__item-answer");
//
//      var op1 = document.getElementById("op1");
//      var op2 = document.getElementById("op2");
//      var op3 = document.getElementById("op3");
//      var op4 = document.getElementById("op4");
//      var op5 = document.getElementById("op5");
//
//      if (
//          op1.addEventListener("click", () => {
//              console.log("click1");
//              answer.innerHTML = firstNumber + secondNumber;
//          })
//      ) {
//      } else if (
//          op2.addEventListener("click", () => {
//              console.log("click2");
//              answer.innerHTML = firstNumber - secondNumber;
//          })
//      ) {
//      } else if (
//          op3.addEventListener("click", () => {
//              console.log("click3");
//              answer.innerHTML = firstNumber * secondNumber;
//          })
//      ) {
//      } else if (
//          op4.addEventListener("click", () => {
//              console.log("click4");
//              answer.innerHTML = firstNumber / secondNumber;
//          })
//      ) {
//      } else if (
//          op5.addEventListener("click", () => {
//              console.log("click5");
//              answer.innerHTML = firstNumber % secondNumber;
//          })
//      ) {
//      }
//  }
//
//  operation();
