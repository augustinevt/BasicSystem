class System {
  constructor(row, col, grid) {
    this.row = row
    this.col = col
    this.grid = grid
  }

  runTick() {
    const newGrid = makeGrid(this.row, this.col)
    this.grid.forEach((row, i) => {
      row.forEach((colCell, j) => {
        newGrid[i][j] = colCell.act(this.grid);
      })
    })

    this.grid = newGrid
  }

  display() {
    this.grid.forEach((subArr, i) => {
      subArr.forEach((agent, j) => {
        agent.display(agentDisplay)
      })
    })
  }
}




