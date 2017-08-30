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
```js
export default Queue

import Queue from './Queue'
```

### Using class and extends keywords
```js
class Queue {
  // ...
}

class PriorityQueue extends Queue {
  // ...
}
```

### Underscore for private property
```js
constructor() {
  this._length = 0
  this._head = null
}
```

### Prefer `Reflect.deleteProperty()` to `delete` operator
```js
remove(value) {
  if (this.has(value)) {
    Reflect.deleteProperty(this._items, value)
    return true
  }
  return false
}
```

### Prefer `Object.keys()` to `for...in` loop
```js
values() {
  return Object.keys(this._items)
}
```