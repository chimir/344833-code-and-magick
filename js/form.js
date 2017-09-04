'use strict';
(function () {
  var modal = document.querySelector('.setup'); // Всплывающее окно.
  var form = modal.querySelector('.setup-wizard-form');

  form.addEventListener('submit', function (evt) {
    window.backend.save(new FormData(form), function () {
      modal.classList.add('hidden');
    }, window.util.errorHandler);
    evt.preventDefault();
  });
})();
