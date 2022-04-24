// Type definitions for uview 2.0.0-31920210609001
// Definitions: https://github.com/yangdan8/uView.git
import Vue from 'vue';

export interface UDropdown extends Vue {
  /**
   * 标题和选项卡选中的颜色
   * @default #2979ff
   */
  'active-color'?: string;

  /**
   * 标题和选项卡未选中的颜色
   * @default #606266
   */
  'inactive-color'?: string;

  /**
   * 点击遮罩是否关闭菜单
   * @default true
   */
  'close-on-click-mask'?: boolean;

  /**
   * 点击当前激活项标题是否关闭菜单
   * @default true
   */
  'close-on-click-self'?: boolean;

  /**
   * 选项卡展开和收起的过渡时间，单位ms
   * @default 300
   */
  duration?: string | number;

  /**
   * 标题菜单的高度，单位任意，数值默认为rpx单位
   * @default 80
   */
  height?: string | number;

  /**
   * 标题菜单是否显示下边框
   * @default false
   */
  'border-bottom'?: boolean;

  /**
   * 标题的字体大小，单位任意，数值默认为rpx单位
   * @default 28
   */
  'title-size'?: string | number;

  /**
   * 菜单展开内容下方的圆角值，单位任意
   * @version 1.7.2
   * @default 0
   */
  'border-radius'?: string | number;

  /**
   * 标题菜单右侧的图标
   * @version 1.7.6
   * @default arrow-down
   */
  'menu-icon'?: 'arrow-down-fill' | 'arrow-down';

  /**
   * 标题菜单右侧的图标的大小，单位任意，数值默认为rpx单位
   * @version 1.7.6
   * @default 26
   */
  'menu-icon-size'?: string | number;

  /**
   * 下拉菜单被打开时触发
   * @param index 当前被打开菜单的索引
   */
  $emit(eventName: 'open', index: number): this;

  /**
   * 下拉菜单被关闭时触发
   * @param index 当前被关闭菜单的索引
   */
  $emit(eventName: 'close', index: number): this;
}
