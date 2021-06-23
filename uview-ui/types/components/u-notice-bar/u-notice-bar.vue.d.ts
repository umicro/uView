// Type definitions for uview 2.0.0-31920210609001
// Definitions: https://github.com/yangdan8/uView.git
import Vue from 'vue';

export interface UNoticeBar extends Vue {
  /**
   * 滚动内容，数组形式，见文档说明
   */
  list?: string[];

  /**
   * 显示的主题
   * @default warning
   */
  type?: 'primary' | 'info' | 'error' | 'success' | 'none' | 'warning';

  /**
   * 是否显示小喇叭图标
   * @default true
   */
  'volume-icon'?: boolean;

  /**
   * 是否显示右边的向右箭头
   * @default false
   */
  'more-icon'?: boolean;

  /**
   * 是否显示关闭图标
   * @default false
   */
  'close-icon'?: boolean;

  /**
   * 是否自动播放
   * @default true
   */
  autoplay?: boolean;

  /**
   * 文字颜色
   */
  color?: string;

  /**
   * 背景颜色
   */
  'bg-color'?: string | number;

  /**
   * 滚动模式
   * @options vertical(垂直滚动)
   * @default horizontal(水平滚动)
   */
  mode?: 'vertical' | 'horizontal';

  /**
   * 是否显示
   * @default true
   */
  show?: boolean;

  /**
   * 左边喇叭的大小
   * @default 34
   */
  'volume-size'?: string | number;

  /**
   * 字体大小，单位rpx
   * @default 28
   */
  'font-size'?: string | number;

  /**
   * 滚动周期时长，只对步进模式有效，横向衔接模式无效，单位ms
   * @default 2000
   */
  duration?: string | number;

  /**
   * 水平滚动时的滚动速度，即每秒移动多少距离，只对水平衔接方式有效，单位rpx
   * @default 160
   */
  speed?: string | number;

  /**
   * "mode"为"horizontal"时，指明是否水平衔接滚动
   * @default true
   */
  'is-circular'?: boolean;

  /**
   * 播放状态，play - 播放，paused - 暂停
   * @default play
   */
  'play-state'?: 'paused' | 'play';

  /**
   * 是否禁止通过手动滑动切换通知，只有mode = vertical，或者mode = horizontal且is-circular = false时有效；只支持App 2.5.5+、H5 2.5.5+、支付宝小程序、字节跳动小程序
   * @default true
   */
  'disable-touch'?: boolean;

  /**
   * 内置滚动通知的内边距，字符串，类似"16rpx 20rpx"
   * @default 18rpx 24rpx
   */
  padding?: string;

  /**
   * 圆角值，单位rpx
   * @default 0
   */
  'border-radius'?: string | number;

  /**
   * "list"为空数组时，是否显示组件
   * @default true
   */
  'no-list-hidden'?: boolean;

  /**
   * 点击通告文字触发，只有mode = vertical，或者mode = horizontal且is-circular = false时有效
   * @param index 当前文字所在list数组的索引值
   */
  $emit(eventName: 'click', index: number): this;

  /**
   * 点击右侧关闭图标触发
   */
  $emit(eventName: 'close'): this;

  /**
   * 点击右侧向右图标触发
   */
  $emit(eventName: 'getMore'): this;

  /**
   * 列表的消息每次被播放一个周期时触发，只有mode = vertical，或者mode = horizontal且is-circular = false时有效
   */
  $emit(eventName: 'end'): this;
}
