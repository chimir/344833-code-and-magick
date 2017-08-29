'use strict';
(function () {
  var modal = document.querySelector('.setup'); // Всплывающее окно.
  var openModalButton = document.querySelector('.setup-open'); // Кнопка открытия (аватарка).
  var closeModalButton = modal.querySelector('.setup-close'); // Кнопка закрытия (крестик).
  var dialogHandle = modal.querySelector('.upload'); // Блок, за который передвигаем.

  // Удаляет класс 'hidden' у модального окна.
  var openModal = function () {
    modal.classList.remove('hidden');
  };

  // Добаляет класс 'hidden' модальному окну и удаляем атребут 'style'.
  var closeModal = function () {
    modal.classList.add('hidden');
    modal.removeAttribute('style');
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

  // Перемещение модального окна.
  dialogHandle.addEventListener('mousedown', function (evt) {
    evt.preventDefault();

    // Начальные координаты мышки.
    var startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };

    // Удержание мышки.
    var onMouseMove = function (moveEvt) {
      moveEvt.preventDefault();

      // Проверяем, если координаты мышки сместились, задаем для аватарки
      // z-index больше, чем у поля загрузки файла (чтоб оно не срабатывало).
      if (startCoords.x !== evt.clientX || startCoords.y !== evt.clientY) {
        dialogHandle.querySelector('.setup-user-pic').style.zIndex = 1;
      }

      var shift = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY
      };

      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };

      modal.style.top = (modal.offsetTop - shift.y) + 'px';
      modal.style.left = (modal.offsetLeft - shift.x) + 'px';
    };

    // Отпускание мышки.
    var onMouseUp = function (upEvt) {
      upEvt.preventDefault();

      dialogHandle.querySelector('.setup-user-pic').removeAttribute('style');

      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });
})();
