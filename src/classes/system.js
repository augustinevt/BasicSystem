import Agent from './agents'

export default class System {
  constructor(row, col) {
    this.row = row
    this.col = col
    this.gen = 0
    this.grid = []
  }

  setAgentDisplay(agentDisplay) {
    this.agentDisplay = agentDisplay
  }

  setAgentRules(agentRules) {
    this.agentRules = agentRules
  }

  setInGrid(x, y, value) {
    this.grid[y][x] = value
  }

  initGrid() {
    const grid = new Array(this.col).fill(null).map((_, i) => new Agent(0, i, this.gen));
    this.grid = [grid];
  }

  runTick() {
    const newGrid = new Array(this.col).fill(null).map((_, i) => new Agent(0, i, this.gen+1))

    this.grid[this.gen].forEach((row, i) => {
      newGrid[i].act(this.grid, this.agentRules)
    })

    this.grid.push(newGrid)
    this.gen++
  }

  display() {
    this.grid.forEach((subArr, i) => {
      Array.isArray(subArr) && subArr.forEach((agent, j) => {
        agent ? agent.display(this.agentDisplay) : this.agentDisplay({type: null, x: j, y: i})
      })
    })
  }
}




