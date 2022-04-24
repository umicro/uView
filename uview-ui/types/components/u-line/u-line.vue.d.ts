// Type definitions for uview 2.0.0-31920210609001
// Definitions: https://github.com/yangdan8/uView.git
import Vue from 'vue';

export interface ULine extends Vue {
  /**
   * 线条的颜色
   * @default #e4e7ed
   */
  color?: string;

  /**
   * 长度，竖向时表现为高度，横向时表现为长度，可以为百分比，带rpx单位的值等
   * @default 100%
   */
  length?: string;

  /**
   * 线条的方向，"row"-横向，"col"-竖向
   * @default row
   */
  direction?: 'col' | 'row';

  /**
   * 是否显示细线条
   * @default true
   */
  'hair-line'?: boolean;

  /**
   * 线条与上下左右元素的间距，字符串形式，如"30rpx"、"20rpx 30rpx"
   */
  margin?: string;

  /**
   * 线条类型，见文档说明
   * @version 1.3.7
   * @default solid
   */
  'border-style'?: 'dashed' | 'dotted' | 'solid';
}
