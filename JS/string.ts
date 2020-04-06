/**
 * @file 处理字符串操作
 * @author shiddong <shiddong@outlook>
 */

/**
 * @name replaceAll
 * @description 一次性替换字符串中的所有相同字符
 */
export function replaceAll(str: string, oldStr: string, newStr: string): string {
	const reg = new RegExp(oldStr, "g")
	return str.replace(reg, newStr)
}
export function addReplaceAllToStringProto() {
 	if (String.prototype["replaceAll"]) {
    	return
  	}
  	String.prototype["replaceAll"] = (oldStr: string, newStr: string) => {
  		const reg = new RegExp(oldStr, "g")
   		return this.replace(reg, newStr)
  	}
}

/**
 * @name formatString
 * @description 格式化字符串，格式如: <span>{#link#}</span>
 */
export function formatString(str: string, data: object): string {
	return str.replace(/\{#(\w+)#\}/g, function(match, key) {
		return typeof data[key] === undefined ? '' : data[key]
	})
}


/**
 * @name trim
 * @description 消除空白符
 */
export function trim(str: string): string {
	return str.replace(/^\s*/, '').replace(/\s*$/, '')
}
export function trimL(str: string): string {
  	return str.replace(/^\s*/, '')
}
export function trimR(str: string): string {
  	return str.replace(/\s*$/, '')
}
