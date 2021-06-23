// Type definitions for uview 2.0.0-31920210609001
// Definitions: https://github.com/yangdan8/uView.git
import Vue, { VNode } from 'vue';

export interface USection extends Vue {
  /**
   * 左边主标题
   */
  title?: string;

  /**
   * 右边副标题
   * @default 更多
   */
  'sub-title'?: string;

  /**
   * 是否显示右边的内容
   * @default true
   */
  right?: boolean;

  /**
   * 是否显示左边的竖条
   * @version 1.3.3
   * @default true
   */
  'show-line'?: boolean;

  /**
   * 主标题的字体大小
   * @default 28
   */
  'font-size'?: string | number;

  /**
   * 主标题是否加粗
   * @default true
   */
  bold?: boolean;

  /**
   * 主标题颜色
   * @default #303133
   */
  color?: string;

  /**
   * 右边副标题的颜色(右箭头同此颜色)
   * @default #909399
   */
  'sub-color'?: string;

  /**
   * 左边竖线的颜色，默认同"color"参数值
   * @version 1.5.5
   */
  'line-color'?: string;

  /**
   * 是否显示右边箭头
   * @version 1.6.0
   * @default true
   */
  arrow?: boolean;

  /**
   * slot插槽对象
   */
  $slots: {
    /**
     * 自定义右侧内容
     * @version 1.6.0
     */
    right: VNode[];
  };

  /**
   * 组件右侧的内容被点击时触发，用于跳转"更多"
   */
  $emit(eventName: 'click'): this;
}
