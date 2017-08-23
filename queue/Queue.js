class Queue {
  constructor() {
    this.items = Array.isArray(items) ? items : []
  }

  enqueue(element) {
    this.items.push(element)
  }

  dequeue() {
    return this.items.shift()
  }

  front() {
    return this.items[0]
  }

  isEmpty() {
    return this.items.length === 0
  }

  clear() {
    this.items = []
  }

  size(){
    return this.items.length
  }
}