document.addEventListener("DOMContentLoaded", function() {
    const timerDisplay = document.getElementById("timer-display");
    const startButton = document.getElementById("start");
    const stopButton = document.getElementById("stop");
    const resetButton = document.getElementById("reset");
    const inputTime = document.getElementById("inputTime");

    let timer;
    let minutes = 25;
    let seconds = 0;

    function updateDisplay() {
        timerDisplay.textContent = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
    }

    function startTimer() {
        minutes = parseInt(inputTime.value, 10) || 25;
        seconds = 0;

        timer = setInterval(function() {
            if (minutes === 0 && seconds === 0) {
                clearInterval(timer);
                alert("Pomodoro session is over!");
                resetTimer();
            } else if (seconds === 0) {
                minutes--;
                seconds = 59;
            } else {
                seconds--;
            }
            updateDisplay();
        }, 1000);
    }

    function stopTimer() {
        clearInterval(timer);
    }

    function resetTimer() {
        clearInterval(timer);
        minutes = 25;
        seconds = 0;
        inputTime.value = "25";
        updateDisplay();
    }

    startButton.addEventListener("click", startTimer);
    stopButton.addEventListener("click", stopTimer);
    resetButton.addEventListener("click", resetTimer);


    updateDisplay();
});