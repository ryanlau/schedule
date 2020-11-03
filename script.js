function gettime(x) {
    var d = new Date();

    hour = d.getHours()
    minutes = d.getMinutes()
    seconds = d.getSeconds()
    day = d.getDay()

    switch(day) {
        case 0:
            document.getElementById("time").innerHTML = "It's a weekend... go back to sleep.";
            break;
        case 6:
            document.getElementById("time").innerHTML = "It's a weekend... go back to sleep.";
            break;
        default:
            switch(0 < hour < 8 || 3 < hour < 23) {
                case true:
                    document.getElementById("time").innerHTML = "Classes over.";
            }
    }
}

function startclock15() {
    var elements = document.getElementsByClassName("disappear");

    for (var i of elements) {
        i.style.display = "none";
    };

    gettime(15);
    setInterval(gettime(15), 1000);
}

function startclock610() {
    var elements = document.getElementsByClassName("disappear");

    for (var i of elements) {
        i.style.display = "none";
    };

    gettime(610);

    setInterval(gettime(610), 1000);
}