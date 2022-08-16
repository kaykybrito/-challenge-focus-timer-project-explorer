export default function () {
  const audioForest = document.querySelector('#audioForest')
  const audioRain = document.querySelector('#audioRain')
  const audioCafeteria = document.querySelector('#audioCafeteria')
  const audioFirePlace = document.querySelector('#audioFirePlace')

  return {
    audioForest,
    audioRain,
    audioCafeteria,
    audioFirePlace
  }
}

import sounds from './sounds.js'

const { audioForest, audioRain, audioCafeteria, audioFirePlace } = sounds()
