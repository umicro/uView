// Type definitions for uview 2.0.0-31920210609001
// Definitions: https://github.com/yangdan8/uView.git
import Vue from 'vue';

export interface UCircleProgress extends Vue {
  /**
   * 圆环进度百分比值，为数值类型，0-100
   */
  percent?: string | number;

  /**
   * 圆环的底色，默认为灰色(该值无法动态变更)
   * @default #ececec
   */
  'inactive-color'?: string;

  /**
   * 圆环激活部分的颜色(该值无法动态变更)
   * @default #19be6b
   */
  'active-color'?: string;

  /**
   * 整个圆环组件的宽度，高度默认等于宽度值，单位rpx
   * @default 200
   */
  width?: string | number;

  /**
   * 圆环的边框宽度，单位rpx
   * @default 14
   */
  'border-width'?: string | number;

  /**
   * 整个圆环执行一圈的时间，单位ms
   * @default 1500
   */
  duration?: string | number;

  /**
   * 如设置，"active-color"值将会失效
   */
  type?: 'success' | 'primary' | 'error' | 'info' | 'warning';

  /**
   * 整个组件背景颜色，默认为白色
   * @default #ffffff
   */
  'bg-color'?: string;
}
