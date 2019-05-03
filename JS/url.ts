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
