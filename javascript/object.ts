import { forEach } from "./array"

/**
 * @file Object操作方法
 */

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
