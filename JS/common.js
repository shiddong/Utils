/**
 * @name 深拷贝
 */
export function deepCopy(initalObject,finalObject = {}) {
    let finalObject = finalObject
    for (let key in initalObject) {
        let tempProperty = initalObject[key]
        if (tempProperty === initalObject) {
            continue // 当自身属性引用自己的时候跳过执行,不拷贝,避免相互引用导致内存溢出的情况
        }

        // 简单判断了数组与对象/基本类型
        if (typeof initalObject[key] === "object") {
            finalObject[key] = (initalObject[key].constructor === Array) ? [] : {}  //区分构造函数
            arguments.callee(initalObject[key],finalObject[key]) //调用自身函数方法
        } else {
            finalObject[key] = initalObject[key]
        }
    }
    return finalObject
}

/**
 * @name 深拷贝能够被JSON表示的数据结构
 * @desc 比如Number,String,Boolean,Array,扁平对象,不包含function等,否则无法处理。
 */
function deepCopyByJSON(initalObject){
    var finalObject = {}
    try {
        finalObject = JSON.parse(JSON.stringify(initalObject))
    } catch (err) {
        throw new Error(err)
    }
    return finalObject
}