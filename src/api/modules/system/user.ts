import http from '@/api'
import { SYSTEM_SERVICE } from '@/api/helper/prefix'
import type { IUser } from '@/api/interface/system/user'
import type { IPage } from '@/api/interface'

// 获取用户列表
export const getUserList = (params: IUser.Query) => {
  return http.post<IPage<IUser.Info>>(SYSTEM_SERVICE + `/user/getUserList`, params, { loading: false })
}

// 添加用户
export const addUser = (params: IUser.Form) => {

}

// 修改用户
export const editUser = (params: IUser.Form) => {
}

// 删除用户
export const deleteUser = (params: { ids: number[] }) => {
}

/**
 * 获取用户角色
 * @param params
 * @returns {*}
 */
export const getUserRole = (params: { userId: number }) => {
}

/**
 * 设置用户角色
 * @param params
 * @returns {*}
 */
export const setUserRole = (params: IUser.RoleForm) => {
}

// 修改密码
export const changePassword = (params: IUser.PasswordForm) => {
  return http.put(SYSTEM_SERVICE + `/user/changePassword`, params, { loading: false })
}

/**
 * 重置密码
 * @param params
 */
export const resetPassword = (params: { id: number }) => {
}

/**
 * 获取登录用户信息
 * @returns {*}
 */
export const getUserinfo = () => {
}

/**
 * 解锁用户
 * @param params
 * @returns {*}
 */
export const unlockUser = (params: { ids: (string | number)[] }) => {
}

/**
 * 获取详情
 * @param params
 * @returns {*}
 */
export const getUserDetailApi = (params: { id: string }) => {
}
