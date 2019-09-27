"use strict";

var makeGrid = function makeGrid(row, col) {
  var initialVal = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var grid = new Array(row).fill(null);
  grid.forEach(function (row, i) {
    grid[i] = new Array(col).fill(initialVal);
  });
  return grid;
};

var initialGrid = makeGrid(9, 9, null); // const nextGrid = makeGrid(18,18, null)

var sys = new System(0, 0, initialGrid);
sys.array = sys.array.map(function (row, x) {
  return row.map(function (col, y) {
    return Math.floor(Math.random() * 2) === 1 ? new Agent('automaton', x, y) : new Agent('empty', x, y);
  });
}); // sys.array[4][4] = new Agent('f', [mountainGenetics.scaffold], sys, 4, 4);

function setup() {
  createCanvas(501, 501);
  frameRate(5);
}

function draw() {
  // background(0);
  sys.runTick();
  sys.display();
}