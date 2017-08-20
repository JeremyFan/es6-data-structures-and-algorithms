class Stack {
  constructor(items) {
    this.items = Array.isArray(items) ? items : []
  }

  push(item) {
    this.items.push(item)

    return item
  }

  pop() {
    return this.items.pop()
  }

  peek() {
    return this.items[this.items.length - 1]
  }

  isEmpty() {
    return this.items.length === 0
  }

  clear() {
    this.items = []
  }

  size() {
    return this.items.length
  }
}