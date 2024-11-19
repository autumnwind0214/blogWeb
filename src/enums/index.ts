interface IEnum {
  key: number,
  value: string
}

// menu类型，1.目录、2.菜单、3.按钮
export const MenuType: { [key: string]: IEnum } = {
  DIRECTORY: { key: 1000001, value: '目录' },
  MENU: { key: 1000002, value: '菜单' },
  BUTTON: { key: 1000003, value: '按钮' }
}

export const TrueFalseEnum = {
  T: 1,
  F: 0
}
