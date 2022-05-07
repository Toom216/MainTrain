function getRandomColor() {
    var symbols, color;
    var colorContainer = document.getElementById("color");

    symbols = "0123456789ABCDEF";
    color = "#";

    for (var i = 0; i < 6; i++) {
        color += symbols[Math.floor(Math.random() * 16)];
    }
    colorContainer.style.background = color;
}
colorBtn.addEventListener("click", getRandomColor);
/*-----------------------------------------------------------------------------------*/

const apiQoutes = "https://api.quotable.io/random";

const quote = document.getElementById("quote");
const quoteBtn = document.getElementById("quoteBtn");

function getQuote() {
    fetch(apiQoutes)
        .then((res) => res.json())
        .then((data) => {
            quote.innerHTML = `"${data.content}"`;
        });
}

quoteBtn.addEventListener("click", getQuote);
/*-----------------------------------------------------------------------------------*/

const apiImages = "http://random.dog/woof.json";

const image = document.getElementById("image");
const imageBtn = document.getElementById("imageBtn");

function getImage() {
    fetch(apiImages)
        .then((res) => res.json())
        .then((data) => {
            image.innerHTML = `<img src = "${data.url}">`;
        });
}

imageBtn.addEventListener("click", getImage);
