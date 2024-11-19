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
    hasHidden?: number;
    hasChildren?: number;
    hasLink?: number;
    hasFull?: number;
    hasAffix?: number;
    hasKeepAlive?: number;
  }

  export interface Tree {
    id: number;
    pid: number;
    title: string;
    children: Tree[];
  }

  export interface PermissionQuery {
    id: string;
    permissions: string;
  }
}
