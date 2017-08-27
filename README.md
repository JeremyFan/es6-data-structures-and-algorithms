# ES6 Data Structures and Algorithms

Learning data structures and algorithms with ECMAScript 6.

Based on this book: *Learn JavaScript Data Structure and Algorithms*.


## Run

Install dependencies:

```
npm install
```

Run a scritp:
```
npm run babel queue/hot-potato
```

## Some styles
### Using ES6 Modules
```
export default Queue

import Queue from './Queue'
```

### Using class and extends keywords
```
class Queue {
  // ...
}

class PriorityQueue extends Queue {
  // ...
}
```

### Underscore for private property
```
constructor() {
  this._length = 0
  this._head = null
}
```