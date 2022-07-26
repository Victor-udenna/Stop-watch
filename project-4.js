// variables for buttons

const startStopBtn = document.querySelector('#startStop');
const pause = document.querySelector('#pauseBtn');
const resetBtn = document.querySelector('#resetBtn');
// Call start and stop btn in javascript


// variables for time value
let milli = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;

// time unit variables


// variable for leading zero
let leadingMilli = 0;
let leadingSeconds = 0;
let leadingMinutes = 0;
let leadingHour = 0;

// leading zeros in front for when unit are less than 10.

// variable for set interval and timerstatus

let timeInterval = null;
let timerStatus = "stopped";

// Stop watch function

function stopWatch() {
    milli ++
 
    if (milli / 100 === 1) {
        milli = 0;
        seconds++;
    }

    if (seconds / 60 === 1) {
        seconds = 0;
        minutes++;

        if (minutes / 60 === 1) {
            minutes = 0;
            hours++;
        }
    }

// // Adds leading zeros to the time units when they areless than 10
    if (leadingMilli < 100) {
        leadingMilli = milli.toString()
    } else {
        leadingMilli = milli;
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



    let displayTimer = document.getElementById('timer').innerText = leadingHour + ":" + leadingMinutes + ":" + leadingSeconds + "." + leadingMilli;

}



// window.setInterval(stopWatch, 1000)



// if timer starts the timer when it is stopped
startStopBtn.addEventListener('click', function () {
    if (timerStatus === "stopped") {
        timeInterval = window.setInterval(stopWatch, 10);
        // document.getElementById('startStopBtn').innerText = "pause";
        // timerStatus = "started";
    } 
    // else {
    //     window.clearInterval(timeInterval);
    //     timerStatus = "stopped";
    // }
});

// sets the timer to null and the timeinterval to null that way is is paused
pause.addEventListener('click', function () {
    window.clearInterval(timeInterval);
    timeInterval = null;
})


// sets the timer unit variables to zero
resetBtn.addEventListener('click', function () {
    window.clearInterval(timeInterval);
    milli = 0;
    seconds = 0;
    minutes = 0;
    hours = 0;

    document.getElementById('timer').innerHTML = "00:00:00.00"
})

