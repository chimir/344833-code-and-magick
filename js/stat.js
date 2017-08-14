'use strict';

window.renderStatistics = function (ctx, names, times) {
  // Функция рисования прямоугольника с заливкой.
  var drawRectangle = function (x, y, width, height, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, width, height);
  };

  // Функция написания текста.
  var writeText = function (text, x, y, color, font, baseline) {
    ctx.fillStyle = color || '#000000';
    ctx.font = font || '16px PT Mono';
    ctx.textBaseline = baseline || 'hanging';
    ctx.fillText(text, x, y);
  };

  // Тень облака.
  drawRectangle(110, 20, 420, 270, 'rgba(0, 0, 0, 0.7)');

  // Облако.
  ctx.strokeRect(100, 10, 420, 270);
  drawRectangle(100, 10, 420, 270, '#ffffff');

  // Заголовки.
  writeText('Ура вы победили!', 120, 30);
  writeText('Список результатов:', 120, 50);

  var widthHistogram = 40;
  var widthBetween = 50;
  var heightHistogram = 150;
  var histogramPositionLeft = 140;
  var histogramPositionTop = 90;

  // Максимальне время выполнения.
  var max = -1;
  for (var i = 0; i < names.length; i++) {
    var time = times[i]; // Время выполнения каждым игроком.

    if (time > max) {
      max = time;
    }
  }

  var step = heightHistogram / max;
  // var step = heightHistogram / (max - 0); // в демке (max - 0)?
  var maxSaturation = 100; // Максимальное значение насыщенности.
  var minSaturation = 10; // Минимальное значение насыщенности.

  for (var e = 0; e < names.length; e++) {
    var timeRound = Math.round(times[e]);

    var userHeightHistogram = times[e] * step; // Высота гистограммы отдельного игрока.
    var userHistogramPositionTop = (heightHistogram - userHeightHistogram) + histogramPositionTop; // Начало(сверху) гистограммы отдельного игрока.

    // Вывод времени каждого игрока.
    writeText(timeRound, histogramPositionLeft, userHistogramPositionTop - 15);

    // Цвет гистограммы.
    var randomSaturation = Math.floor(Math.random() * (maxSaturation - minSaturation)) + minSaturation;
    var userColorHistogram = '#000000';
    if (names[e] === 'Вы') {
      userColorHistogram = '#ff0000';
    } else {
      userColorHistogram = 'hsl(240, ' + randomSaturation + '%, 50%)';
    }

    // Гистограмма отдельного игрока.
    drawRectangle(histogramPositionLeft, userHistogramPositionTop, widthHistogram, userHeightHistogram, userColorHistogram);

    // Вывод имени каждого игрока.
    writeText(names[e], histogramPositionLeft, 250);

    histogramPositionLeft = histogramPositionLeft + widthHistogram + widthBetween;
  }
};
