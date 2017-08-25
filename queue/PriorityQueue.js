/**
 * @fileOverview 优先队列
 */

import Queue from './Queue'

/**
 * 优先队列元素类
 */
class QueueElement {
  /**
   * [constructor description]
   * @param  {[type]} element  元素
   * @param  {Number} priority 优先级
   * @return {[type]}          [description]
   */
  constructor(element, priority) {
    this.element = element
    this.priority = priority
  }
}

/**
 * 优先队列
 */
class PriorityQueue extends Queue {
  constructor() {
    super()
  }

  /**
   * 优先队列入队
   * @param  {[type]} element  元素
   * @param  {Number} priority 优先级，越小越优先
   */
  enqueue(element, priority) {
    console.log('priority queue enqueue.')

    const queueElement = new QueueElement(element, priority)

    if (this.isEmpty()) {
      this.items.push(queueElement)
    } else {
      let added = false

      for (var i = 0; i < this.items.length; i++) {
        if (queueElement.priority < this.items[i].priority) {
          // 元素优先级高于当前位置元素，插到当前元素之前
          this.items.splice(i, 0, queueElement)
          added = true
          break
        }
      }

      if (!added) {
        this.items.push(queueElement)
      }
    }
  }

  print() {
    const items = this.items.map(item => item.element)

    console.log(items)
  }
}


// use
let queue = new PriorityQueue()
queue.enqueue('Jeremy', 1)
queue.enqueue('John', 3)
queue.enqueue('Eric', 2)
queue.enqueue('Jack', 1)

queue.print() // ["Jeremy", "Jack", "Eric", "John"]