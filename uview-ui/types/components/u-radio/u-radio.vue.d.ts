// Type definitions for uview 2.0.0-31920210609001
// Definitions: https://github.com/yangdan8/uView.git
import Vue from 'vue';

export interface uURadio extends Vue {
  /**
   * 图标大小，单位rpx
   */
  'icon-size'?: string | number;

  /**
   * label字体大小，单位rpx
   */
  'label-size'?: string | number;

  /**
   * "radio"组件的标示符
   */
  name?: string | number;

  /**
   * 形状，见文档说明
   */
  shape?: 'circle' | 'square';

  /**
   * 是否禁用
   */
  disabled?: boolean;

  /**
   * 是否禁止点击文本操作"radio"
   */
  'label-disabled'?: boolean;

  /**
   * 选中时的颜色，如设置"radioGroup"的"active-color"将失效
   */
  'active-color'?: string;

  /**
   * 某个radio状态发生变化时触发(选中状态)
   * @param name 通过props传递的name参数
   */
  $emit(eventName: 'change', name: number | string): this;
}
