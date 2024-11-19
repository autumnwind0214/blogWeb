import http from '@/api'
import { SYSTEM_SERVICE } from '@/api/helper/prefix'
import type { IDict } from '@/api/interface/system/dict'

/**
 * 获取所有字典信息
 * @returns {*}
 */
export const getAllDict = () => {
  return http.get<Record<string, IDict.DictCustom[]>>(SYSTEM_SERVICE + `/dict/getAllDict`, {}, { loading: false })
}
