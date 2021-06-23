// Type definitions for uview 2.0.0-31920210609001
// Definitions: https://github.com/yangdan8/uView.git
import Vue from 'vue';

export interface UActionSheet extends Vue {
  /**
   * 按钮的文字数组，见文档文档示例
   * @default []
   */
  list?: Record<string, any>[];

  /**
   * 顶部的提示文字，见文档文档示例
   */
  tips?: Record<string, any>;

  /**
   * 是否显示底部的取消按钮
   * @default true
   */
  'cancel-btn'?: boolean;

  /**
   * 弹出部分顶部左右的圆角值，单位rpx
   * @default 0
   */
  'border-radius'?: number | string;

  /**
   * 点击遮罩是否可以关闭
   * @default true
   */
  'mask-close-able'?: boolean;

  /**
   * 是否开启底部安全区适配 /components/safeAreaInset.html#关于uview某些组件safe-area-inset参数的说明
   * @default false
   */
  'safe-area-inset-bottom'?: boolean;

  /**
   * "z-index"值
   * @default 1075
   */
  'z-index'?: number | string;

  /**
   * 取消按钮的提示文字
   * @version 1.3.0
   * @default 取消
   */
  'cancel-text'?: string;

  /**
   * 在打开授权设置页并关闭后回调
   * @param index 点击了第几个，从0开始
   */
  $emit(eventName: 'click', index: number): this;

  /**
   * 点击取消按钮时触发
   */
  $emit(eventName: 'close'): this;
}
