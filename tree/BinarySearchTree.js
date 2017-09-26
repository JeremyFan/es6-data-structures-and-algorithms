/**
 * @fileOverview 二叉搜索树
 */

/**
 * 树的节点类
 */
class Node {
  constructor(key) {
    this.key = key
    this.left = null
    this.right = null
  }
}


class BinarySearchTree {
  constructor() {
    // 根节点
    this._root = null
  }

  /**
   * 插入节点
   * @param  {[type]} key [description]
   * @return {[type]}     [description]
   */
  insert(key) {
    const newNode = new Node(key)

    if (this._root === null) {
      this._root = newNode
    } else {
      this._insertNode(this._root, newNode)
    }
  }

  /**
   * 插入节点
   * @param  {[type]} node    开始查找的节点
   * @param  {[type]} newNode 待插入节点
   * @return {[type]}         [description]
   */
  _insertNode(node, newNode) {
    if (newNode.key < node.key) {
      if (node.left === null) {
        node.left = newNode
      } else {
        this._insertNode(node.left, newNode)
      }
    } else {
      if (node.right === null) {
        node.right = newNode
      } else {
        this._insertNode(node.right, newNode)
      }
    }
  }

  /**
   * 中序遍历
   * @param  {Function} callback [description]
   * @return {[type]}            [description]
   */
  inOrderTraverse(callback) {
    this._inOrderTraverseNode(this._root, callback)
  }

  /**
   * 中序遍历
   * @param  {[type]}   node     开始搜索的节点
   * @param  {Function} callback 回调函数
   * @return {[type]}            [description]
   */
  _inOrderTraverseNode(node, callback) {
    if (node !== null) {
      this._inOrderTraverseNode(node.left, callback)
      callback(node.key)
      this._inOrderTraverseNode(node.right, callback)
    }
  }

  /**
   * 先序遍历
   * @param  {Function} callback [description]
   * @return {[type]}            [description]
   */
  preOrderTraverse(callback) {
    this._preOrderTraverseNode(this._root, callback)
  }

  /**
   * 先序遍历
   * @param  {[type]}   node     开始搜索的节点
   * @param  {Function} callback 回调函数
   * @return {[type]}            [description]
   */
  _preOrderTraverseNode(node, callback) {
    if (node !== null) {
      callback(node.key)
      this._preOrderTraverseNode(node.left, callback)
      this._preOrderTraverseNode(node.right, callback)
    }
  }

  /**
   * 后序遍历
   * @param  {Function} callback [description]
   * @return {[type]}            [description]
   */
  postOrderTraverse(callback) {
    this._postOrderTraverseNode(this._root, callback)
  }

  /**
   * 后序遍历
   * @param  {[type]}   node     开始搜索的节点
   * @param  {Function} callback 回调函数
   * @return {[type]}            [description]
   */
  _postOrderTraverseNode(node, callback) {
    if (node !== null) {
      this._postOrderTraverseNode(node.left, callback)
      this._postOrderTraverseNode(node.right, callback)
      callback(node.key)
    }
  }

  /**
   * 搜索最小节点
   * @return {[type]} [description]
   */
  min() {
    const node = this._findMinNode(this._root)

    return node ? node.key : null
  }


  /**
   * 查找最小的节点
   * @param  {Node} node 开始查找的节点
   * @return {Node}      最小节点
   */
  _findMinNode(node) {
    if (node === null) return null

    while (node.left) {
      node = node.left
    }

    return node
  }

  /**
   * 搜索最大节点
   * @return {[type]} [description]
   */
  max() {
    let node = this._root

    if (node) {
      while (node && node.right !== null) {
        node = node.right
      }

      return node.key
    }

    return null
  }

  /**
   * 树中是否包含特定的节点
   * @param  {[type]}  key [description]
   * @return {Boolean}     [description]
   */
  has(key) {
    return this._has(this._root, key)
  }

  _has(node, key) {
    if (node === null) return false

    if (key < node.key) {
      return this._has(node.left, key)
    } else if (key > node.key) {
      return this._has(node.right, key)
    } else {
      return true
    }
  }

  /**
   * 删除节点
   * @param  {[type]} key [description]
   * @return {[type]}     [description]
   */
  remove(key) {
    this._root = this._removeNode(this._root, key)
  }

  _removeNode(node, key) {
    if (node === null) return null

    if (key < node.key) {
      node.left = this._removeNode(node.left, key)
      return node
    } else if (key > node.key) {
      node.right = this._removeNode(node.right, key)
      return node
    } else {
      // 节点是叶子节点
      if (node.left === null && node.right === null) {
        node = null
        return node
      }

      // 节点只有右侧子节点
      if (node.left === null) {
        node = node.right
        return node
      }
      // 节点只有左侧子节点
      else if (node.right === null) {
        node = node.left
        return node
      }

      // 节点有两个子节点
      // 查找右侧子树中最小的节点替代被删除节点
      // 删除右侧子树中最小的节点
      const aux = this._findMinNode(node.right)
      node.key = aux.key
      node.right = this._removeNode(node.right, aux.key)
      return node
    }
  }

  /**
   * 帮助方法：打印节点
   * @param  {[type]} key [description]
   * @return {[type]}     [description]
   */
  printNode(key) {
    console.log(key)
  }
}

// use
let tree = new BinarySearchTree()

tree.insert(7)
tree.insert(15)
tree.insert(5)
tree.insert(3)
tree.insert(9)
tree.insert(8)
tree.insert(10)
tree.insert(13)
tree.insert(12)
tree.insert(14)
tree.insert(20)
tree.insert(18)
tree.insert(25)
tree.insert(6)

console.log('in-order traverse:')
tree.inOrderTraverse(tree.printNode) // 3 5 6 7 8 9 10 12 13 14 15 18 20 25
console.log('pre-order traverse:')
tree.preOrderTraverse(tree.printNode) // 7 5 3 6 15 9 8 10 13 12 14 20 18 25
console.log('post-order traverse:')
tree.postOrderTraverse(tree.printNode) // 3 6 5 8 12 14 13 10 9 18 25 20 15 7

console.log('---search---')
console.log(tree.min()) // 3
console.log(tree.max()) // 25
console.log(tree.has(13)) // true
console.log(tree.has(999)) // false

console.log('---remove node---')
tree.remove(14) // 删除叶子节点
tree.remove(13) // 删除只有左侧子节点的节点
tree.remove(10) // 删除只有右侧子节点的节点
tree.remove(9) // 删除有两个子节点的节点
tree.inOrderTraverse(tree.printNode) // 3 5 6 7 8 12 15 18 20 25 