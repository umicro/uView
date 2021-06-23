// Type definitions for uview 2.0.0-31920210609001
// Definitions: https://github.com/yangdan8/uView.git
import Vue from 'vue';

export interface URadioGroup extends Vue {
  /**
   * 被选中"radio"双向绑定的值，如果初始值为某一个"radio"的"name"，该"radio"将会默认被选中
   */
  'v-model'?: string | number;

  /**
   * 是否禁用所有"radio"
   * @default false
   */
  disabled?: boolean;

  /**
   * 是否禁止点击文本操作"radio"
   * @version 1.5.2
   * @default false
   */
  'label-disabled'?: boolean;

  /**
   * 形状，见文档说明
   * @version 1.5.2
   * @default circle
   */
  shape?: 'square' | 'circle';

  /**
   * 图标大小，单位rpx
   * @version 1.5.2
   * @default 20
   */
  'icon-size'?: string | number;

  /**
   * 选中时的颜色，应用到所有子"Radio"组件
   * @default #2979ff
   */
  'active-color'?: string;

  /**
   * radio组件整体的大小，单位rpx
   * @default 34
   */
  size?: string | number;

  /**
   * "radio"的宽度，需带单位，如"50%"，"150rpx"
   * @version 1.3.0
   * @default auto
   */
  width?: string | number;

  /**
   * 是否每个"radio"占一行
   * @version 1.3.0
   * @default false
   */
  wrap?: boolean;

  /**
   * 任一个radio状态发生变化时触发
   * @param name 值为radio通过props传递的name值
   */
  $emit(eventName: 'change', name: number | string): this;
}
