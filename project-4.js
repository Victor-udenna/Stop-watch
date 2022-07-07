// variables for buttons

const startStopBtn = document.querySelector('#startStop');
const resetBtn = document.querySelector('#resetBtn');


// variables for time value

let seconds = 0;
let minutes = 0;
let hours = 0;


// variable for leading zero

let leadingSeconds = 0;
let leadingMinutes = 0;
let leadingHour = 0;


// variable for set interval and timerstatus

let timeInterval = null;
let timerStatus = "stopped";

// Stop watch function

function stopWatch() {
    seconds++

    if (seconds / 60 === 1) {
        seconds = 0;
        minutes++;

        if (minutes / 60 === 1) {
            minutes = 0;
            hours++;
        }
    }

    if (leadingSeconds < 10) {
        leadingSeconds = "0" + seconds.toString()
    } else {
        leadingSeconds = seconds;
    }


    if (leadingMinutes < 10) {
        leadingMinutes = "0" + minutes.toString()
    } else {
        leadingMinutes = minutes;
    }

    if (leadingHour < 10) {
        leadingHour = "0" + hours.toString()
    } else {
        leadingHour = hours;
    }



    let displayTimer = document.getElementById('timer').innerText = leadingHour + ":" + leadingMinutes + ":" + leadingSeconds;

}



// window.setInterval(stopWatch, 1000)



startStopBtn.addEventListener('click', function () {
    if (timerStatus === "stopped") {
        timerInterval = window.setInterval(stopWatch, 1000);
        document.getElementById('startStopBtn').innerText = `< i class = 'fas fa-pause'></i>`;
        timerStatus = "started";
    } 
    else {
        window.clearInterval(timeInterval);
        timerStatus = "stopped";
    }
});

resetBtn.addEventListener('click', function () {
    window.clearInterval(timeInterval);
    seconds = 0;
    minutes = 0;
    hours = 0;

    document.getElementById('timer').innerHTML = "00:00:00"
})

