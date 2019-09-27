class System {
  constructor(x, y, initArray) {
    this.x = x;
    this.y = y;
    this.next = [...initArray];
    this.array = initArray;
  }

  runTick() {
    this.array.forEach((subArr) => {
      subArr.forEach((cell) => {
        cell.act(this.array, this.next);
      })
    })

    this.array = [...this.next];
    this.next = [...this.next];
  }

  display() {
    this.array.forEach((subArr, i) => {
      subArr.forEach((agent, j) => {
        console.log(agent.type)
        if (agent.type === 'empty') {
          fill('black');
          stroke('white')
          rect((this.x + j * 10), (this.y + i * 10), 10, 10);
        } else {
          fill('yellow');
          stroke('orange')
          rect((this.x + j * 10), (this.y + i * 10), 10, 10);
        }
      })
    })
  }
}




