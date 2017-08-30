/**
 * @fileOverview 集合
 * @description ES6 Set
 */

class Set {
  constructor(items) {
    this._items = {}

    if (Array.isArray(items)) {
      for (var i = 0; i < items.length; i++) {
        this.add(items[i])
      }
    }
  }

  /**
   * 检测一个元素是否在集合中
   * @param  {[type]}  value 元素的值
   * @return {Boolean}       
   */
  has(value) {
    return this._items.hasOwnProperty(value)
  }

  /**
   * 增加一个元素
   * @param  {[type]} value 元素的值
   * @return {Boolean}      是否增加成功
   */
  add(value) {
    if (!this.has(value)) {
      this._items[value] = value
      return true
    }
    return false
  }

  /**
   * 删除一个元素
   * @param  {[type]} value 元素的值
   * @return {Boolean}      是否删除成功
   */
  remove(value) {
    if (this.has(value)) {
      Reflect.deleteProperty(this._items, value)
      return true
    }
    return false
  }

  /**
   * 清空集合
   * @return {[type]} [description]
   */
  clear() {
    this._items = {}
  }

  /**
   * 集合大小
   * @return {Number} [description]
   */
  size() {
    return Object.keys(this._items).length
  }

  /**
   * 集合的值
   * @return {Array} 包含集合中所有值的一个数组
   */
  values() {
    return Object.values(this._items)
  }

  _addToSet(set, values) {
    for (let i = 0; i < values.length; i++) {
      set.add(values[i])
    }
  }

  /**
   * 并集
   * 概念：元素存在于集合A中，或存在于集合B中
   * @param  {Set} otherSet 目标集合
   * @return {Set}          当前集合与目标集合的交集
   */
  union(otherSet) {
    let unionSet = new Set

    this._addToSet(unionSet, this.values())
    this._addToSet(unionSet, otherSet.values())

    return unionSet
  }

  /**
   * 交集
   * 概念：元素存在于集合A中，且存在于集合B中
   * @param  {Set} otherSet 目标集合
   * @return {Set}          当前集合与目标集合的交集
   */
  intersection(otherSet) {
    let intersectionSet = new Set
    const values = this.values()

    for (let i = 0; i < values.length; i++) {
      if (otherSet.has(values[i])) {
        intersectionSet.add(values[i])
      }
    }

    return intersectionSet
  }

  /**
   * 差集
   * 概念：元素存在于集合A中，且不存在于集合B中
   * @param  {Set} otherSet 目标集合
   * @return {Set}          当前集合与目标集合的差集
   */
  difference(otherSet) {
    let differenceSet = new Set
    const values = this.values()

    for (let i = 0; i < values.length; i++) {
      if (!otherSet.has(values[i])) {
        differenceSet.add(values[i])
      }
    }

    return differenceSet
  }

  /**
   * 是否是目标集合的子集
   * 概念：如果集合A中的每一个元素也都在集合B中，那么称A是B的子集
   * @param  {Set} otherSet 目标集合
   * @return {Boolean}      当前集合是否是目标集合的子集
   */
  isSubset(otherSet) {
    if (this.size() > otherSet.size()) {
      return false
    } else {
      const values = this.values()
      for (let i = 0; i < values.length; i++) {
        if (!otherSet.has(values[i])) {
          return false
        }
      }
      return true
    }
  }
}

// use
let set = new Set
set.add(1)
console.log(set.has(1)) // true
set.add(2)
set.add(3)
console.log(set.values()) // [1, 2, 3]
set.remove(2)
console.log(set.size()) // 2

// ---
let A = new Set([1, 2, 3, 7, 8])
let B = new Set([2, 3, 5, 6, 9])

console.log(A.union(B).values()) // [1, 2, 3, 5, 6, 7, 8, 9]
console.log(A.intersection(B).values()) // [2, 3]
console.log(A.difference(B).values()) // [1, 7, 8]
console.log(set.isSubset(A))  // true
console.log(set.isSubset(B))  // false