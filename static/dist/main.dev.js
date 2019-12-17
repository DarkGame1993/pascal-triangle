"use strict";

function pascalTriangle() {
  var arr = [];
  var i, j;
  var size = prompt('insert the number');
  document.write('<style>\n');
  document.write('body { margin: 123px 123px 0 0; overflow-x: scroll}\n');
  document.write('p {text-align: center; margin: 0; font-family: monospace; font-size: 8pt }\n');
  document.write('b {width: 3em; text-align: center; display: inline-block; margin-left: 3em}\n');
  document.write('</style>\n');
  document.write('<body>\n');
  document.write('<p>');

  for (i = 1; i <= size; i++) {
    arr[i] = 0;
  }

  arr[0] = 1;

  for (j = 1; j <= size; j++) {
    for (i = j; i >= 1; i--) {
      var item = arr[i - 1] === 1 ? '*' : '&nbsp;';
      document.write('\n<b>' + item + '</b>');
      arr[i] = arr[i - 1] + arr[i];
    }

    document.write('<p>');
  }
}

pascalTriangle();