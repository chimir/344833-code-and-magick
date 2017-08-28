'use strict';
(function () {
  var modal = document.querySelector('.setup'); // Всплывающее окно.
  var openModalButton = document.querySelector('.setup-open'); // Кнопка открытия (аватарка).
  var closeModalButton = modal.querySelector('.setup-close'); // Кнопка закрытия (крестик).

  // Удаляет класс 'hidden' у модального окна.
  var openModal = function () {
    modal.classList.remove('hidden');
  };

  // Добаляет класс 'hidden' модальному окну.
  var closeModal = function () {
    modal.classList.add('hidden');
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
    window.util.isEnterEvent(evt, openModal);
  });

  // Закрываем модальное окно при нажатии Ssc.
  document.addEventListener('keydown', function (evt) {
    var userNameInput = modal.querySelector('.setup-user-name');

    if (evt.target !== userNameInput) {
      window.util.isEscEvent(evt, closeModal);
    }
  });

  // Закрытие модального окна при нажатии Enter на setup-close
  closeModalButton.addEventListener('keydown', function (evt) {
    window.util.isEnterEvent(evt, closeModal);
  });
})();
