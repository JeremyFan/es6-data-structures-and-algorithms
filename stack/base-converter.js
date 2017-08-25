/**
 * @fileOverview 十进制转换
 * @description 依赖 Stack.js
 */

import Stack from './Stack'

/**
 * 转换方法
 * @param  {Number} decNumber 需要转换的数值
 * @param  {Number} base      转换的进制（二、八、十六）
 * @return {[type]}           [description]
 */
function baseConverter(decNumber, base) {
  let remStack = new Stack,
    rem,
    baseString = ''

  const digits = '0123456789ABCDEF'

  while (decNumber) {
    rem = Math.floor(decNumber % base)
    remStack.push(rem)
    decNumber = Math.floor(decNumber / base)
  }

  while (!remStack.isEmpty()) {
    baseString += digits[remStack.pop()]
  }

  return baseString
}

// use
const binary = baseConverter(100, 2)
const oct = baseConverter(100, 8)
const hex = baseConverter(100, 16)
console.log(binary, oct, hex) // 1100100 144 64