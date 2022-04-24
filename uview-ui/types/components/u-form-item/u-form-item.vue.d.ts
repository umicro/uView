// Type definitions for uview 2.0.0-31920210609001
// Definitions: https://github.com/yangdan8/uView.git
import Vue, { VNode } from 'vue';

export interface UFormItem extends Vue {
  /**
   * 左侧提示文字
   */
  label?: string;

  /**
   * 表单域"model"对象的属性名，在使用 validate、resetFields 方法的情况下，该属性是必填的
   */
  prop?: string;

  /**
   * 是否显示下边框，如不需要下边框，需同时将"u-form"的同名参数设置为"false"
   * @default true
   */
  'border-bottom'?: boolean;

  /**
   * 表单域提示文字的位置，"left"-左侧，"top"-文档，如设置，将覆盖"u-form"的同名参数
   */
  'label-position'?: 'left' | 'top';

  /**
   * 提示文字的宽度，单位rpx，如设置，将覆盖"u-form"的同名参数
   */
  'label-width'?: string | number;

  /**
   * "lable"的样式，对象形式，如设置，将覆盖"u-form"的同名参数
   */
  'label-style'?: Record<string, any>;

  /**
   * "lable"的对齐方式，如设置，将覆盖"u-form"的同名参数
   */
  'label-align'?: string;

  /**
   * 右侧自定义字体图标(限uView内置图标)或图片地址
   */
  'right-icon'?: string;

  /**
   * 左侧自定义字体图标(限uView内置图标)或图片地址
   */
  'left-icon'?: string;

  /**
   * 左侧图标的样式，对象形式
   */
  'left-icon-style'?: Record<string, any>;

  /**
   * 右侧图标的样式，对象形式
   */
  'right-icon-style'?: Record<string, any>;

  /**
   * 是否显示左边的"*"号，这里仅起展示作用，如需校验必填，请通过"rules"配置必填规则
   * @version 1.3.5
   * @default false
   */
  required?: boolean;

  /**
   * slot插槽对象
   */
  $slots: {
    /**
     * Form Item 的内容
     */
    default: VNode[];
    /**
     * 右侧自定义内容，可以在此传入一个按钮，用于获取验证码等场景
     */
    right: VNode[];
  };
}
