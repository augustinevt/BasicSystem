"use strict";

var mountainGenetics = {
  scaffold: {
    params: {
      dirs: ['e', 'w'],
      code: 'h',
      n: 4
    },
    alg: function alg(params) {
      return function (sys, cell) {
        switch (params.code) {
          case 'h':
            if (params.n > 0) {
              params.dirs.forEach(function (dir) {
                var dirInt = dir === 'w' ? cell.x - 1 : cell.x + 1;
                var newN = params.n - 1;
                var buildOutExpression = {
                  params: {
                    dirs: [dir],
                    code: 'h',
                    n: newN
                  },
                  alg: mountainGenetics.scaffold.alg
                };
                sys.array[cell.y][dirInt] = new Agent('f', [buildOutExpression], sys, dirInt, cell.y);
              });
              var buildUpExpression = {
                params: {
                  dirs: ['s', 'n'],
                  code: 'v',
                  n: params.n
                },
                alg: mountainGenetics.scaffold.alg
              };
              cell.expressions.unshift(buildUpExpression);
            } else {
              cell.expressions = [mountainGenetics.differentiate];
            }

            break;

          case 'v':
            if (params.n > 0) {
              params.dirs.forEach(function (dir) {
                var dirInt = dir === 's' ? cell.y - 1 : cell.y + 1;
                var newN = params.n - 1;
                var buildOutExpression = {
                  params: {
                    dirs: [dir],
                    code: 'v',
                    n: newN
                  },
                  alg: mountainGenetics.scaffold.alg
                };
                sys.array[dirInt][cell.x] = new Agent('f', [buildOutExpression], sys, cell.x, dirInt);
                cell.expressions.shift();
              });
            } else {
              cell.expressions = [mountainGenetics.differentiate];
            }

        }
      };
    }
  },
  differentiate: {
    initParams: {},
    alg: function alg(params) {
      return function (sys, cell) {
        var south = [];
        cell.ask(south, 2);
        console.log(cell.x, cell.y, south);

        if (south.length > 2) {
          cell.type = 'p';
        }

        cell.expressions.pop();
      };
    }
  }
};