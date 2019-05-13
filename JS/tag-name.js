/**
 * @name 获取页面中所有的标签
 */
function getTagNames() {
    let elements = document.getElementsByTagName("*")		// HTMLCollection类型
    let elementList = Array.prototype.slice.call(elements)		// 转为Array类型
    let tags = elementList.map(elem => elem.tagName.toLowerCase())		// 根据tagName属性获取标签名
    return new Set(tags)
}
