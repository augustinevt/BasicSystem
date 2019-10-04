import Agent from './agents'

export default class System {
  constructor(row, col) {
    this.row = row
    this.col = col
  }

  setAgentDisplay(agentDisplay) {
    this.agentDisplay = agentDisplay
  }

  makeGrid(col, row, initVal=null) {
      const grid = new Array(row).fill(null)

      grid.forEach((row, i) => {
        grid[i] = new Array(col).fill(initVal)
      })

    return grid
  }

  initGrid() {
    const newGrid = this.makeGrid(this.col, this.row)
      .map((row, y) => row.map((col, x) => Math.floor((Math.random() * 2)) ?
      new Agent(0, x, y) :
      new Agent(1, x , y)
    ))

    this.grid = newGrid
  }

  runTick() {
    const newGrid = this.makeGrid(this.row, this.col)
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
        agent.display(this.agentDisplay)
      })
    })
  }
}




