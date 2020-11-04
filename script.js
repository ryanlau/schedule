function gettime() {

    console.log('mainloop working')

    var d = new Date();
    hour = d.getHours()
    minutes = d.getMinutes()
    seconds = d.getSeconds()
    day = d.getDay()

    if (day == 0 || day == 6) {
        document.getElementById("time").innerHTML = "It's the weekend, go back to sleep.";

    } else if (0 < hour && hour <= 8) {
        document.getElementById("time").innerHTML = ((9 - hour) * 60 + (10 - minutes)) + " minutes until period " + (window.whichDay + 1);
   
    } else if (hour == 9 && minutes == 9 && seconds == 59) {
        document.getElementById("time").innerHTML = (60 - seconds) + " second until period " + (window.whichDay + 1);
    } else if (hour == 9 && minutes == 9) {
        document.getElementById("time").innerHTML = (60 - seconds) + " seconds until period " + (window.whichDay + 1);
    } else if (hour == 9 && minutes < 10) {
        document.getElementById("time").innerHTML = (10 - minutes) + " minutes until period " + (window.whichDay + 1);

    } else if (hour == 9) {
        document.getElementById("time").innerHTML = (60 - minutes + 5) + " minutes left in period " + (window.whichDay + 1);
    } else if (hour == 10 && minutes < 4) {
        document.getElementById("time").innerHTML = (5 - minutes) + " minutes left in period " + (window.whichDay + 1);
    } else if (hour == 10 && minutes == 4 && seconds == 59) {
        document.getElementById("time").innerHTML = (60 - seconds) + " second left in period " + (window.whichDay + 1);
    } else if (hour == 10 && minutes == 4) {
        document.getElementById("time").innerHTML = (60 - seconds) + " seconds left in period " + (window.whichDay + 1);

    } else if (hour == 10 && minutes == 14 && seconds == 59) {
        document.getElementById("time").innerHTML = (60 - seconds) + " second until period " + (window.whichDay + 2);
    } else if (hour == 10 && (minutes == 14)) {
        document.getElementById("time").innerHTML = (60 - seconds) + " seconds until period " + (window.whichDay + 2);
    } else if (hour == 10 && (minutes > 5 && minutes < 14)) {
        document.getElementById("time").innerHTML = (15 - minutes) + " minutes until period " + (window.whichDay + 2);


    } else if (hour == 10 && minutes >= 15) {
        document.getElementById("time").innerHTML = (70 - minutes) + " minutes left in period " + (window.whichDay + 2);
    } else if (hour == 11 && minutes == 9 && seconds == 59) {
        document.getElementById("time").innerHTML = (60 - seconds) + " second left in period " + (window.whichDay + 2);
    } else if (hour == 11 && minutes == 9) {
        document.getElementById("time").innerHTML = (60 - seconds) + " seconds left in period " + (window.whichDay + 2);
    } else if (hour == 11 && minutes < 9) {
        document.getElementById("time").innerHTML = (10 - minutes) + " minutes left in period " + (window.whichDay + 2);

    } else if (hour == 11 && minutes == 19 && seconds == 59) {
        document.getElementById("time").innerHTML = (60 - seconds) + " second until period " + (window.whichDay + 3);
    } else if (hour == 11 && minutes == 19) {
        document.getElementById("time").innerHTML = (60 - seconds) + " seconds until period " + (window.whichDay + 3);
    } else if (hour == 11 && minutes < 20) {
        document.getElementById("time").innerHTML = (20 - minutes) + " minutes until period " + (window.whichDay + 3);

    } else if (hour == 11) {
        document.getElementById("time").innerHTML = (75 - minutes) + " minutes left in period " + (window.whichDay + 3);
    } else if (hour == 12 && minutes == 14 && seconds == 59) {
        document.getElementById("time").innerHTML = (60 - seconds) + " second left in period " + (window.whichDay + 3);
    } else if (hour == 12 && minutes == 14) {
        document.getElementById("time").innerHTML = (60 - seconds) + " seconds left in period " + (window.whichDay + 3);
    } else if (hour == 12 && minutes < 15) {
        document.getElementById("time").innerHTML = (15 - minutes) + " minutes left in period " + (window.whichDay + 3);
    
    } else if (hour == 12 && minutes == 24 && seconds == 59) {
        document.getElementById("time").innerHTML = (60 - seconds) + " second until period " + (window.whichDay + 4);
    } else if (hour == 12 && minutes == 24) {
        document.getElementById("time").innerHTML = (60 - seconds) + " seconds until period " + (window.whichDay + 4);
    } else if (hour == 12 && minutes < 25) {
        document.getElementById("time").innerHTML = (25 - minutes) + " minutes until period " + (window.whichDay + 4);

    } else if (hour == 12) {
        document.getElementById("time").innerHTML = (80 - minutes) + " minutes left in period " + (window.whichDay + 4);
    } else if (hour == 13 && minutes == 19 && seconds == 59) {
        document.getElementById("time").innerHTML = (60 - seconds) + " second left in period " + (window.whichDay + 4);
    } else if (hour == 13 && minutes == 19) {
        document.getElementById("time").innerHTML = (60 - seconds) + " seconds left in period " + (window.whichDay + 4);
    } else if (hour == 13 && minutes < 20) {
        document.getElementById("time").innerHTML = (20 - minutes) + " minutes left in period " + (window.whichDay + 4);

    } else if (hour == 13 && minutes == 29 && seconds == 59) {
        document.getElementById("time").innerHTML = (60 - seconds) + " second until period " + (window.whichDay + 5);
    } else if (hour == 13 && minutes == 29) {
        document.getElementById("time").innerHTML = (60 - seconds) + " seconds until period " + (window.whichDay + 5);
    } else if (hour == 13 && minutes < 30) {
        document.getElementById("time").innerHTML = (30 - minutes) + " minutes until period " + (window.whichDay + 5);

    } else if (hour == 13) {
        document.getElementById("time").innerHTML = (85 - minutes) + " minutes left in period " + (window.whichDay + 5);
    } else if (hour == 14 && minutes == 24 && seconds == 59) {
        document.getElementById("time").innerHTML = (60 - seconds) + " second left in period " + (window.whichDay + 5);
    } else if (hour == 14 && minutes == 24) {
        document.getElementById("time").innerHTML = (60 - seconds) + " seconds left in period " + (window.whichDay + 5);
    } else if (hour == 14) {
        document.getElementById("time").innerHTML = (85 - minutes) + " minutes left in period " + (window.whichDay + 5);
    } else {
        document.getElementById("time").innerHTML = "Classes over, click for clock";
    }

    mainloop = setTimeout(gettime, 1000);
}


function startclock15() {
    window.whichDay = 0;

    var elements = document.getElementsByClassName("disappear");

    for (var i of elements) {
        i.style.display = "none";
    };

    document.getElementById("back-button").innerHTML = "back"

    gettime()
}

function startclock610() {
    window.whichDay = 5;

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
    hour = d.getHours()
    minutes = d.getMinutes()
    seconds = d.getSeconds()
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