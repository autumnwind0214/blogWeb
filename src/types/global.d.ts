declare namespace Menu {
  interface MenuOptions {
    id: string;
    pid: string;
    path: string;
    name: string;
    sort: number;
    menuType: number;
    component?: string | (() => Promise<unknown>);
    permission?: string;
    meta: MetaProps;
    children?: MenuOptions[];
  }

  interface MetaProps {
    icon: string;
    title: string;
    isLink?: number;
    isHidden: number;
    isFull: number;
    isAffix: number;
    isKeepAlive: number;
    useDataScope: number;
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
