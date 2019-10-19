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
    this.gen = 0;
    this.grid = [];
  }

  _createClass(System, [{
    key: "setAgentDisplay",
    value: function setAgentDisplay(agentDisplay) {
      this.agentDisplay = agentDisplay;
    }
  }, {
    key: "setAgentRules",
    value: function setAgentRules(agentRules) {
      this.agentRules = agentRules;
    }
  }, {
    key: "setInGrid",
    value: function setInGrid(x, y, value) {
      this.grid[y][x] = value;
    }
  }, {
    key: "initGrid",
    value: function initGrid() {
      var _this = this;

      var grid = new Array(this.col).fill(null).map(function (_, i) {
        return new _agents["default"](0, i, _this.gen);
      });
      this.grid = [grid];
    }
  }, {
    key: "runTick",
    value: function runTick() {
      var _this2 = this;

      var newGrid = new Array(this.col).fill(null).map(function (_, i) {
        return new _agents["default"](0, i, _this2.gen + 1);
      });
      this.grid[this.gen].forEach(function (row, i) {
        newGrid[i].act(_this2.grid, _this2.agentRules);
      });
      this.grid.push(newGrid);
      this.gen++;
    }
  }, {
    key: "display",
    value: function display() {
      var _this3 = this;

      this.grid.forEach(function (subArr, i) {
        Array.isArray(subArr) && subArr.forEach(function (agent, j) {
          agent ? agent.display(_this3.agentDisplay) : _this3.agentDisplay({
            type: null,
            x: j,
            y: i
          });
        });
      });
    }
  }]);

  return System;
}();

exports["default"] = System;