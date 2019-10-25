# BASIC SYSTEM

:rotating_light: **!WORK IN PROGRESS!**	:rotating_light:

Basic system for cellular Automata.

 please checkout the [projects](https://github.com/augustinevt/BasicSystem/projects) for state of development.

 :fire:_Want to collaborate!?_:fire:

 Contact me, @augustinevt!


```shell
$ npm i
```

```javascript
const { thing } = require('')

// ES2015

import { thing  } from 'package-name'

const sys = new System(200, 200)
sys.initGrid()

sys.setInGrid(((700/2)/5), 0, new Agent(1, ((700/2)/5), 0))
sys.setAgentDisplay(this.displayAgent)
sys.setAgentRules(rules)
sys.display()

```

```javascript
const agentDisplay = () =>
  const {ctx} = this.provider

  if (agent.type === 0) {
    ctx.fillStyle = 'orange';
  } else if (agent.type === 1) {
    ctx.fillStyle = 'lightBlue';
  }
  ctx.fillRect((agent.x * 5), (agent.y * 5), 5, 5);
  ctx.fill()
}
```

```javascript
startSystem() {
  this.currentInterval = setInterval(() => {
    this.system.runTick()
    this.system.display()
  }, 100);
},
```

```javascript
const rules = (agent, grid, neighborhood) => {
  const {nw, n, ne} = neighborhood
  const result = `${nw.type}${n.type}${ne.type}`
  agent.type = this.rules[result]
}
```