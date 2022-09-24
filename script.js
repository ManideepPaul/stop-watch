// Display elements
const minEl = document.querySelector(".min");
const secEl = document.querySelector(".sec");
const msEl = document.querySelector(".ms");

// Controle elements
const reset = document.querySelector(".reset");
const playPause = document.querySelector(".play-pause");

// Timer variables
let min = 0;
let sec = 0;
let ms = 0;

let state = true;
let interval;


playPause.addEventListener("click", startInterval);
reset.addEventListener("click", resetFun);

function startInterval() {
    state = !state ? true : false;
    !state ? playPause.src = "./assets/pause.svg" : playPause.src = "./assets/play.svg";
    !state ? interval = setInterval(startStop, 10) : clearInterval(interval)

}

function startStop() {
    ms += 1;
    let msPad = String(ms).padStart(2, '0');
    msEl.innerText = `${msPad}`;
    if (ms > 98) {
        ms = 0;
        sec += 1;
        let secPad = String(sec).padStart(2, '0');
        secEl.innerText = `${secPad}`;
        if (sec > 58) {
            sec = 0;
            min += 1;
            let minPad = String(min).padStart(2, '0');
            minEl.innerText = `${minPad}`
        }
    }
    reset.classList.remove("hidden")
}

function resetFun() {
    clearInterval(interval)
    state = true;
    playPause.src = "./assets/play.svg"
    min = 0;
    sec = 0;
    ms = 0;

    minEl.innerText = "00";
    secEl.innerText = "00";
    msEl.innerText = "00";
    reset.classList.add("hidden");
}





