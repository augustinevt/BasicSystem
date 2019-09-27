"use strict";

var makeGrid = function makeGrid(row, col) {
  var initialVal = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var grid = new Array(row).fill(null);
  grid.forEach(function (row, i) {
    grid[i] = new Array(col).fill(initialVal);
  });
  return grid;
};

var agentDisplay = function agentDisplay(agent) {
  if (agent.type === 0) {
    fill('red');
  } else if (agent.type === 1) {
    fill('lightBlue');
  }

  stroke('none');
  rect(agent.x * 10, agent.y * 10, 10, 10);
};

var initialGrid = makeGrid(50, 50, null);
var sys = new System(50, 50, initialGrid);
sys.grid = initialGrid.map(function (row, y) {
  return row.map(function (col, x) {
    return Math.floor(Math.random() * 2) ? new Agent(0, x, y) : new Agent(1, x, y);
  });
});

function setup() {
  createCanvas(501, 501);
  frameRate();
}

function draw() {
  // background(0);
  sys.runTick();
  sys.display();
}