function timer() {

    let hours = $('#hours');
    let minutes = $('#minutes');
    let seconds = $('#seconds');
    let start = $('#start-timer');
    let stop = $('#stop-timer');
    let interval = null;
    let sec = 0;

    start.on('click', startTimer);
    stop.on('click', stopTimer);

    function startTimer() {
        if (interval === null) {
            interval = setInterval(increment, 1000);
        }

        function increment() {
            sec++;
            hours.text(('0' + Math.floor(sec / 60 / 60) % 24).slice(-2));
            minutes.text(('0' + Math.floor(sec / 60) % 60).slice(-2));
            seconds.text(('0' + Math.floor(sec % 60)).slice(-2));
        }
    }

    function stopTimer() {

        clearInterval(interval);
        interval = null;
    }
}
