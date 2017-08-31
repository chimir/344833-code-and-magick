'use strict';
(function () {
  var COAT_COLOR = [
    'rgb(101, 137, 164)',
    'rgb(241, 43, 107)',
    'rgb(146, 100, 161)',
    'rgb(56, 159, 117)',
    'rgb(215, 210, 55)',
    'rgb(0, 0, 0)'
  ];

  var EYES_COLOR = [
    'black',
    'red',
    'blue',
    'yellow',
    'green'
  ];

  var FIREBALL_COLOR = [
    '#ee4830',
    '#30a8ee',
    '#5ce6c0',
    '#e848d5',
    '#e6e848'
  ];

  var setupPlayer = document.querySelector('.setup-player'); // Настройки персонажа.
  var wizardCoat = setupPlayer.querySelector('.setup-wizard .wizard-coat'); // Плащ.
  var wizardEyes = setupPlayer.querySelector('.setup-wizard .wizard-eyes'); // Глаза.
  var fireball = setupPlayer.querySelector('.setup-fireball-wrap'); // Фаербол.

  var fillElement = function (element, color) {
    element.style.fill = color;
  };

  var changeElementBackground = function (element, color) {
    element.style.backgroundColor = color;
  };

  var getCoatRandomColor = function () {
    return COAT_COLOR[window.util.getRandom(0, COAT_COLOR.length)];
  };

  var getEyesRandomColor = function () {
    return EYES_COLOR[window.util.getRandom(0, EYES_COLOR.length)];
  };

  var getFireballRandomColor = function () {
    return FIREBALL_COLOR[window.util.getRandom(0, FIREBALL_COLOR.length)];
  };

  window.colorizeElement(wizardCoat, getCoatRandomColor, fillElement);
  window.colorizeElement(wizardEyes, getEyesRandomColor, fillElement);
  window.colorizeElement(fireball, getFireballRandomColor, changeElementBackground);
})();
