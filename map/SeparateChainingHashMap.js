/**
 * @fileOverview 分离链接法解决冲突
 * @description 
 *   使用一个链表保存相同哈希值的元素
 *   依赖链表LinkedList.js
 */

import LinkedList from '../linkedlist/LinkedList'

class ValuePair {
  constructor(key, value) {
    this.key = key
    this.value = value
  }
}

class SeparateChainingHashMap {
  constructor() {
    this._table = []
  }

  /**
   * 一个经典的哈希函数
   * @param  {[type]} key 键
   * @return {[type]}     哈希值
   */
  _loseloseHashCode(key) {
    let hash = 0
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i)
    }

    return hash % 37
  }

  /**
   * 添加新项
   * 创建链表存储元素
   * @param  {[type]} key   键
   * @param  {[type]} value 值
   * @return {[type]}       [description]
   */
  put(key, value) {
    const position = this._loseloseHashCode(key),
      valuePair = new ValuePair(key, value)

    if (!this._table[position]) {
      this._table[position] = new LinkedList
    }

    this._table[position].append(valuePair)
  }

  /**
   * 读取
   * 需要迭代链表读取
   * @param  {[type]} key 键
   * @return {ValuePair|Undefined}     元素或undefined
   */
  get(key) {
    const position = this._loseloseHashCode(key)
    let linkedList = this._table[position]

    if (!linkedList) return

    let current = linkedList.getHead()

    while (current) {
      if (current.element.key === key) {
        return current.element.value
      }
      current = current.next
    }
  }

  /**
   * 删除元素
   * @param  {[type]} key 键
   * @return {Boolean}    是否删除成功
   */
  remove(key) {
    const position = this._loseloseHashCode(key)
    let linkedList = this._table[position]

    if (linkedList && !linkedList.isEmpty()) {
      let current = linkedList.getHead()

      while (current) {
        if (current.element.key === key) {
          linkedList.remove(current.element)

          if (linkedList.isEmpty) {
            linkedList = undefined
          }

          return true
        }
        current = current.next
      }

      return false
    }

    return false
  }
}

// use
let hashMap = new SeparateChainingHashMap
hashMap.put('Jack', 'jack@gmail.com')
hashMap.put('John', 'john@hotmail.com')
hashMap.put('Jeremy', 'jeremy@126.com')
hashMap.put('Jim', 'jim@live.com')
hashMap.put('Judy', 'judy@live.com')

console.log(hashMap._table)
/**
 * hash map
 * 
 * 0
 * ·
 * ·
 * ·
 * 5 Judy -> null
 * 6
 * 7 Jack -> null
 * ·
 * ·
 * ·
 * 28 Jeremy -> null
 * 29 John -> Jim -> null
 * 
 */

console.log(hashMap.get('Jim')) // jim@live.com

hashMap.remove('Jim')
console.log(hashMap.get('Jim')) // undefined