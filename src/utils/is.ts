/**
 * 判断值是否为某个类型
 */
export function is(val: unknown, type: string) {
    return Object.prototype.toString.call(val) === `[object ${type}]`
}

/**
 * 是否为数组
 */
export function isArray(val: any): val is Array<any> {
    return val && Array.isArray(val);
}
