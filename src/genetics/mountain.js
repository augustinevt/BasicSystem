const mountainGenetics = {

  scaffold: {

    params: {dirs: ['e', 'w'], code: 'h', n: 4},
    alg: (params) => (sys, cell) => {

      switch (params.code) {
        case 'h':
          if (params.n > 0) {

            params.dirs.forEach((dir) => {

                const dirInt = (dir === 'w') ? cell.x-1 : cell.x+1;
                const newN = params.n - 1;

                const buildOutExpression = {
                  params: { dirs: [dir], code: 'h', n: newN},
                  alg: mountainGenetics.scaffold.alg
                }

                sys.array[cell.y][dirInt] = new Agent('f', [buildOutExpression], sys, dirInt, cell.y);

            });

            const buildUpExpression = {
              params: { dirs: ['s','n'], code: 'v', n: params.n},
              alg: mountainGenetics.scaffold.alg
            }

            cell.expressions.unshift(buildUpExpression);

          } else {
            cell.expressions = [mountainGenetics.differentiate]
          }

          break;

        case 'v':

          if (params.n > 0) {
            params.dirs.forEach((dir) => {
                const dirInt = (dir === 's') ? cell.y-1 : cell.y+1;
                const newN = params.n - 1;
                const buildOutExpression = {
                  params: { dirs: [dir], code: 'v', n: newN},
                  alg: mountainGenetics.scaffold.alg
                }

                sys.array[dirInt][cell.x] = new Agent('f', [buildOutExpression], sys, cell.x, dirInt);


              cell.expressions.shift();
            })
          } else {
            cell.expressions = [mountainGenetics.differentiate]
          }
      }
    }
  },

  differentiate: {
    initParams: {},
    alg: (params) => (sys, cell) => {
      const south = [];

      cell.ask(south, 2);

      console.log(cell.x, cell.y, south)

      if (south.length > 2) {
        cell.type = 'p'
      }

      cell.expressions.pop();
    }
  }

}