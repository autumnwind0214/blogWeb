import type { IPageQuery } from '@/api/interface'

export namespace IRole {
  export interface Query extends IPageQuery {
    roleName?: string;
    permission?: string;
  }

  export interface Info {
    id: string;
    roleName: string;
    isLock?: number;
    permission?: string;
  }

  export interface Form {
    id?: string;
    roleName: string;
  }

  export interface Menu {
    menuLists: MenuTree[];
    selectIds: string[];
  }

  export interface MenuTree {
    id: string;
    pid: string;
    title: string;
    children: MenuTree[];
  }

  export interface MenuForm {
    menuIds: string[];
    roleId: string;
  }
}
