import http from '@/api'
import { SYSTEM_SERVICE } from '@/api/helper/prefix'
import type { IRole } from '@/api/interface/system/role'
import type { IPage } from '@/api/interface'

/**
 * 获取角色列表
 * @param params
 * @returns {*}
 */
export const getRoleList = (params: IRole.Query) => {
  return http.post<IPage<IRole.Info>>(SYSTEM_SERVICE + `/role/getRoleList`, params);
};

/**
 * 添加角色
 * @param params
 * @returns {*}
 */
export const addRole = (params: IRole.Form) => {
  return http.post(SYSTEM_SERVICE + `/role`, params);
};

/**
 * 修改角色
 * @param params
 * @returns {*}
 */
export const editRole = (params: IRole.Form) => {
  return http.put(SYSTEM_SERVICE + `/role`, params);
};

/**
 * 删除角色
 * @param params
 * @returns {*}
 */
export const deleteRole = (params: { ids: number[] }) => {
  return http.delete(SYSTEM_SERVICE + `/role`, params);
};

/**
 * 获取角色菜单权限
 * @param params
 * @returns {*}
 */
export const getRoleMenus = (params: { roleId: number }) => {
  return http.get<IRole.Menu>(SYSTEM_SERVICE + `/role/getRoleMenus`, params);
};

/**
 * 设置角色菜单权限
 * @param params
 * @returns {*}
 */
export const setRoleMenus = (params: IRole.MenuForm) => {
  return http.put(SYSTEM_SERVICE + `/role/menu`, params);
};
