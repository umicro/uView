// Type definitions for uview 2.0.0-31920210609001
// Definitions: https://github.com/yangdan8/uView.git
import Vue, { VNode } from 'vue';

export interface USlider extends Vue {
  /**
   * 双向绑定滑块选择值
   * @default 0
   */
  'v-model'?: string | number;

  /**
   * 可选的最小值(0-100之间)
   * @default 0
   */
  min?: string | number;

  /**
   * 可选的最大值(0-100之间)
   * @default 100
   */
  max?: string | number;

  /**
   * 选择的步长
   * @default 1
   */
  step?: string | number;

  /**
   * 滑动按钮的宽度(高等于宽)，单位rpx
   * @default 30
   */
  'block-width'?: string | number;

  /**
   * 滑动选择条的高度，单位rpx
   * @default 6
   */
  height?: string | number;

  /**
   * 滑动选择条的底部背景颜色
   * @default #c0c4cc
   */
  'inactive-color'?: string;

  /**
   * 底部选择部分的背景颜色
   * @default #2979ff
   */
  'active-color'?: string;

  /**
   * 滑块背景颜色
   * @default #ffffff
   */
  'block-color'?: string;

  /**
   * 给滑块按钮自定义样式，对象形式
   */
  'block-style'?: Record<string, any>;

  /**
   * 是否禁用滑块
   * @default false
   */
  disabled?: boolean;

  /**
   * 是否使用slot传入自定义滑块
   * @default false
   */
  'use-slot'?: boolean;

  /**
   * slot插槽对象
   */
  $slots: {
    /**
     * 自定义滑块内容
     */
    default: VNode[];
  };

  /**
   * 触发滑块移动
   */
  $emit(eventName: 'start'): this;

  /**
   * 正在滑动中
   */
  $emit(eventName: 'moving'): this;

  /**
   * 滑动结束
   */
  $emit(eventName: 'end'): this;
}
