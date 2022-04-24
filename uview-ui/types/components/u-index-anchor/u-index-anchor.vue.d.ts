// Type definitions for uview 2.0.0-31920210609001
// Definitions: https://github.com/yangdan8/uView.git
import Vue, { VNode } from 'vue';

export interface UIndexAnchor extends Vue {
  /**
   * 是否使用自定义内容的插槽
   * @default false
   */
  'use-slot'?: boolean;

  /**
   * 索引字符，如果定义了"use-slot"，此参数自动失效
   */
  index?: string | number;

  /**
   * 自定义样式，对象形式，如"{color: 'red'}"
   */
  'custom-style'?: Record<string, any>;

  /**
   * slot插槽对象
   */
  $slots: {
    /**
     * 锚点位置显示内容，默认为索引字符
     */
    default: VNode[];
  };
}
