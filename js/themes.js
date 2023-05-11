const themeButtons = {
    florest: document.querySelector('#florest'),
    rain: document.querySelector('#rain'),
    coffeeShop: document.querySelector('#coffee-shop'),
    fireplace: document.querySelector('#fireplace'),
}

const themeIcons = {
    florest: document.querySelector('#florest svg path'),
    rain: document.querySelector('#rain svg path'),
    coffeeShop: document.querySelector('#coffee-shop svg path'),
    fireplace: document.querySelector('#fireplace svg path'),
}

const themeSounds = {
    florest: new Audio('./wavs/florest.wav'),
    rain: new Audio('./wavs/rain.wav'),
    coffeeShop: new Audio('./wavs/coffee-shop.wav'),
    fireplace: new Audio('./wavs/fireplace.wav'),
}

for ( const soundInLoop in themeSounds){ 
    themeSounds[soundInLoop].loop = true;
}

function resetSound(sound){
    sound.pause();
    sound.currentTime = 0;
}

function handleButtonClick(button, icon, sound){
    if(button.classList.contains('selected')) {
        button.classList.remove('selected');
        icon.classList.remove('selected');
        resetSound(sound);
    }else {

    for (const buttonKey in themeButtons) {
        themeButtons[buttonKey].classList.remove('selected')
      }

    for (const iconKey in themeIcons) {
        themeIcons[iconKey].classList.remove('selected')
    }

    for(const soundKey in themeSounds) {
        themeSounds[soundKey].pause();
        resetSound(themeSounds[soundKey]);
    }

    button.classList.add('selected');
    icon.classList.add('selected');
    sound.play();

    }
}

themeButtons.florest.addEventListener('click', () => {
    handleButtonClick(themeButtons.florest, themeIcons.florest, themeSounds.florest)
});
themeButtons.rain.addEventListener('click', () => {
    handleButtonClick(themeButtons.rain, themeIcons.rain, themeSounds.rain)
});
themeButtons.coffeeShop.addEventListener('click', () => {
    handleButtonClick(themeButtons.coffeeShop, themeIcons.coffeeShop, themeSounds.coffeeShop)
});
themeButtons.fireplace.addEventListener('click', () => {
    handleButtonClick(themeButtons.fireplace, themeIcons.fireplace, themeSounds.fireplace)
});


export {themeButtons, themeIcons, themeSounds}

