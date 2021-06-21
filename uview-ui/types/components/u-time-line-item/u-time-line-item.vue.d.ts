// Type definitions for uview 2.0.0-31920210609001
// Definitions: https://github.com/yangdan8/uView.git
import Vue from 'vue';

export interface UTimeLineItem extends Vue {
  /**
   * 左边节点的背景颜色，一般通过slot内容自定义背景颜色即可
   * @default #ffffff
   */
  'bg-color'?: string;

  /**
   * 节点左边图标绝对定位的top值，单位rpx
   */
  'node-top'?: string | number;
}
