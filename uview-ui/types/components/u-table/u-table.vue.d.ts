// Type definitions for uview 2.0.0-31920210609001
// Definitions: https://github.com/yangdan8/uView.git
import Vue from 'vue';

export interface UTable extends Vue {
  /**
   * 表格边框的颜色
   * @default #e4e7ed
   */
  'border-color'?: string;

  /**
   * 表格的背景颜色
   * @default #ffffff
   */
  'bg-color'?: string;

  /**
   * 单元格的内容对齐方式，作用类似css的"text-align"
   * @default center
   */
  align?: 'left' | 'right' | 'center';

  /**
   * 单元格的内边距，同css的"padding"写法
   * @default 10rpx 0
   */
  padding?: string;

  /**
   * 单元格字体大小，单位rpx
   * @default 28
   */
  'font-size'?: string | number;

  /**
   * 单元格字体颜色
   * @default #606266
   */
  color?: string;

  /**
   * "th"单元格的样式，对象形式(将"th"所需参数放在"table"组件，是为了避免每一个"th"组件要写一遍)
   * @default {}
   */
  'th-style'?: Record<string, any>;
}
