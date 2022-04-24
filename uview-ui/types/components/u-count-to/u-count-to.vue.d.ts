// Type definitions for uview 2.0.0-31920210609001
// Definitions: https://github.com/yangdan8/uView.git
import Vue from 'vue';

export interface UCountTo extends Vue {
  /**
   * 开始值
   * @default 0
   */
  'start-val'?: string | number;

  /**
   * 结束值
   * @default 0
   */
  'end-val'?: string | number;

  /**
   * 滚动过程所需的时间，单位ms
   * @default 2000
   */
  duration?: string | number;

  /**
   * 是否自动开始滚动
   * @default true
   */
  autoplay?: boolean;

  /**
   * 要显示的小数位数，见文档说明
   * @default 0
   */
  decimals?: string | number;

  /**
   * 滚动结束时，是否缓动结尾，见文档说明
   * @default true
   */
  'use-easing'?: boolean;

  /**
   * 千位分隔符，见文档说明
   */
  separator?: string;

  /**
   * 字体颜色
   * @default #303133
   */
  color?: string;

  /**
   * 字体大小，单位rpx
   * @default 50
   */
  'font-size'?: string | number;

  /**
   * 字体是否加粗
   * @default false
   */
  bold?: boolean;

  /**
   * autoplay为false时，通过此方法启动滚动
   */
  start(): void;

  /**
   * 暂停后重新开始滚动(从暂停前的值开始滚动)
   */
  reStart(): void;

  /**
   * 暂停滚动
   */
  paused(): void;

  /**
   * 数值滚动到目标值时触发
   */
  $emit(eventName: 'end'): this;
}
