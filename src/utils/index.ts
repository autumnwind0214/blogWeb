import { isArray } from '@/utils/is'

/**
 * @description 获取localStorage
 * @param {String} key Storage名称
 * @returns {String}
 */
export function localGet(key: string) {
  const value = window.localStorage.getItem(key)
  try {
    return JSON.parse(window.localStorage.getItem(key) as string)
  } catch (error) {
    return value
  }
}

/**
 * @description 获取当前时间对应的提示语
 * @returns {String}
 */
export function getTimeState() {
  const timeNow = new Date()
  const hours = timeNow.getHours()
  if (hours >= 6 && hours <= 10) {
    return `早上好 ⛅`
  }
  if (hours >= 10 && hours <= 14) {
    return `中午好 🌞`
  }
  if (hours >= 14 && hours <= 18) {
    return `下午好 🌞`
  }
  if (hours >= 18 && hours <= 24) {
    return `晚上好 🌛`
  }
  if (hours >= 0 && hours <= 6) {
    return `凌晨好 🌛`
  }
}

/**
 * @description 获取浏览器默认语言
 * @returns {String}
 */
export function getBrowserLang(): string {
  const browserLang = navigator.language ? navigator.language : navigator.browserLanguage;
  let defaultBrowserLang;
  if (['cn', 'zh', 'zh-cn'].includes(browserLang.toLowerCase())) {
    defaultBrowserLang = 'zh';
  } else {
    defaultBrowserLang = 'en';
  }
  return defaultBrowserLang;
}

/**
 * 使用递归找出所有面包屑存储到 pinia/vuex 中
 * @param menuList  菜单列表
 * @param parent    父级菜单
 * @param result    处理后的结果
 */
export const getAllBreadcrumbList = (
  menuList: Menu.MenuOptions[],
  parent: any[] = [],
  result: {
    [key: string]: any
  } = {}
) => {
  for (const item of menuList) {
    // 将当前菜单路径 `item.path` 与包含父节点路径的数组 `parent` 组合，并赋值给 result
    result[item.path] = [...parent, item]
    // 如果当前项存在子菜单 `children`，递归处理子菜单项
    if (item.children) {
      getAllBreadcrumbList(item.children, result[item.path], result)
    }
  }
  return result
}

/**
 * @description 使用递归扁平化菜单，方便添加动态路由
 * @param {Array} menuList 菜单列表
 * @returns {Array}
 */
export function getFlatMenuList(menuList: Menu.MenuOptions[]): Menu.MenuOptions[] {
  const newMenuList: Menu.MenuOptions[] = JSON.parse(JSON.stringify(menuList))
  return newMenuList.flatMap(item => [item, ...(item.children ? getFlatMenuList(item.children) : [])])
}

/**
 * @description 使用递归过滤出需要渲染在左侧菜单的列表 (需剔除 isHidden == true 的菜单)
 * @param {Array} menuList 菜单列表
 * @returns {Array}
 * */
export function getShowMenuList(menuList: Menu.MenuOptions[]): Menu.MenuOptions[] {
  const newMenuList: Menu.MenuOptions[] = JSON.parse(JSON.stringify(menuList))
  return newMenuList.filter(item => {
    item.children?.length && (item.children = getShowMenuList(item.children))
    return item.meta?.isHidden === 'F'
  })
}

/**
 * 是否是local env
 */
export function isLocalEnv() {
  return import.meta.env.MODE === 'development' || import.meta.env.MODE === 'local' || import.meta.env.MODE === 'dev';
}
