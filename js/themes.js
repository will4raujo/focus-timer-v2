function createThemeElements(theme) {
  const button = document.querySelector(`#${theme}`);
  const icon = document.querySelector(`#${theme} svg path`);
  const sound = new Audio(`./wavs/${theme}.wav`);
  const volume = document.querySelector(`#${theme} .volume-bar input[type="range"]`);

  sound.loop = true;
  volume.value = 50;

  return {
    button,
    icon,
    sound,
    volume
  };
}


const florest = createThemeElements('florest');
const rain = createThemeElements('rain');
const coffeeShop = createThemeElements('coffee-shop');
const fireplace = createThemeElements('fireplace');

const themes = {
  florest,
  rain,
  coffeeShop,
  fireplace,
};

let clickedOnVolume = false;

function handleButtonClick(theme) {

  const { button, icon, sound, volume } = theme;

  volume.addEventListener('click', () => {
    clickedOnVolume = true;
  })


  if (button.classList.contains('selected') && clickedOnVolume == false) {
    button.classList.remove('selected');
    icon.classList.remove('selected');
    volume.classList.remove('selected');
    resetSound(sound);

  } else {
    for (const themeKey in themes) {
      const { button, icon, sound, volume } = themes[themeKey];
      button.classList.remove('selected');
      icon.classList.remove('selected');
      volume.classList.remove('selected');
      resetSound(sound);
    }

    button.classList.add('selected');
    icon.classList.add('selected');
    volume.classList.add('selected');
    clickedOnVolume = false;
    sound.play();
  }


}

function resetSound(theme) {
  theme.pause();
  theme.currentTime = 0;
}

florest.button.addEventListener('click', () => {
  handleButtonClick(florest);
});

rain.button.addEventListener('click', () => {
  handleButtonClick(rain);
});

coffeeShop.button.addEventListener('click', () => {
  handleButtonClick(coffeeShop);
});

fireplace.button.addEventListener('click', () => {
  handleButtonClick(fireplace);
});

function controlVolume(theme) {
  const { sound, volume } = theme

  volume.addEventListener('mousedown', () => {
    updateVolume()
  })

  volume.addEventListener('input', () => {
    updateVolume()
  })

  function updateVolume() {
    sound.volume = volume.value / 100;
  }
}

florest.volume.addEventListener('click', () => {
  controlVolume(florest)
})
rain.volume.addEventListener('click', () => {
  controlVolume(rain)
})
coffeeShop.volume.addEventListener('click', () => {
  controlVolume(coffeeShop)
})
fireplace.volume.addEventListener('click', () => {
  controlVolume(fireplace)
})

const buttonSun = document.querySelector('.sun');
const buttonMoon = document.querySelector('.moon');
const controlButtons = document.querySelectorAll('.control-buttons svg path');
const controlButtonsArray = [...controlButtons];

buttonSun.addEventListener('click', () => {
  darkMode(florest)
  darkMode(rain)
  darkMode(coffeeShop)
  darkMode(fireplace)
  hideButtonDarkMode()
});

buttonMoon.addEventListener('click', () => {
  darkMode(florest)
  darkMode(rain)
  darkMode(coffeeShop)
  darkMode(fireplace)
  hideButtonDarkMode()
})

function hideButtonDarkMode() {
  buttonMoon.classList.toggle('hide');
  buttonSun.classList.toggle('hide');
  document.body.classList.toggle('dark-mode');
  for (const buttons in controlButtonsArray) {
    controlButtonsArray[buttons].classList.toggle('dark-mode')
  }
}

function darkMode(theme) {

  const { button, icon, sound, volume } = theme;

  button.classList.toggle('dark-mode')
  icon.classList.toggle('dark-mode')
  sound.classList.toggle('dark-mode')
  volume.classList.toggle('dark-mode')
}