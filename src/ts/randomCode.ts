/*
 * @Author: ndzy
 * @Date: 2020-03-29 13:09:57
 * @LastEditTime: 2020-03-29 13:10:10
 * @LastEditors: ndzy
 */
const randomCode = (number: number) => {
  const str =
    'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678' /****默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1****/
  let maxPos = str.length
  let pwd = ''
  for (let i = 0; i < number; i++) {
    pwd += str.charAt(Math.floor(Math.random() * maxPos))
  }
  return pwd
}

export default randomCode
