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
