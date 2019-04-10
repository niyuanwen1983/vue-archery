/**
 * 是否为空
 * @param 传入内容
 * @returns 空：true；非空：false
 */
export const isEmpty = (value) => {
    if (value == '' || value == 'undefined' || value == null) {
      return true
    } else {
      return false
    }
  }