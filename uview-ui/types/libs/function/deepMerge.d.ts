/**
 * JS对象深度合并
 * @param target 默认值 {}
 * @param source 默认值 {}
 */
declare type deepMerge = <T, U>(target?: T, source?: U) => T & U;
export default deepMerge;
