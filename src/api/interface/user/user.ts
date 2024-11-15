// 登录模块
import type { IPageQuery } from '@/api/interface'

export namespace IUser {
  export interface Query extends IPageQuery {

  }

  export interface PasswordForm {
    oldPwd: string;
    newPwd: string;
  }
}
