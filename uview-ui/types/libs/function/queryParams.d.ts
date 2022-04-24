/**
 * 对象转url参数
 * @param data 对象，默认值 {}
 * @param isPrefix 是否自动加上"?"，默认值 true
 * @param arrayFormat 数组格式化规则，默认值brackets
 */
declare type queryParams = (data?: Record<string, any>, isPrefix?: boolean, arrayFormat?: string) => string;

export default queryParams;
