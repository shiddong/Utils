/**
 * @file URL相关的操作
 * @author shiddong <shiddong@outlook>
 */

/**
 * @name 判断是否为绝对URL
 */
export const isAbsoluteURL = (url: string): boolean => {
    // 绝对URL的形式为："<scheme>://" 或 "//" (protocol-relative URL).
    // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
    // by any combination of letters, digits, plus, period, or hyphen.
    return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url)
}

/**
 * @name 合并URL
 */
export function combineURLs(baseURL: string, relativeURL: string) {
    return relativeURL
        ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
        : baseURL
}

/**
 * @name 转换对象为form-data
 * @desc
 *  使用方式: obj = {name: 'shiddong', age: 22}
 *  transformData(obj) => "name=shiddong&age=22"
 */
export function transFormData(data: {
    [key: string]: string | number | boolean | undefined
}): string {
    const keys = Object.keys(data)
    const keysLen = keys.length
    return keys.reduce((preStr, cur, index) => {
        const value = data[cur]
        const flag = index < keysLen-1 ? '&' : ''
        return `${preStr}${cur}=${value}${flag}`
    }, '')
}