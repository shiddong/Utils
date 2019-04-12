/**
 * @file 处理字符串操作
 * @author shiddong <shiddong@outlook>
 * @desc 一次性替换字符串中的所有相同字符
 */
export const replaceAll = (str: string, oldStr: string, newStr: string) => {
  const reg = new RegExp(oldStr, "g")
  return str.replace(reg, newStr)
}

export const addReplaceAllToStringProto = () => {
  if (String.prototype["replaceAll"]) {
    return
  }
  String.prototype["replaceAll"] = (oldStr: string, newStr: string) => {
    const reg = new RegExp(oldStr, "g")
    return this.replace(reg, newStr)
  }
}
