'use strict';
(function () {
  var setupSimilar = document.querySelector('.setup-similar');
  setupSimilar.classList.remove('hidden');

  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content; // Фрагмент #similar-wizard-template.
  var similarWizardList = setupSimilar.querySelector('.setup-similar-list'); // Контейнер, куда вставляем персонажей.

  // описываем персонажа (имя, цвет плаща и глаз).
  var similarWizards = function (data) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = data.name;
    wizardElement.querySelector('.wizard-coat').setAttribute('fill', data.colorCoat);
    wizardElement.querySelector('.wizard-eyes').setAttribute('fill', data.colorEyes);

    return wizardElement;
  };

  var successHandler = function (wizards) {
    var fragment = document.createDocumentFragment();

    for (var i = 0; i < 4; i++) {
      fragment.appendChild(similarWizards(wizards[i]));
    }

    similarWizardList.appendChild(fragment);
  };

  window.backend.load(successHandler, window.util.errorHandler);
})();
