"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var rules = [function (agent) {}];

var Agent =
/*#__PURE__*/
function () {
  function Agent() {
    var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'automaton';
    var x = arguments.length > 1 ? arguments[1] : undefined;
    var y = arguments.length > 2 ? arguments[2] : undefined;

    _classCallCheck(this, Agent);

    this.type = type;
    this.x = x;
    this.y = y;
    this.rules = rules;
  }

  _createClass(Agent, [{
    key: "respond",
    value: function respond() {
      return this.type;
    }
  }, {
    key: "ask",
    value: function ask(string, n) {}
  }, {
    key: "act",
    value: function act(curr, next) {
      var live = -1;
      var empty = -1;

      for (var i = -1; i < 2; i++) {
        for (var j = -1; j < 2; j++) {
          var y = 0;
          var x = 0;

          if (i < 0) {
            y = curr.length - 1;
          } else if (i > curr.length - 1) {
            y = i;
          } else {
            this.y + i;
          }

          if (j < 0) {
            x = curr[y].length - 1;
          } else if (j > curr.length - 1) {
            x = j;
          } else {
            this.x + j;
          } // console.log(x, y)


          if (sys.array[y][x].type === 'automaton') {
            live++;
          } else {
            empty++;
          }
        }
      }

      if (this.type === 'empty' && live === 3) {
        next[this.y][this.x] = new Agent('automaton', this.x, this.y);
      } else if (this.type === 'automaton' && (live < 2 || live > 3)) {
        next[this.y][this.x] = new Agent('empty', this.x, this.y);
      } else {
        next[this.y][this.x] = this;
      }
    }
  }, {
    key: "display",
    value: function display() {}
  }]);

  return Agent;
}();