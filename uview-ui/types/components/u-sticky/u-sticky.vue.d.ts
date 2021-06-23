// Type definitions for uview 2.0.0-31920210609001
// Definitions: https://github.com/yangdan8/uView.git
import Vue from 'vue';

export interface USticky extends Vue {
  /**
   * 吸顶时与顶部的距离，单位rpx
   * @default 0
   */
  'offset-top'?: string | number;

  /**
   * 自定义标识，用于区分是哪一个组件
   */
  index?: string | number;

  /**
   * 是否开启吸顶功能
   * @default true
   */
  enable?: boolean;

  /**
   * 组件背景颜色
   * @default #ffffff
   */
  'bg-color'?: string;

  /**
   * 吸顶时的"z-index"值
   * @default 970
   */
  'z-index'?: string | number;

  /**
   * 导航栏高度，自定义导航栏时(无导航栏时需设置为"0")，需要传入此值，单位<strong>px</strong>
   * @default 44
   */
  'h5-nav-height'?: string | number;

  /**
   * 组件吸顶时触发
   * @param index 通过props传递的index
   */
  $emit(eventName: 'fixed', index: number | string): this;

  /**
   * 组件取消吸顶时触发
   * @param index 通过props传递的index
   */
  $emit(eventName: 'unfixed', index: number | string): this;
}
