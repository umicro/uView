// Type definitions for uview 2.0.0-31920210609001
// Definitions: https://github.com/yangdan8/uView.git
import Vue from 'vue';

export interface USwitch extends Vue {
  /**
   * 是否处于加载中
   * @default false
   */
  loading?: boolean;

  /**
   * 是否禁用
   * @default false
   */
  disabled?: boolean;

  /**
   * 开关尺寸，单位rpx
   * @default 50
   */
  size?: string | number;

  /**
   * 打开时的背景色
   * @default #2979ff
   */
  'active-color'?: string;

  /**
   * 关闭时的背景色
   * @default #ffffff
   */
  'inactive-color'?: string;

  /**
   * 是否使手机发生短促震动，目前只在iOS的微信小程序和微信小程序开发工具有效
   * @default false
   */
  'vibrate-short'?: boolean;

  /**
   * 打开选择器时通过change事件发出的值
   * @default true
   */
  'active-value'?: boolean | number | string;

  /**
   * 关闭选择器时通过change事件发出的值
   * @default false
   */
  'inactive-value'?: boolean | number | string;

  /**
   * 在switch打开或关闭时触发(选中状态)
   * @param value 打开时为active-value值，关闭时为inactive-value值
   */
  $emit(eventName: 'change', value: boolean | number | string): this;
}
