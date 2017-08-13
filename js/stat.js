'use strict';

window.renderStatistics = function (ctx, names, times) {
  // Тень облака.
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110, 20, 420, 270);

  // Облако.
  ctx.fillStyle = '#ffffff';
  ctx.strokeRect(100, 10, 420, 270);
  ctx.fillRect(100, 10, 420, 270);

  // Заголовки.
  ctx.fillStyle = '#000000';
  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура вы победили!', 120, 30);
  ctx.fillText('Список результатов:', 120, 50);

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
    ctx.fillStyle = '#000000';
    ctx.font = '16px PT Mono';
    ctx.fillText(timeRound, histogramPositionLeft, userHistogramPositionTop - 15);

    // Цвет гистограммы.
    var randomSaturation = Math.floor(Math.random() * (maxSaturation - minSaturation)) + minSaturation;
    if (names[e] === 'Вы') {
      ctx.fillStyle = '#ff0000';
    } else {
      ctx.fillStyle = 'hsl(240, ' + randomSaturation + '%, 50%)';
    }

    // Гистограмма отдельного игрока.
    ctx.fillRect(histogramPositionLeft, userHistogramPositionTop, widthHistogram, userHeightHistogram);

    // Вывод имени каждого игрока.
    ctx.fillStyle = '#000000';
    ctx.font = '16px PT Mono';
    ctx.fillText(names[e], histogramPositionLeft, 250);

    histogramPositionLeft = histogramPositionLeft + widthHistogram + widthBetween;
  }
};
