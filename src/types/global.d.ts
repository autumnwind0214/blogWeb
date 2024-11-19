declare namespace Menu {
  interface MenuOptions {
    id: number;
    pid: number;
    path: string;
    name: string;
    sort: number;
    menuType: number;
    component?: string | (() => Promise<unknown>);
    permissions?: string;
    meta: MetaProps;
    children?: MenuOptions[];
  }

  interface MetaProps {
    icon: string;
    title: string;
    hasLink?: number;
    hasHidden: number;
    hasFull: number;
    hasAffix: number;
    hasKeepAlive: number;
    useDataScope: string;
  }
}

declare namespace View {
  interface DefaultParams {
    // Dialog Title
    title: string;
    // Dialog 中数据信息
    row: { [key: string]: any };
    // Dialog中调用接口API
    api: ((params: any) => Promise<any>) | undefined;
    // 刷新列表数据使用
    getTableList?: (() => Promise<any>) | undefined;
    // 其他附加信息
    [key: string]: any;
  }
}
