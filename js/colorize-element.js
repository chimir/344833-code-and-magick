'use strict';
(function () {
  var getRandomColor = function (arr) {
    return arr[window.util.getRandom(0, arr.length)];
  };

  window.colorizeElement = function (element, arr, onColorChange) {
    element.addEventListener('click', function () {
      var color = getRandomColor(arr);
      onColorChange(element, color);
    });
  };
})();
