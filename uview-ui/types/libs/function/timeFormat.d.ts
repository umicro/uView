/**
 * 其他更多是格式化有如下:
 * yyyy:mm:dd|yyyy:mm|yyyy年mm月dd日|yyyy年mm月dd日 hh时MM分等,可自定义组合
 * @param dateTime 默认值 null
 * @param fmt 默认值 yyyy-mm-dd
 */
declare type timeFormat = (dateTime?: null | number | string | Date | VarDate, fmt?: string) => string;
export default timeFormat;
