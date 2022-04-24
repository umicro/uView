// Type definitions for uview 2.0.0-31920210609001
// Definitions: https://github.com/yangdan8/uView.git
import Vue from 'vue';

export interface UCellGroup extends Vue {
  /**
   * 分组标题
   */
  title?: string;

  /**
   * 是否显示外边框
   * @default true
   */
  border?: boolean;

  /**
   * 分组标题的的样式，对象形式，如{'font-size': '24rpx'} 或 {'fontSize': '24rpx'}
   */
  'title-style'?: Record<string, any>;
}
