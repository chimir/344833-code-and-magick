'use strict';
(function () {
  var artifactsShop = document.querySelector('.setup-artifacts-shop'); // Магазин.
  var artifacts = document.querySelector('.setup-artifacts'); // Предметы.
  var artifactsCell = artifacts.querySelectorAll('.setup-artifacts-cell'); // Ячейки.

  var draggedItem = null;

  // Подсветка ячеек в которые можно перетаскивать элемент.
  var heightCell = function (value) {
    for (var i = 0; i < artifactsCell.length; i++) {
      artifactsCell[i].style.outline = value;
    }
  };

  artifactsShop.addEventListener('dragstart', function (evt) {
    if (evt.target.tagName.toLowerCase() === 'img') {
      draggedItem = evt.target;
      draggedItem = draggedItem.cloneNode();
      evt.dataTransfer.setData('text/plain', evt.target.alt);
    }
  });

  artifactsShop.addEventListener('drag', function () {
    heightCell('2px dashed red');
  });

  artifactsShop.addEventListener('dragend', function () {
    heightCell('');
  });

  artifacts.addEventListener('drag', function () {
    heightCell('2px dashed red');
  });

  artifacts.addEventListener('dragover', function (evt) {
    evt.preventDefault();

  });

  artifacts.addEventListener('drop', function (evt) {
    evt.target.style.backgroundColor = '';

    if (!evt.target.lastChild && evt.target.nodeName === 'DIV') {
      evt.target.appendChild(draggedItem);
    }

    evt.preventDefault();
  });

  artifacts.addEventListener('dragenter', function (evt) {
    evt.target.style.backgroundColor = 'yellow';
    evt.preventDefault();
  });

  artifacts.addEventListener('dragleave', function (evt) {
    evt.target.style.backgroundColor = '';
    evt.preventDefault();
  });

  artifacts.addEventListener('dragend', function () {
    heightCell('');
  });
})();
