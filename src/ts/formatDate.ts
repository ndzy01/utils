/*
 * @Author: ndzy
 * @Date: 2020-03-12 09:49:11
 * @LastEditTime: 2020-03-12 09:49:34
 * @LastEditors: ndzy
 */

const formatDate = (date: any) => {
  var o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'H+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds(),
    'S+': date.getMilliseconds(),
  }
  let fmt = 'yyyy-MM-dd HH:mm:ss'
  if (/(y+)/.test(fmt)) {
    //第一种：利用字符串连接符“+”给date.getFullYear()+''，加一个空字符串便可以将number类型转换成字符串。
    fmt = fmt.replace(
      RegExp.$1,
      (date.getFullYear() + '').substr(4 - RegExp.$1.length),
    )
  }
  for (var k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) {
      //第二种：使用String()类型进行强制数据类型转换String(date.getFullYear())，这种更容易理解。
      fmt = fmt.replace(
        RegExp.$1,
        RegExp.$1.length == 1
          ? o[k]
          : ('00' + o[k]).substr(String(o[k]).length),
      )
    }
  }
  return fmt
}

export default formatDate