import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { getAuthButtonListApi, getAuthMenuListApi, getAuthRoleListApi } from '@/api/modules/login'

import { getAllBreadcrumbList, getFlatMenuList, getShowMenuList } from '@/utils'

export const useAuthStore = defineStore('auth', () => {
  const isLoaded = ref(false)
  // 按钮权限列表
  const authButtonList = ref<string[]>([])
  // 菜单权限列表
  const authMenuList = ref<Menu.MenuOptions[]>([])
  // 用户角色列表
  const authRoleList = ref<string[]>([])
  // 当前页面的router name，用来做按钮权限筛选
  const routeName = ref('')

  // 按钮权限列表
  const authButtonListGet = computed(() => authButtonList.value)
  // 菜单权限列表   这里的菜单没有经过任何处理
  const authMenuListGet = computed(() => authMenuList.value)
  // 用户角色列表
  const authRoleListGet = computed(() => authRoleList.value)
  // 菜单权限列表 ==> 左侧菜单栏渲染，需要剔除 isHidden == true
  const showMenuListGet = computed(() => getShowMenuList(authMenuList.value))
  // 菜单权限列表 ==> 扁平化之后的一维数组菜单，主要用来添加动态路由
  const flatMenuListGet = computed(() => getFlatMenuList(authMenuList.value))
  // 递归处理后的所有面包屑导航列表
  const breadcrumbListGet = computed(() => getAllBreadcrumbList(authMenuList.value))

  // todo
  async function getAuthButtonList() {
    // const { data } = await getAuthButtonListApi()
    // authButtonList.value = data
  }

  // todo Get AuthMenuList
  async function getAuthMenuList() {
    // const { data } = await getAuthMenuListApi()
    // authMenuList.value = data
  }

  // todo Get AuthRoleList
  async function getAuthRoleList() {
    // const { data } = await getAuthRoleListApi()
    // authRoleList.value = data
  }

  function clear() {
    isLoaded.value = false
    authMenuList.value = []
    authButtonList.value = []
    authRoleList.value = []
  }

  // Set RouteName
  async function setRouteName(name: string) {
    routeName.value = name;
  }

  async function setLoaded() {
    isLoaded.value = true;
  }

  return {
    isLoaded,
    setLoaded,
    routeName,
    authButtonListGet,
    authMenuListGet,
    authRoleListGet,
    showMenuListGet,
    flatMenuListGet,
    breadcrumbListGet,
    getAuthButtonList,
    getAuthMenuList,
    getAuthRoleList,
    setRouteName,
    clear
  };

})
