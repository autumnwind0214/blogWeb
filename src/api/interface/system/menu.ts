export namespace IMenu {

  export interface Query {
    isShowButton: boolean;
  }

  export interface Form {
    id?: string;
    title?: string;
    pid?: string;
    path?: string;
    name?: string;
    icon?: string;
    component?: string;
    redirect?: string;
    sort?: number;
    deep?: number;
    menuType?: number;
    permission?: string;
    isHidden?: number;
    hasChildren?: number;
    isLink?: number;
    isFull?: number;
    isAffix?: number;
    isKeepAlive?: number;
  }

  export interface Tree {
    id: string;
    pid: string;
    title: string;
    children: Tree[];
  }

  export interface PermissionQuery {
    id: string;
    permission: string;
  }
}
