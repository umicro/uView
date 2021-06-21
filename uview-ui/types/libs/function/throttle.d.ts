/**
 * 节流原理：在一定时间内，只能触发一次
 * @param func 要执行的回调函数
 * @param wait 延时的时间,默认值 500
 * @param immediate 是否立即执行,默认值 true
 * @return null
 */
declare type throttle = (func: () => void, wait?: number, immediate?: boolean) => void;
export default throttle;
