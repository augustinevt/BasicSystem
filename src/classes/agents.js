class Agent {

  constructor(type, expressions, sys, x, y, status = 'passOnce') {
    this.type = type;
    this.expressions = expressions;
    this.sys = sys;
    this.x = x;
    this.y = y;
    this.status = status;

  }

  respond() {
    // return = sys.genetics.actions[q](this/*(cell)*/) // would fire something like () => cell.type;
    return this.type;
  }

  // getLatentExpressions

  // also could be "getHood" or
  ask(string, n) {

    if (n >= 0) {

      if(this.sys.array[this.x][this.y+1] && this.sys.array[this.x][this.y+1] !== 'e') {
        this.sys.array[this.x][this.y+1].ask(string, n-1);
      }

      string.push(this.respond());
      // console.log(this.x, this.y, string)

    } else {

      return;

    }

  }


  act() {
    if (this.status !== 'passOnce') {
      if(this.expressions.length >= 1) {
        this.expressions[0].alg(this.expressions[0].params)(sys, this);
      }
    } else {
      this.status = 'ready';
    }
  }

  display() {
    if (this.type === 'f') {
      fill('brown')
      rect(width/2, height/2, 10, 10);
    } else {
      fill('green')
      rect(width/4, height/2, 5, 5);
    }
  }
}