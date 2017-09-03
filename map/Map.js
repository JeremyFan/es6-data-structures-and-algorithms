/**
 * @fileOverview 字典
 * @description ES6 Map
 */

class Map {
  constructor() {
    this._items = {}
  }

  /**
   * 检测一个键是否在字典中
   * @param  {[type]}  key [description]
   * @return {Boolean}     [description]
   */
  has(key) {
    return this._items.hasOwnProperty(key)
  }

  /**
   * 设置属性
   * @param {[type]} key   键
   * @param {[type]} value 值
   */
  set(key, value) {
    this._items[key] = value
  }

  /**
   * 读取属性
   * @param  {[type]} key 键
   * @return {[type]}     [description]
   */
  get(key) {
    return this.has(key) ? this._items[key] : undefined
  }

  /**
   * 删除属性
   * @param  {[type]} key 键
   * @return {Boolean}    是否删除成功
   */
  remove(key) {
    if (this.has(key)) {
      Reflect.deleteProperty(this._items, key)
      return true
    }

    return false
  }

  /**
   * 清空
   * @return {[type]} [description]
   */
  clear() {
    this._items = {}
  }

  /**
   * 字典大小
   * @return {[type]} [description]
   */
  size() {
    return Object.keys(this._items).length
  }

  /**
   * 字典的键
   * @return {Array} 所有键组成的数组
   */
  keys() {
    return Object.keys(this._items)
  }

  /**
   * 字典的值
   * @return {Array} 所有值组成的数组
   */
  values() {
    return Object.values(this._items)
  }
}

// use
let map = new Map
map.set('jack', 23)
map.set('john', 30)
map.set('jeremy', 35)

console.log(map.keys()) // [ 'jack', 'john', 'jeremy' ]

map.remove('john')
console.log(map.values()) // [ 23, 35 ]

map.clear()
console.log(map.size()) // 0
