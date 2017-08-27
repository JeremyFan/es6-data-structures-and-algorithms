/**
 * @fileOverview 队列
 */

class Queue {
  constructor(items) {
    this._items = Array.isArray(items) ? items : []
  }

  enqueue(element) {
    this._items.push(element)
  }

  dequeue() {
    return this._items.shift()
  }

  front() {
    return this._items[0]
  }

  isEmpty() {
    return this._items.length === 0
  }

  clear() {
    this._items = []
  }

  size(){
    return this._items.length
  }
}

export default Queue