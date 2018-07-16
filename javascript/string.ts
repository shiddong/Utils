// 一次性替换字符串中的所有相同字符
function replaceAll(str: string, oldStr: string, newStr: string): string {
  var reg = new RegExp(oldStr, "g")
  return str.replace(reg, newStr)
}

// String.prototype.replaceAll = (oldStr: string, newStr: string) => {
//   var reg = new RegExp(oldStr, "g")
//   return this.replace(reg, newStr)
// }
