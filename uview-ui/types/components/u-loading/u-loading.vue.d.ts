// Type definitions for uview 2.0.0-31920210609001
// Definitions: https://github.com/yangdan8/uView.git
import Vue from 'vue';

export interface ULoading extends Vue {
  /**
   * 模式选择，见文档说明
   * @default circle
   */
  mode?: 'flower' | 'circle';

  /**
   * 动画活动区域的颜色，只对 mode = circle 模式有效
   * @default #c7c7c7
   */
  color?: string;

  /**
   * 加载图标的大小，单位rpx
   * @default 34
   */
  size?: string | number;

  /**
   * 是否显示动画
   * @default true
   */
  show?: boolean;
}
