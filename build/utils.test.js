"use strict";

var _utils = require("./../utils");

var testGrid = [['0:0', '1:0', '2:0', '3:0', '4:0'], ['0:1', '1:1', '2:1', '3:1', '4:1'], ['0:2', '1:2', '2:2', '3:2', '4:2'], ['0:3', '1:3', '2:3', '3:3', '4:3'], ['0:4', '1:4', '2:4', '3:4', '4:4']];
test('converts cardinal to operation list', function () {
  var expected = [0, -1];
  var recieved = (0, _utils.getCardinal)('n');
  expect(recieved).toEqual(expected);
});
test('get specified neighborhood', function () {
  var expected = {
    'nw': '3:3',
    'n': '4:3',
    'w': '3:4'
  };
  var recieved = (0, _utils.getNeighborhood)(testGrid, 4, 4, ['nw', 'n', 'w']);
  expect(recieved).toEqual(expected);
});
test('gets default neighborhood', function () {
  var expected = {
    'nw': '1:1',
    'n': '2:1',
    'ne': '3:1',
    'e': '3:2',
    'se': '3:3',
    's': '2:3',
    'sw': '1:3',
    'w': '1:2'
  };
  var recieved = (0, _utils.getNeighborhood)(testGrid, 2, 2);
  expect(recieved).toEqual(expected);
});
test('gets safe neighborhood donut', function () {
  var expected = {
    'n': '4:4'
  };
  var recieved = (0, _utils.getNeighborhood)(testGrid, 4, 0, ['n'], 'donut');
  expect(recieved).toEqual(expected);
});
test('gets safe neighborhood donut', function () {
  var expected = {
    'n': null
  };
  var recieved = (0, _utils.getNeighborhood)(testGrid, 4, 0, ['n'], 'wall');
  expect(recieved).toEqual(expected);
});