// Type definitions for uview 2.0.0-31920210609001
// Definitions: https://github.com/yangdan8/uView.git
import Vue from 'vue';

export interface UDivider extends Vue {
  /**
   * 文字左或右边线条宽度，数值或百分比，数值时单位为rpx
   */
  'half-width'?: string | number;

  /**
   * 线条颜色，优先级高于"type"
   * @default #dcdfe6
   */
  'border-color'?: string;

  /**
   * 文字颜色
   * @default #909399
   */
  color?: string;

  /**
   * 字体大小，单位rpx
   * @default 26
   */
  fontSize?: string | number;

  /**
   * 整个divider的背景颜色
   * @default #ffffff
   */
  'bg-color'?: string;

  /**
   * 整个divider的高度，单位rpx
   * @default 40
   */
  height?: string | number;

  /**
   * 将线条设置主题色
   * @default primary
   */
  type?: 'info' | 'success' | 'primary' | 'warning' | 'error';

  /**
   * 与前一个元素的距离，单位rpx
   * @default 0
   */
  'margin-top'?: string | number;

  /**
   * 与后一个元素的距离，单位rpx
   * @default 0
   */
  'margin-bottom'?: string | number;

  /**
   * 是否使用slot传入内容，如果不传入，中间不会有空隙
   */
  'use-slot'?: boolean;

  /**
   * divider组件被点击时触发
   */
  $emit(eventName: 'click'): this;
}
