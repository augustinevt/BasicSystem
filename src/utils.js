const makeGrid = (rows, columns, val=null) => {
  const grid = [].fill(val, 0, rows)
  grid.forEach((cell, i) => Array.prototype.fill(val, 0, columns))

  return grid;
}