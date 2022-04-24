// Type definitions for uview 2.0.0-31920210609001
// Definitions: https://github.com/yangdan8/uView.git
import Vue from 'vue';

export interface UTabbar extends Vue {
  /**
   * 各项的配置参数，见顶部说明，数组形式
   */
  list?: Record<string, any>[];

  /**
   * 是否显示组件
   * @default true
   */
  show?: boolean;

  /**
   * 双向绑定的激活项的索引值
   * @default 0
   */
  'v-model'?: string | number;

  /**
   * 组件的背景颜色
   * @default #ffffff
   */
  'bg-color'?: string;

  /**
   * 高度，单位任意，数值则为rpx单位，不建议修改
   * @default 50px
   */
  height?: string | number;

  /**
   * 非中部凸起图标的大小，单位任意，数值则为rpx单位
   * @default 40
   */
  'icon-size'?: string | number;

  /**
   * 凸起的图标的大小，单位任意，数值则为rpx单位
   * @default 90
   */
  'mid-button-size'?: string | number;

  /**
   * 文字和字体图标激活时的颜色
   * @default #303133
   */
  'active-color'?: string;

  /**
   * 文字和字体图标未激活时的颜色
   * @default #606266
   */
  'inactive-color'?: string;

  /**
   * 是否需要中部凸起的按钮，配置了此值，依然需要配置"list"参数中需凸起项的"midButton"为"true"，见文档说明
   * @default false
   */
  'mid-button'?: boolean;

  /**
   * 切换之前的回调钩子，见文档说明
   */
  'before-switch'?: (...args: any[]) => void;

  /**
   * 是否显示顶部的边框
   * @default true
   */
  'border-top'?: boolean;

  /**
   * 是否隐藏原生tabbar
   * @version 1.5.6
   * @default true
   */
  'hide-tab-bar'?: boolean;

  /**
   * 切换选项时触发
   * @param index 当前要切换项的索引
   */
  $emit(eventName: 'change', index: number): this;
}
