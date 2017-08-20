'use strict';

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

var minRandomNumber = 0;
var maxRandomNameNumber = WIZARD_NAMES.length;
var maxRandomSurnameNumber = WIZARD_SURNAMES.length;
var maxRandomCoatColor = COAT_COLOR.length;
var maxRandomEyesColor = EYES_COLOR.length;

var random = function (min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
};

// Опции персонажа (имя, цвет плаща и глаз).
var wizardOptions = function () {
  return {
    'name': WIZARD_NAMES[random(minRandomNumber, maxRandomNameNumber)] + ' ' + WIZARD_SURNAMES[random(minRandomNumber, maxRandomSurnameNumber)],
    'coatColor': COAT_COLOR[random(minRandomNumber, maxRandomCoatColor)],
    'eyesColor': EYES_COLOR[random(minRandomNumber, maxRandomEyesColor)]
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

var overlay = document.querySelector('.overlay'); // Всплывающее окно.
overlay.classList.remove('hidden');
overlay.querySelector('.setup-similar').classList.remove('hidden');

var similarWizardTemplate = document.querySelector('#similar-wizard-template').content; // Фрагмент #similar-wizard-template.

var similarWizardOption = function (selector) {
  return similarWizardTemplate.querySelector(selector);
};

var similarWizardCoat = similarWizardOption('.wizard-coat'); // Плащ персонажа.
var similarWizardEyes = similarWizardOption('.wizard-eyes'); // Глаза персонажа.
var similarWizardLabel = similarWizardOption('.setup-similar-label'); // Имя.

var similarWizardList = overlay.querySelector('.setup-similar-list'); // Контейнер, куда вставляем персонажей.
var fragment = document.createDocumentFragment();

var wizard = function (data) {
  similarWizardLabel.textContent = data.name;
  similarWizardCoat.setAttribute('fill', data.coatColor);
  similarWizardEyes.setAttribute('fill', data.eyesColor);
};

var similarWizards = function (data) {
  var wizardElement = data.cloneNode(true);
  fragment.appendChild(wizardElement);
};

for (var i = 0; i < 4; i++) {
  wizard(similarCharacters[i]);
  similarWizards(similarWizardTemplate);
}

similarWizardList.appendChild(fragment); // Вывод всех персонажей.

