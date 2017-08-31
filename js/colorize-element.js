'use strict';
(function () {
  window.colorizeElement = function (element, color, onColorChange) {
    element.addEventListener('click', function () {
      onColorChange(element, color());
    });
  };
})();
