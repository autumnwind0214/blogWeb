import http from '@/api'
import { SYSTEM_SERVICE } from '@/api/helper/prefix'
import type { IMenu } from '@/api/interface/system/menu'

const header = SYSTEM_SERVICE + '/menu'

/**
 * 获取菜单列表
 * @param params
 * @returns {*}
 */
export const getMenuList = (params: IMenu.Query) => {
  return http.get<Menu.MenuOptions[]>(header + `/getMenuList`, params)
}

/**
 * 添加菜单
 * @param params
 * @returns {*}
 */
export const addMenu = (params: IMenu.Form) => {
  return http.post(header + `/add`, params)
}

/**
 * 修改菜单
 * @param params
 * @returns {*}
 */
export const editMenu = (params: IMenu.Form) => {
  return http.put(SYSTEM_SERVICE + `/sys-menu`, params)
}

/**
 * 删除菜单
 * @param params
 * @returns {*}
 */
export const deleteMenu = (params: { ids: string[] }) => {
  return http.delete(SYSTEM_SERVICE + `/sys-menu`, params)
}

/**
 * 获取菜单详情
 * @param params
 * @returns {*}
 */
export const getMenuInfo = (params: { id: string }) => {
  const { id } = params
  return http.get(SYSTEM_SERVICE + `/sys-menu/${id}`)
}

/**
 * 获取上级菜单树
 * @param params
 * @returns {*}
 */
export const getMenuTree = (params: { nodeId?: string }) => {
  return http.get<IMenu.Tree[]>(header + `/tree`, params)
}

/**
 * 菜单权限是否存在验证
 * @param params
 * @returns {*}
 */
export const getBtnExits = (params: IMenu.PermissionQuery) => {
  return http.get<{ permissionCount: number }>(header + `/btn/exists`, params, {
    loading: false
  })
}

/**
 * 导出菜单sql
 * @param params
 */
export const exportMenuSql = (params: { ids: string[] }) => {
  return http.post<string>(SYSTEM_SERVICE + `/sys-menu/sql/export`, params)
}

/**
 * 修改菜单数据权限
 * @param params
 * @returns {*}
 */
export const chaneDataRole = (params: { id: number }) => {
  const { id } = params
  return http.put(SYSTEM_SERVICE + `/sys-menu/datarole/change/${id}`)
}
