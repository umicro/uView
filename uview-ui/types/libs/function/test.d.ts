export default interface test {
  /**
   * 验证电子邮箱格式
   * @param value 需要验证的数据
   */
  email(value: string): boolean;

  /**
   * 验证手机格式
   * @param value 需要验证的数据
   */
  mobile(value: string): boolean;

  /**
   * 验证URL格式
   * @param value 需要验证的数据
   */
  url(value: string): boolean;

  /**
   * 验证日期格式
   * @param value 需要验证的数据
   */
  date(value: string | number | Date | VarDate): boolean;

  /**
   * 验证ISO类型的日期格式
   * @param value 需要验证的数据
   */
  dateISO(value: string): boolean;

  /**
   * 验证十进制数字
   * @param value 需要验证的数据
   */
  number(value: string): boolean;

  /**
   * 验证整数
   * @param value 需要验证的数据
   */
  digits(value: string): boolean;

  /**
   * 验证身份证号码
   * @param value 需要验证的数据
   */
  idCard(value: string): boolean;

  /**
   * 是否车牌号
   * @param value 需要验证的数据
   */
  carNo(value: string): boolean;

  /**
   * 金额,只允许2位小数
   * @param value 需要验证的数据
   */
  amount(value: string): boolean;

  /**
   * 中文
   * @param value 需要验证的数据
   */
  chinese(value: string): boolean;

  /**
   * 只能输入字母
   * @param value 需要验证的数据
   */
  letter(value: string): boolean;

  /**
   * 只能是字母或者数字
   * @param value 需要验证的数据
   */
  enOrNum(value: string): boolean;

  /**
   * 验证是否包含某个值
   * @param value 需要验证的数据
   * @param param 搜索的值
   */
  contains(value: string, param: string): boolean;

  /**
   * 验证一个值范围[min, max]
   * @param value 需要验证的数据
   * @param param 范围参数[min, max]
   */
  range(value, param: number[]): boolean;

  /**
   * 验证一个长度范围[min, max]
   * @param value 需要验证的数据
   * @param param 范围参数[min, max]
   */
  rangeLength(value: string, param: number[]): boolean;

  /**
   * 是否固定电话
   * @param value 需要验证的数据
   */
  landline(value: string): boolean;

  /**
   * 判断是否为空
   * @param value 需要验证的数据
   */
  empty(value: any): boolean;

  /**
   * 判断是否为空
   * @param value 需要验证的数据
   */
  isEmpty(value: any): boolean;

  /**
   * 是否json字符串
   * @param value 需要验证的数据
   */
  jsonString(value: any): boolean;

  /**
   * 是否数组
   * @param value 需要验证的数据
   */
  array(value: any): boolean;

  /**
   * 是否对象
   * @param value 需要验证的数据
   */
  object(value: any): boolean;

  /**
   * 是否短信验证码
   * @param value 需要验证的数据
   * @param len 长度，默认 6
   */
  code(value: string, len?: number): boolean;
}
