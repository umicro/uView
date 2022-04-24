// Type definitions for uview 2.0.0-31920210609001
// Definitions: https://github.com/yangdan8/uView.git
import Vue from 'vue';

export interface UReadMore extends Vue {
  /**
   * 内容超出此高度才会显示展开全文按钮，单位rpx
   * @default 400
   */
  'show-height'?: string | number;

  /**
   * 展开后是否显示收起按钮
   * @default false
   */
  toggle?: boolean;

  /**
   * 关闭时的提示文字
   * @default 展开阅读全文
   */
  'close-text'?: string;

  /**
   * 提示文字的大小，单位rpx
   * @default 28
   */
  'font-size'?: string | number;

  /**
   * 展开时的提示文字
   * @default 收起
   */
  'open-text'?: string;

  /**
   * 提示文字的颜色
   * @default #2979ff
   */
  color?: string;

  /**
   * 对阴影的自定义处理，对象形式
   * @default 见文档说明
   */
  'shadow-style'?: Record<string, any>;

  /**
   * 段落首行缩进的字符个数，无需缩进请设置为0
   * @version 1.5.6
   * @default 2em
   */
  'text-indent'?: string;

  /**
   * 用于在"open"和"close"事件中当作回调参数返回
   * @version 1.5.8
   */
  index?: string | number;

  /**
   * 重新初始化组件内部高度计算过程，如果内嵌u-parse组件时可能需要用到
   */
  init(): void;

  /**
   * 内容被展开时触发
   * @param index props中传入的index参数值
   * @version 1.5.8
   */
  $emit(eventName: 'open', index: number): this;

  /**
   * 内容被收起时触发
   * @param index props中传入的index参数值
   * @version 1.5.8
   */
  $emit(eventName: 'close'): this;
}
