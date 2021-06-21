/**
 * 时间戳转为多久之前
 * @param 时间戳 默认值 null
 * @param format 如果为时间格式字符串，超出一定时间范围，返回固定的时间格式，默认值 yyyy-mm-dd
 * @return 如果为布尔值false，无论什么时间，都返回多久以前的格式
 */
declare type timeFrom = (dateTime?: null | string, format?: string | false) => string;
export default timeFrom;
