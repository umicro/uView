// Type definitions for uview 2.0.0-31920210609001
// Definitions: https://github.com/yangdan8/uView.git
import Vue from 'vue';

export interface UCheckboxGroup extends Vue {
  /**
   * 最多能选中多少个"checkbox"
   * @default 999
   */
  max?: string | number;

  /**
   * 是否禁用所有"checkbox"
   * @default false
   */
  disabled?: boolean;

  /**
   * 图标大小，单位rpx
   * @default 20
   */
  'icon-size'?: string | number;

  /**
   * 组件整体的大小，单位rpx
   * @default 34
   */
  size?: string | number;

  /**
   * 形状，见文档说明
   * @default circle
   */
  shape?: 'square' | 'circle';

  /**
   * 选中时的颜色，应用到所有子"Checkbox"组件
   * @default #2979ff
   */
  'active-color'?: string;

  /**
   * 是否禁止点击文本操作"checkbox"
   * @default false
   */
  'label-disabled'?: boolean;

  /**
   * "checkbox"的宽度，需带单位，如"50%"，"150rpx"
   * @version 1.3.0
   * @default auto
   */
  width?: string;

  /**
   * 是否每个"checkbox"占一行
   * @version 1.3.0
   * @default false
   */
  wrap?: boolean;

  /**
   * 任一个checkbox状态发生变化时触发，回调为一个对象
   * @param detail 元素为被选中的checkbox的name数组
   */
  $emit(eventName: 'change', detail: (number | string)[]): this;
}
