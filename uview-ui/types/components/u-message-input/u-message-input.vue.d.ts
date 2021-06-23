// Type definitions for uview 2.0.0-31920210609001
// Definitions: https://github.com/yangdan8/uView.git
import Vue from 'vue';

export interface UMessageInput extends Vue {
  /**
   * 输入字符个数
   * @default 4
   */
  maxlength?: string | number;

  /**
   * 是否用圆点填充
   * @default false
   */
  'dot-fill'?: boolean;

  /**
   * 模式选择，见文档"基本使用"说明
   * @default box
   */
  mode?: 'bottomLine' | 'middleLine' | 'box';

  /**
   * 预置值
   */
  value?: string | number;

  /**
   * 是否开启呼吸效果，见文档说明
   * @default true
   */
  breathe?: boolean;

  /**
   * 是否自动获取焦点
   * @default false
   */
  focus?: boolean;

  /**
   * 字体和输入横线是否加粗
   * @default true
   */
  bold?: boolean;

  /**
   * 字体大小，单位rpx
   * @default 60
   */
  'font-size'?: string | number;

  /**
   * 当前激活输入框的样式
   * @default #2979ff
   */
  'active-color'?: string;

  /**
   * 非激活输入框的样式，文字颜色同此值
   * @default #606266
   */
  'inactive-color'?: string;

  /**
   * 输入框的宽度(高等于宽)，单位rpx
   * @default 80
   */
  width?: string | number;

  /**
   * 禁止点击输入框唤起系统键盘
   * @default false
   */
  'disabled-keyboard'?: boolean;

  /**
   * 输入内容发生改变时触发
   * @param value 当前输入的值
   */
  $emit(eventName: 'change', value: string): this;

  /**
   * 输入字符个数达maxlength值时触发
   * @param value 当前输入的值
   */
  $emit(eventName: 'finish', value: string): this;
}
