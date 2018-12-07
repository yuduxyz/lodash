import createMathOperation from './.internal/createMathOperation.js'

/**
 * Adds two numbers.
 *
 * @since 3.4.0
 * @category Math
 * @param {number} augend The first number in an addition.  【augend: 被加数】
 * @param {number} addend The second number in an addition. 【addend: 加数】
 * @returns {number} Returns the total.
 * @example
 *
 * add(6, 4)
 * // => 10
 */
const add = createMathOperation((augend, addend) => augend + addend, 0)

export default add
