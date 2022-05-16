var kilogrammInput = parseFloat(document.querySelector(".kilogramm__input").value);
var poundInput = parseFloat(document.querySelector(".pound__input").value);
var gramInput = parseFloat(document.querySelector(".gram__input").value);

var confirmWeightBtn = document.querySelector(".weight__confirm-button");

console.log(kilogrammInput * 1000);

confirmWeightBtn.addEventListener("click", clickkg);
confirmWeightBtn.addEventListener("click", clickpd);
confirmWeightBtn.addEventListener("click", clickgr);

function clickkg() {
    var kilogrammInput = parseFloat(document.querySelector(".kilogramm__input").value);

    document.querySelector(".pound__input").value = kilogrammInput * 2.204623;
    document.querySelector(".gram__input").value = kilogrammInput * 1000;
}

function clickpd() {
    var poundInput = parseFloat(document.querySelector(".pound__input").value);

    document.querySelector(".kilogramm__input").value = poundInput / 0,453592;
    document.querySelector(".gram__input").value = poundInput * 453,5924;
}

function clickgr() {
    var gramInput = parseFloat(document.querySelector(".gram__input").value);

    document.querySelector(".pound__input").value = gramInput * 0,002205;
    document.querySelector(".kilogramm__input").value = gramInput / 1000;
}
