// Type definitions for uview 2.0.0-31920210609001
// Definitions: https://github.com/yangdan8/uView.git
import Vue from 'vue';

export interface UGap extends Vue {
  /**
   * 背景颜色
   * @default transparent(背景透明)
   */
  'bg-color'?: string;

  /**
   * 间隔槽高度，单位rpx
   * @default 30
   */
  height?: string | number;

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
}
