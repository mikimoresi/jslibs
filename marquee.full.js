var speed = 1; //every 35ms the div will scroll by this number of pixel
var restart_delay = 2000;
var pause_on_over = true;

var new_speed = speed;
var pause_speed = (pause_on_over) ? 0 : new_speed;
var actual_height = '';
window.intervalFunc;

function doScroll() {
    if (parseInt(cross_marquee.style.top) > (8 - actual_height + 400)) {
        cross_marquee.style.top = parseInt(cross_marquee.style.top) - new_speed + "px";
    } else {
        clearInterval(window.intervalFunc);
        setTimeout(function(){restart()}, restart_delay);
    }
}

function restart() {
    cross_marquee.style.top = parseInt(marquee_height) + 8 + "px";
    window.intervalFunc = setInterval(function () {
        doScroll()
    }, 35);
}

function initializeMarquee() {
    cross_marquee = document.getElementById("vertical_marquee");
    cross_marquee.style.top = 0;
    marquee_height = document.getElementById("marquee_container").offsetHeight;
    actual_height = cross_marquee.offsetHeight
    if (window.opera || navigator.userAgent.indexOf("Netscape/7") != -1) {
        cross_marquee.style.height = marquee_height + "px";
        cross_marquee.style.overflow = "scroll";
        return;
    }
    window.intervalFunc = setInterval(function () {
        doScroll()
    }, 35);
}

if (window.addEventListener) {
    window.addEventListener("load", initializeMarquee, false);
} else if (window.attachEvent) {
    window.attachEvent("onload", initializeMarquee);
} else if (document.getElementById) {
    window.onload = initializeMarquee;
}