// Type definitions for uview 2.0.0-31920210609001
// Definitions: https://github.com/yangdan8/uView.git
import Vue from 'vue';

export interface ULoadmore extends Vue {
  /**
   * 组件状态
   * @default loadmore
   */
  status?: 'loading' | 'nomore' | 'loadmore';

  /**
   * 组件背景颜色，在页面是非白色时会用到(1.7.0起废弃此参数，默认为transparent)
   * @default #ffffff
   * @deprecated 1.7.0起废弃
   */
  'bg-color'?: string;

  /**
   * 加载中时是否显示图标
   * @default true
   */
  icon?: boolean;

  /**
   * 加载中时的图标类型，
   * @default circle
   */
  'icon-type'?: 'flower' | 'circle';

  /**
   * "icon-type"为"circle"时有效，加载中的动画图标的颜色
   * @default #b7b7b7
   */
  'icon-color'?: string;

  /**
   * "status"为"nomore"时，内容显示为一个"●"
   * @default false
   */
  'is-dot'?: boolean;

  /**
   * 字体颜色
   * @default #606266
   */
  color?: string;

  /**
   * 字体大小，单位rpx
   * @default 28
   */
  'font-size'?: string | number;

  /**
   * 自定义显示的文字，见文档说明示例
   */
  'load-text'?: Record<string, any>;

  /**
   * 与前一个元素的距离，单位rpx
   * @default 0
   */
  'margin-top'?: string | number;

  /**
   * 与后一个元素的距离，单位rpx
   * @default 0
   */
  'margin-bottom'?: string | number;

  /**
   * status为loadmore时，点击组件会发出此事件
   */
  $emit(eventName: 'loadmore'): this;
}
