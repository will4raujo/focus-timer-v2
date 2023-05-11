import Sounds from "./sounds.js"

export default function Timer({
    minutesDisplay,
    secondsDisplay
}) {
    let timerTimeout;
    let minutes = Number(minutesDisplay.textContent);
    let seconds = Number(secondsDisplay.textContent);

    function updateDisplay(newMinutes, seconds){
        newMinutes = newMinutes === undefined ? minutes : newMinutes
        seconds = seconds === undefined ? 0 : seconds
        minutesDisplay.textContent = String(newMinutes).padStart(2, '0');
        secondsDisplay.textContent = String(seconds).padStart(2, '0');
    }

    function countdown() {
        timerTimeout = setTimeout(() => {
              let seconds = Number(secondsDisplay.textContent);
              let minutes = Number(minutesDisplay.textContent);
              let isFinished = minutes <= 0 && seconds <= 0
      
              updateDisplay(minutes, 0);
      
              if ( isFinished ) {
                    Sounds().timerOver();
                  return
              }
      
              if ( seconds <= 0 ) {
                  seconds = 60;
                  --minutes
              }
      
              updateDisplay(minutes, String(seconds - 1));
              
              countdown();
          }, 1000)
      }

      function updateMinutes(newMinutes) {
        minutes = newMinutes
    }

    function hold() {
        clearTimeout(timerTimeout)
    }

    function increaseTime(){
        minutes = minutes + 5;
        updateDisplay(minutes, String(seconds));
        clearTimeout(timerTimeout);
        countdown();

    }

    function decreaseTime() {
        minutes = minutes - 5;
        updateDisplay(minutes, String(seconds));
        clearTimeout(timerTimeout);
        countdown();
        if (minutes < 5 && seconds <= 59) {
            clearTimeout(timerTimeout);
            updateDisplay(0, 0)
        }
    }


    return { //factory
        countdown,
        updateDisplay,
        updateMinutes,
        hold,
        increaseTime,
        decreaseTime
    }
}