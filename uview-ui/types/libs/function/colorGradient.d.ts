/**
 * 求两个颜色之间的渐变值
 * @param startColor 开始的颜色，默认值 rgb(0, 0, 0)
 * @param endColor 结束的颜色，默认值 rgb(255, 255, 255)
 * @param step 颜色等分的份额，默认值 10
 * */
export type colorGradient = (startColor: string, endColor: string, step: number) => string[];

/**
 * 将hex表示方式转换为rgb表示方式(这里返回rgb数组模式)
 * @param sColor 默认值
 * @param str 默认值 true
 */
export type hexToRgb = (sColor: string, str?: boolean) => string | string[];

/**
 * 将rgb表示方式转换为hex表示方式
 * @param rgb
 */
export type rgbToHex = (rgb: string) => string;

/**
 * JS颜色十六进制转换为rgb或rgba,返回的格式为 rgba（255，255，255，0.5）字符串
 * sHex为传入的十六进制的色值
 * alpha为rgba的透明度
 * @param color
 * @param alpha 默认值 0.3
 */
export type colorToRgba = (color: string, alpha?: number) => string;
