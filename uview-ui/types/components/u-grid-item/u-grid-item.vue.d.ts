// Type definitions for uview 2.0.0-31920210609001
// Definitions: https://github.com/yangdan8/uView.git
import Vue from 'vue';

export interface UGridItem extends Vue {
  /**
   * 宫格的背景颜色
   * @default #ffffff
   */
  'bg-color'?: string;

  /**
   * 点击宫格时，返回的值
   */
  index?: string | number;

  /**
   * 自定义样式，对象形式
   * @version 1.6.8
   * @default {padding: '30rpx 0'}
   */
  'custom-style'?: Record<string, any>;

  /**
   * 点击宫格触发
   * @param	index u-grid-item通过props传递的index值
   */
  $emit(eventName: 'click', index: number): this;
}
