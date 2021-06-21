/**
 * 防抖原理：一定时间内，只有最后一次操作，再过wait毫秒后才执行函数
 * @param func 要执行的回调函数
 * @param wait 延时的时间,默认值 500
 * @param immediate 是否立即执行,默认值 false
 */
declare type debounce = (func: (...args: any[]) => void, wait?: number, immediate?: boolean) => void;
export default debounce;
