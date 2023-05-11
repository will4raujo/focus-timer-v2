import {

    buttonPlay,
    buttonStop,
    buttonIncrease,
    buttonDecrease,

} from "./config.js"

export default function({timer, sound}) {
    let playWasClicked = false

    buttonPlay.addEventListener('click', () => {
        sound.pressButton();
        if (playWasClicked == false) {
            timer.countdown();
            playWasClicked = true
        }
    })

    buttonStop.addEventListener('click', () => {
        sound.pressButton()
        timer.hold();
        playWasClicked = false;
    })

    buttonIncrease.addEventListener('click', () => {
        sound.pressButton()
        timer.increaseTime();
        playWasClicked = true;
    })

    buttonDecrease.addEventListener('click', () => {
        sound.pressButton()
        timer.decreaseTime();
        playWasClicked = true;

    })
}
