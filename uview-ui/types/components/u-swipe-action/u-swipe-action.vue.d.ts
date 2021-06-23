// Type definitions for uview 2.0.0-31920210609001
// Definitions: https://github.com/yangdan8/uView.git
import Vue from 'vue';

export interface USwipeAction extends Vue {
  /**
   * 整个组件背景颜色
   * @default #ffffff
   */
  'bg-color'?: string;

  /**
   * 标识符，点击时候用于区分点击了哪一个，用"v-for"循环时的index即可
   */
  index?: string | number;

  /**
   * 按钮宽度，单位rpx
   * @default 180
   */
  'btn-width'?: string | number;

  /**
   * 是否禁止某个swipeAction滑动
   * @default false
   */
  disabled?: boolean;

  /**
   * 是否使手机发生短促震动，目前只在iOS的微信小程序和微信小程序开发工具有效
   * @default false
   */
  'vibrate-short'?: boolean;

  /**
   * 打开或者关闭某个组件
   * @default false
   */
  show?: boolean;

  /**
   * 按钮组的配置参数，数组形式，见文档说明
   * @default []
   */
  options?: Record<string, any>[];

  /**
   * 点击组件时触发
   * @param index1 见文档"点击事件"的说明
   * @param index 见文档"点击事件"的说明
   */
  $emit(eventName: 'click', index1: number, index: number): this;

  /**
   * 组件触发关闭状态时
   * @param index 通过props传递的index
   */
  $emit(eventName: 'close', index: number): this;

  /**
   * 组件触发打开状态时
   * @param index 通过props传递的index
   */
  $emit(eventName: 'open', index: number): this;

  /**
   * 点击组件时触发
   * @param index 通过props传递的index
   */
  $emit(eventName: 'content-click', index: number): this;
}
