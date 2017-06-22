/**
 * Created by radek on 25.04.17.
 */

function getTimeRemaining(startDate) {
    var t = Date.parse(new Date()) - Date.parse(startDate);
    var seconds =   Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
        'total': t,
        'seconds': seconds,
        'minutes': minutes,
        'hours': hours,
        'days': days
    };
}
function timeToStart(id, startDate) {
    var myClock = document.getElementById('countdown');
    var myDays = myClock.querySelector('#days');
    var myHours = myClock.querySelector('#hours');
    var myMinutes = myClock.querySelector('#minutes');
    var mySeconds = myClock.querySelector('#seconds');

    function updateClock() {
        var t = getTimeRemaining(startDate);

        myDays.innerHTML = t.days;
        myHours.innerHTML = ('0' + t.hours).slice(-2);
        myMinutes.innerHTML = ('0' + t.minutes).slice(-2);
        mySeconds.innerHTML = ('0' + t.seconds).slice(-2);

        if (t.total <= 0) {
            clearInterval(timeInterval);
        }
    }
    updateClock();
    var timeInterval= setInterval(updateClock, 1000)
}
var deadline = new Date(2017, 5, 5, 23, 59, 59);
timeToStart('countdown', deadline);