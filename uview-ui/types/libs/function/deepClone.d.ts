/**
 * 深度克隆
 * 循环引用、symbol类型、原型链会有问题
 * @param obj
 */
declare type deepClone = <T>(obj: T) => T;
export default deepClone;
