// 登录模块
import type { IPageQuery } from '@/api/interface'

export namespace IUser {
  export interface Query extends IPageQuery {
    username?: string;
    phone?: string;
    nickname?: string;
  }

  export interface PasswordForm {
    oldPwd: string;
    newPwd: string;
  }

  export interface Form {
    id?: number;
    username?: string;
    password?: string;
    phone: string;
    nickname: string;
    logo: string;
    sex: number;
    email: string;
    birthday: string;
  }

  export interface RoleForm {
    roleIds: number[];
    userId: number;
  }

  export interface Info {
    id?: number;
    username: string;
    phone: string;
    nickname: string;
    logo: string;
    age: number;
    sex: number;
    email: string;
    lastLoginTime: string;
    createTime: string;
    updateTime: string;
    birthday: string;
  }

  export interface RoleInfo {
    id: number;
    roleName: string;
  }
}
