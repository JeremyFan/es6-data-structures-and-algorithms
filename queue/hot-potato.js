/**
 * @fileOverview 击鼓传花
 * @description 
 *   一个循环队列的实现
 */

import Queue from './Queue'

/**
 * [hotPotato description]
 * @param  {[type]} nameList 玩家列表
 * @param  {[type]} num      传递次数
 * @return {[type]}          赢家
 */
function hotPotato(nameList, num) {
  let queue = new Queue(nameList)

  while (queue.size() > 1) {
    for (let i = 0; i < num; i++) {
      // 传到下一玩家的过程是当前玩家从队首到队尾的过程，即先出队再入队
      queue.enqueue(queue.dequeue())
    }

    const eliminated = queue.dequeue()
    console.log(`${eliminated} was eliminated from the Hot Potato game.`)
  }

  return queue.dequeue()
}


// use
const nameList = ['Jack', 'John', 'Jeremy', 'Eric', 'Chris']
const winner = hotPotato(nameList, 7)
console.log(winner) // Jack