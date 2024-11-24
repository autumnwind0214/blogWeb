import type { IPageQuery } from '@/api/interface'

export namespace IRole {
  export interface Query extends IPageQuery {
    roleName?: string;
  }

  export interface Info {
    id: number;
    roleName: string;
    isLock?: string;
    permission?: string;
  }
}
