// Type definitions for uview 2.0.0-31920210609001
// Definitions: https://github.com/yangdan8/uView.git
import Vue from 'vue';

export interface USubsection extends Vue {
  /**
   * 选项的数组，形式见文档"基本使用"
   */
  list?: Record<string, any>[];

  /**
   * 初始化时默认选中的选项索引值
   * @default 0
   */
  current?: string | number;

  /**
   * 激活时的颜色
   * @default #303133
   */
  'active-color'?: string;

  /**
   * 未激活时的颜色
   * @default #606266
   */
  'inactive-color'?: string;

  /**
   * 模式选择，见文档"模式选择"说明
   * @default button
   */
  mode?: 'subsection' | 'button';

  /**
   * 字体大小，单位rpx
   * @default 28
   */
  'font-size'?: string | number;

  /**
   * 组件高度，单位rpx
   * @default 70
   */
  height?: string | number;

  /**
   * 是否开启动画效果，见文档说明
   * @default true
   */
  animation?: boolean;

  /**
   * 激活选项的字体是否加粗
   * @default true
   */
  bold?: boolean;

  /**
   * 组件背景颜色，"mode"为"button"时有效
   * @default #eeeeef
   */
  'bg-color'?: string;

  /**
   * 按钮背景颜色，"mode"为"button"时有效
   * @default #ffffff
   */
  'button-color'?: string;

  /**
   * 分段器选项发生改变时触发
   * @param index 选项的index索引值，从0开始
   */
  $emit(eventName: 'change', index: number): this;
}
