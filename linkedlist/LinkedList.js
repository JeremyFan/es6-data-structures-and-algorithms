/**
 * @fileOverview 链表
 */

/**
 * 链表节点类
 * 
 */
class Node {
  constructor(element) {
    this.element = element
    this.next = null
  }
}

/**
 * 链表类
 */
class LinkedList {
  constructor() {
    // 链表长度
    this._length = 0

    // 链表的第一个元素
    this._head = null
  }

  /**
   * 添加元素
   * 添加到链表末尾
   * @param  {[type]} element 元素
   * @return {[type]}         [description]
   */
  append(element) {
    const node = new Node(element)
    let current

    if (this._head === null) {
      this._head = node
    } else {
      current = this._head

      // 迭代至最后一个元素
      while (current.next) {
        current = current.next
      }

      current.next = node
    }

    this._length++
  }

  /**
   * 插入元素
   * @param  {[type]} position 位置
   * @param  {[type]} element  元素
   * @return {Boolean}         是否成功插入
   */
  insert(position, element) {
    if (position > -1 && position < this._length) {
      const node = new Node(element)
      let current = this._head,
        previous,
        index = 0

      if (position === 0) {
        this._head = node
      } else {
        while (index++ < position) {
          previous = current
          current = current.next
        }

        previous.next = node
        node.next = current
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

      if (position === 0) {
        this._head = current.next
      } else {
        // 迭代至删除位置
        while (index++ < position) {
          previous = current
          current = current.next
        }

        // 经过上面的迭代，此时 current 是待删除元素
        // previous 是待删除元素的前一个元素
        // 前一元素下一项直接指向待删除元素的下一项
        previous.next = current.next
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
   * @return {Number} [description]
   */
  size() {
    return this._length
  }

  /**
   * 获取链表第一个元素
   * @return {[type]} [description]
   */
  getHead() {
    return this._head
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
}

// use
let list = new LinkedList
list.append('John')
list.append('Jack')
list.insert(1, 'Jeremy')

console.log(list.toString()) // John,Jeremy,Jack

list.removeAt(2)
list.remove('John')

console.log(list.toString()) // Jeremy


export default LinkedList