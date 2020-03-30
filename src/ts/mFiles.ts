/*
 * @Author: ndzy
 * @Date: 2020-03-29 17:38:29
 * @LastEditTime: 2020-03-29 18:20:12
 * @LastEditors: ndzy
 */
import * as fs from 'fs'
import * as path from 'path'
/**
 * 读取路径信息,文件夹或者目录不存在返回false
 * @param {string} path 路径
 */
export function getStat(path) {
  return new Promise((resolve, reject) => {
    fs.stat(path, (err, stats) => {
      if (err) {
        resolve(false)
      } else {
        resolve(stats)
      }
    })
  })
}

/**
 * 创建路径
 * @param {string} dir 路径
 */
export function mMkdir(dir) {
  return new Promise((resolve, reject) => {
    fs.mkdir(dir, err => {
      if (err) {
        resolve(false)
      } else {
        resolve(true)
      }
    })
  })
}

/**
 * 路径是否存在，不存在则创建 (用来创建文件夹)
 * @param {string} dir 路径
 */
export async function dirExists(dir) {
  let isExists: any = await getStat(dir)
  //如果该路径且不是文件，返回true
  if (isExists && isExists.isDirectory()) {
    return true
  } else if (isExists) {
    //如果该路径存在但是文件，返回false
    return false
  }
  //如果该路径不存在
  let tempDir = path.parse(dir).dir //拿到上级路径
  //递归判断，如果上级目录也不存在，则会代码会在此处继续循环执行，直到目录存在
  let status = await dirExists(tempDir)
  let mkdirStatus
  if (status) {
    mkdirStatus = await mMkdir(dir)
  }
  return mkdirStatus
}
