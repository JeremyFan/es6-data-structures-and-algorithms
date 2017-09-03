/**
 * @fileOverview 哈希表
 */

class HashMap {
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
   * @param  {[type]} key   键
   * @param  {[type]} value 值
   * @return {[type]}       [description]
   */
  put(key, value) {
    const position = this._loseloseHashCode(key)

    this._table[position] = value
  }

  /**
   * 读取
   * @param  {[type]} key [键
   * @return {[type]}     [description]
   */
  get(key) {
    const position = this._loseloseHashCode(key)

    return this._table[position]
  }

  /**
   * 删除一项
   * @param  {[type]} key 键
   * @return {Boolean}    是否删除成功
   */
  remove(key) {
    const position = this._loseloseHashCode(key)

    this._table[position] = undefined
  }
}

// use
let hashMap = new HashMap
hashMap.put('Jack', 'jack@google.com')
hashMap.put('John', 'john@hotmail.com')
hashMap.put('Jeremy', 'jeremy@126.com')

console.log(hashMap.get('Jack'))  // jack@google.com

hashMap.remove('Jack')
console.log(hashMap.get('Jack'))  // undefined