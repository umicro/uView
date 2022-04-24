// Type definitions for uview 2.0.0-31920210609001
// Definitions: https://github.com/yangdan8/uView.git
import Vue from 'vue';

export interface UIndexList extends Vue {
  /**
   * 当前滚动高度，自定义组件无法获得滚动条事件，所以依赖接入方传入
   */
  'scroll-top'?: number | string;

  /**
   * 索引字符列表，数组
   * @default A-Z
   */
  'index-list'?: (string | number)[];

  /**
   * 锚点吸顶时的层级
   * @default 965
   */
  'z-index'?: number | string;

  /**
   * 是否开启锚点自动吸顶
   * @default true
   */
  sticky?: boolean;

  /**
   * 锚点自动吸顶时与顶部的距离，单位rpx，见文档"自定义导航栏"说明
   * @default 0
   */
  'offset-top'?: number | string;

  /**
   * 锚点和右边索引字符高亮颜色
   * @default #2979ff
   */
  'active-color'?: string;

  /**
   * 选中右边索引字符时触发
   * @param index 索引字符
   */
  $emit(eventName: 'select', index: number): this;
}
