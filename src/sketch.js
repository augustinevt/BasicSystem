const makeGrid = (row, col, initialVal=null) => {
  const grid = new Array(row).fill(null)
  grid.forEach((row, i) => {
    grid[i] = new Array(col).fill(initialVal)
  })

  return grid
}



const initialGrid = makeGrid(9,9, null)
// const nextGrid = makeGrid(18,18, null)

const sys = new System(0, 0, initialGrid);

sys.array = sys.array.map((row, x) => row.map((col, y) => Math.floor(Math.random()*2) === 1 ?
  new Agent('automaton', x, y) :
  new Agent('empty', x , y)
))

// sys.array[4][4] = new Agent('f', [mountainGenetics.scaffold], sys, 4, 4);

function setup() {
  createCanvas(501, 501);
  frameRate(5);
}

function draw() {
  // background(0);
  sys.runTick();
  sys.display();
}

