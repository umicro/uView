// Type definitions for uview 2.0.0-31920210609001
// Definitions: https://github.com/yangdan8/uView.git
import Vue from 'vue';

export interface UCollapseItem extends Vue {
  /**
   * 面板标题
   */
  title?: string;

  /**
   * 主要用于事件的回调，标识那个Item被点击
   */
  index?: string | number;

  /**
   * 面板是否可以打开或收起
   * @default false
   */
  disabled?: boolean;

  /**
   * 设置某个面板的初始状态是否打开
   * @default false
   */
  open?: boolean;

  /**
   * 唯一标识符，如不设置，默认用当前"collapse-item"的索引值
   */
  name?: string | number;

  /**
   * 标题的对齐方式
   * @default left
   */
  align?: string;

  /**
   * 不显示箭头时，可以添加当前选择的collapse-item活动样式，对象形式
   */
  'active-style'?: Record<string, any>;

  /**
   * 某个item被打开或者收起时触发
   * @param options 对象参数
   */
  $emit(
    eventName: 'change',
    options: {
      /**
       * collapse-item的index参数
       */
      index: number;
      /**
       * 为true表示被打开，false表示被收起
       */
      show: boolean;
    },
  ): this;
}
