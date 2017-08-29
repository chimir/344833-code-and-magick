'use strict';
(function () {
  var WIZARD_NAMES = [
    'Иван',
    'Хуан Себастьян',
    'Мария',
    'Кристоф',
    'Виктор',
    'Юлия',
    'Люпита',
    'Вашингтон'
  ];

  var WIZARD_SURNAMES = [
    'да Марья',
    'Верон',
    'Мирабелла',
    'Вальц',
    'Онопко',
    'Топольницкая',
    'Нионго',
    'Ирвинг'
  ];

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

  var setupSimilar = document.querySelector('.setup-similar');
  setupSimilar.classList.remove('hidden');

  var minRandomNumber = 0;
  var maxRandomNameNumber = WIZARD_NAMES.length;
  var maxRandomSurnameNumber = WIZARD_SURNAMES.length;
  var maxRandomCoatColor = COAT_COLOR.length;
  var maxRandomEyesColor = EYES_COLOR.length;

  // Опции персонажа (имя, цвет плаща и глаз).
  var wizardOptions = function () {
    return {
      'name': WIZARD_NAMES[window.util.getRandom(minRandomNumber, maxRandomNameNumber)] + ' ' + WIZARD_SURNAMES[window.util.getRandom(minRandomNumber, maxRandomSurnameNumber)],
      'coatColor': COAT_COLOR[window.util.getRandom(minRandomNumber, maxRandomCoatColor)],
      'eyesColor': EYES_COLOR[window.util.getRandom(minRandomNumber, maxRandomEyesColor)]
    };
  };

  // Создание массива из персонажей.
  var similarCharactersArray = function (data) {
    var array = [];
    for (var i = 0; i < 4; i++) {
      array.push(data());
    }
    return array;
  };

  // Похожие персонажи.
  var similarCharacters = similarCharactersArray(wizardOptions);

  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content; // Фрагмент #similar-wizard-template.
  var similarWizardList = setupSimilar.querySelector('.setup-similar-list'); // Контейнер, куда вставляем персонажей.

  // описываем персонажа (имя, цвет плаща и глаз).
  var similarWizards = function (data) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = data.name;
    wizardElement.querySelector('.wizard-coat').setAttribute('fill', data.coatColor);
    wizardElement.querySelector('.wizard-eyes').setAttribute('fill', data.eyesColor);

    return wizardElement;
  };

  // Вставка персонажей в контейнер.
  var printSimilarWizards = function () {
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < 4; i++) {
      fragment.appendChild(similarWizards(similarCharacters[i]));
    }

    return similarWizardList.appendChild(fragment);
  };

  printSimilarWizards(); // Вывод всех персонажей.
})();
