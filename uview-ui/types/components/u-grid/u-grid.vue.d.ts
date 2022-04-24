// Type definitions for uview 2.0.0-31920210609001
// Definitions: https://github.com/yangdan8/uView.git
import Vue from 'vue';

export interface UGrid extends Vue {
  /**
   * 宫格的列数
   * @default 3
   */
  col?: string | number;

  /**
   * 是否显示宫格的边框
   * @default true
   */
  border?: boolean;

  /**
   * 宫格的对齐方式，用于控制只有一两个宫格时的对齐场景
   * @default left
   */
  align?: 'center' | 'right' | 'left';

  /**
   * 样式类名，按下时有效，样式必须写在根目录的"App.vue"或通过其引入的全局样式中才有效，"none"为无效果，作用于头部标题区域
   * @default u-hover-class
   */
  'hover-class'?: 'none' | 'u-hover-class' | string;

  /**
   * 点击宫格触发
   * @param	index u-grid-item通过props传递的index值
   */
  $emit(eventName: 'click', index: number): this;
}
