function gettime() {

    console.log('mainloop working')

    var d = new Date();
    hour = d.getHours()
    minutes = d.getMinutes()
    seconds = d.getSeconds()
    day = d.getDay()

    if (day == 0 || day == 6) {
        document.getElementById("time").innerHTML = "It's the weekend, go back to sleep.";

    } else if (0 < hour && hour <= 11) {
        document.getElementById("time").innerHTML = ((11 - hour) * 60 + (8 - minutes)) + " minutes until period " + (window.whichDay + 1);
    } else if (hour == 12 && minutes == 7 && seconds == 59) {
        document.getElementById("time").innerHTML = "1 second until period " + (window.whichDay + 1);
    } else if (hour == 12 && minutes == 7) {
        document.getElementById("time").innerHTML = (60 - seconds) + " seconds until period " + (window.whichDay + 1);
    } else if (hour == 12 && minutes < 7) {
        document.getElementById("time").innerHTML = (8 - minutes) + " minutes until period " + (window.whichDay + 1);
    } else if (hour == 12 && minutes > 8) {
        document.getElementById("time").innerHTML = (68 - minutes) + " minutes left in period " + (window.whichDay + 1);
    } else if (hour == 13 && minutes == 0) {
        document.getElementById("time").innerHTML = (2 - minutes) + " minutes left in period " + (window.whichDay + 1);
    } else if (hour == 13 && minutes == 1 && seconds == 59) {
        document.getElementById("time").innerHTML = (60 - seconds) + " second left in period " + (window.whichDay + 1);
    } else if (hour == 13 && minutes == 1) {
        document.getElementById("time").innerHTML = (60 - seconds) + " seconds left in period " + (window.whichDay + 1);
    } else if (hour == 13 && minutes == 55 && seconds == 59) {
        document.getElementById("time").innerHTML = (60 - seconds) + " second left in period " + (window.whichDay + 2);
    } else if (hour == 13 && minutes == 55) {
        document.getElementById("time").innerHTML = (60 - seconds) + " seconds left in period " + (window.whichDay + 2);
    } else if (hour == 13 && minutes < 55) {
        document.getElementById("time").innerHTML = (56 - minutes) + " minutes left in period " + (window.whichDay + 2);
    } else if (hour == 13) {
        document.getElementById("time").innerHTML = (110 - minutes) + " minutes left in period " + (window.whichDay + 3);
    } else if (hour == 14 && minutes == 49 && seconds == 59) {
        document.getElementById("time").innerHTML = (60 - seconds) + " second left in period " + (window.whichDay + 3);
    } else if (hour == 14 && minutes == 49) {
        document.getElementById("time").innerHTML = (60 - seconds) + " seconds left in period " + (window.whichDay + 3);
    } else if (hour == 14 && minutes < 49) {
        document.getElementById("time").innerHTML = (50 - minutes) + " minutes left in period " + (window.whichDay + 3);
    } else {
        document.getElementById("time").innerHTML = "Classes over, click for clock";
    }

    mainloop = setTimeout(gettime, 1000);
}


function startclock13() {
    window.whichDay = 0;

    var elements = document.getElementsByClassName("disappear");

    for (var i of elements) {
        i.style.display = "none";
    };

    document.getElementById("back-button").innerHTML = "back"

    gettime()
}

function startclock46() {
    window.whichDay = 3;

    var elements = document.getElementsByClassName("disappear");

    for (var i of elements) {
        i.style.display = "none";
    };

    document.getElementById("back-button").innerHTML = "back"

    gettime()
}


function startclock79() {
    window.whichDay = 6;

    var elements = document.getElementsByClassName("disappear");

    for (var i of elements) {
        i.style.display = "none";
    };

    document.getElementById("back-button").innerHTML = "back"

    gettime()
}


function displaytime() {
    var d = new Date();
    console.log('clockloop working')

    if (d.getHours() > 12) {
        hour = d.getHours() - 12;
    } else {
        hour = d.getHours();
    }

    if (d.getMinutes().toString().length == 1) {
        minutes = "0" + d.getMinutes();
    } else {
        minutes = d.getMinutes();
    }

    if (d.getSeconds().toString().length == 1) {
        seconds = "0" + d.getSeconds();
    } else {
        seconds = d.getSeconds();
    }

    day = d.getDay()

    document.getElementById("clock").innerHTML = hour + ":" + minutes + ":" + seconds;

    clockloop = setTimeout(displaytime, 1000)
}

function hide() {
    var time = document.getElementById("time");
    time.style.display = "none"
    var clock = document.getElementById("clock");
    clock.style.display = ""
    displaytime();
    clearTimeout(mainloop);
}

function show() {
    var time = document.getElementById("time");
    time.style.display = ""
    var clock = document.getElementById("clock");
    clock.style.display = "none"

    gettime()
    clearTimeout(clockloop);
}

function back() {
    location.reload()
}