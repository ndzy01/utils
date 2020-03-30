/*
 * @Author: ndzy
 * @Date: 2020-03-29 17:41:46
 * @LastEditTime: 2020-03-30 09:08:25
 * @LastEditors: ndzy
 */
import { getStat, dirExists } from './mFiles'
async function getStatTest() {
  let isExists: any = await getStat('./b.js')
  console.log(isExists)
}
getStatTest()  //getStat 函数测试

dirExists('./b/a')
