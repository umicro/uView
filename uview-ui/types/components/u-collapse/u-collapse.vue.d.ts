// Type definitions for uview 2.0.0-31920210609001
// Definitions: https://github.com/yangdan8/uView.git
import Vue, { VNode } from 'vue';

export interface UCollapse extends Vue {
  /**
   * 是否手风琴模式
   * @default true
   */
  accordion?: boolean;

  /**
   * 是否显示标题右侧的箭头
   * @default true
   */
  arrow?: boolean;

  /**
   * 标题右侧箭头的颜色
   * @default #909399
   */
  'arrow-color'?: string;

  /**
   * 整个"Item"的自定义样式，对象形式
   * @version 1.3.0
   */
  'item-style'?: Record<string, any>;

  /**
   * "Item"的标题自定义样式，对象形式
   */
  'head-style'?: Record<string, any>;

  /**
   * "Item"的主体自定义样式，对象形式
   */
  'body-style'?: Record<string, any>;

  /**
   * 样式类名，按下时有效，样式必须写在根目录的"App.vue"或通过其引入的全局样式中才有效，"none"为无效果，作用于头部标题区域
   * @default u-hover-class
   */
  'hover-class'?: 'u-hover-class' | 'none' | string;

  /**
   * 重新初始化内部高度计算，用于异步获取内容的情形，请结合this.$nextTick()使用
   * @version 1.3.8
   */
  init(): void;

  /**
   * slot插槽对象
   */
  $slots: {
    /**
     * 主体部分的内容
     */
    default: VNode[];
    /**
     * 头部的内容，不含右边的箭头
     * @version 1.3.5
     */
    title: VNode[];
    /**
     * 整个头部的内容，包含右边的箭头
     * @version 1.3.5
     */
    'title-all': VNode[];
  };

  /**
   * 当前激活面板展开时触发(如果是手风琴模式，参数activeNames类型为String，否则为Array)
   */
  $emit(eventName: 'change', activeNames: string | string[]): this;
}
