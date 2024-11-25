import type { IPageQuery } from '@/api/interface'

export namespace IRole {
  export interface Query extends IPageQuery {
    roleName?: string;
    permission?: string;
  }

  export interface Info {
    id: number;
    roleName: string;
    isLock?: string;
    permission?: string;
  }

  export interface Form {
    id?: number;
    roleName: string;
  }

  export interface Menu {
    menuLists: MenuTree[];
    selectIds: number[];
  }

  export interface MenuTree {
    id: number;
    pid: number;
    title: string;
    children: MenuTree[];
  }

  export interface MenuForm {
    menuIds: number[];
    roleId: number;
  }
}
