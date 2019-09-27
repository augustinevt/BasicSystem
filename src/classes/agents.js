const rules = [
  (agent) => {

  }
]

class Agent {

  constructor(type='automaton', x, y) {
    this.type = type;
    this.x = x;
    this.y = y;
    this.rules = rules;
  }

  respond() {
    return this.type;
  }


  ask(string, n) {

  }


  act(curr, next) {
    let live = -1;
    let empty = -1;

    for(let i = -1; i < 2; i++) {
      for(let j = -1; j < 2; j++) {

        let y = 0;
        let x = 0;



        if (i < 0) {
          y = curr.length - 1;
        } else if (i > (curr.length - 1)) {
          y = i;
        } else {
           this.y + i
        }

        if (j < 0) {
          x = curr[y].length - 1;
        } else if (j > (curr.length - 1)) {
          x = j;
        } else {
           this.x + j
        }

        // console.log(x, y)

        if (sys.array[y][x].type === 'automaton') {
          live++;
        } else {
          empty++;
        }

      }
    }

    if (this.type === 'empty' && live === 3 ) {
      next[this.y][this.x] = new Agent('automaton', this.x, this.y)
    } else if ( (this.type === 'automaton') && (live < 2 || live > 3) ) {
      next[this.y][this.x] = new Agent('empty', this.x, this.y)
    } else {
      next[this.y][this.x] = this;
    }

  }

  display() {

  }
}