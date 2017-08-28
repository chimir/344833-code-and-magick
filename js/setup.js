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

var FIREBALL_COLOR = [
  '#ee4830',
  '#30a8ee',
  '#5ce6c0',
  '#e848d5',
  '#e6e848'
];

var KEYDOWN = {
  ENTER: 13,
  ESC: 27
};

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

var overlay = document.querySelector('.setup'); // Всплывающее окно.
overlay.querySelector('.setup-similar').classList.remove('hidden');

var similarWizardTemplate = document.querySelector('#similar-wizard-template').content; // Фрагмент #similar-wizard-template.
var similarWizardList = overlay.querySelector('.setup-similar-list'); // Контейнер, куда вставляем персонажей.

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

/**
 * =============
 * одеть Надежду
 * =============
 */

// buttonClickHandler
// onButtonClick
var openModalButton = document.querySelector('.setup-open'); // Кнопка открытия (аватарка).
var closeModalButton = overlay.querySelector('.setup-close'); // Кнопка закрытия (крестик).

var openModal = function () {
  overlay.classList.remove('hidden');
};

var closeModal = function () {
  overlay.classList.add('hidden');
};

// Открываем модальное окно по клику на setup-open.
openModalButton.addEventListener('click', function () {
  openModal();
});

// Закрываем модальное окно по клику на setup-close.
closeModalButton.addEventListener('click', function () {
  closeModal();
});

// Открываем модальное окно при нажатии Enter на setup-open.
openModalButton.addEventListener('keydown', function (evt) {
  if (evt.keyCode === KEYDOWN.ENTER) {
    openModal();
  }
});

// Закрываем модальное окно при нажатии Ssc.
var userNameInput = overlay.querySelector('.setup-user-name');
document.addEventListener('keydown', function (evt) {
  if (evt.keyCode === KEYDOWN.ESC && evt.target !== userNameInput) {
    closeModal();
  }
});

// Закрытие модального окна при нажатии Enter на setup-close
closeModalButton.addEventListener('keydown', function (evt) {
  if (evt.keyCode === KEYDOWN.ENTER) {
    closeModal();
  }
});

// Изменение цвета мантии персонажа по нажатию.
var wizardCoat = overlay.querySelector('.setup-wizard .wizard-coat');
wizardCoat.addEventListener('click', function () {
  var wizardCoatRandomColor = COAT_COLOR[random(0, COAT_COLOR.length)];
  wizardCoat.setAttribute('style', 'fill: ' + wizardCoatRandomColor);
});

// Изменение цвета глаз персонажа по нажатию.
var wizardEyes = overlay.querySelector('.setup-wizard .wizard-eyes');
wizardEyes.addEventListener('click', function () {
  var wizardEyesRandomColor = EYES_COLOR[random(0, EYES_COLOR.length)];
  wizardEyes.setAttribute('fill', wizardEyesRandomColor);
});

// Изменение цвета фаерболов по нажатию.
var fireball = overlay.querySelector('.setup-fireball-wrap');
fireball.addEventListener('click', function () {
  var fireballRandomColor = FIREBALL_COLOR[random(0, FIREBALL_COLOR.length)];

  fireball.setAttribute('style', 'background: ' + fireballRandomColor);
});

// Валидация поля - Имя персонажа
userNameInput.addEventListener('input', function () {
  var minLength = userNameInput.minLength;

  if (userNameInput.validity.tooShort) {
    userNameInput.setCustomValidity('Имя должно состоять минимум из ' + minLength + '-х символов');
  } else {
    userNameInput.setCustomValidity('');
  }

  // Для браузера Edge
  if (userNameInput.value.length < 2) {
    userNameInput.setCustomValidity('Имя должно состоять минимум из 2-х символов');
  } else if (userNameInput.value.length > 25) {
    userNameInput.setCustomValidity('Имя не должен превышать 25 символов');
  } else {
    userNameInput.setCustomValidity('');
  }
});
