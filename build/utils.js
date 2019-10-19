"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getNeighborhood = exports.borderManager = exports.getCardinal = exports.getCell = void 0;

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

// const makeGrid = (rows, columns, val=null) => {
//   const grid = [].fill(val, 0, rows)
//   grid.forEach((cell, i) => Array.prototype.fill(val, 0, columns))
//
//   return grid;
// }
var getCell = function getCell(grid, x, y) {
  return grid[y][x];
}; // returns [x,y] where indexes equal operation to be performed on current x/y


exports.getCell = getCell;

var getCardinal = function getCardinal(cardinal) {
  var conversionMap = {
    'nw': [-1, -1],
    'n': [0, -1],
    'ne': [1, -1],
    'w': [-1, 0],
    'e': [1, 0],
    'se': [1, 1],
    's': [0, 1],
    'sw': [-1, 1]
  };
  return conversionMap[cardinal];
};

exports.getCardinal = getCardinal;

var borderManager = function borderManager(grid, x, y, type) {
  if (type === 'wall') {
    if (!grid[x] || !grid[x][y]) {
      return null;
    }

    return grid[x][y];
  } else if (type === 'donut') {
    var height = grid.length;
    var width = grid[0].length;
    var newY = y;
    var newX = x;

    if (y >= height) {
      newY = 0;
    } else if (y < 0) {
      newY = height - 1;
    }

    if (x >= width) {
      newX = 0;
    } else if (x < 0) {
      newX = width - 1;
    }

    return getCell(grid, newX, newY);
  }
};

exports.borderManager = borderManager;

var getNeighborhood = function getNeighborhood(grid, x, y) {
  var cardinals = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : ['nw', 'n', 'ne', 'e', 'se', 's', 'sw', 'w'];
  var gridType = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 'donut';
  var neighborhood = {};
  cardinals.forEach(function (card) {
    var _getCardinal = getCardinal(card),
        _getCardinal2 = _slicedToArray(_getCardinal, 2),
        opX = _getCardinal2[0],
        opY = _getCardinal2[1];

    var neighbor = borderManager(grid, x + opX, y + opY, gridType);
    neighborhood[card] = neighbor;
  });
  return neighborhood;
};

exports.getNeighborhood = getNeighborhood;