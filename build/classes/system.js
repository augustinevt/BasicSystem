"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _agents = _interopRequireDefault(require("./agents"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var System =
/*#__PURE__*/
function () {
  function System(row, col) {
    _classCallCheck(this, System);

    this.row = row;
    this.col = col;
  }

  _createClass(System, [{
    key: "setAgentDisplay",
    value: function setAgentDisplay(agentDisplay) {
      this.agentDisplay = agentDisplay;
    }
  }, {
    key: "makeGrid",
    value: function makeGrid(col, row) {
      var initVal = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      var grid = new Array(row).fill(null);
      grid.forEach(function (row, i) {
        grid[i] = new Array(col).fill(initVal);
      });
      return grid;
    }
  }, {
    key: "initGrid",
    value: function initGrid() {
      var newGrid = this.makeGrid(this.col, this.row).map(function (row, y) {
        return row.map(function (col, x) {
          return Math.floor(Math.random() * 2) ? new _agents["default"](0, x, y) : new _agents["default"](1, x, y);
        });
      });
      this.grid = newGrid;
    }
  }, {
    key: "runTick",
    value: function runTick() {
      var _this = this;

      var newGrid = this.makeGrid(this.row, this.col);
      this.grid.forEach(function (row, i) {
        row.forEach(function (colCell, j) {
          newGrid[i][j] = colCell.act(_this.grid);
        });
      });
      this.grid = newGrid;
    }
  }, {
    key: "display",
    value: function display() {
      var _this2 = this;

      this.grid.forEach(function (subArr, i) {
        subArr.forEach(function (agent, j) {
          agent.display(_this2.agentDisplay);
        });
      });
    }
  }]);

  return System;
}();

exports["default"] = System;