/**
 * 根据主题type值,获取对应的图标
 * @param type 主题名称,primary|info|error|warning|success, 默认值 success
 * @param fill 是否使用fill填充实体的图标，默认值 false
 */
declare type type2icon = (type: 'primary' | 'info' | 'error' | 'warning' | 'success' | string, fill: boolean) => string;

export default type2icon;
