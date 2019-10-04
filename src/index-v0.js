import System from './classes/system'
import Agent from './classes/agents'

console.log(System)

const makeGrid = (row, col, initialVal=null) => {
  const grid = new Array(row).fill(null)
  grid.forEach((row, i) => {
    grid[i] = new Array(col).fill(initialVal)
  })

  return grid
}

const agentDisplay = (agent) => {
  if (agent.type === 0) {
    fill('red');
  } else if (agent.type === 1) {
    fill('lightBlue');
  }
  stroke('none')
  rect((agent.x * 10), (agent.y * 10), 10, 10);
}


const initialGrid = makeGrid(50,50, null)
const sys = new System(50, 50, initialGrid);

sys.grid = initialGrid.map((row, y) => row.map((col, x) => Math.floor((Math.random() * 2)) ?
  new Agent(0, x, y) :
  new Agent(1, x , y)
))


function setup() {
  createCanvas(501, 501);
  frameRate();
}

function draw() {
  // background(0);
  sys.runTick();
  sys.display(); 
}
