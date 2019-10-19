import { getNeighborhood } from './../utils'

export default class Agent {

  constructor(type, x, y) {
    this.type = type;
    this.x = x;
    this.y = y;
  }

  act(grid, rule) {
    rule(this, grid, getNeighborhood(grid, this.x, this.y))
  }

  display(displayHandler) {
    displayHandler(this);
  }
}