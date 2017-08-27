/**
 * @fileOverview 双向链表
 */

/**
 * 双向链表节点类
 */
class Node {
  constructor(element) {
    this.element = element
    this.prev = null
    this.next = null
  }
}

/**
 * 双向链表
 */
class DoublyLinkedList {
  constructor() {
    this._length = 0
    this._head = null
    this._tail = null
  }

  /**
   * 添加元素
   * @param  {[type]} element 元素
   * @return {[type]}         [description]
   */
  append(element) {
    const node = new Node(element)

    if (this._head === null) {
      // 空链表，直接把 head、tail 指向 node
      this._head = node
      this._tail = node
    } else {
      // 原 tail 作为 node 前一项，next 指向 node，node.prev 指向原 tail
      // node 作为新的 tail
      node.prev = this._tail
      this._tail.next = node
      this._tail = node
    }

    this._length++
  }


  /**
   * 插入元素
   * @param  {[type]} position 位置
   * @param  {[type]} element  元素
   * @return {[type]}          [description]
   */
  insert(position, element) {
    if (position > -1 && position < this._length) {
      const node = new Node(element)
      let current = this._head,
        previous,
        index = 0

      // 插入到第一项
      if (position === 0) {
        if (this._head === null) {
          // 链表为空，node 直接作为 head、tail
          this._head = node
          this._tail = node
        } else { // 链表不为空
          // node.next 指向原来的 head
          // 原 head 的 prev 指向 node
          // node 作为新的 head
          node.next = current
          current.prev = node
          this._head = node
        }
      }
      // 插入到最后一项
      else if (position === this._length) {
        // 原 tail 的 next 指向 node
        // node.prev 指向原 tail
        // node 作为新的 tail
        current = this._tail
        current.next = node
        node.prev = current
        this._tail = node
      }
      // 插入到中间某一项
      else {
        // 迭代至插入位置
        while (index++ < position) {
          previous = current
          current = current.next
        }

        // 当前 previous 为插入位置前一项，current 为插入位置后一项
        // 插入 node，node.prev、node.next 分别指向 previous、current
        // previous.next、current.prev 都指向 node
        node.prev = previous
        node.next = current

        previous.next = current.prev = node
      }

      this._length++;

      return true
    } else {
      return false
    }
  }

  /**
   * 根据位置删除元素
   * @param  {[type]} position 位置
   * @return {[type]}          被删除元素
   */
  removeAt(position) {
    if (position > -1 && position < this._length) {
      let current = this._head,
        previous,
        index = 0

      // 删除第一项
      if (position === 0) {
        // 删除操作：修改 head 为原 head 的下一项
        this._head = current.next

        if (this._length === 1) {
          // 原链表只有一个元素，删没了，修改 tail 也指向 null
          this._tail = null
        } else {
          // 原链表有多个元素，此时 head 的 prev 还指向原来的 head，修改为 null
          this._head.prev = null
        }
      }
      // 删除最后一项
      else if (position === this._length - 1) {
        // 删除操作：修改 tail 为原 tail 的前一项
        // 此时 tail 的 next 还是指向原来的 tail，修改为 null
        current = this._tail
        this._tail = current.prev
        this._tail.next = null
      }
      // 删除中间某一项
      else {
        // 迭代至删除位置
        while (index++ < position) {
          previous = current
          current = current.next
        }

        // 此时 current 为待删除项
        // 前一项 next 直接指向待删除项的 next，跳过待删除项
        // 修改待删除项下一项 的 prev，指向待删除项前一项
        previous.next = current.next
        current.next.prev = previous
      }

      this._length--;
      return current.element
    } else {
      return null
    }
  }

  /**
   * 删除元素
   * @param  {[type]} element 元素
   * @return {[type]}         [description]
   */
  remove(element) {
    const index = this.indexOf(element)

    return this.removeAt(index)
  }

  /**
   * 查找元素
   * @param  {[type]} element 元素
   * @return {Number}         元素位置
   */
  indexOf(element) {
    let current = this._head,
      index = 0

    while (current) {
      if (current.element === element) {
        return index
      }

      index++
      current = current.next
    }

    return -1
  }

  /**
   * 链表是否为空
   * @return {Boolean} [description]
   */
  isEmpty() {
    return this._length === 0
  }

  /**
   * 链表长度
   * @return {[type]} [description]
   */
  size() {
    return this._length
  }

  toString() {
    let current = this._head,
      string = ''

    while (current) {
      string += `,${current.element}`

      current = current.next
    }

    // 去掉最开始逗号
    return string.slice(1)
  }

  /**
   * 反向 toString
   * @return {[type]} [description]
   */
  inverseToString() {
    let current = this._tail,
      string = ''

    while (current) {
      string += `,${current.element}`

      current = current.prev
    }

    return string.slice(1)
  }

  /**
   * 获取第一个元素
   * @return {[type]} [description]
   */
  getHead() {
    return this._tail
  }

  /**
   * 获取最后一个元素
   * @return {[type]} [description]
   */
  getTail() {
    return this._tail
  }
}

// use
let list = new DoublyLinkedList
list.append('John')
list.append('Jack')
list.insert(1, 'Jeremy')

console.log(list.toString()) // John,Jeremy,Jack
console.log(list.inverseToString()) // Jack,Jeremy,John

list.removeAt(2)
list.remove('John')

console.log(list.toString()) // Jeremy