// 请求响应参数（不包含data）
export interface IResult {
  code: string;
  message: string;
}

// 请求响应参数（包含data）
export interface IResultData<T = any> extends IResult {
  data: T;
}

export interface IPage<T = any> {
  current: number;
  pages: number;
  size: number;
  total: number;
  records: T[];
  param?: { [key: string]: any } | string;
}

export interface IPageQuery {
  page: number;
  limit: number;
}
