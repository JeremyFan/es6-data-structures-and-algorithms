/**
 * @fileOverview 线性探测法解决冲突
 * @description 
 *   如果地址已被占用，检查下一位置，直到空闲的地址
 */

class ValuePair {
  constructor(key, value) {
    this.key = key
    this.value = value
  }
}

class LinearProbingHashMap {
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
   * 探测可用的存储地址
   * @param  {[type]} key   键
   * @param  {[type]} value 值
   * @return {[type]}       [description]
   */
  put(key, value) {
    let position = this._loseloseHashCode(key)

    // 迭代到空闲的地址
    while (this._table[position]) {
      position++
    }

    this._table[position] = value
  }

  /**
   * 读取
   * 如果当前位置的key不匹配，找下一位置
   * @param  {[type]} key 键
   * @return {ValuePair|Undefined}     元素或undefined
   */
  get(key) {
    let position = this._loseloseHashCode(key)

    if (!this._table[position]) return undefined

    while (this._table[position]) {
      if (this._table[position].key === key) {
        return this._table[position].value
      }

      position++
    }
  }

  /**
   * 删除元素
   * @param  {[type]} key 键
   * @return {Boolean}    是否删除成功
   */
  remove(key) {
    let position = this._loseloseHashCode(key)

    if (!this._table[position]) return undefined

    while (this._table[position]) {
      if (this._table[position].key === key) {
        return this._table[position].value
      }

      position++
    }
  }
}

// use
let hashMap = new LinearProbingHashMap
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
 * 5 Judy
 * 6
 * 7 Jack
 * ·
 * ·
 * ·
 * 28 Jeremy
 * 29 John
 * 30 Jim
 */