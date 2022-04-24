// Type definitions for uview 2.0.0-31920210609001
// Definitions: https://github.com/yangdan8/uView.git
import Vue from 'vue';

export interface UForm extends Vue {
  /**
   * 表单数据对象
   */
  model?: Record<string, any>;

  /**
   * 通过"ref"设置，见文档说明
   */
  rules?: Record<string, any>;

  /**
   * 错误的提示方式，数组形式，见文档说明
   * @default ['message']
   */
  'error-type'?: string[];

  /**
   * 是否显示表单域的下划线边框
   * @version 1.4.6
   * @default true
   */
  'border-bottom'?: boolean;

  /**
   * 表单域提示文字的位置，"left"-左侧，"top"-文档
   * @version 1.4.6
   * @default left
   */
  'label-position'?: 'top' | 'left';

  /**
   * 提示文字的宽度，单位rpx
   * @version 1.4.6
   * @default 90
   */
  'label-width'?: 'auto' | number;

  /**
   * "lable"的样式，对象形式
   * @version 1.4.6
   */
  'label-style'?: Record<string, any>;

  /**
   * "lable"的对齐方式
   * @version 1.4.6
   * @default left
   */
  'label-align'?: 'center' | 'right' | 'left';

  /**
   * 调用此方法，设置校验规则
   */
  setRules(rules: Record<string, any>): void;

  /**
   * 对整个表单进行重置，将所有字段值重置为初始值并移除校验结果	-
   */
  resetFields(): void;

  /**
   * 对整个表单进行校验的方法
   */
  validate(callback: (valid?: boolean) => void): Promise<boolean>;
}
