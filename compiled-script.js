"use strict";

require("core-js/modules/es.regexp.exec");

require("core-js/modules/es.string.split");

document.getElementById('arrow-background').addEventListener('click', function () {
  if (document.getElementById('mobile-flag').style.visible === 'none') {
    if (document.getElementById('social-links').style.display === 'none' || document.getElementById('social-links').style.display === '') {
      document.getElementById('social-links').style.display = 'flex';
      document.getElementById('arrow-background').style.backgroundColor = 'hsl(214, 17%, 51%)';
      document.getElementById('arrow').style.display = 'none';
      document.getElementById('white-arrow').style.display = 'flex';
    } else {
      document.getElementById('social-links').style.display = 'none';
      document.getElementById('arrow-background').style.backgroundColor = 'hsl(210, 46%, 95%)';
      document.getElementById('arrow').style.display = 'flex';
      document.getElementById('white-arrow').style.display = 'none';
    }
  } else {
    var cardStyle = window.getComputedStyle(document.getElementById('card'));
    var cardRows = cardStyle.gridTemplateRows.split(" ");
    var cardHeight = cardStyle.height.substring(0, cardStyle.height.length - 2);
    var lastRow = cardRows[cardRows.length - 1].substring(0, cardRows[cardRows.length - 1].length - 2);
    var newCardRows = '';
    var style = window.getComputedStyle(document.getElementById('content'));
    var rows = style.gridTemplateRows.split(" ");
    var newRows = '';
    var height = style.height.substring(0, style.height.length - 2);
    var modRow = rows[4].substring(0, rows[4].length - 2) / height * 100;

    if (document.getElementById('mobile-social-links').style.display === 'none' || document.getElementById('mobile-social-links').style.display === '') {
      for (var i = 0; i < rows.length - 1; i++) {
        newRows += rows[i].substring(0, rows[i].length - 2) / height * 100 + '% ';
      }

      newRows += modRow / 2 + '%';

      for (var j = 0; j < cardRows.length - 1; j++) {
        newCardRows += cardRows[j].substring(0, cardRows[j].length - 2) / cardHeight * 100 + '% ';
      }

      newCardRows += lastRow - modRow / 2 + '%';
      document.getElementById('mobile-social-links').style.display = 'flex';
      document.getElementById('arrow-background').style.backgroundColor = 'hsl(214, 17%, 51%)';
      document.getElementById('arrow').style.display = 'none';
      document.getElementById('white-arrow').style.display = 'flex';
      document.getElementById('content').style.gridTemplateRows = newRows;
      document.getElementById('card').style.gridTemplateRows = newCardRows;
    } else {
      for (var i = 0; i < rows.length - 1; i++) {
        newRows += rows[i].substring(0, rows[i].length - 2) / height * 100 + '% ';
      }

      newRows += modRow * 2 + '%';

      for (var j = 0; j < cardRows.length - 1; j++) {
        newCardRows += cardRows[j].substring(0, cardRows[j].length - 2) / cardHeight * 100 + '% ';
      }

      newCardRows += lastRow + modRow * 2 + '%';
      document.getElementById('mobile-social-links').style.display = 'none';
      document.getElementById('arrow-background').style.backgroundColor = 'hsl(214, 17%, 51%)';
      document.getElementById('arrow').style.display = 'none';
      document.getElementById('white-arrow').style.display = 'flex';
      document.getElementById('content').style.gridTemplateRows = newRows;
      document.getElementById('card').style.gridTemplateRows = newCardRows;
    }
  }
});
