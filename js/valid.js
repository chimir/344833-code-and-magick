'use strict';
(function () {
  var setupWizardForm = document.querySelector('.setup-wizard-form'); // Всплывающее окно.
  var userNameInput = setupWizardForm.querySelector('.setup-user-name');

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
})();
