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

  // Изменение цвета мантии персонажа по нажатию.
  wizardCoat.addEventListener('click', function () {
    var wizardCoatRandomColor = COAT_COLOR[window.util.getRandom(0, COAT_COLOR.length)];
    wizardCoat.setAttribute('style', 'fill: ' + wizardCoatRandomColor);
  });

  // Изменение цвета глаз персонажа по нажатию.
  wizardEyes.addEventListener('click', function () {
    var wizardEyesRandomColor = EYES_COLOR[window.util.getRandom(0, EYES_COLOR.length)];
    wizardEyes.setAttribute('fill', wizardEyesRandomColor);
  });

  // Изменение цвета фаерболов по нажатию.
  fireball.addEventListener('click', function () {
    var fireballRandomColor = FIREBALL_COLOR[window.util.getRandom(0, FIREBALL_COLOR.length)];
    fireball.setAttribute('style', 'background: ' + fireballRandomColor);
  });
})();
