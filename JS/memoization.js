/**
 * @name Memoization
 * @desc 用于优化比较耗时的计算，通过将计算结果缓存到内存中，
 *  这样对于同样的输入值，下次只需要中内存中读取结果。
 */
function memoizationFn(func) {
    let cache = {}
    return function() { // 接收func的参数
        let key = arguments[0]
        if (!cache[key]) {
            let val = func.apply(this, arguments)
            cache[key] = val
        }
        return cache[key]
    }
}

// TEST
let fibonacci = memoizationFn(function(n) {
    return (n === 0 || n === 1) ? n : fibonacci(n-1) + fibonacci(n-2)
})

console.log(fibonacci(100))
console.log(fibonacci(100))
