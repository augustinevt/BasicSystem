
const sys = new System(300, 200, [
    ['e','e','e','e','e','e','e','e','e'],
    ['e','e','e','e','e','e','e','e','e'],
    ['e','e','e','e','e','e','e','e','e'],
    ['e','e','e','e','e','e','e','e','e'],
    ['e','e','e','e','e','e','e','e','e'],
    ['e','e','e','e','e','e','e','e','e'],
    ['e','e','e','e','e','e','e','e','e'],
    ['e','e','e','e','e','e','e','e','e'],
    ['e','e','e','e','e','e','e','e','e']
  ]);

sys.array[4][4] = new Agent('f', [mountainGenetics.scaffold], sys, 4, 4);

function setup() {
  createCanvas(600, 400);
  frameRate(4);
}

function draw() {
  background(0);
  sys.runTick();
  sys.display();
}
