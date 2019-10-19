// const makeGrid = (rows, columns, val=null) => {
//   const grid = [].fill(val, 0, rows)
//   grid.forEach((cell, i) => Array.prototype.fill(val, 0, columns))
//
//   return grid;
// }

export const getCell = (grid, x, y) => {
  return grid[y][x]
}

// returns [x,y] where indexes equal operation to be performed on current x/y
export const getCardinal = (cardinal) => {
  const conversionMap = {
    'nw': [-1, -1],
    'n': [0, -1],
    'ne': [1, -1],
    'w': [-1, 0],
    'e': [1, 0],
    'se': [1, 1],
    's': [0, 1],
    'sw': [-1, 1],
  }

  return conversionMap[cardinal]
}


export const borderManager = (grid, x, y, type) => {
  if (type === 'wall') {

    if (!grid[x] || !grid[x][y]) {
      return null
    }

    return grid[x][y]

  } else if (type === 'donut') {

    const height = grid.length
    const width = grid[0].length

    let newY = y
    let newX = x

    if (y >= height) {
      newY = 0
    } else if (y < 0) {
      newY = (height - 1)
    }

    if (x >= width) {
      newX = 0
    } else if (x < 0) {
      newX = (width - 1)
    }

    return getCell(grid, newX, newY)
  }
}

export const getNeighborhood = (grid, x, y, cardinals=['nw', 'n', 'ne', 'e', 'se', 's', 'sw', 'w'], gridType='donut') => {
  const neighborhood = {};

  cardinals.forEach(card => {
    const [opX, opY] = getCardinal(card)

    const neighbor = borderManager(grid, (x + opX), (y + opY), gridType)
    neighborhood[card] = neighbor
  })

  return neighborhood;
}

