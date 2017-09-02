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
    },

    // Сообщение об шибке.
    errorHandler: function (errorMessage) {
      var node = document.createElement('div');

      node.style.backgroundColor = '#323232';
      node.style.fontSize = '14px';
      node.style.lineHeight = '20px';
      node.style.minWidth = '288px';
      node.style.maxWidth = '568px';
      node.style.borderRadius = '2px';
      node.style.padding = '14px 24px';
      node.style.position = 'absolute';
      node.style.left = '20px';
      node.style.bottom = '20px';
      node.style.zIndex = '99';

      node.textContent = errorMessage;
      document.body.insertAdjacentElement('afterbegin', node);
    }
  };
})();
