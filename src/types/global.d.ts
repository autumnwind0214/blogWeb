declare namespace Menu {
  interface MenuOptions {
    id: number;
    pid: number;
    path: string;
    name: string;
    sort: number;
    menuTypeCd: string;
    component?: string | (() => Promise<unknown>);
    permissions?: string;
    meta: MetaProps;
    children?: MenuOptions[];
  }

  interface MetaProps {
    icon: string;
    title: string;
    isLink?: string;
    isHidden: string;
    isFull: string;
    isAffix: string;
    isKeepAlive: string;
    useDataScope: string;
  }
}

