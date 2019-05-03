import { isArray } from "./type-check"

/**
 * @file 数组处理方法
 * @author shiddong <shiddong@outlook.com>
 */

/**
 * @name 遍历数组或对象，并传入回调函数
 */
export function forEach(obj: Object | any[], fn: IEachArrayFn<any> | IEachObjectFn) {
    if (obj === null || typeof obj === 'undefined') {
        return
    }
    // 若为不可遍历的值则转换为array
    if (typeof obj === 'object') {
        obj = [obj]
    }
    if (isArray(obj)) {
        forEachArray(obj as any[], fn as IEachArrayFn<any>)
    } else {
        forEachObject(obj as Object, fn as IEachObjectFn)
    }
}
interface IEachArrayFn<T> {
    (item: T, index: number, array: T[]): void
}
function forEachArray(arr: any[], fn: IEachArrayFn<any>) {
    // 遍历数组
    for (let i=0, l=arr.length; i<l; i++) {
        fn.call(null, arr[i], i, arr)
    }
}
interface IEachObjectFn {
    (item: any, key: string, obj: Object): void
}
function forEachObject(obj: Object, fn: IEachObjectFn) {
    // 遍历对象
    for (let key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            fn.call(null, obj[key], key, obj)
        }
    }
}