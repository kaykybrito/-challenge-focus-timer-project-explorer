const buttonPlay = document.querySelector('.play')
const buttonPause = document.querySelector('.pause')
const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')
const buttonStop = document.querySelector('.stop')
const buttonMoreTimer = document.querySelector('.more-timer')
const buttonLessTimer = document.querySelector('.less-timer')
const buttonSoundForest = document.querySelector('.sound-forest')
const buttonSoundRain = document.querySelector('.sound-rain')
const buttonSoundCafeteria = document.querySelector('.sound-cafeteria')
const buttonSoundFireplace = document.querySelector('.sound-fireplace')

let minutesReset = Number(minutesDisplay.textContent)
let timeTimerOut

const audioForest = document.querySelector('#audioForest')
const audioRain = document.querySelector('#audioRain')
const audioCafeteria = document.querySelector('#audioCafeteria')
const audioFirePlace = document.querySelector('#audioFirePlace')

function resetControls() {
  buttonPlay.classList.remove('hide')
  buttonPause.classList.add('hide')
}

function resetTimer() {
  clearTimeout(timeTimerOut)
  resetControls()
  updateTimerDisplay(minutesReset, 0)
}

function updateTimerDisplay(minutes, seconds) {
  secondsDisplay.textContent = String(seconds).padStart(2, '0')
  minutesDisplay.textContent = String(minutes).padStart(2, '0')
}

function countDown() {
  timeTimerOut = setTimeout(() => {
    let minutes = Number(minutesDisplay.textContent)
    let seconds = Number(secondsDisplay.textContent)

    if (minutes <= 0 && seconds <= 0) {
      updateTimerDisplay(minutesReset, 0)
      resetControls()

      return
    }

    if (seconds <= 0) {
      seconds = 3
      --minutes
    }
    updateTimerDisplay(minutes, seconds - 1)

    countDown()
  }, 1000)
}

buttonPlay.addEventListener('click', function () {
  buttonPlay.classList.add('hide')
  buttonPause.classList.remove('hide')

  countDown()
})

buttonPause.addEventListener('click', function () {
  resetControls()
  clearTimeout(timeTimerOut)
})

buttonStop.addEventListener('click', function () {
  resetTimer()
})

buttonMoreTimer.addEventListener('click', function () {
  let moreTimer = minutesReset
  if (moreTimer >= 60) {
    return
  }

  moreTimer = Number((minutesReset = minutesReset + 5))
  updateTimerDisplay(moreTimer, 0)
})

buttonLessTimer.addEventListener('click', function () {
  let lessTimer = minutesReset
  if (lessTimer <= 0) {
    return
  }

  lessTimer = Number((minutesReset = minutesReset - 5))
  updateTimerDisplay(lessTimer, 0)
})

buttonSoundForest.addEventListener('click', function () {
  buttonSoundForest.classList.toggle('active')
  buttonSoundRain.classList.remove('active')
  buttonSoundCafeteria.classList.remove('active')
  buttonSoundFireplace.classList.remove('active')
  audioRain.pause()
  audioCafeteria.pause()
  audioFirePlace.pause()

  if (audioForest.paused) {
    audioForest.play()
  } else {
    audioForest.pause()
  }
})
buttonSoundRain.addEventListener('click', function () {
  buttonSoundRain.classList.toggle('active')
  buttonSoundForest.classList.remove('active')
  buttonSoundCafeteria.classList.remove('active')
  buttonSoundFireplace.classList.remove('active')

  audioForest.pause()
  audioCafeteria.pause()
  audioFirePlace.pause()

  if (audioRain.paused) {
    audioRain.play()
  } else {
    audioRain.pause()
  }
})
buttonSoundCafeteria.addEventListener('click', function () {
  buttonSoundCafeteria.classList.toggle('active')
  buttonSoundForest.classList.remove('active')
  buttonSoundRain.classList.remove('active')
  buttonSoundFireplace.classList.remove('active')

  audioRain.pause()
  audioForest.pause()
  audioFirePlace.pause()

  if (audioCafeteria.paused) {
    audioCafeteria.play()
  } else {
    audioCafeteria.pause()
  }
})
buttonSoundFireplace.addEventListener('click', function () {
  buttonSoundFireplace.classList.toggle('active')
  buttonSoundForest.classList.remove('active')
  buttonSoundRain.classList.remove('active')
  buttonSoundCafeteria.classList.remove('active')

  audioRain.pause()
  audioCafeteria.pause()
  audioForest.pause()

  if (audioFirePlace.paused) {
    audioFirePlace.play()
  } else {
    audioFirePlace.pause()
  }
})
