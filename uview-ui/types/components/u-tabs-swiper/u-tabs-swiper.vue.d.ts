// Type definitions for uview 2.0.0-31920210609001
// Definitions: https://github.com/yangdan8/uView.git
import Vue from 'vue';

export interface UTabsSwiper extends Vue {
  /**
   * tabs是否可以左右拖动
   * @default true
   */
  'is-scroll'?: boolean;

  /**
   * 标签数组，元素为对象，如[{name: '推荐'}]
   */
  list?: Record<string, any>[];

  /**
   * 指定哪个tab为激活状态
   * @default 0，即<code>list</code>的第一项
   */
  current?: string | number;

  /**
   * 导航栏的高度，单位rpx
   * @default 80
   */
  height?: string | number;

  /**
   * tab文字大小，单位rpx
   * @default 30
   */
  'font-size'?: string | number;

  /**
   * tabs组件外部swiper的宽度，默认为屏幕宽度，单位rpx
   * @default 750
   */
  'swiper-width'?: string | number;

  /**
   * 滑块和激活tab文字的颜色
   * @default #2979ff
   */
  'active-color'?: string;

  /**
   * tabs文字颜色
   * @default #303133
   */
  'inactive-color'?: string;

  /**
   * 滑块宽度，单位rpx
   * @default 40
   */
  'bar-width'?: string | number;

  /**
   * 滑块高度，单位rpx
   * @default 6
   */
  'bar-height'?: string | number;

  /**
   * 单个tab标签的左右内边距之和，单位rpx
   * @default 40
   */
  gutter?: string | number;

  /**
   * tabs导航栏的背景颜色
   * @default #ffffff
   */
  'bg-color'?: string;

  /**
   * 组件内部读取的"list"参数中的属性名（tab名称），见文档说明
   * @default name
   */
  name?: string;

  /**
   * 激活选项的字体是否加粗
   * @default true
   */
  bold?: boolean;

  /**
   * 是否显示底部的滑块
   * @default true
   */
  'show-bar'?: boolean;

  /**
   * 底部滑块的样式，对象形式
   * @default {}
   */
  'bar-style'?: Record<string, any>;

  /**
   * 当前活动Item的样式，对象形式
   * @default {}
   */
  'active-item-style'?: Record<string, any>;

  /**
   * 组件内部读取的"list"参数中的属性名（badge徽标数），用法与"name"一致，见文档说明
   * @version 1.7.4
   * @default count
   */
  count?: string;

  /**
   * 设置badge的位置偏移，格式为 [x, y]，也即设置的为"top"和"right"的值，单位rpx。
   * @version 1.7.4
   * @default [5, 20]
   */
  offset?: number[];

  /**
   * 点击标签时触发
   * @param index 点击了第几个tab，索引从0开始
   */
  $emit(eventName: 'change', index: number): this;
}
