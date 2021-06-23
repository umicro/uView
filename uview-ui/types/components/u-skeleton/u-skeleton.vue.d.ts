// Type definitions for uview 2.0.0-31920210609001
// Definitions: https://github.com/yangdan8/uView.git
import Vue from 'vue';

export interface USkeleton extends Vue {
  /**
   * 骨架块状元素的背景颜色
   * @default #e5e5e5
   */
  'el-color'?: string;

  /**
   * 骨架组件背景颜色
   * @default #ffffff
   */
  'bg-color'?: string;

  /**
   * 骨架块是否显示动画效果
   * @default false
   */
  animation?: boolean;

  /**
   * "u-skeleton-fillet"类名元素，对应的骨架块的圆角大小，单位rpx
   * @default 10
   */
  'border-radius'?: string | number;

  /**
   * 是否显示骨架组件，请求完成后，将此值设置为"false"
   * @default true
   */
  loading?: boolean;
}
