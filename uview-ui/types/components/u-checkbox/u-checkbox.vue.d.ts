// Type definitions for uview 2.0.0-31920210609001
// Definitions: https://github.com/yangdan8/uView.git
import Vue from 'vue';

export interface UCheckbox extends Vue {
  /**
   * 双向绑定某一个"checkbox"的值，如果将该变量设置为"true"，将会被选中
   */
  'v-model'?: string | number;

  /**
   * 组件整体的大小，单位rpx
   */
  size?: string | number;

  /**
   * label字体大小，单位rpx
   */
  'label-size'?: string | number;

  /**
   * 图标大小，单位rpx
   */
  'icon-size'?: string | number;

  /**
   * "checkbox"组件的标示符
   */
  name?: string | number;

  /**
   * 形状，见文档说明
   */
  shape?: 'square';

  /**
   * 是否禁用
   */
  disabled?: boolean;

  /**
   * 是否禁止点击文本操作"checkbox"
   */
  'label-disabled'?: boolean;

  /**
   * 选中时的颜色，如设置"CheckboxGroup"的"active-color"将失效
   */
  'active-color'?: string;

  /**
   * 某个checkbox状态发生变化时触发，回调为一个对象
   * @param detail 通过props传递的index参数
   */
  $emit(
    eventName: 'change',
    detail: {
      /**
       * true或者false，true为被选中，否则反之
       */
      value: boolean;
      /**
       * 通过props传递的name参数
       */
      name: number | string;
    },
  ): this;
}
