/**
 * @name 防抖
 * @desc 500ms后再去执行真正需要执行的方法。
 *  若在500毫秒之内又重新触发了方法，就需要重新计时
 */
let timeoutId: number
export function debounce(fn: Function, ...args) {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(fn, 500, ...args)
}

/**
 * @name 防抖2 参考《JS高级程序设计》中的实现
 * @desc 使用方式：
 *  let processor = new DebounceProcessor(fn)
 *  processor.process(...args)
 */
export class DebounceProcessor {
    timeoutId: number = null
    timeout: number
    performer: Function = null

    constructor(fn: Function, timeout: number = 100) {
        this.performer = fn
        this.timeout = timeout
    }

    process = (...args: any[]) => {
        clearTimeout(this.timeoutId)
        setTimeout(this.performer, this.timeout, ...args)
    }
}
