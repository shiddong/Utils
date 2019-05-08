import { forEach } from "./array"

/**
 * @file Object操作方法
 */
interface IObj {
    [key: string]: any
}

/**
 * @name Object merge
 */
export function merge(...objs: Object[]): Object {
    let result: Object
    const assignValue = (key, val: any): void => {
        if (
            (typeof result[key] === 'object') && typeof val === 'object'
        ) {
            result[key] = merge(result[key], val)
        } else {
            result[key] = val
        }
    }

    for (let i=0, len= objs.length; i<len; i++) {
        forEach(objs[i], assignValue)
    }
    return result
}

/**
 * @name 真正的冻结对象，迭代将一个对象的属性彻底冻结，变成一个常量
 */
export const constantize = (obj: Object) => {
    Object.freeze(obj)
    // 递归处理子属性
    Object.keys(obj).forEach(key => {
        if (typeof obj[key] === 'object') { // 检测为复合类型
            constantize(obj[key])
        }
    })
}

/**
 * @name 对普通对象部署Iterator接口，用于消费for...of
 * @desc 使用方式
 *  for (let [key, value] of entries(obj)) {...}
 */
export function* entries(obj: IObj): Generator {
    for (let key of Object.keys(obj)) {
        yield [key, obj[key]]
    }
}

/**
 * @name instanceof 重定义
 * @desc 来源于React的babel解析
 */
function xInstanceof(left: any, right: any) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return right[Symbol.hasInstance](left)
    } else {
        return left instanceof right
    }
}

/**
 * @name classCallCheck 重定义
 * @desc 来源于React的babel解析
 */
function xClassCallCheck(instance, Constructor) {
    if (!xInstanceof(instance, Constructor)) {
        throw new TypeError("Cannot call a class as a function")
    }
}

/**
 * @name defineProperties 重定义
 * @desc 来源于React的babel解析
 */
function xDefineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
        var descriptor = props[i]
        descriptor.enumerable = descriptor.enumerable || false
        descriptor.configurable = true
        if ("value" in descriptor) {
            descriptor.writable = true
        }
        Object.defineProperty(target, descriptor.key, descriptor)
    }
}

/**
 * @name createClass 重定义
 * @desc 来源于React的babel解析
 */
function xCreateClass(Constructor, protoProps, staticProps) {
    if (protoProps) {
        xDefineProperties(Constructor.prototype, protoProps)
    }
    if (staticProps) {
        xDefineProperties(Constructor, staticProps)
    }
    return Constructor
}

/**
 * @name defineProperty 重定义
 * @desc 来源于React的babel解析
 */
function xDefineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        })
    } else {
        obj[key] = value
    }
    return obj
}
