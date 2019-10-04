"use strict";

var makeGrid = function makeGrid(rows, columns) {
  var val = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var grid = [].fill(val, 0, rows);
  grid.forEach(function (cell, i) {
    return Array.prototype.fill(val, 0, columns);
  });
  return grid;
};