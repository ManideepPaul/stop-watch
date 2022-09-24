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

// Setting a state variable
let state = true;

// This will hold setInterval or clearInterval according to the state
let interval;

// On click invoking setInterval function
playPause.addEventListener("click", startInterval);

// On click invokig resetFun function
reset.addEventListener("click", resetFun);

function startInterval() {
    // This will set state according to the current state
    state = !state ? true : false;

    // Play and Pause svg will be changed according the status of the state variable
    !state ? playPause.src = "./assets/pause.svg" : playPause.src = "./assets/play.svg";

    // This will start setInterval or clearInterval according the state variable
    !state ? interval = setInterval(startStop, 10) : clearInterval(interval)

}

// setInterval will invoke this function
function startStop() {
    // will continue adding to 1 to the ms variable each time this function runs
    ms += 1;

    // converting the ms variable value to string updating on the page.
    let msPad = String(ms).padStart(2, '0');
    msEl.innerText = `${msPad}`;

    if (ms > 98) {
        // When ms is more than 98 setting ms variable to 0
        ms = 0;

        // Increasing sec variable by 1 after every the ms hits 99
        sec += 1;

        // converting to string and updating on the page.
        let secPad = String(sec).padStart(2, '0');
        secEl.innerText = `${secPad}`;

        if (sec > 58) {

            // When sec is more than 58 setting sec variable to 0
            sec = 0;

            // Increasing min variable by 1 after every the ms hits 59
            min += 1;
            let minPad = String(min).padStart(2, '0');

            // converting to string and updating on the page.
            minEl.innerText = `${minPad}`
        }
    }

    // This will remove the hidden class from the reset button and it will appear on the page
    reset.classList.remove("hidden")
}

function resetFun() {
    // this will clear the interval
    clearInterval(interval)

    // setting the state true
    state = true;

    // changing the main play pause button svg to play 
    playPause.src = "./assets/play.svg"

    //Resetting the all the values to 0 again
    min = 0;
    sec = 0;
    ms = 0;

    // Setting ms, sec, and min to 0 agian on the page
    minEl.innerText = "00";
    secEl.innerText = "00";
    msEl.innerText = "00";

    // Adding the hidden class again to the reset button to remove it from the page
    reset.classList.add("hidden");
}





