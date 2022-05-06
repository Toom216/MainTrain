function clockCurrent() {
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();

    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    let time = h + ":" + m + ":" + s;

    document.getElementById("clock").innerText = time;

    var delay = setTimeout(function () {
        clockCurrent();
    }, 1000);
}

clockCurrent();

/*----------------------------------------------------------------------*/
let date = new Date("Jan 1 2023 00:00:00");
let timerField = document.getElementById("timer");

function count() {
    let now = new Date();
    count = date - now;

    let days = Math.floor(count / 1000 / 60 / 60 / 24);
    let hours = Math.floor(count / 1000 / 60 / 60) % 24;
    let minutes = Math.floor(count / 1000 / 60) % 60;
    let seconds = Math.floor(count / 1000) % 60;

    if (count < 0) {
        let text = "Hpp nw yr, EARTH";
        timerField.innerText = text;
    } else {
        count = `${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`;
        timerField.innerText = count;
    }
}
setInterval(count, 1000);

/*----------------------------------------------------------------------*/
const watch = document.getElementById("stopwatch");

let milliseconds = 0;
let timer;

const startWatch = () => {
    watch.classList.remove("paused");
    clearInterval(timer);
    timer = setInterval(() => {
        milliseconds += 10;
        let dateTimer = new Date(milliseconds);
        stopwatch.innerText =
            ("0" + dateTimer.getUTCHours()).slice(-2) +
            ":" +
            ("0" + dateTimer.getUTCMinutes()).slice(-2) +
            ":" +
            ("0" + dateTimer.getUTCSeconds()).slice(-2) +
            ":" +
            ("0" + dateTimer.getUTCMilliseconds()).slice(-3, -1);
    }, 10);
};

const pausedWatch = () => {
    stopwatch.classList.add("paused");
    clearInterval(timer);
};

const resetWatch = () => {
    stopwatch.classList.remove("paused");
    clearInterval(timer);
    milliseconds = 0;
    stopwatch.innerText = "00:00:00:00";
};

document.addEventListener("click", (e) => {
    const element = e.target;
    if (element.id === "startButton") startWatch();
    if (element.id === "pauseButton") pausedWatch();
    if (element.id === "resetButton") resetWatch();
});

/*----------------------------------------------------------------------*/
