/**
 * @file 类型检查判断方法
 * @author shiddong <shiddong@outlook.com>
 */

const toString = Object.prototype.toString

/**
 * @name 检查是否为Array
 * @desc 也可以使用Array.isArray()进行判断
 */
export function isArray(val: any): boolean {
    return toString.call(val) === '[object Array]'
}

/**
 * @name 检查是否为ArrayBuffer
 */
export function isArrayBuffer(val: any): boolean {
    return toString.call(val) === '[object ArrayBuffer]'
}

/**
 * @name 检查是否为ArrayBufferView
 */
export function isArrayBufferView(val: any): boolean {
    let result: boolean
    if ((typeof ArrayBuffer !== 'undefined') && ArrayBuffer.isView) {
        result = ArrayBuffer.isView(result)
    } else {
        result = val && val.buffer && (val.buffer instanceof ArrayBuffer)
    }

    return result
}

/**
 * @name 检查是否为FormData
 */
export function isFormData(val: any): boolean {
    return (
        typeof FormData !== 'undefined'
    ) && (
        val instanceof FormData
    )
}

/**
 * @name 检查是否为String
 * @desc string类型的数据在使用Object.prototype.toString('') === '[object object]'
 */
export function isString(val: any): boolean {
    return typeof val === 'string'
}

/**
 * @name 检查是否为Number
 * @desc 可以使用isNaN()
 */
export function isNumber(val: any): boolean {
    return typeof val === 'number'
}

/**
 * @name 检查是否为undefined
 */
export function isUndefined(val: any): boolean {
    return typeof val === 'undefined'
}

/**
 * @name 检查是否为Object
 */
export function isObject(val: any): boolean {
    return val !== null && typeof val === 'object'
}

/**
 * @name 检查是否为Data
 */
export function isDate(val: any): boolean {
    return toString.call(val) === '[object Date]'
}

/**
 * @name 检查是否为File
 */
export function isFile(val: any): boolean {
    return toString.call(val) === '[object File]'
}

/**
 * @name 检查是否为Blob
 */
export function isBlob(val: any): boolean {
    return toString.call(val) === '[object Blob]'
}

/**
 * @name 检查是否为Function
 */
export function isFunction(val: any): boolean {
    return toString.call(val) === '[object Function]'
}

/**
 * @name 检查是否为Stream
 */
export function isStream(val: any): boolean {
    return isObject(val) && isFunction(val.pipe)
}

/**
 * @name 检查是否为URLSearchParams
 */
export function isURLSearchParams(val: any) {
    return (
        typeof URLSearchParams !== 'undefined'
    ) && (
        val instanceof URLSearchParams
    )
}
