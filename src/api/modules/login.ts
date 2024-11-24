import http from '@/api'
import { SYSTEM_SERVICE } from '@/api/helper/prefix'
import type { ILogin } from '@/api/interface/system/login'

// 用户登录
export const loginApi = (params: ILogin.LoginParams) => {
  return http.post<ILogin.LoginInfo>(SYSTEM_SERVICE + `/user/login`, params, { loading: false })
}

// 用户注册
export const registerApi = (params: ILogin.RegisterParams) => {
  return http.post(SYSTEM_SERVICE + `/user/register`, params, { loading: false })
}

// 获取菜单列表
export const getAuthMenuListApi = () => {
  return http.get<Menu.MenuOptions[]>(SYSTEM_SERVICE + `/menu/getAuthMenuList`, {}, { loading: false })
}

// 获取按钮权限
export const getAuthButtonListApi = () => {
  return http.get<string[]>(SYSTEM_SERVICE + `/menu/getAuthButtonList`, {}, { loading: false })
}

// 用户退出登录
export const logoutApi = () => {
  return http.post(SYSTEM_SERVICE + `/user/logout`)
}

// 获取用户角色
export const getAuthRoleListApi = () => {
  return http.get<string[]>(SYSTEM_SERVICE + `/user/roles`, {}, { loading: false })
}
