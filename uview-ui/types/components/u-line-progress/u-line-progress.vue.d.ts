// Type definitions for uview 2.0.0-31920210609001
// Definitions: https://github.com/yangdan8/uView.git
import Vue, { VNode } from 'vue';

export interface ULineProgress extends Vue {
  /**
   * 进度条百分比值，为数值类型，0-100
   */
  percent?: string | number;

  /**
   * 进度条两端是否为半圆
   * @default true
   */
  round?: boolean;

  /**
   * 如设置，"active-color"值将会失效
   */
  type?: 'success' | 'primary' | 'error' | 'info' | 'warning';

  /**
   * 进度条激活部分的颜色
   * @default #19be6b
   */
  'active-color'?: string;

  /**
   * 进度条的底色，默认为灰色
   * @default #ececec
   */
  'inactive-color'?: string;

  /**
   * 是否在进度条内部显示当前的百分比值数值
   * @default true
   */
  'show-percent'?: boolean;

  /**
   * 进度条的高度，单位rpx
   * @default 28
   */
  height?: string | number;

  /**
   * 是否显示进度条激活部分的条纹
   * @default false
   */
  striped?: boolean;

  /**
   * 条纹是否具有动态效果
   * @default false
   */
  'striped-active'?: boolean;

  /**
   * slot插槽对象
   */
  $slots: {
    /**
     * 传入自定义的显示内容，将会覆盖默认显示的百分比值
     * @version 1.5.4
     */
    default: VNode[];
  };
}
