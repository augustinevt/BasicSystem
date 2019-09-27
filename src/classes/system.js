class System {
  constructor(x, y, initArray) {
    this.x = x;
    this.y = y;

    this.array = initArray;
  }

  runTick() {
    this.array.forEach((subArr) => {
      subArr.forEach((agent) => {
        if (agent !== 'e')
          agent.act();
      })
    })
  }

  display() {
    this.array.forEach((subArr, i) => {
      subArr.forEach((agent, j) => {
        if (agent === 'e') {
          fill('black');
          stroke('black')
          rect((this.x + j * 10), (this.y + i * 10), 10, 10);
        } else if (agent.type === 'f') {
          stroke('black')
          fill('brown');
          rect((this.x + j * 10), (this.y + i * 10), 10, 10);
        } else if (agent.type === 'p') {
          fill('brown');
          rect((this.x + j * 10), (this.y + i * 10), 10, 10);
          fill('green');
          stroke('green')
          rect(((this.x + j * 10)), ((this.y + i * 10)), 10, 5);
          rect(((this.x + j * 10) + 7), ((this.y + i * 10)), 2, 10);
          rect(((this.x + j * 10)), ((this.y + i * 10)), 2, 10);
        }

        // stroke('white');
        // rect((this.x + j * 10), (this.y + i * 10), 10, 10);
      })
    })
  }
}
