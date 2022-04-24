// Type definitions for uview 2.0.0-31920210609001
// Definitions: https://github.com/yangdan8/uView.git
import Vue, { VNode } from 'vue';

export interface UBackTop extends Vue {
  /**
   * 按钮形状
   * @default circle
   */
  mode?: 'square' | 'circle';

  /**
   * uView内置图标名称，或图片路径
   * @default arrow-upward
   */
  icon?: string;

  /**
   * 返回顶部按钮的提示文字
   */
  tips?: string;

  /**
   * 返回顶部过程中的过渡时间，单位ms
   * @default 100
   */
  duration?: string | number;

  /**
   * 页面的滚动距离，通过"onPageScroll"生命周期获取
   * @default 0
   */
  'scroll-top'?: string | number;

  /**
   * 滚动条滑动多少距离时显示，单位rpx
   * @default 400
   */
  top?: string | number;

  /**
   * 返回按钮位置到屏幕底部的距离，单位rpx
   * @default 200
   */
  bottom?: string | number;

  /**
   * 返回按钮位置到屏幕右边的距离，单位rpx
   * @default 40
   */
  right?: string | number;

  /**
   * 返回顶部按钮的层级
   * @default 9
   */
  'z-index'?: string | number;

  /**
   * 图标的样式，对象形式
   */
  'icon-style'?: Record<string, any>;

  /**
   * 按钮外层的自定义样式
   */
  'custom-style'?: Record<string, any>;

  /**
   * slot插槽对象
   */
  $slots: {
    /**
     * 自定义返回按钮的所有内容
     */
    default: VNode[];
  };
}
