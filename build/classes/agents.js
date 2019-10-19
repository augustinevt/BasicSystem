"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _utils = require("./../utils");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Agent =
/*#__PURE__*/
function () {
  function Agent(type, x, y) {
    _classCallCheck(this, Agent);

    this.type = type;
    this.x = x;
    this.y = y;
  }

  _createClass(Agent, [{
    key: "act",
    value: function act(grid, rule) {
      rule(this, grid, (0, _utils.getNeighborhood)(grid, this.x, this.y));
    }
  }, {
    key: "display",
    value: function display(displayHandler) {
      displayHandler(this);
    }
  }]);

  return Agent;
}();

exports["default"] = Agent;