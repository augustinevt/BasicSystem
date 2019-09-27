"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var System =
/*#__PURE__*/
function () {
  function System(row, col, grid) {
    _classCallCheck(this, System);

    this.row = row;
    this.col = col;
    this.grid = grid;
  }

  _createClass(System, [{
    key: "runTick",
    value: function runTick() {
      var _this = this;

      var newGrid = makeGrid(this.row, this.col);
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
      this.grid.forEach(function (subArr, i) {
        subArr.forEach(function (agent, j) {
          agent.display(agentDisplay);
        });
      });
    }
  }]);

  return System;
}();