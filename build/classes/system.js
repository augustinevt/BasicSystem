"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var System =
/*#__PURE__*/
function () {
  function System(x, y, initArray) {
    _classCallCheck(this, System);

    this.x = x;
    this.y = y;
    this.next = _toConsumableArray(initArray);
    this.array = initArray;
  }

  _createClass(System, [{
    key: "runTick",
    value: function runTick() {
      var _this = this;

      this.array.forEach(function (subArr) {
        subArr.forEach(function (cell) {
          cell.act(_this.array, _this.next);
        });
      });
      this.array = _toConsumableArray(this.next);
      this.next = _toConsumableArray(this.next);
    }
  }, {
    key: "display",
    value: function display() {
      var _this2 = this;

      this.array.forEach(function (subArr, i) {
        subArr.forEach(function (agent, j) {
          console.log(agent.type);

          if (agent.type === 'empty') {
            fill('black');
            stroke('white');
            rect(_this2.x + j * 10, _this2.y + i * 10, 10, 10);
          } else {
            fill('yellow');
            stroke('orange');
            rect(_this2.x + j * 10, _this2.y + i * 10, 10, 10);
          }
        });
      });
    }
  }]);

  return System;
}();