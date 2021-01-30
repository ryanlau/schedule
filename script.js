let sitSchedule = {
    start: {
        1: "0900",
        2: "1100",
        3: "1300",
    },
    end: {
        1: "1015",
        2: "1215",
        3: "1415",
    },
}

let stuySchedule = {
    start: {
        1: "0910",
        2: "1015",
        3: "1120",
        4: "1225",
        5: "1330",
    },
    end: {
        1: "1005",
        2: "1110",
        3: "1215",
        4: "1320",
        5: "1425",
    },
}

function convertSchedule(schedule) {
    for (var key in schedule.start) {
        minutes = Number(schedule.start[key].slice(2,4))
        hours = Number(schedule.start[key].slice(0,2))
        value = (hours * 60 * 60) + (minutes * 60)
        schedule.start[key] = value 
    }

    for (var key in schedule.end) {
        minutes = Number(schedule.end[key].slice(2,4))
        hours = Number(schedule.end[key].slice(0,2))
        value = (hours * 60 * 60) + (minutes * 60)
        schedule.end[key] = value 
    }
}

function getTime() {
    var d = new Date();
    hour = d.getHours()
    minutes = d.getMinutes()
    seconds = d.getSeconds()
    day = d.getDay()
    
    return (hour * 60 * 60) + (minutes * 60) + seconds
}

function getPeriod(schedule) {
    time = getTime()
    var currentPeriod = 0

    for (var period of Object.keys(schedule.start)) { 
        if (schedule.start[period] <= time) {
            currentPeriod = period
        }
    }

    if (time >= schedule.end[currentPeriod]) {
        return [Number(currentPeriod), Number(currentPeriod) + 1, time]
    }

    return [Number(currentPeriod), time]
}

function getTimeLeft(schedule) {
    period = getPeriod(schedule)
    var s = "s"

    if (period[0] == 0) {
        var timeLeft = (schedule.start[1] - period[1]) / 60

        if (timeLeft < 1) {
            timeLeft = schedule.start[1] - period[1]
            if (timeLeft == 1) {
                s = ""
            }
            document.getElementById("display").innerHTML = `${timeLeft} second${s} until period 1`
        } else {
            if (timeLeft == 1) {
                s = ""
            }
            document.getElementById("display").innerHTML = `${timeLeft} minute${s} until period 1`
        }
    } else if (period.length == 2) {
        var timeLeft = (schedule.end[period[0]] - period[1]) / 60

        if (timeLeft < 1) {
            timeLeft = schedule.end[period[0]] - period[1] 
            if (timeLeft == 1) {
                s = ""
            }
            document.getElementById("display").innerHTML = `${timeLeft} second${s} left in period ${period[0]}`
        } else {
            if (timeLeft == 1) {
                s = ""
            }
            document.getElementById("display").innerHTML = `${timeLeft} minute${s} left in period ${period[0]}`
        }
    } else {
        if (schedule.start[period[1]] == undefined) {
            document.getElementById("display").innerHTML = "Classes over"
        } else {
            var timeLeft = (schedule.start[period[1]] - period[2]) / 60

            if (timeLeft < 1) {
                timeLeft = schedule.start[period[1]] - period[2]
                if (timeLeft == 1) {
                    s = ""
                }
                document.getElementById("display").innerHTML = `${timeLeft} second${s} until period ${period[0]+1}`
            } else {
                if (timeLeft == 1) {
                    s = ""
                }
                document.getElementById("display").innerHTML = `${timeLeft} minute${s} until period ${period[0]+1}`
            }
        }
    }
}

function main(schedule) {
    convertSchedule(schedule)
    getTimeLeft(schedule)
    setInterval(getTimeLeft, 1000, schedule)
}