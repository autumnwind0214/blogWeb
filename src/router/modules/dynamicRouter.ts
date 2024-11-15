import { useUserStore } from '@/stores/modules/user'
import { useAuthStore } from '@/stores/modules/auth'
import { LOGIN_URL } from '@/config'
import router from '@/router'
import type { RouteRecordRaw } from 'vue-router'

// 引入 views 文件夹下所有 vue 文件
const modules = import.meta.glob('@/views/**/*.vue')
/**
 * @description 初始化动态路由
 */
export const initDynamicRouter = async () => {
  const userStore = useUserStore()
  const authStore = useAuthStore()

  try {
    if (authStore.isLoaded) return
    // 1.获取菜单列表 && 按钮权限列表 && 字典列表
    await authStore.getAuthMenuList()
    await authStore.getAuthButtonList()
    await authStore.getAuthRoleList()
    await authStore.setLoaded()

    // 2.添加动态路由
    authStore.flatMenuListGet.forEach(item => {
      item.children && delete item.children
      if (item.component && typeof item.component == 'string') {
        item.component = modules['/src/views' + item.component + '.vue']
      }
      if (item.meta.isFull === 'T') {
        router.addRoute(item as unknown as RouteRecordRaw)
      } else {
        router.addRoute('layout', item as unknown as RouteRecordRaw)
      }
    })
  } catch (error) {
    // 当按钮 || 菜单请求出错时，重定向到登陆页
    userStore.setToken('')
    router.replace(LOGIN_URL)
    return Promise.reject(error)
  }
}
