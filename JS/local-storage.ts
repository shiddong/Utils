export enum LocalStorageKeys {
}

export type LocalStorageKey  = string

/**
 * @name 存储到 localstorage
 */
export function cacheItem(key: LocalStorageKey, data: any) {
    window.localStorage.setItem(key, JSON.stringify(data))
}

/**
 * @name 从 localstorage 中提取
 */
export function retrieveItem(key: LocalStorageKey) {
    let data = null
    try {
        data = JSON.parse(window.localStorage.getItem(key))
    } catch (error) {
        console.error(error)
    }
    return data
}