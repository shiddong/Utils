/**
 * @file 迭代器相关操作
 */

/**
 * @name 生成一个迭代器
 * @param array
 */
export function makeIterator(array: any[]) {
    let nextIndex = 0
    return {
        next: function() {
            return nextIndex < array.length ?
                {value: array[nextIndex++]} :   // 省略了done: false, 用默认值表示，
                {done: true}                    // 省略了value: undefined, 默认值即可表示
        }
    }
}
