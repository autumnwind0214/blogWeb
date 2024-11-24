export namespace IMenu {

  export interface Query {
    isShowButton: boolean;
  }

  export interface Form {
    id?: number;
    title?: string;
    pid?: number;
    path?: string;
    name?: string;
    icon?: string;
    component?: string;
    redirect?: string;
    sort?: number;
    deep?: number;
    menuType?: number;
    permissions?: string;
    isHidden?: number;
    hasChildren?: number;
    isLink?: number;
    isFull?: number;
    isAffix?: number;
    isKeepAlive?: number;
  }

  export interface Tree {
    id: number;
    pid: number;
    title: string;
    children: Tree[];
  }

  export interface PermissionQuery {
    id: number;
    permission: string;
  }
}
