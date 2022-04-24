// Type definitions for uview 2.0.0-31920210609001
// Definitions: https://github.com/yangdan8/uView.git
import Vue from 'vue';

export interface UBadge extends Vue {
  /**
   * 展示的数字，大于 "overflowCount" 时显示为 "${overflowCount}+"，为"0"且"show-zero"为"false"时隐藏
   */
  count?: string | number;

  /**
   * 不展示数字，只有一个小点
   * @default false
   */
  'is-dot'?: boolean;

  /**
   * 组件是否绝对定位，为"true"时，"offset"参数才有效
   * @default true
   */
  absolute?: boolean;

  /**
   * 展示封顶的数字值
   * @default 99
   */
  'overflow-count'?: string | number;

  /**
   * 使用预设的背景颜色
   * @default error
   */
  type?: 'success' | 'primary' | 'warning' | 'error' | 'info';

  /**
   * 当数值为 0 时，是否展示 Badge
   * @default false
   */
  'show-zero'?: boolean;

  /**
   * Badge的尺寸，设为"mini"会得到小一号的"Badge"
   * @default default
   */
  size?: 'mini' | 'default';

  /**
   * 设置badge的位置偏移，格式为 [x, y]，也即设置的为"top"和"right"的值，单位rpx。"absolute"为"true"时有效
   * @default [20, 20]
   */
  offset?: number[];

  /**
   * 字体颜色
   * @default #ffffff
   */
  color?: string;

  /**
   * 背景颜色，优先级比"type"高，如设置，"type"参数会失效
   */
  bgColor: string;

  /**
   * 组件中心点是否和父组件右上角重合，优先级比"offset"高，如设置，"offset"参数会失效
   * @default false
   */
  'is-center'?: boolean;
}
