"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var borderManager = function borderManager(grid, x, y) {
  var option = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'wall';
  if (grid.length < 1 || grid[0].length < 1) throw Error('invalid grid!');
  var height = grid.length - 1;
  var width = grid[0].length - 1;

  if (option === 'wall') {
    if (y > height || y < 0) return false;
    if (x > width || x < 0) return false;
    return true;
  }
};

var getNeighborhood = function getNeighborhood(grid, x, y, radius) {
  var neighborhood = [];

  for (var i = radius * -1; i <= radius; i++) {
    for (var j = radius * -1; j <= radius; j++) {
      if (!(j + x === x && i + y === y)) {
        if (borderManager(grid, x + j, y + i)) {
          neighborhood.push(grid[y + i][x + j].type);
        } else {
          neighborhood.push(1);
        }
      }
    }
  }

  return neighborhood;
};

var rules = [function (agent, grid) {
  var neighborhood = getNeighborhood(grid, agent.x, agent.y, 1);
  var blueCount = 0;
  neighborhood.forEach(function (_char) {
    _char === 0 ? blueCount++ : null;
  });

  if (agent.type === 1 && blueCount === 3) {
    return new Agent(0, agent.x, agent.y);
  } else if (agent.type === 0 && (blueCount < 2 || blueCount > 3)) {
    return new Agent(1, agent.x, agent.y);
  } else {
    return new Agent(agent.type, agent.x, agent.y);
  }
}];

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
    key: "ask",
    value: function ask(string, n) {}
  }, {
    key: "act",
    value: function act(grid) {
      // const neighborhood = getNeighborhood(grid, this.x, this.y, 1)
      // let blueCount = 0;
      //
      // neighborhood.forEach(char => {
      //   char === 0 ? blueCount++ : null;
      // })
      //
      // if (this.type === 1 && blueCount === 3) {
      //   return new Agent(0, this.x, this.y)
      // } else if (this.type === 0 && (blueCount < 2 || blueCount > 3)) {
      //   return new Agent(1, this.x, this.y)
      // } else {
      //   return new Agent(this.type, this.x, this.y)
      // }
      return rules[0](this, grid);
    }
  }, {
    key: "display",
    value: function display(displayHandler) {
      displayHandler(this);
    }
  }]);

  return Agent;
}();