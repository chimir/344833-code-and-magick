'use strict';
(function () {
  var KEYCODE = {
    ENTER: 13,
    ESC: 27
  };

  // buttonClickHandler
  // onButtonClick
  window.util = {
    isEscEvent: function (evt, action) {
      if (evt.keyCode === KEYCODE.ESC) {
        action();
      }
    },

    isEnterEvent: function (evt, action) {
      if (evt.keyCode === KEYCODE.ENTER) {
        action();
      }
    },

    getRandom: function (min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    }
  };
})();
