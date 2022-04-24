// Type definitions for uview 2.0.0-31920210609001
// Definitions: https://github.com/yangdan8/uView.git
import Vue from 'vue';

export interface USteps extends Vue {
  /**
   * 设置模式
   * @default dot
   */
  mode?: 'dot' | 'number';

  /**
   * 数轴条数据，数组。具体见文档示例
   * @default []
   */
  list?: Record<string, any>[];

  /**
   * type主题
   * @default primary
   * @deprecated 1.3.7起废弃
   */
  type?: 'info' | 'success' | 'error' | 'warning' | 'primary';

  /**
   * 设置当前处于第几步
   * @default 0
   */
  current?: number | string;

  /**
   * row-横向，column-竖向
   * @version 1.5.1
   * @default row
   */
  direction?: 'column' | 'row';

  /**
   * 已完成步骤的激活颜色，如设置，"type"值会失效
   */
  'active-color'?: string;

  /**
   * 未激活的颜色，用于表示未完成步骤的颜色
   * @default #606266
   */
  'un-active-color'?: string;

  /**
   * mode = number时的自定义图标
   * @version 1.3.7
   * @default checkmark
   */
  icon?: string;
}
