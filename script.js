function gettime(x) {
    var d = new Date();

    hour = d.getHours()
    minutes = d.getMinutes()
    seconds = d.getSeconds()
    day = d.getDay()

    switch(day) {
        case 0:
            document.getElementById("time").innerHTML = "It's the weekend... go back to sleep.";
            break;
        case 6:
            document.getElementById("time").innerHTML = "It's the weekend... go back to sleep.";
            break;
        default:
            switch(0 < hour < 8 || 3 < hour < 23) {
                case true:
                    document.getElementById("time").innerHTML = "Classes over.";
                default:
                    if (hour == 9 && minutes >= 10) {
                        document.getElementById("time").innerHTML = (60 - minutes + 5) + "minutes left in period " + (x + 1);
                    } else if (hour == 10 && minutes <= 5) {
                        document.getElementById("time").innerHTML = (5 - minutes) + "minutes left in period " + (x + 1);
                    }
            }
    }
}

function startclock15() {
    var elements = document.getElementsByClassName("disappear");

    for (var i of elements) {
        i.style.display = "none";
    };

    gettime(0);
    setInterval(gettime(0), 1000);
}

function startclock610() {
    var elements = document.getElementsByClassName("disappear");

    for (var i of elements) {
        i.style.display = "none";
    };

    gettime(5);

    setInterval(gettime(5), 1000);
}

function displaytime() {
    var d = new Date();
    console.log('hi')
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
}

function show() {
    var time = document.getElementById("time");
    time.style.display = ""
    var clock = document.getElementById("clock");
    clock.style.display = "none"
    clearTimeout(clockloop);
}