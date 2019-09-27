const borderManager = (grid, x, y, option='wall') => {

  if ((grid.length < 1) || (grid[0].length < 1) ) throw Error('invalid grid!')

  const height = grid.length - 1;
  const width = grid[0].length - 1;

  if (option === 'wall') {
    if (y > height || y < 0) return false
    if (x > width || x < 0) return false

    return true
  }
}

const getNeighborhood = (grid, x, y, radius) => {

  const neighborhood = [];

  for(let i = (radius * -1); i <= radius; i++) {
    for(let j = (radius * -1); j <= radius; j++) {
      if (!((j+x === x) && (i+y === y))) {
        if (borderManager(grid, x+j, y+i)) {
          neighborhood.push(grid[y+i][x+j].type)
        } else {
          neighborhood.push(1)
        }
      }
    }
  }

  return neighborhood;
}

const rules = [
  (agent, grid) => {
    const neighborhood = getNeighborhood(grid, agent.x, agent.y, 1)
    let blueCount = 0;

    neighborhood.forEach(char => {
      char === 0 ? blueCount++ : null;
    })

    if (agent.type === 1 && blueCount === 3) {
      return new Agent(0, agent.x, agent.y)
    } else if (agent.type === 0 && (blueCount < 2 || blueCount > 3)) {
      return new Agent(1, agent.x, agent.y)
    } else {
      return new Agent(agent.type, agent.x, agent.y)
    }

  }
]

class Agent {

  constructor(type, x, y) {
    this.type = type;
    this.x = x;
    this.y = y;
  }

  ask(string, n) {

  }


  act(grid) {
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

      return rules[0](this, grid)

  }

  display(displayHandler) {
    displayHandler(this);
  }
}