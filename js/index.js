import {
    buttonPlay,
    buttonStop,
    buttonIncrease,
    buttonDecrease,
    minutesDisplay,
    secondsDisplay
} from "./config.js";

import Timer from "./timer.js"
import Events from "./events.js";
import {  } from "./themes.js";

import Sound from "./sounds.js"

const sound = Sound();

const timer = Timer({
    minutesDisplay,
    secondsDisplay
})

Events({timer, sound})

